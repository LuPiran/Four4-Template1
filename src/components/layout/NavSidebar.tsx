import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineXMark } from 'react-icons/hi2'
import { BrandLogo } from '../common/BrandLogo'
import { siteNavLinks } from '../../data/navigation'
import { gradientGold } from '../../styles/colors'

type NavSidebarProps = {
  isOpen: boolean
  isClosing: boolean
  onClose: () => void
}

export function NavSidebar({ isOpen, isClosing, onClose }: NavSidebarProps) {
  const panelRef = useRef<HTMLElement>(null)
  const animationState = isClosing ? 'closing' : 'open'

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
    if (isOpen && panelRef.current) {
      panelRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen && !isClosing) return null

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
        <div className="nav-sidebar-header flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <Link to="/" onClick={onClose} className="shrink-0">
            <BrandLogo size="sm" />
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
          <p className="mb-3 px-2 text-[10px] font-bold tracking-widest text-brand-gold uppercase">
            Menu
          </p>
          {siteNavLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`nav-sidebar-link rounded-xl px-3 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white ${
                animationState === 'open' ? 'nav-sidebar-link-in' : ''
              }`}
              style={{ animationDelay: `${80 + index * 55}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 p-5">
          <a
            href="/#contact"
            onClick={onClose}
            className="nav-sidebar-cta flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:scale-[1.02]"
            style={{ background: gradientGold }}
          >
            Contact us
          </a>
        </div>
      </aside>
    </div>
  )
}
