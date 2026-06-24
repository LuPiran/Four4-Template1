import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { StaggerReveal } from '../components/common/StaggerReveal'
import { ProductCard } from '../components/products/ProductCard'
import { showcaseProducts } from '../data/products'
import type { ProductCategory } from '../data/productDetails'
import { categoryLabels } from '../data/productDetails'
import type { BrandLine } from '../data/productBrand'
import type { PathologyId } from '../data/pathologies'
import { pathologyLabels } from '../data/pathologies'
import { brandLines } from '../data/productBrand'
import {
  buildShopUrl,
  getShopPageDescription,
  getShopPageTitle,
  parseShopFilters,
} from '../utils/shopFilters'

const categoryFilters: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  ...(Object.entries(categoryLabels) as [ProductCategory, string][]).map(([id, label]) => ({
    id,
    label,
  })),
]

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlFilter = useMemo(() => parseShopFilters(searchParams), [searchParams])
  const [category, setCategory] = useState<ProductCategory | 'all'>(urlFilter.category ?? 'all')

  const activeWellness = urlFilter.wellness
  const activeLine = urlFilter.line

  useEffect(() => {
    setCategory(urlFilter.category ?? 'all')
  }, [urlFilter.category])

  const filteredProducts = useMemo(() => {
    return showcaseProducts.filter((product) => {
      if (activeWellness && !product.pathologies.includes(activeWellness)) return false
      if (activeLine && product.brandLine !== activeLine) return false
      if (category !== 'all' && product.category !== category) return false
      return true
    })
  }, [activeWellness, activeLine, category])

  const pageTitle = getShopPageTitle(urlFilter)
  const pageDescription = getShopPageDescription(urlFilter)

  function updateFilters(next: {
    category?: ProductCategory | 'all'
    wellness?: PathologyId | null
    line?: BrandLine | null
  }) {
    const params = new URLSearchParams()

    const nextCategory = next.category !== undefined ? next.category : category
    const nextWellness = next.wellness !== undefined ? next.wellness : activeWellness
    const nextLine = next.line !== undefined ? next.line : activeLine

    if (nextWellness) params.set('wellness', nextWellness)
    if (nextLine) params.set('line', nextLine)
    if (nextCategory && nextCategory !== 'all') params.set('category', nextCategory)

    setSearchParams(params, { replace: true })
  }

  function handleCategoryChange(next: ProductCategory | 'all') {
    setCategory(next)
    updateFilters({ category: next })
  }

  function clearWellnessFilter() {
    updateFilters({ wellness: null })
  }

  function clearLineFilter() {
    updateFilters({ line: null })
  }

  return (
    <div className="page-content-enter py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Catalog</p>
          <h1 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-4xl">{pageTitle}</h1>
          <p className="mt-3 max-w-2xl text-sm font-light text-brand-charcoal/60 md:text-base">{pageDescription}</p>

          {(activeWellness || activeLine) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeWellness && (
                <button
                  type="button"
                  onClick={clearWellnessFilter}
                  className="rounded-full border border-brand-sea/30 bg-brand-sea/10 px-3 py-1 text-xs font-semibold text-brand-teal transition-colors hover:bg-brand-sea/20"
                >
                  {pathologyLabels[activeWellness]} ×
                </button>
              )}
              {activeLine && (
                <button
                  type="button"
                  onClick={clearLineFilter}
                  className="rounded-full border border-brand-gold/40 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-teal transition-colors hover:bg-brand-gold/25"
                >
                  {brandLines[activeLine].label} line ×
                </button>
              )}
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleCategoryChange(filter.id)}
                className={`font-display rounded-full border px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                  category === filter.id
                    ? 'border-brand-teal bg-brand-teal text-white'
                    : 'border-gray-200 bg-white text-brand-charcoal/70 hover:border-brand-sea/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {filteredProducts.length === 0 ? (
          <ScrollReveal className="mt-10 text-center text-sm text-brand-charcoal/60" delay={100}>
            No products match these filters.{' '}
            <Link to={buildShopUrl()} className="font-semibold text-brand-sea underline-offset-2 hover:underline">
              View all products
            </Link>
          </ScrollReveal>
        ) : (
          <StaggerReveal
            className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
            baseDelay={100}
            stagger={45}
            animation="scale"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="grid" />
            ))}
          </StaggerReveal>
        )}
      </div>
    </div>
  )
}
