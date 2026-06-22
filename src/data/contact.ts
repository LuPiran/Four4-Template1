export const contactInfo = {
  whatsapp: '15551234567',
  whatsappDisplay: '(555) 123-4567',
  email: 'contact@polisupport.com',
  phone: '(555) 300-0000',
  instagram: '@polisupport',
  instagramUrl: 'https://instagram.com/polisupport',
  facebook: 'Polisupport Wellness',
  facebookUrl: 'https://facebook.com/polisupport',
  linkedinUrl: 'https://linkedin.com/company/polisupport',
  youtubeUrl: 'https://youtube.com/@polisupport',
  hours: 'Mon–Fri, 9am–6pm ET',
  address: 'New York, NY — USA',
}

export const socialLinks = [
  { label: 'LinkedIn', href: contactInfo.linkedinUrl, network: 'linkedin' as const },
  { label: 'YouTube', href: contactInfo.youtubeUrl, network: 'youtube' as const },
  { label: 'Instagram', href: contactInfo.instagramUrl, network: 'instagram' as const },
  { label: 'Facebook', href: contactInfo.facebookUrl, network: 'facebook' as const },
]
