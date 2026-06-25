export const AGE_VERIFICATION_STORAGE_KEY = 'polisupport-age-verified'

export type AgeVerificationStatus = 'loading' | 'pending' | 'verified' | 'blocked'

export function readAgeVerificationStatus(): AgeVerificationStatus {
  if (typeof window === 'undefined') return 'loading'
  const stored = localStorage.getItem(AGE_VERIFICATION_STORAGE_KEY)
  if (stored === 'true') return 'verified'
  if (stored === 'false') return 'blocked'
  return 'pending'
}

export function saveAgeVerification(verified: boolean) {
  localStorage.setItem(AGE_VERIFICATION_STORAGE_KEY, String(verified))
}

export function clearAgeVerification() {
  localStorage.removeItem(AGE_VERIFICATION_STORAGE_KEY)
}
