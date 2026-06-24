import { Link } from 'react-router-dom'
import {
  HiOutlineBeaker,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckBadge,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
import type { IconType } from 'react-icons'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { BrandLogo } from '../components/common/BrandLogo'
import { contactInfo } from '../data/contact'
import {
  aboutCommitments,
  aboutFoundedYear,
  aboutIntro,
  aboutMissionVision,
  aboutMilestones,
  aboutOrigin,
  aboutStats,
  aboutValues,
} from '../data/aboutStory'
import { lifestyleAssets } from '../data/siteAssets'
import { storePillars } from '../data/storeStory'
import { gradientGold } from '../styles/colors'

const valueIcons: IconType[] = [
  HiOutlineShieldCheck,
  HiOutlineCheckBadge,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
]

type AboutPageProps = {
  heroSurface?: 'cream' | 'warm'
}

export function AboutPage({ heroSurface = 'cream' }: AboutPageProps) {
  const heroBg = heroSurface === 'warm' ? 'bg-brand-warm-deep/60' : 'bg-brand-cream/60'

  return (
    <div className="page-content-enter pb-16 md:pb-20">
      <section className={`border-b border-brand-teal/10 ${heroBg} py-14 md:py-20`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">{aboutIntro.overline}</p>
            <h1 className="font-display mt-2 text-3xl font-semibold text-brand-teal md:text-5xl">{aboutIntro.title}</h1>
            <p className="font-display mt-3 text-lg font-medium text-brand-teal/80 md:text-xl">{aboutIntro.subtitle}</p>
            <p className="mt-4 text-sm font-light leading-relaxed text-brand-charcoal/65 md:text-base">{aboutIntro.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <img
          src={aboutOrigin.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-teal/94 via-brand-teal/85 to-brand-teal/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal animation="fade-right">
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold-light uppercase">{aboutIntro.overline}</p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-white md:text-4xl">{aboutOrigin.title}</h2>
              {aboutOrigin.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-4 text-sm font-light leading-relaxed text-white/85 md:text-base">
                  {paragraph}
                </p>
              ))}
              <Link
                to="/shop"
                className="font-display mt-8 inline-flex rounded-full px-6 py-2.5 text-xs font-semibold text-brand-charcoal transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: gradientGold }}
              >
                Explore our catalog
              </Link>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={100}>
              <div className="relative mx-auto max-w-md">
                <div className="overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
                  <img
                    src={lifestyleAssets.labs}
                    alt={aboutOrigin.imageAlt}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-brand-gold/30 bg-white/95 p-4 shadow-xl backdrop-blur-sm md:-left-8">
                  <BrandLogo size="sm" />
                  <p className="mt-2 max-w-[10rem] text-xs font-light text-brand-charcoal/70">
                    Premium botanical wellness · Est. {aboutFoundedYear}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-teal/10 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-semibold text-brand-teal md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-light text-brand-charcoal/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Mission & vision</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-3xl">What drives us forward</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={40}>
              <article className="h-full rounded-3xl border border-brand-teal/10 bg-brand-cream/50 p-8 md:p-10">
                <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-gold uppercase">{aboutMissionVision.mission.title}</p>
                <p className="mt-4 text-sm font-light leading-relaxed text-brand-charcoal/70 md:text-base">{aboutMissionVision.mission.text}</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <article className="h-full rounded-3xl border border-brand-gold/25 bg-linear-to-br from-brand-teal to-brand-sea p-8 text-white md:p-10">
                <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-gold-light uppercase">{aboutMissionVision.vision.title}</p>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/85 md:text-base">{aboutMissionVision.vision.text}</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-teal/10 bg-brand-cream/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Our journey</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-3xl">Our first chapters</h2>
            <p className="mt-3 text-sm font-light text-brand-charcoal/60 md:text-base">
              A young brand with a clear roadmap — every milestone from {aboutFoundedYear}, our founding year.
            </p>
          </ScrollReveal>

          <div className="relative mt-12">
            <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-brand-teal/15 md:left-1/2 md:block" aria-hidden="true" />
            <ol className="space-y-10 md:space-y-0">
              {aboutMilestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year + milestone.title} delay={index * 50}>
                  <li className="relative md:grid md:grid-cols-2 md:gap-10 md:py-8">
                    <div className={`md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <span className="font-display text-sm font-semibold text-brand-gold">{milestone.year}</span>
                      <h3 className="font-display mt-1 text-lg font-semibold text-brand-teal">{milestone.title}</h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-brand-charcoal/65">{milestone.description}</p>
                    </div>
                    <div
                      className={`absolute top-2 left-4 hidden size-3 -translate-x-1/2 rounded-full border-2 border-brand-gold bg-white md:left-1/2 md:block ${
                        index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'
                      }`}
                      aria-hidden="true"
                    />
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Our values</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-3xl">Principles we never compromise on</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value, index) => {
              const Icon = valueIcons[index] ?? HiOutlineSparkles
              return (
                <ScrollReveal key={value.title} delay={index * 40}>
                  <article className="h-full rounded-2xl border border-brand-teal/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-sea/15 text-brand-teal">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display mt-4 text-base font-semibold text-brand-teal">{value.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-brand-charcoal/65">{value.description}</p>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-teal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Quality standards</p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-3xl">Built on science, delivered with care</h2>
              <ul className="mt-6 space-y-3">
                {aboutCommitments.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-light text-brand-charcoal/70">
                    <HiOutlineCheckBadge className="mt-0.5 size-5 shrink-0 text-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/faq"
                className="font-display mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-sea"
              >
                Read our FAQ
                <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {storePillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="overflow-hidden rounded-2xl border border-brand-teal/10 bg-brand-cream/40"
                  >
                    <img src={pillar.image} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <HiOutlineBeaker className="size-4 text-brand-teal" aria-hidden="true" />
                        <h3 className="font-display text-sm font-semibold text-brand-teal">{pillar.title}</h3>
                      </div>
                      <p className="mt-2 text-xs font-light leading-relaxed text-brand-charcoal/60">{pillar.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-10">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-brand-gold/25 bg-linear-to-br from-brand-teal to-brand-sea p-8 text-white md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold-light uppercase">Join the journey</p>
                <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">Ready to build your routine?</h2>
                <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-white/85">
                  We launched in {aboutFoundedYear} and we are building Polisupport alongside our first customers. Whether you are new to medicinal cannabis or refining an existing routine, our team is here to help you find the right line, format, and dosage.
                </p>
                <p className="mt-3 text-xs text-white/60">{contactInfo.hours} · {contactInfo.address}</p>
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
                <Link
                  to="/shop"
                  className="font-display inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Shop now
                </Link>
                <Link
                  to="/blog"
                  className="font-display inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                >
                  Read the blog
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
