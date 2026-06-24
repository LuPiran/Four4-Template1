import { Children, isValidElement, type ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

type StaggerRevealProps = {
  children: ReactNode
  className?: string
  stagger?: number
  baseDelay?: number
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade-down' | 'blur'
}

function getChildKey(child: ReactNode, index: number) {
  if (isValidElement(child) && child.key != null) {
    return String(child.key)
  }
  return `stagger-${index}`
}

export function StaggerReveal({
  children,
  className = '',
  stagger = 55,
  baseDelay = 0,
  animation = 'fade-up',
}: StaggerRevealProps) {
  const items = Children.toArray(children)

  return (
    <div className={className}>
      {items.map((child, index) => (
        <ScrollReveal key={getChildKey(child, index)} delay={baseDelay + index * stagger} animation={animation}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
