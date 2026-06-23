import { orderSenderEmail, paymentMethods } from '../data/orderConfig'
import type { CartItem } from '../context/CartContext'
import { formatUSAddress, sanitizeText, type OrderFormData } from './orderValidation'
import { formatPrice } from './formatPrice'

type SubmitOrderResult = {
  success: boolean
  message?: string
}

function buildOrderMessage(items: CartItem[], form: OrderFormData): string {
  const paymentLabel =
    paymentMethods.find((m) => m.id === form.paymentMethod)?.label ?? form.paymentMethod

  const productLines = items
    .map((item, index) => {
      const lineTotal = item.price * item.quantity
      return `${index + 1}. ${item.name} (${item.brandLabel})\n   Qty: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(lineTotal)}`
    })
    .join('\n')

  const orderTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return [
    'NEW ORDER — Polisupport',
    '========================',
    '',
    'CUSTOMER',
    `Name: ${sanitizeText(form.name, 120)}`,
    `Email: ${sanitizeText(form.email, 120)}`,
    `Phone: ${sanitizeText(form.phone, 30)}`,
    '',
    'SHIPPING ADDRESS (US)',
    formatUSAddress(form),
    '',
    'PAYMENT METHOD (preference only — no card data collected)',
    paymentLabel,
    '',
    'PRODUCTS',
    productLines,
    '',
    `Order total: ${formatPrice(orderTotal)}`,
    `Total items: ${items.reduce((sum, i) => sum + i.quantity, 0)}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join('\n')
}

export async function submitOrder(
  items: CartItem[],
  form: OrderFormData,
): Promise<SubmitOrderResult> {
  const accessKey = import.meta.env.VITE_ORDER_FORM_ACCESS_KEY as string | undefined

  if (!accessKey?.trim()) {
    return {
      success: false,
      message: 'Order form is not configured. Please set VITE_ORDER_FORM_ACCESS_KEY.',
    }
  }

  if (items.length === 0) {
    return { success: false, message: 'Your cart is empty.' }
  }

  const orderTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const payload = {
    access_key: accessKey,
    subject: `New Polisupport order — ${sanitizeText(form.name, 80)} (${formatPrice(orderTotal)})`,
    from_name: `Polisupport (${orderSenderEmail})`,
    name: sanitizeText(form.name, 120),
    email: sanitizeText(form.email, 120),
    phone: sanitizeText(form.phone, 30),
    replyto: sanitizeText(form.email, 120),
    message: buildOrderMessage(items, form),
    botcheck: '',
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = (await response.json()) as { success?: boolean; message?: string }

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message ?? 'Unable to send your order. Please try again.',
      }
    }

    return { success: true }
  } catch {
    return {
      success: false,
      message: 'Network error. Check your connection and try again.',
    }
  }
}
