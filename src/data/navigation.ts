export type NavItem =
  | { type: 'link'; to: string; label: string }
  | { type: 'products'; label: string }
  | { type: 'wellness'; label: string }

export const navItems: NavItem[] = [
  { type: 'link', to: '/', label: 'Home' },
  { type: 'products', label: 'Products' },
  { type: 'wellness', label: 'Wellness' },
]

export const footerNavLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Products' },
] as const

export const footerHelpLinks = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
] as const

export const footerPolicyLinks = [
  { to: '/policies/privacy-policy', label: 'Privacy Policy' },
  { to: '/policies/refund-policy', label: 'Refund Policy' },
  { to: '/policies/shipping-policy', label: 'Shipping Policy' },
  { to: '/policies/terms-of-service', label: 'Terms of Service' },
] as const
