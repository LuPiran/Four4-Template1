import { ScrollReveal } from '../common/ScrollReveal'
import { trustBadges } from '../../data/trust'

export function TrustBadges() {
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <ScrollReveal key={badge.title} delay={index * 80} animation="scale">
                <div className="group flex flex-col items-center text-center">
                  <div className="relative mb-3 flex size-14 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-cream transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand-gold group-hover:shadow-lg">
                    <span
                      className="absolute inset-0 rounded-full bg-brand-gold/10 opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <Icon className="size-6 text-brand-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                  <p className="text-xs font-bold tracking-wide text-brand-teal uppercase">{badge.title}</p>
                  <p className="mt-0.5 text-[11px] text-brand-charcoal/55">{badge.subtitle}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
