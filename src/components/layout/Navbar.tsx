import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { BrandLogo } from '../common/BrandLogo'
import { NavSidebar } from './NavSidebar'
import { useScrolled } from '../../hooks/useScrolled'
import { siteNavLinks } from '../../data/navigation'

const SIDEBAR_CLOSE_MS = 320

export function Navbar() {
  const scrolled = useScrolled()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarClosing, setSidebarClosing] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openSidebar = useCallback(() => {
    clearCloseTimer()
    setSidebarClosing(false)
    setSidebarOpen(true)
  }, [clearCloseTimer])

  const closeSidebar = useCallback(() => {
    if (!sidebarOpen || sidebarClosing) return
    setSidebarClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setSidebarOpen(false)
      setSidebarClosing(false)
      closeTimerRef.current = null
    }, SIDEBAR_CLOSE_MS)
  }, [sidebarClosing, sidebarOpen, clearCloseTimer])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [clearCloseTimer])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280 && sidebarOpen) {
        clearCloseTimer()
        setSidebarClosing(false)
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [clearCloseTimer, sidebarOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md'
            : 'bg-white'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 xl:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              className="flex size-10 shrink-0 items-center justify-center rounded-lg text-brand-teal transition-colors hover:bg-brand-cream xl:hidden"
              onClick={openSidebar}
              aria-label="Open navigation menu"
              aria-expanded={sidebarOpen}
            >
              <HiOutlineBars3 className="size-6" />
            </button>

            <Link to="/" className="group shrink-0 transition-transform duration-300 hover:scale-[1.02]">
              <BrandLogo size="md" className="group-hover:scale-105" />
            </Link>
          </div>

          <nav className="hidden items-center gap-5 xl:flex xl:gap-7">
            {siteNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-underline text-[11px] font-semibold tracking-wide text-brand-teal uppercase transition-colors hover:text-brand-sea xl:text-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center xl:flex">
            <a
              href="/#contact"
              className="rounded-full border border-brand-teal/20 px-4 py-2 text-xs font-semibold text-brand-teal transition-all hover:border-brand-sea hover:bg-brand-cream"
            >
              Contact us
            </a>
          </div>
        </div>
      </header>

      <NavSidebar isOpen={sidebarOpen} isClosing={sidebarClosing} onClose={closeSidebar} />
    </>
  )
}
