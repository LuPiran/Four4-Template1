import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { BrandLogo } from '../common/BrandLogo'
import { CartButton } from '../cart/CartButton'
import { NavSidebar } from './NavSidebar'
import { useScrolled } from '../../hooks/useScrolled'
import { DesktopNav, MegaMenuPanel, useMegaMenu } from './DesktopNav'

const SIDEBAR_CLOSE_MS = 320

export function Navbar() {
  const scrolled = useScrolled()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarClosing, setSidebarClosing] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { activeMenu, closeMenu, setActiveMenu } = useMegaMenu()
  const headerRef = useRef<HTMLElement>(null)

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
    closeMenu()
  }, [clearCloseTimer, closeMenu])

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
      if (window.innerWidth < 1280) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [clearCloseTimer, sidebarOpen, closeMenu])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeMenu()
      }
    }
    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeMenu, closeMenu])

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || activeMenu
            ? 'border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-white'
        }`}
        onMouseLeave={() => {
          if (activeMenu) closeMenu()
        }}
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

            <Link
              to="/"
              className="group shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              onClick={closeMenu}
            >
              <BrandLogo size="lg" className="group-hover:scale-105" />
            </Link>
          </div>

          <DesktopNav activeMenu={activeMenu} onMenuChange={setActiveMenu} />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <CartButton />
          </div>
        </div>

        <MegaMenuPanel activeMenu={activeMenu} onClose={closeMenu} />
      </header>

      <NavSidebar isOpen={sidebarOpen} isClosing={sidebarClosing} onClose={closeSidebar} />
    </>
  )
}
