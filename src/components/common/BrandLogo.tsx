import { brandLogoFooter, brandLogoHeader } from '../../data/productImages'

type BrandLogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'header' | 'footer'
}

const sizeClass = {
  sm: 'h-12 w-auto',
  md: 'h-14 w-auto md:h-[4.25rem]',
  lg: 'h-[4.5rem] w-auto md:h-24',
}

export function BrandLogo({ className = '', size = 'md', variant = 'header' }: BrandLogoProps) {
  const src = variant === 'footer' ? brandLogoFooter : brandLogoHeader
  const footerClass = variant === 'footer' ? 'brightness-0 invert opacity-95' : ''

  return (
    <img
      src={src}
      alt="Polisupport Premium Wellness"
      className={`${sizeClass[size]} ${footerClass} transition-transform duration-300 ${className}`}
    />
  )
}
