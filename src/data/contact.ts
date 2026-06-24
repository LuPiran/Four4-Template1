export const contactInfo = {
  whatsapp: '15551234567',
  whatsappDisplay: '(555) 123-4567',
  email: 'contact@polisupport.com',
  phone: '(555) 300-0000',
  tollFree: '(888) 555-0199',
  instagram: '@polisupport',
  instagramUrl: 'https://instagram.com/polisupport',
  facebook: 'Polisupport Wellness',
  facebookUrl: 'https://facebook.com/polisupport',
  linkedinUrl: 'https://linkedin.com/company/polisupport',
  youtubeUrl: 'https://youtube.com/@polisupport',
  hours: 'Mon–Fri, 9am–6pm ET',
  address: '210 West 14th Street, New York, NY 10011 — USA',
}

export const contactSupportHours = [
  { days: 'Monday to Friday', hours: '9am – 6pm ET' },
  { days: 'Saturday', hours: '10am – 4pm ET' },
] as const

export const contactPageContent = {
  title: 'Contact us',
  intro:
    'Get in touch with our team! Have questions about Polisupport medicinal cannabis products — oils, tinctures, topicals, capsules, gummies, or wellness routines? We are here to help.',
  formLead:
    'Use the form below to reach out with any questions or comments and we will contact you within 24 hours.',
  responseTime: 'Typical response time: within 24 business hours.',
} as const

export const socialLinks = [
  { label: 'LinkedIn', href: contactInfo.linkedinUrl, network: 'linkedin' as const },
  { label: 'YouTube', href: contactInfo.youtubeUrl, network: 'youtube' as const },
  { label: 'Instagram', href: contactInfo.instagramUrl, network: 'instagram' as const },
  { label: 'Facebook', href: contactInfo.facebookUrl, network: 'facebook' as const },
]
