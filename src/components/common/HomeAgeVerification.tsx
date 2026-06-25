import { useEffect, useRef, useState, type ReactNode } from 'react'
import { BrandLogo } from './BrandLogo'
import { AgeRestrictedPage } from './AgeRestrictedPage'
import {
  readAgeVerificationStatus,
  saveAgeVerification,
  type AgeVerificationStatus,
} from '../../data/ageVerification'

type HomeAgeVerificationProps = {
  children: ReactNode
}

function useMandatoryModalLock(active: boolean) {
  useEffect(() => {
    if (!active) return

    const scrollY = window.scrollY
    const { overflow: htmlOverflow, overscrollBehavior: htmlOverscroll } = document.documentElement.style
    const {
      overflow: bodyOverflow,
      position: bodyPosition,
      top: bodyTop,
      width: bodyWidth,
      overscrollBehavior: bodyOverscroll,
    } = document.body.style

    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overscrollBehavior = 'none'

    function blockScroll(event: Event) {
      event.preventDefault()
    }

    function blockEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    window.addEventListener('wheel', blockScroll, { passive: false })
    window.addEventListener('touchmove', blockScroll, { passive: false })
    window.addEventListener('keydown', blockEscape, true)

    return () => {
      document.documentElement.style.overflow = htmlOverflow
      document.documentElement.style.overscrollBehavior = htmlOverscroll
      document.body.style.overflow = bodyOverflow
      document.body.style.position = bodyPosition
      document.body.style.top = bodyTop
      document.body.style.width = bodyWidth
      document.body.style.overscrollBehavior = bodyOverscroll
      window.scrollTo(0, scrollY)
      window.removeEventListener('wheel', blockScroll)
      window.removeEventListener('touchmove', blockScroll)
      window.removeEventListener('keydown', blockEscape, true)
    }
  }, [active])
}

function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!active || !containerRef.current) return

    const container = containerRef.current

    function getFocusable() {
      return Array.from(
        container.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      )
    }

    const focusable = getFocusable()
    if (focusable.length === 0) return

    focusable[0].focus()

    function handleKeyDown(event: KeyboardEvent) {
      const items = getFocusable()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]

      if (event.key === 'Tab') {
        if (!container.contains(document.activeElement)) {
          event.preventDefault()
          first.focus()
          return
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    return () => document.removeEventListener('keydown', handleKeyDown, true)
  }, [active, containerRef])
}

export function HomeAgeVerification({ children }: HomeAgeVerificationProps) {
  const [status, setStatus] = useState<AgeVerificationStatus>('loading')
  const dialogRef = useRef<HTMLDivElement>(null)
  const isPending = status === 'pending'

  useEffect(() => {
    setStatus(readAgeVerificationStatus())
  }, [])

  useMandatoryModalLock(isPending)
  useFocusTrap(isPending, dialogRef)

  function handleConfirm() {
    saveAgeVerification(true)
    setStatus('verified')
  }

  function handleDecline() {
    saveAgeVerification(false)
    setStatus('blocked')
  }

  if (status === 'blocked') {
    return <AgeRestrictedPage onRetry={() => setStatus('pending')} />
  }

  return (
    <>
      <div
        className={isPending ? 'pointer-events-none select-none' : undefined}
        aria-hidden={isPending ? true : undefined}
        inert={isPending ? true : undefined}
      >
        {children}
      </div>

      {isPending && (
        <div
          className="fixed inset-0 z-[200] flex touch-none items-center justify-center overflow-hidden p-4"
          role="presentation"
          onWheel={(event) => event.preventDefault()}
          onTouchMove={(event) => event.preventDefault()}
        >
          <div className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-sm" aria-hidden="true" />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-verification-title"
            className="relative z-10 w-full max-w-md rounded-2xl border border-brand-teal/10 bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex justify-center">
              <BrandLogo size="sm" />
            </div>

            <h2
              id="age-verification-title"
              className="font-display mt-6 text-center text-xl font-semibold text-brand-teal sm:text-2xl"
            >
              Age verification
            </h2>
            <p className="mt-3 text-center text-sm leading-relaxed text-brand-charcoal/70">
              This website contains cannabis wellness products. You must be 21 years of age or older to enter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleConfirm}
                className="font-display flex-1 rounded-xl bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-sea"
              >
                Yes, I am 21 or older
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="font-display flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-brand-charcoal/75 transition-colors hover:border-brand-teal/25 hover:bg-brand-cream/60"
              >
                No, I am under 21
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
