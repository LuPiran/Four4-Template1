import type { CSSProperties, MouseEvent } from 'react'
import { HiOutlinePlus } from 'react-icons/hi2'
import type { ShowcaseProduct } from '../../data/products'
import { getBrandLine } from '../../data/productBrand'
import { useProductModal } from '../../context/ProductModalContext'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'
import { formatPrice } from '../../utils/formatPrice'

type ProductCardProps = {
  product: ShowcaseProduct
  variant?: 'grid' | 'carousel'
}

export function ProductCard({ product, variant = 'carousel' }: ProductCardProps) {
  const { openProduct } = useProductModal()
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const brand = getBrandLine(product.brandLine)
  const isDarkBand = product.brandLine === 'power' || product.brandLine === 'max'
  const isGrid = variant === 'grid'

  function handleAddToCart(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    event.preventDefault()
    addToCart(product)
    showToast('Product added to cart', 'success')
  }

  return (
    <article
      className={`group relative ${isGrid ? 'w-full' : 'product-carousel-card w-[210px] shrink-0 sm:w-[240px] md:w-[260px]'}`}
    >
      <button
        type="button"
        onClick={() => openProduct(product.id)}
        className="block w-full cursor-pointer text-left"
      >
        <div
          className={`product-label-card overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 ${
            isGrid ? 'hover:-translate-y-1 hover:shadow-lg' : 'group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]'
          }`}
        >
          <div className="relative bg-white px-4 pt-5 pb-3">
            <div
              className={`relative mx-auto aspect-square w-full overflow-hidden rounded-xl bg-brand-cream/20 ${
                isGrid ? '' : 'max-w-[180px] transition-transform duration-700 group-hover:scale-[1.03]'
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`size-full object-contain p-2 ${
                  isGrid
                    ? 'transition-transform duration-500 group-hover:scale-105'
                    : 'product-image-primary absolute inset-0 object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0'
                }`}
                loading="lazy"
              />
              {!isGrid && (
                <img
                  src={product.imageHover}
                  alt=""
                  className="product-image-secondary absolute inset-0 size-full object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
                />
              )}
            </div>
          </div>

          <div
            className="product-label-wave h-5 w-full"
            style={{ '--wave-color': brand.color } as CSSProperties}
            aria-hidden="true"
          />

          <div
            className="product-label-band relative px-4 pt-1 pb-5 text-center"
            style={{ backgroundColor: brand.color }}
          >
            <p className="relative text-xl font-bold tracking-[0.2em] text-brand-gold-light uppercase">
              {brand.label}
            </p>
            <p
              className={`relative mt-1.5 line-clamp-2 text-[11px] leading-snug font-medium ${
                isDarkBand ? 'text-white/80' : 'text-white/90'
              }`}
            >
              {product.name}
            </p>
            <p className="relative mt-2 text-sm font-bold text-brand-gold-light">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </button>

      <button
        type="button"
        onClick={handleAddToCart}
        className="product-add-cart-btn absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/80 bg-brand-gold text-brand-charcoal opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-brand-gold-light focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-brand-teal"
        aria-label={`Add ${product.name} to cart`}
      >
        <HiOutlinePlus className="size-5 stroke-[2.5]" />
      </button>
    </article>
  )
}
