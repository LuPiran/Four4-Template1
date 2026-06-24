import { Link } from 'react-router-dom'
import { ScrollReveal } from '../common/ScrollReveal'
import { ProductCard } from '../products/ProductCard'
import { getPopularProducts } from '../../data/products'
import { gradientGold } from '../../styles/colors'

export function FeaturedProductsSection({ compact = false }: { compact?: boolean }) {
  const products = getPopularProducts()
  const sectionPy = compact ? 'py-12 md:py-14' : 'py-20'

  return (
    <section className={sectionPy}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">Popular</p>
          <h2 className="mt-2 text-2xl font-semibold text-brand-teal md:text-4xl">Best sellers</h2>
          <p className="mt-3 text-sm text-brand-charcoal/60 md:text-base">
            Our most loved formulas — explore the full catalog anytime.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5" delay={100}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" />
          ))}
        </ScrollReveal>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex rounded-full px-6 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:scale-[1.02]"
            style={{ background: gradientGold }}
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  )
}
