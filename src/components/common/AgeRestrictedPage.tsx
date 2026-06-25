import { HiOutlineShieldExclamation } from 'react-icons/hi2'
import { BrandLogo } from './BrandLogo'
import { clearAgeVerification } from '../../data/ageVerification'

type AgeRestrictedPageProps = {
  onRetry: () => void
}

export function AgeRestrictedPage({ onRetry }: AgeRestrictedPageProps) {
  function handleRetry() {
    clearAgeVerification()
    onRetry()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-6 py-12 text-brand-charcoal">
      <div className="w-full max-w-lg rounded-2xl border border-brand-teal/10 bg-white p-8 text-center shadow-lg sm:p-10">
        <BrandLogo size="md" className="mx-auto" />

        <div className="mx-auto mt-8 flex size-16 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
          <HiOutlineShieldExclamation className="size-8" aria-hidden="true" />
        </div>

        <h1 className="font-display mt-6 text-2xl font-semibold text-brand-teal sm:text-3xl">
          You cannot purchase on your own
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/70 sm:text-base">
          You must be 21 years of age or older to buy cannabis wellness products on this website. Because of age
          restrictions, you are not allowed to shop here on your own.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/70 sm:text-base">
          If you need a product, please ask a parent or legal guardian to visit this site and complete the purchase for
          you.
        </p>

        <button
          type="button"
          onClick={handleRetry}
          className="mt-8 text-xs font-semibold tracking-wide text-brand-teal/55 uppercase underline-offset-2 transition-colors hover:text-brand-sea hover:underline"
        >
          Answer age verification again
        </button>
      </div>
    </div>
  )
}
