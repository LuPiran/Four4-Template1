import type { PaymentMethodId } from '../data/orderConfig'

export type OrderFormData = {
  name: string
  email: string
  phone: string
  streetAddress: string
  addressLine2: string
  city: string
  state: string
  zipCode: string
  paymentMethod: PaymentMethodId | ''
}

export type OrderFormErrors = Partial<Record<keyof OrderFormData, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ZIP_RE = /^\d{5}(-\d{4})?$/
const PHONE_RE = /^[\d\s().+-]{10,20}$/

export function sanitizeText(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength)
}

export function validateOrderForm(data: OrderFormData): OrderFormErrors {
  const errors: OrderFormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Full name is required.'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Enter your full name (at least 2 characters).'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  const phoneDigits = data.phone.replace(/\D/g, '')
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!PHONE_RE.test(data.phone.trim()) || phoneDigits.length < 10) {
    errors.phone = 'Enter a valid US phone number (at least 10 digits).'
  }

  if (!data.streetAddress.trim()) {
    errors.streetAddress = 'Street address is required.'
  } else if (data.streetAddress.trim().length < 5) {
    errors.streetAddress = 'Enter a complete street address.'
  }

  if (!data.city.trim()) {
    errors.city = 'City is required.'
  }

  if (!data.state.trim()) {
    errors.state = 'Select a state.'
  }

  if (!data.zipCode.trim()) {
    errors.zipCode = 'ZIP code is required.'
  } else if (!ZIP_RE.test(data.zipCode.trim())) {
    errors.zipCode = 'Enter a valid ZIP code (12345 or 12345-6789).'
  }

  if (!data.paymentMethod) {
    errors.paymentMethod = 'Select a payment method.'
  }

  return errors
}

export function getValidationToastMessage(errors: OrderFormErrors): string {
  const messages = Object.values(errors).filter(Boolean)
  if (messages.length === 0) {
    return 'Please check the form and try again.'
  }
  if (messages.length === 1) {
    return messages[0]!
  }
  return `${messages[0]} Please review all required fields.`
}

export function formatUSAddress(data: OrderFormData): string {
  const line2 = data.addressLine2.trim() ? `\n${data.addressLine2.trim()}` : ''
  return `${data.streetAddress.trim()}${line2}\n${data.city.trim()}, ${data.state} ${data.zipCode.trim()}\nUnited States`
}
