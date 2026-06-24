import { Link, Navigate, useParams } from 'react-router-dom'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { getPolicyBySlug } from '../data/policies'

type PolicyPageProps = {
  surface?: 'cream' | 'warm'
}

export function PolicyPage({ surface = 'cream' }: PolicyPageProps) {
  const { slug } = useParams<{ slug: string }>()
  const policy = slug ? getPolicyBySlug(slug) : undefined
  const pageBg = surface === 'warm' ? 'bg-brand-warm' : 'bg-white'

  if (!policy) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={`page-content-enter ${pageBg} pb-16 md:pb-20`}>
      <div className="mx-auto max-w-3xl px-6 pt-10 md:pt-14 lg:px-10">
        <ScrollReveal className="text-center">
          <nav className="text-sm font-light text-brand-charcoal/50" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-1.5">
              <li>
                <Link to="/" className="transition-colors hover:text-brand-teal">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal/70">{policy.title}</li>
            </ol>
          </nav>
          <h1 className="font-display mt-5 text-3xl font-semibold tracking-[0.12em] text-brand-teal uppercase md:text-4xl">
            {policy.title}
          </h1>
          <p className="mt-3 text-sm font-light text-brand-charcoal/55">Last updated: {policy.lastUpdated}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 text-sm font-light leading-relaxed text-brand-charcoal/80 md:text-base" delay={60}>
          <p>{policy.intro}</p>
        </ScrollReveal>

        <div className="mt-10 space-y-10">
          {policy.sections.map((section, index) => (
            <ScrollReveal key={section.id} delay={80 + index * 40}>
              <section id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-semibold text-brand-teal md:text-2xl">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-3 text-sm font-light leading-relaxed text-brand-charcoal/75 md:text-base">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-brand-charcoal/75 md:text-base">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 rounded-2xl border border-brand-teal/10 bg-brand-cream/40 p-6 text-center" delay={120}>
          <p className="text-sm font-light text-brand-charcoal/70">
            Questions about this policy?{' '}
            <Link to="/contact" className="font-semibold text-brand-teal underline-offset-2 hover:underline">
              Contact our team
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
