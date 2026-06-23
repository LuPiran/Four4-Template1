import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineShoppingBag,
  HiOutlineTrash,
  HiOutlineXMark,
} from 'react-icons/hi2'
import { orderRecipientEmail, paymentMethods } from '../../data/orderConfig'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'
import { submitOrder } from '../../utils/submitOrder'
import {
  getValidationToastMessage,
  sanitizeText,
  validateOrderForm,
  type OrderFormData,
} from '../../utils/orderValidation'
import { gradientGold } from '../../styles/colors'
import { formatPrice } from '../../utils/formatPrice'
import { StateSelect } from './StateSelect'

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal outline-none transition-colors placeholder:text-brand-charcoal/40 focus:border-brand-sea focus:ring-2 focus:ring-brand-sea/20'

const emptyForm: OrderFormData = {
  name: '',
  email: '',
  phone: '',
  streetAddress: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  paymentMethod: '',
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    isClosing,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart()
  const { showToast } = useToast()
  const panelRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState<OrderFormData>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const animationState = isClosing ? 'closing' : 'open'

  useEffect(() => {
    if (!isOpen && !isClosing) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isClosing, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeCart, isOpen])

  useEffect(() => {
    if (isOpen && panelRef.current) panelRef.current.focus()
  }, [isOpen])

  if (!isOpen && !isClosing) return null

  const cartSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function updateField<K extends keyof OrderFormData>(key: K, value: OrderFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (honeypot.trim()) return

    const sanitized: OrderFormData = {
      name: sanitizeText(form.name, 120),
      email: sanitizeText(form.email, 120),
      phone: sanitizeText(form.phone, 30),
      streetAddress: sanitizeText(form.streetAddress, 120),
      addressLine2: sanitizeText(form.addressLine2, 80),
      city: sanitizeText(form.city, 80),
      state: form.state,
      zipCode: sanitizeText(form.zipCode, 12),
      paymentMethod: form.paymentMethod,
    }

    const validation = validateOrderForm(sanitized)
    if (Object.keys(validation).length > 0) {
      showToast(getValidationToastMessage(validation), 'error')
      return
    }

    setSubmitting(true)
    const result = await submitOrder(items, sanitized)
    setSubmitting(false)

    if (!result.success) {
      showToast(result.message ?? 'Could not send your order. Please try again.', 'error')
      return
    }

    clearCart()
    setForm(emptyForm)
    closeCart()
    showToast(
      `Your order was sent to ${orderRecipientEmail}. A team member will contact you shortly.`,
      'success',
    )
  }

  return (
    <div className="cart-drawer-root fixed inset-0 z-[140]" role="presentation">
      <button
        type="button"
        className={`cart-drawer-backdrop absolute inset-0 bg-brand-charcoal/45 backdrop-blur-[2px] ${
          animationState === 'closing' ? 'cart-drawer-backdrop-out' : 'cart-drawer-backdrop-in'
        }`}
        onClick={closeCart}
        aria-label="Close cart"
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        tabIndex={-1}
        className={`cart-drawer-panel absolute top-0 right-0 flex h-full w-[min(100vw,28rem)] flex-col bg-white shadow-[-8px_0_40px_-8px_rgba(0,0,0,0.2)] ${
          animationState === 'closing' ? 'cart-drawer-panel-out' : 'cart-drawer-panel-in'
        }`}
      >
        <header className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <HiOutlineShoppingBag className="size-5 text-brand-teal" />
            <h2 className="text-base font-semibold text-brand-teal">Your cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-brand-charcoal transition-colors hover:bg-brand-cream"
            aria-label="Close cart"
          >
            <HiOutlineXMark className="size-5" />
          </button>
        </header>

        <div className="flex flex-1 flex-col overflow-hidden">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <HiOutlineShoppingBag className="size-14 text-brand-gold/40" />
              <p className="mt-4 text-sm font-medium text-brand-charcoal">Your cart is empty</p>
              <p className="mt-1 text-xs text-brand-charcoal/55">
                Browse products and add items with the + button.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 rounded-full border border-brand-teal/25 px-5 py-2 text-xs font-semibold text-brand-teal hover:bg-brand-cream"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.productId}
                      className="flex gap-3 rounded-xl border border-gray-100 bg-brand-cream/30 p-3"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="size-16 shrink-0 rounded-lg object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-xs font-semibold text-brand-charcoal">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-[10px] font-bold tracking-wider text-brand-gold uppercase">
                          {item.brandLabel}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-brand-teal">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.productId, Math.max(1, item.quantity - 1))
                              }
                              className="flex size-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-brand-teal hover:border-brand-sea"
                              aria-label="Decrease quantity"
                            >
                              <HiOutlineMinus className="size-3.5" />
                            </button>
                            <span className="min-w-6 text-center text-sm font-semibold text-brand-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="flex size-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-brand-teal hover:border-brand-sea"
                              aria-label="Increase quantity"
                            >
                              <HiOutlinePlus className="size-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.productId)}
                            className="flex size-7 items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50"
                            aria-label="Remove item"
                          >
                            <HiOutlineTrash className="size-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                      Contact details
                    </p>
                    <div className="mt-3 space-y-3">
                      <div>
                        <label htmlFor="cart-name" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                          Full name *
                        </label>
                        <input
                          id="cart-name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          className={inputClass}
                          maxLength={120}
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cart-email" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                            Email *
                          </label>
                          <input
                            id="cart-email"
                            type="text"
                            inputMode="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className={inputClass}
                            maxLength={120}
                          />
                        </div>
                        <div>
                          <label htmlFor="cart-phone" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                            Phone *
                          </label>
                          <input
                            id="cart-phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="(555) 123-4567"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className={inputClass}
                            maxLength={30}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                      US shipping address
                    </p>
                    <div className="mt-3 space-y-3">
                      <div>
                        <label htmlFor="cart-street" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                          Street address *
                        </label>
                        <input
                          id="cart-street"
                          type="text"
                          autoComplete="address-line1"
                          value={form.streetAddress}
                          onChange={(e) => updateField('streetAddress', e.target.value)}
                          className={inputClass}
                          maxLength={120}
                        />
                      </div>
                      <div>
                        <label htmlFor="cart-line2" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                          Apt, suite, unit (optional)
                        </label>
                        <input
                          id="cart-line2"
                          type="text"
                          autoComplete="address-line2"
                          value={form.addressLine2}
                          onChange={(e) => updateField('addressLine2', e.target.value)}
                          className={inputClass}
                          maxLength={80}
                        />
                      </div>
                      <div className="grid gap-3 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                          <label htmlFor="cart-city" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                            City *
                          </label>
                          <input
                            id="cart-city"
                            type="text"
                            autoComplete="address-level2"
                            value={form.city}
                            onChange={(e) => updateField('city', e.target.value)}
                            className={inputClass}
                            maxLength={80}
                          />
                        </div>
                        <div>
                          <label htmlFor="cart-state" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                            State *
                          </label>
                          <StateSelect
                            id="cart-state"
                            value={form.state}
                            onChange={(value) => updateField('state', value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="cart-zip" className="mb-1 block text-[10px] font-semibold uppercase text-brand-charcoal/55">
                            ZIP code *
                          </label>
                          <input
                            id="cart-zip"
                            type="text"
                            autoComplete="postal-code"
                            placeholder="12345"
                            value={form.zipCode}
                            onChange={(e) => updateField('zipCode', e.target.value)}
                            className={inputClass}
                            maxLength={12}
                          />
                        </div>
                      </div>
                      <p className="text-[10px] text-brand-charcoal/45">Country: United States</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                      Payment method
                    </p>
                    <p className="mt-1 text-[10px] text-brand-charcoal/50">
                      Select how you would like to pay. We never collect card numbers on this site.
                    </p>
                    <fieldset className="mt-3 space-y-2">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition-colors ${
                            form.paymentMethod === method.id
                              ? 'border-brand-sea bg-brand-cream/50'
                              : 'border-gray-100 hover:border-brand-sea/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={form.paymentMethod === method.id}
                            onChange={() => updateField('paymentMethod', method.id)}
                            className="mt-0.5 accent-brand-teal"
                          />
                          <span className="text-brand-charcoal/80">{method.label}</span>
                        </label>
                      ))}
                    </fieldset>
                  </div>

                  <input
                    type="text"
                    name="botcheck"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="border-t border-gray-100 bg-white p-5">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-brand-charcoal/60">Subtotal</span>
                  <span className="font-bold text-brand-teal">{formatPrice(cartSubtotal)}</span>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-brand-charcoal transition-all hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ background: gradientGold }}
                >
                  {submitting ? 'Sending order…' : 'Place order'}
                </button>
                <p className="mt-2 text-center text-[10px] text-brand-charcoal/45">
                  Secure request — your details are sent only to our team.
                </p>
              </div>
            </form>
          )}
        </div>
      </aside>
    </div>
  )
}
