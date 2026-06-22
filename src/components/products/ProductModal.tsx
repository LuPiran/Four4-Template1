import { useEffect, useRef } from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { ProductDetailTabs } from '../product-detail/ProductDetailTabs'
import { ProductGallery } from '../product-detail/ProductGallery'
import { ProductInfoPanel, RelatedProducts } from '../product-detail/ProductInfoPanel'
import { getProductById, getRelatedProducts } from '../../data/products'
import { useProductModal } from '../../context/ProductModalContext'

export function ProductModal() {
  const { productId, isOpen, isClosing, closeProduct } = useProductModal()
  const panelRef = useRef<HTMLDivElement>(null)
  const product = productId ? getProductById(productId) : undefined

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
      if (event.key === 'Escape') closeProduct()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeProduct, isOpen])

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus()
    }
  }, [isOpen, productId])

  if (!product) return null

  const related = getRelatedProducts(product)
  const animationState = isClosing ? 'closing' : 'open'

  return (
    <div
      className="product-modal-root fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
      role="presentation"
    >
      <button
        type="button"
        className={`product-modal-backdrop absolute inset-0 bg-brand-charcoal/55 backdrop-blur-[6px] ${
          animationState === 'closing' ? 'product-modal-backdrop-out' : 'product-modal-backdrop-in'
        }`}
        onClick={closeProduct}
        aria-label="Close product details"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        tabIndex={-1}
        className={`product-modal-panel relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl border border-white/60 bg-white shadow-[0_32px_80px_-16px_rgba(0,75,73,0.35)] sm:max-h-[90vh] sm:rounded-3xl ${
          animationState === 'closing' ? 'product-modal-panel-out' : 'product-modal-panel-in'
        }`}
      >
        <div className="product-modal-shine pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-gold/50 to-transparent" />

        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-100/80 bg-white/90 px-5 py-4 backdrop-blur-md sm:px-6">
          <div className="min-w-0">
            <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Product details</p>
            <p id="product-modal-title" className="truncate text-sm font-semibold text-brand-teal sm:text-base">
              {product.name}
            </p>
          </div>
          <button
            type="button"
            onClick={closeProduct}
            className="product-modal-close flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-charcoal transition-all hover:border-brand-teal/30 hover:bg-brand-cream hover:text-brand-teal"
            aria-label="Close"
          >
            <HiOutlineXMark className="size-5" />
          </button>
        </header>

        <div className="product-modal-body overflow-y-auto overscroll-contain">
          <div key={product.id} className="product-modal-content-enter px-5 py-6 sm:px-8 sm:py-8">
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <ProductGallery product={product} compact />
              <ProductInfoPanel product={product} />
            </div>

            <ProductDetailTabs product={product} />
            <RelatedProducts products={related} compact />
          </div>
        </div>
      </div>
    </div>
  )
}
