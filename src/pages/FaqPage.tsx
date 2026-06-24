import { Link } from 'react-router-dom'
import { HiOutlineChatBubbleLeftRight, HiOutlineEnvelope, HiOutlineShieldCheck } from 'react-icons/hi2'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { FaqAccordionGroup } from '../components/faq/FaqAccordion'
import { contactInfo } from '../data/contact'
import { faqCategories, faqIntro, getFaqItemCount } from '../data/faq'
import { gradientGold } from '../styles/colors'

type FaqPageProps = {
  heroSurface?: 'cream' | 'warm'
}

export function FaqPage({ heroSurface = 'cream' }: FaqPageProps) {
  const totalQuestions = getFaqItemCount()
  const heroBg = heroSurface === 'warm' ? 'bg-brand-warm-deep/60' : 'bg-brand-cream/60'

  return (
    <div className="page-content-enter pb-16 md:pb-20">
      <section className={`border-b border-brand-teal/10 ${heroBg} py-14 md:py-20`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Support</p>
            <h1 className="font-display mt-2 text-3xl font-semibold text-brand-teal md:text-5xl">{faqIntro.title}</h1>
            <p className="font-display mt-3 text-lg font-medium text-brand-teal/80 md:text-xl">{faqIntro.subtitle}</p>
            <p className="mt-4 text-sm font-light leading-relaxed text-brand-charcoal/65 md:text-base">{faqIntro.description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-brand-teal/15 bg-white px-4 py-2 text-xs font-semibold text-brand-teal">
                {totalQuestions} detailed answers
              </span>
              <span className="rounded-full border border-brand-teal/15 bg-white px-4 py-2 text-xs font-semibold text-brand-teal">
                {faqCategories.length} categories
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-sea/20 bg-brand-sea/10 px-4 py-2 text-xs font-semibold text-brand-teal">
                <HiOutlineShieldCheck className="size-4" aria-hidden="true" />
                Lab-tested products
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <ScrollReveal className="hidden lg:block">
            <nav className="faq-sidebar sticky top-28 rounded-2xl border border-brand-teal/10 bg-white p-5 shadow-sm">
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-gold uppercase">On this page</p>
              <ul className="mt-4 space-y-2">
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#faq-${category.id}`}
                      className="block rounded-lg px-3 py-2 text-sm font-light text-brand-charcoal/70 transition-colors hover:bg-brand-cream/60 hover:text-brand-teal"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollReveal>

          <div className="space-y-14">
            {faqCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 40}>
                <section id={`faq-${category.id}`} className="scroll-mt-28">
                  <div className="mb-5 max-w-3xl">
                    <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-gold uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="font-display mt-1 text-xl font-semibold text-brand-teal md:text-2xl">{category.title}</h2>
                    <p className="mt-2 text-sm font-light leading-relaxed text-brand-charcoal/60">{category.description}</p>
                  </div>
                  <FaqAccordionGroup items={category.items} defaultOpenId={index === 0 ? category.items[0]?.id : undefined} />
                </section>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-16" delay={120}>
          <div className="overflow-hidden rounded-3xl border border-brand-gold/25 bg-linear-to-br from-brand-teal to-brand-sea p-8 text-white md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold-light uppercase">Still have questions?</p>
                <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">Talk to a Polisupport specialist</h2>
                <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-white/85">
                  Our team can guide you on product selection, dosing considerations, and wellness goals — with the care and discretion you expect from a premium brand.
                </p>
                <p className="mt-3 text-xs text-white/60">{contactInfo.hours}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:scale-[1.02]"
                  style={{ background: gradientGold }}
                >
                  <HiOutlineChatBubbleLeftRight className="size-5" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <HiOutlineEnvelope className="size-5" aria-hidden="true" />
                  Email us
                </a>
                <Link
                  to="/shop"
                  className="font-display inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                >
                  Browse catalog
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
