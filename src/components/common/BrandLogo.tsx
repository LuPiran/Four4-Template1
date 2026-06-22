import logo from '../../assets/logo-polisupport.png'

type BrandLogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = {
  sm: 'h-10 w-auto',
  md: 'h-12 w-auto md:h-14',
  lg: 'h-16 w-auto md:h-20',
}

export function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt="Polisupport Premium Wellness"
      className={`${sizeClass[size]} transition-transform duration-300 ${className}`}
    />
  )
}
