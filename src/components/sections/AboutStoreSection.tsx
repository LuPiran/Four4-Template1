import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import { GiDrop, GiFruitBowl } from 'react-icons/gi'
import {
  HiOutlineBeaker,
  HiOutlineBolt,
  HiOutlineCheckBadge,
  HiOutlineCloud,
  HiOutlineFire,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import { useProductModal } from '../../context/ProductModalContext'
import { ScrollReveal } from '../common/ScrollReveal'
import { BrandLogo } from '../common/BrandLogo'
import { FeaturedProductsSection } from './FeaturedProductsSection'
import type { ProductCategory } from '../../data/productDetails'
import {
  experienceSteps,
  productCategories,
  storeIntro,
  storePillars,
} from '../../data/storeStory'
import { lifestyleAssets } from '../../data/siteAssets'
import { gradientGold } from '../../styles/colors'
import { buildShopUrl } from '../../utils/shopFilters'

const pillarIcons = [HiOutlineSparkles, HiOutlineBeaker, HiOutlineCheckBadge]

const categoryIcons: Record<ProductCategory, IconType> = {
  oil: GiDrop,
  caplets: HiOutlineBeaker,
  gummies: GiFruitBowl,
  topicals: HiOutlineFire,
  drinks: HiOutlineBolt,
  'pod-vape': HiOutlineCloud,
}

type AboutStoreSectionProps = {
  compact?: boolean
  introSurface?: 'cream' | 'warm'
}

export function AboutStoreSection({ compact = false, introSurface = 'cream' }: AboutStoreSectionProps) {
  const { openProduct } = useProductModal()
  const sectionPy = compact ? 'py-12 md:py-14' : 'py-20'
  const innerPy = compact ? 'py-12' : 'py-20'
  const introBg = introSurface === 'warm' ? 'bg-brand-warm' : 'bg-brand-cream'

  return (
    <section id="about" className={`overflow-hidden ${introBg}`}>
      <div className={`relative overflow-hidden ${sectionPy}`}>
        <img
          src={lifestyleAssets.cannabis}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-brand-teal/92 via-brand-teal/78 to-brand-teal/55"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-teal/50 via-transparent to-brand-teal/20"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal animation="fade-right">
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold-light uppercase">
                {storeIntro.overline}
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-white md:text-4xl lg:text-[2.6rem] lg:leading-tight">
                {storeIntro.title}
              </h2>
              {storeIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-sm font-light leading-relaxed text-white/85 md:text-base">
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/shop"
                  className="font-display rounded-full px-6 py-2.5 text-xs font-semibold text-brand-charcoal transition-all hover:scale-105 hover:shadow-lg"
                  style={{ background: gradientGold }}
                >
                  View catalog
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={120}>
              <div className="about-collage relative mx-auto aspect-[4/5] max-w-md">
                {storeIntro.collageImages.map((item, index) => (
                  <div
                    key={item.src}
                    className={`about-collage-item absolute overflow-hidden rounded-2xl border-4 border-white/90 bg-white shadow-xl ${item.className} ${
                      index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delayed' : 'animate-bounce-subtle'
                    }`}
                  >
                    <img src={item.src} alt={item.alt} className="size-full object-contain p-3" loading="lazy" />
                  </div>
                ))}
                <div className="animate-glow-pulse absolute -bottom-4 left-1/2 z-0 size-40 -translate-x-1/2 rounded-full bg-brand-gold/20 blur-2xl" aria-hidden="true" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <FeaturedProductsSection compact={compact} />

      <div className={innerPy}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Quality</p>
            <h3 className="font-display mt-2 text-xl font-semibold text-brand-teal md:text-3xl">
              What makes our products unique
            </h3>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {storePillars.map((pillar, index) => {
              const Icon = pillarIcons[index]
              return (
                <ScrollReveal key={pillar.title} delay={index * 100} animation={index === 1 ? 'fade-up' : index === 0 ? 'fade-left' : 'fade-right'}>
                  <article className="store-pillar-card group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-cream/50">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className={`size-full p-0 transition-transform duration-700 group-hover:scale-110 ${
                          pillar.image.startsWith('/products/') ? 'object-contain p-4' : 'object-cover'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-brand-teal/80 via-brand-teal/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-brand-teal shadow-md transition-transform duration-500 group-hover:-translate-y-1">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-lg font-semibold text-brand-charcoal">{pillar.title}</h4>
                      <p className="mt-2 text-sm font-light leading-relaxed text-brand-charcoal/60">{pillar.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>

      {productCategories.length > 1 && (
      <div className={`bg-brand-teal text-white ${innerPy}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Formats</p>
            <h3 className="font-display mt-2 text-xl font-semibold md:text-3xl">Find the right product for you</h3>
            <p className="mt-3 text-sm font-light text-white/70">
              Six categories designed for different moments — from morning to night, topical to oral use.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => {
              const Icon = categoryIcons[category.key as ProductCategory]
              return (
                <ScrollReveal key={category.key} delay={index * 80} animation="fade-up">
                  <Link
                    to={buildShopUrl({ category: category.key as ProductCategory })}
                    className="category-showcase-card group flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-white/10"
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-gold-light transition-colors group-hover:bg-white/15">
                      <Icon className="size-7" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-semibold">{category.label}</h4>
                        <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[10px] font-bold text-brand-gold-light">
                          {category.productCount}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed font-light text-white/65">{category.description}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
      )}

      <div className={`border-t border-brand-teal/10 ${introBg} ${sectionPy}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <ScrollReveal>
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">How it works</p>
                <h3 className="font-display mt-2 text-xl font-semibold text-brand-teal md:text-3xl">
                  From selection to delivery, care at every step
                </h3>
              </ScrollReveal>

              <div className="mt-8 space-y-5">
                {experienceSteps.map((step, index) => (
                  <ScrollReveal key={step.step} delay={index * 90} animation="fade-left">
                    <div className="experience-step group flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="font-display flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-xs font-bold text-white transition-transform duration-500 group-hover:scale-110">
                          {step.step}
                        </span>
                        {index < experienceSteps.length - 1 && (
                          <div className="experience-step-line mt-2 w-px flex-1 bg-brand-teal/15" aria-hidden="true" />
                        )}
                      </div>
                      <div className="pb-3">
                        <h4 className="font-display font-semibold text-brand-charcoal">{step.title}</h4>
                        <p className="mt-1 text-sm font-light leading-relaxed text-brand-charcoal/60">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal animation="scale" delay={200}>
              <div className="about-brand-panel mx-auto max-w-xs rounded-3xl border border-brand-gold/20 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm">
                <BrandLogo size="sm" className="mx-auto" />
                <p className="mt-4 text-sm font-light leading-relaxed text-brand-charcoal/65">
                  Premium Wellness — where nature meets scientific precision.
                </p>
                <button
                  type="button"
                  onClick={() => openProduct('1')}
                  className="font-display mt-6 inline-block rounded-full px-5 py-2 text-xs font-semibold text-brand-charcoal transition-transform hover:scale-105"
                  style={{ background: gradientGold }}
                >
                  Explore a product
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
