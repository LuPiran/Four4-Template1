import { useState } from 'react'
import type { ShowcaseProduct } from '../../data/products'
import { getProductImages } from '../../data/productDetails'
import { getProductColor } from '../../data/productBrand'

type ProductGalleryProps = {
  product: ShowcaseProduct
  compact?: boolean
}

export function ProductGallery({ product, compact = false }: ProductGalleryProps) {
  const images = getProductImages(product).map((src, index) => ({
    src,
    alt: index === 0 ? product.name : `${product.name} — view ${index + 1}`,
  }))

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={compact ? '' : 'animate-scale-in lg:sticky lg:top-28 lg:self-start'}>
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray-100 bg-linear-to-b from-brand-cream/60 to-white shadow-sm">
        <div
          className="absolute top-1/2 left-1/2 z-0 size-56 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 md:size-64 lg:size-72"
          style={{
            clipPath:
              'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            backgroundColor: getProductColor(product.brandLine),
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-10 z-[1] overflow-hidden rounded-2xl md:inset-12">
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 size-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                activeIndex === index
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-105 opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square w-20 overflow-hidden rounded-xl border-2 bg-brand-cream/40 transition-all duration-300 md:w-24 ${
              activeIndex === index
                ? 'border-brand-teal shadow-md ring-2 ring-brand-sea/20'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
            aria-pressed={activeIndex === index}
          >
            <img src={image.src} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
