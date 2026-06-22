import { contactInfo } from '../data/contact'

export type WhatsAppFormData = {
  name: string
  email: string
  phone: string
  message: string
}

export function buildWhatsAppMessage({ name, email, phone, message }: WhatsAppFormData): string {
  return [
    'Hi Polisupport! I would like to get in touch.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : '',
    '',
    `Message: ${message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export function openWhatsAppChat(data: WhatsAppFormData): void {
  const text = buildWhatsAppMessage(data)
  const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
