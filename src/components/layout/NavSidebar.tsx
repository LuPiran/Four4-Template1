import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineXMark } from 'react-icons/hi2'
import { BrandLogo } from '../common/BrandLogo'
import { navItems } from '../../data/navigation'
import { gradientGold } from '../../styles/colors'
import { MobileNavItem, type MegaMenuId } from './DesktopNav'

type NavSidebarProps = {
  isOpen: boolean
  isClosing: boolean
  onClose: () => void
}

export function NavSidebar({ isOpen, isClosing, onClose }: NavSidebarProps) {
  const panelRef = useRef<HTMLElement>(null)
  const animationState = isClosing ? 'closing' : 'open'
  const [expanded, setExpanded] = useState<MegaMenuId | null>(null)

  useEffect(() => {
    if (!isOpen && !isClosing) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isClosing, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen && panelRef.current) panelRef.current.focus()
    if (!isOpen) setExpanded(null)
  }, [isOpen])

  if (!isOpen && !isClosing) return null

  const toggleExpanded = (id: MegaMenuId) => {
    setExpanded((current) => (current === id ? null : id))
  }

  return (
    <div className="nav-sidebar-root fixed inset-0 z-[120]" role="presentation">
      <button
        type="button"
        className={`nav-sidebar-backdrop absolute inset-0 bg-brand-charcoal/45 backdrop-blur-[3px] ${
          animationState === 'closing' ? 'nav-sidebar-backdrop-out' : 'nav-sidebar-backdrop-in'
        }`}
        onClick={onClose}
        aria-label="Close navigation menu"
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        className={`nav-sidebar-panel absolute top-0 left-0 flex h-full w-[min(88vw,300px)] flex-col bg-brand-sidebar text-white shadow-[8px_0_40px_-8px_rgba(0,0,0,0.35)] sm:w-[min(78vw,320px)] ${
          animationState === 'closing' ? 'nav-sidebar-panel-out' : 'nav-sidebar-panel-in'
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <Link to="/" onClick={onClose} className="shrink-0">
            <BrandLogo size="sm" variant="footer" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <HiOutlineXMark className="size-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {navItems.map((item, index) => (
            <MobileNavItem
              key={item.type === 'link' ? item.to : item.type}
              item={item}
              expanded={expanded}
              onToggle={toggleExpanded}
              onClose={onClose}
              linkClassName={(isActive) =>
                `rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-white/15 text-white' : 'text-white/85 hover:bg-white/10 hover:text-white'
                } ${animationState === 'open' ? 'nav-sidebar-link-in' : ''}`
              }
              subLinkClassName="block rounded-lg px-2 py-1.5 text-xs text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              sectionTitleClassName="text-[10px] font-bold tracking-[0.16em] text-white/50 uppercase"
              animationClass={animationState === 'open' ? 'nav-sidebar-link-in' : ''}
              animationDelay={80 + index * 55}
            />
          ))}
        </nav>

        <div className="border-t border-white/10 p-5">
          <Link
            to="/shop"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:scale-[1.02]"
            style={{ background: gradientGold }}
          >
            Shop now
          </Link>
        </div>
      </aside>
    </div>
  )
}
