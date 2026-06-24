import { Link } from 'react-router-dom'
import { pathologies } from '../../../data/pathologies'
import { buildShopUrl } from '../../../utils/shopFilters'

type WellnessMegaMenuProps = {
  onNavigate?: () => void
}

export function WellnessMegaMenu({ onNavigate }: WellnessMegaMenuProps) {
  return (
    <div className="mega-menu-panel border-t border-brand-teal/10 bg-white shadow-xl">
      <div className="wellness-mega-menu mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <p className="wellness-mega-menu-title font-display text-center text-xs font-semibold tracking-[0.18em] text-brand-gold uppercase">
          Shop by benefit
        </p>
        <div className="wellness-mega-grid mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
          {pathologies.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                to={buildShopUrl({ wellness: item.id })}
                onClick={onNavigate}
                className="wellness-mega-card group flex min-w-0 w-full flex-col items-center gap-2.5 rounded-xl border border-brand-teal/10 bg-brand-cream/30 p-3.5 text-center transition-all hover:border-brand-sea/25 hover:bg-brand-cream/60 hover:shadow-md sm:p-4"
              >
                <div className="wellness-mega-card-icon flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-teal shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-brand-sea sm:size-12">
                  <Icon className="size-5 sm:size-6" aria-hidden="true" />
                </div>
                <p className="wellness-mega-card-label font-display w-full text-[11px] leading-snug font-semibold tracking-wide text-balance text-brand-teal uppercase transition-colors group-hover:text-brand-sea sm:text-xs">
                  {item.name}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
