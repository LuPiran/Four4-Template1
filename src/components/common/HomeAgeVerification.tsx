import { useEffect, useState, type ReactNode } from 'react'
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

export function HomeAgeVerification({ children }: HomeAgeVerificationProps) {
  const [status, setStatus] = useState<AgeVerificationStatus>('loading')

  useEffect(() => {
    setStatus(readAgeVerificationStatus())
  }, [])

  useEffect(() => {
    if (status !== 'pending') return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [status])

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
      {children}

      {status === 'pending' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="presentation">
          <div className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-sm" aria-hidden="true" />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-verification-title"
            className="relative w-full max-w-md rounded-2xl border border-brand-teal/10 bg-white p-6 shadow-2xl sm:p-8"
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
