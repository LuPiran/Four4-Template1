import { Link } from 'react-router-dom'
import { productsMegaMenuColumns } from '../../../data/megaMenu'

type ProductsMegaMenuProps = {
  onNavigate?: () => void
}

export function ProductsMegaMenu({ onNavigate }: ProductsMegaMenuProps) {
  return (
    <div className="mega-menu-panel border-t border-brand-teal/10 bg-white shadow-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-10 lg:py-10">
        {productsMegaMenuColumns.map((column) => (
          <div key={column.title}>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-teal uppercase">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    onClick={onNavigate}
                    className="mega-menu-link text-sm font-light text-brand-charcoal/75 transition-colors hover:text-brand-sea"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
