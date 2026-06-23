import { HiOutlineArrowRight, HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { ScrollReveal } from '../common/ScrollReveal'
import { ProductCard } from '../products/ProductCard'
import type { ShowcaseProduct } from '../../data/products'
import { categoryLabels, getProductDetailContent } from '../../data/productDetails'
import { getBrandLine } from '../../data/productBrand'
import { contactInfo } from '../../data/contact'
import { useProductModal } from '../../context/ProductModalContext'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'
import { gradientGold } from '../../styles/colors'
import { formatPrice } from '../../utils/formatPrice'

type ProductInfoPanelProps = {
  product: ShowcaseProduct
}

export function ProductInfoPanel({ product }: ProductInfoPanelProps) {
  const { closeProduct } = useProductModal()
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const detail = getProductDetailContent(product)
  const brand = getBrandLine(product.brandLine)

  const whatsappText = encodeURIComponent(
    `Hi! I'm interested in the product: ${product.name}`,
  )

  function handleAddToCart() {
    addToCart(product)
    showToast('Product added to cart', 'success')
  }

  return (
    <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase"
            style={{ backgroundColor: brand.color }}
          >
            {brand.label}
          </span>
          <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">
            {categoryLabels[product.category]}
          </p>
        </div>
        <h1 className="mt-2 text-2xl font-semibold text-brand-teal md:text-4xl">{product.name}</h1>
        <p className="mt-2 text-2xl font-bold text-brand-gold-dark md:text-3xl">
          {formatPrice(product.price)}
        </p>
        <p className="mt-3 text-base leading-relaxed text-brand-charcoal/65">{detail.tagline}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {detail.highlights.slice(0, 3).map((item) => (
          <li
            key={item}
            className="rounded-full border border-brand-sea/20 bg-brand-cream/50 px-3 py-1.5 text-xs font-medium text-brand-charcoal/70"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="group inline-flex items-center gap-2 rounded-full border border-brand-teal/25 bg-brand-teal px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-brand-sea hover:shadow-xl"
        >
          <HiOutlineShoppingBag className="size-5" />
          Add to cart
        </button>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-brand-charcoal transition-all hover:scale-105 hover:shadow-xl"
          style={{ background: gradientGold }}
        >
          <FaWhatsapp className="size-5 text-[#128C7E]" />
          Ask on WhatsApp
          <HiOutlineArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          onClick={closeProduct}
          className="inline-flex items-center gap-2 rounded-full border border-brand-teal/25 px-7 py-3.5 text-sm font-semibold text-brand-teal transition-all hover:border-brand-sea hover:bg-brand-cream"
        >
          Other channels
        </a>
      </div>
    </div>
  )
}

type RelatedProductsProps = {
  products: ShowcaseProduct[]
  compact?: boolean
}

export function RelatedProducts({ products, compact = false }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className={compact ? 'mt-12 border-t border-gray-100 pt-10' : 'mt-20 border-t border-gray-100 pt-12'}>
      <ScrollReveal>
        <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">You may also like</p>
        <h2 className="mt-2 text-xl font-semibold text-brand-teal md:text-2xl">Related products</h2>
      </ScrollReveal>

      <div
        className={
          compact
            ? 'mt-6 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            : 'mt-8 grid grid-cols-2 gap-4 md:grid-cols-4'
        }
      >
        {products.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 80} animation="fade-up">
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
