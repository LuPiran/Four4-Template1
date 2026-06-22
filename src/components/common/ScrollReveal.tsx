import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade-down' | 'blur'
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const animationClass = {
    'fade-up': 'scroll-reveal-up',
    'fade-down': 'scroll-reveal-down',
    'fade-left': 'scroll-reveal-left',
    'fade-right': 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
    blur: 'scroll-reveal-blur',
  }[animation]

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
