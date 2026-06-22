import type { CSSProperties } from 'react'
import type { ShowcaseProduct } from '../../data/products'
import { getBrandLine } from '../../data/productBrand'
import { useProductModal } from '../../context/ProductModalContext'

type ProductCardProps = {
  product: ShowcaseProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const { openProduct } = useProductModal()
  const brand = getBrandLine(product.brandLine)
  const isDarkBand = product.brandLine === 'power' || product.brandLine === 'max'

  return (
    <button
      type="button"
      onClick={() => openProduct(product.id)}
      className="block w-full cursor-pointer text-left"
    >
      <article className="product-carousel-card group w-[210px] shrink-0 sm:w-[240px] md:w-[260px]">
        <div className="product-label-card overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]">
          <div className="relative bg-white px-4 pt-5 pb-3">
            <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-xl bg-brand-cream/20 transition-transform duration-700 group-hover:scale-[1.03]">
              <img
                src={product.image}
                alt={product.name}
                className="product-image-primary absolute inset-0 size-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                loading="lazy"
              />
              <img
                src={product.imageHover}
                alt=""
                className="product-image-secondary absolute inset-0 size-full object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
              />
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
          </div>
        </div>
      </article>
    </button>
  )
}
