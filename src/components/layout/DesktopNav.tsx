import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import type { NavItem } from '../../data/navigation'
import { navItems } from '../../data/navigation'
import { productsMegaMenuColumns } from '../../data/megaMenu'
import { pathologies } from '../../data/pathologies'
import { buildShopUrl } from '../../utils/shopFilters'
import { ProductsMegaMenu } from './mega-menu/ProductsMegaMenu'
import { WellnessMegaMenu } from './mega-menu/WellnessMegaMenu'

export type MegaMenuId = 'products' | 'wellness'

function NavMegaTrigger({
  label,
  menuId,
  isOpen,
  onOpen,
}: {
  label: string
  menuId: MegaMenuId
  isOpen: boolean
  onOpen: (id: MegaMenuId) => void
}) {
  return (
    <button
      type="button"
      className={`nav-link-underline font-display flex items-center gap-1 text-xs font-semibold tracking-wide uppercase transition-colors xl:text-sm ${
        isOpen ? 'text-brand-sea' : 'text-brand-teal hover:text-brand-sea'
      }`}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onMouseEnter={() => onOpen(menuId)}
      onFocus={() => onOpen(menuId)}
      onClick={() => onOpen(menuId)}
    >
      {label}
      <HiOutlineChevronDown
        className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true"
      />
    </button>
  )
}

export function DesktopNav({
  activeMenu,
  onMenuChange,
}: {
  activeMenu: MegaMenuId | null
  onMenuChange: (id: MegaMenuId | null) => void
}) {
  const openMenu = useCallback((id: MegaMenuId) => onMenuChange(id), [onMenuChange])

  return (
    <nav className="hidden items-center gap-5 xl:flex xl:gap-7">
      {navItems.map((item) => {
        if (item.type === 'link') {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link-underline font-display text-xs font-semibold tracking-wide uppercase transition-colors xl:text-sm ${
                  isActive ? 'text-brand-sea' : 'text-brand-teal hover:text-brand-sea'
                }`
              }
            >
              {item.label}
            </NavLink>
          )
        }

        if (item.type === 'products') {
          return (
            <NavMegaTrigger
              key="products"
              label={item.label}
              menuId="products"
              isOpen={activeMenu === 'products'}
              onOpen={openMenu}
            />
          )
        }

        return (
          <NavMegaTrigger
            key="wellness"
            label={item.label}
            menuId="wellness"
            isOpen={activeMenu === 'wellness'}
            onOpen={openMenu}
          />
        )
      })}
    </nav>
  )
}

export function MegaMenuPanel({
  activeMenu,
  onClose,
}: {
  activeMenu: MegaMenuId | null
  onClose: () => void
}) {
  if (!activeMenu) return null

  return (
    <div
      className="mega-menu-dropdown absolute inset-x-0 top-full z-40 hidden xl:block"
      onMouseLeave={onClose}
    >
      {activeMenu === 'products' ? (
        <ProductsMegaMenu onNavigate={onClose} />
      ) : (
        <WellnessMegaMenu onNavigate={onClose} />
      )}
    </div>
  )
}

export function useMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<MegaMenuId | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openMenu = useCallback(
    (id: MegaMenuId) => {
      clearCloseTimer()
      setActiveMenu(id)
    },
    [clearCloseTimer],
  )

  const closeMenu = useCallback(() => {
    clearCloseTimer()
    setActiveMenu(null)
  }, [clearCloseTimer])

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer])

  return { activeMenu, openMenu, closeMenu, setActiveMenu }
}

export function MobileNavItem({
  item,
  expanded,
  onToggle,
  onClose,
  linkClassName,
  subLinkClassName,
  sectionTitleClassName,
  animationClass,
  animationDelay,
}: {
  item: NavItem
  expanded: MegaMenuId | null
  onToggle: (id: MegaMenuId) => void
  onClose: () => void
  linkClassName: (isActive: boolean) => string
  subLinkClassName: string
  sectionTitleClassName: string
  animationClass?: string
  animationDelay?: number
}) {
  if (item.type === 'link') {
    return (
      <NavLink
        to={item.to}
        end={item.to === '/'}
        onClick={onClose}
        className={({ isActive }) => `${linkClassName(isActive)} ${animationClass ?? ''}`}
        style={animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined}
      >
        {item.label}
      </NavLink>
    )
  }

  const menuId = item.type
  const isExpanded = expanded === menuId

  return (
    <div className={`flex flex-col gap-1 ${animationClass ?? ''}`} style={animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined}>
      <button
        type="button"
        onClick={() => onToggle(menuId)}
        className={`${linkClassName(isExpanded)} flex w-full items-center justify-between`}
        aria-expanded={isExpanded}
      >
        {item.label}
        <HiOutlineChevronDown
          className={`size-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {isExpanded && menuId === 'products' && (
        <div className="mb-2 space-y-4 rounded-xl bg-black/5 px-3 py-3">
          {productsMegaMenuColumns.map((column) => (
            <div key={column.title}>
              <p className={sectionTitleClassName}>{column.title}</p>
              <ul className="mt-2 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to} onClick={onClose} className={subLinkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {isExpanded && menuId === 'wellness' && (
        <div className="mb-2 grid grid-cols-2 gap-2 rounded-xl bg-black/5 p-3">
          {pathologies.map((pathology) => {
            const Icon = pathology.icon
            return (
              <Link
                key={pathology.id}
                to={buildShopUrl({ wellness: pathology.id })}
                onClick={onClose}
                className={`${subLinkClassName} flex flex-col items-center gap-1.5 py-2 text-center`}
              >
                <Icon className="size-5 shrink-0 opacity-80" aria-hidden="true" />
                <span>{pathology.name}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
