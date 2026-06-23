export type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): string | null {
  if (!data.name.trim()) {
    return 'Name is required.'
  }
  if (data.name.trim().length < 2) {
    return 'Enter your full name (at least 2 characters).'
  }
  if (!data.email.trim()) {
    return 'Email is required.'
  }
  if (!EMAIL_RE.test(data.email.trim())) {
    return 'Enter a valid email address.'
  }
  if (!data.message.trim()) {
    return 'Message is required.'
  }
  if (data.message.trim().length < 5) {
    return 'Enter a message with at least 5 characters.'
  }
  return null
}
