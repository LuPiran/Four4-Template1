import { ScrollReveal } from '../common/ScrollReveal'
import { useCountUp } from '../../hooks/useCountUp'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const stats = [
  { label: 'Products in catalog', value: 50, suffix: '+' },
  { label: 'Happy customers', value: 12000, suffix: '+' },
  { label: 'Orders processed', value: 48000, suffix: '+' },
  { label: 'Average rating', value: 49, suffix: '/5', divisor: 10 },
]

function StatItem({
  label,
  value,
  suffix,
  divisor = 1,
  active,
}: {
  label: string
  value: number
  suffix: string
  divisor?: number
  active: boolean
}) {
  const count = useCountUp(value, active)
  const display = divisor > 1 ? (count / divisor).toFixed(1) : count.toLocaleString('en-US')

  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white md:text-4xl">
        {display}
        <span className="text-brand-gold-light">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-white/65">{label}</p>
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="stats" ref={ref} className="relative overflow-hidden bg-brand-teal py-16">
      <div
        className="animate-aurora pointer-events-none absolute -top-20 left-1/4 size-72 rounded-full bg-brand-sea/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-glow-pulse pointer-events-none absolute right-0 bottom-0 size-80 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">By the numbers</p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Trust built at scale
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              divisor={stat.divisor}
              active={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
