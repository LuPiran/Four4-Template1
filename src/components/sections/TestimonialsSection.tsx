import { useCallback, useEffect, useState } from 'react'
import { HiStar } from 'react-icons/hi'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { ScrollReveal } from '../common/ScrollReveal'
import { reviews } from '../../data/reviews'
import { gradientGold } from '../../styles/colors'

const AUTOPLAY_MS = 7000
const TRANSITION_MS = 520

function Stars({ count, size = 'md' }: { count: number; size?: 'sm' | 'md' }) {
  const starSize = size === 'sm' ? 'size-3.5' : 'size-4'
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <HiStar
          key={i}
          className={`${starSize} ${i < count ? 'text-brand-gold-dark' : 'text-brand-gold/25'}`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)

  const activeReview = reviews[displayIndex]

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || transitioning) return

      setTransitioning(true)
      setActiveIndex(index)

      window.setTimeout(() => {
        setDisplayIndex(index)
        window.setTimeout(() => setTransitioning(false), 40)
      }, TRANSITION_MS)
    },
    [activeIndex, transitioning],
  )

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % reviews.length)
  }, [activeIndex, goTo])

  useEffect(() => {
    if (paused || transitioning) return
    const timer = window.setInterval(goNext, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [paused, transitioning, goNext, activeIndex])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-warm py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="animate-aurora pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-glow-pulse pointer-events-none absolute bottom-0 left-0 size-80 rounded-full bg-brand-teal/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center" animation="blur">
          <span className="section-kicker">Testimonials</span>
          <h2 className="section-title">What our customers say</h2>
          <p className="mt-3 text-sm text-brand-charcoal/65 md:text-base">
            Real reviews from people who experienced our premium products.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" animation="blur" delay={80}>
          <div className="testimonial-showcase relative overflow-hidden rounded-3xl border border-brand-gold/25 bg-white/75 p-6 shadow-[0_24px_60px_-28px_rgba(197,160,89,0.45)] backdrop-blur-sm sm:p-8 md:p-10">
            <div
              className="pointer-events-none absolute -top-10 -left-6 text-[7rem] leading-none font-serif text-brand-gold/15 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative min-h-[10rem] sm:min-h-[9.5rem] md:min-h-[8.5rem]">
              <div
                className={`testimonial-quote-panel flex flex-col items-center text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  transitioning
                    ? 'translate-y-4 scale-[0.98] opacity-0 blur-sm'
                    : 'translate-y-0 scale-100 opacity-100 blur-0'
                }`}
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-warm px-3 py-1 text-[10px] font-bold tracking-widest text-brand-gold-dark uppercase">
                  <HiOutlineChatBubbleLeftRight className="size-3.5" />
                  Customer review
                </span>

                <blockquote className="max-w-3xl text-lg leading-relaxed font-medium text-brand-charcoal sm:text-xl md:text-2xl md:leading-relaxed">
                  &ldquo;{activeReview.text}&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="mt-8 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {reviews.map((review, index) => {
                const isActive = index === activeIndex

                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-pressed={isActive}
                    aria-label={`Read review from ${review.name} about ${review.product}`}
                    className={`testimonial-picker-card group relative flex h-full min-h-[6.75rem] w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'border-brand-gold-dark/50 bg-brand-warm shadow-lg'
                        : 'border-brand-gold/20 bg-white/60 hover:border-brand-gold/40 hover:bg-white hover:shadow-md'
                    }`}
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <span
                      className={`absolute top-0 left-0 h-full w-1 rounded-r-full transition-all duration-500 ${
                        isActive ? 'bg-brand-gold-dark opacity-100' : 'bg-brand-gold/30 opacity-0 group-hover:opacity-60'
                      }`}
                      aria-hidden="true"
                    />

                    {isActive && (
                      <span
                        className="testimonial-picker-glow pointer-events-none absolute inset-0 opacity-60"
                        style={{ background: gradientGold }}
                        aria-hidden="true"
                      />
                    )}

                    <div className="relative flex h-full items-start gap-3">
                      <img
                        src={review.avatar}
                        alt=""
                        className={`size-11 shrink-0 rounded-xl object-cover ring-2 transition-all duration-500 ${
                          isActive
                            ? 'ring-brand-gold-dark shadow-md'
                            : 'ring-brand-gold/25 group-hover:ring-brand-gold/50'
                        }`}
                      />
                      <div className="flex min-h-[4.25rem] min-w-0 flex-1 flex-col">
                        <p
                          className={`truncate text-sm font-semibold transition-colors duration-300 ${
                            isActive ? 'text-brand-charcoal' : 'text-brand-charcoal/85'
                          }`}
                        >
                          {review.name}
                        </p>
                        <p className="mt-0.5 line-clamp-2 min-h-[2rem] text-[11px] leading-snug font-medium text-brand-gold-dark">
                          {review.product}
                        </p>
                        <div className="mt-auto pt-2">
                          <Stars count={review.rating} size="sm" />
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
