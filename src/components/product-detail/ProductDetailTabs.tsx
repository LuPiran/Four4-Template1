import { useState, type ReactNode } from 'react'
import type { ShowcaseProduct } from '../../data/products'
import { getProductDetailContent } from '../../data/productDetails'

type TabId = 'description' | 'howToUse' | 'ingredients' | 'shipping'

type ProductDetailTabsProps = {
  product: ShowcaseProduct
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'description', label: 'Description' },
  { id: 'howToUse', label: 'How to use' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'shipping', label: 'Shipping' },
]

export function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  const detail = getProductDetailContent(product)
  const [activeTab, setActiveTab] = useState<TabId>('description')

  const tabContent: Record<TabId, ReactNode> = {
    description: (
      <div className="detail-tab-enter space-y-5">
        <p className="text-sm leading-relaxed text-brand-charcoal/75 md:text-base">{detail.description}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {detail.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 rounded-xl bg-brand-cream/50 px-4 py-3 text-sm text-brand-charcoal/80"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-gold" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    ),
    howToUse: (
      <p className="detail-tab-enter text-sm leading-relaxed text-brand-charcoal/75 md:text-base">
        {detail.howToUse}
      </p>
    ),
    ingredients: (
      <ul className="detail-tab-enter space-y-3">
        {detail.ingredients.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-brand-charcoal/75 md:text-base"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold" />
            {item}
          </li>
        ))}
      </ul>
    ),
    shipping: (
      <p className="detail-tab-enter text-sm leading-relaxed text-brand-charcoal/75 md:text-base">
        {detail.shipping}
      </p>
    ),
  }

  return (
    <section className="mt-16 border-t border-gray-100 pt-10">
      <div className="flex max-w-full gap-1 overflow-x-auto border-b border-gray-100 pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-all duration-300 md:px-6 ${
              activeTab === tab.id
                ? 'border-brand-teal text-brand-teal'
                : 'border-transparent text-brand-charcoal/50 hover:text-brand-charcoal'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div key={activeTab} className="py-8">
        {tabContent[activeTab]}
      </div>
    </section>
  )
}
