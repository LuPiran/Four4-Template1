export const orderSenderEmail = 'lucaspiran@outlook.com'
export const orderRecipientEmail = 'lucaspiran@outlook.com'

export const paymentMethods = [
  { id: 'credit_card', label: 'Credit card (we will contact you to complete payment)' },
  { id: 'debit_card', label: 'Debit card (we will contact you to complete payment)' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'zelle', label: 'Zelle' },
  { id: 'apple_google_pay', label: 'Apple Pay / Google Pay' },
  { id: 'bank_transfer', label: 'Bank transfer (ACH)' },
] as const

export type PaymentMethodId = (typeof paymentMethods)[number]['id']
