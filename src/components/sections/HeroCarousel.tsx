import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import { heroBanners } from '../../data/banners'
import { gradientGold } from '../../styles/colors'

const AUTOPLAY_MS = 6500

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState(false)

  const total = heroBanners.length

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setActiveIndex((index + total) % total)
      window.setTimeout(() => setAnimating(false), 700)
    },
    [animating, total],
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(goNext, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [paused, goNext, activeIndex])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  return (
    <section
      className="hero-carousel relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Promotional banners"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-carousel-stage relative">
        {heroBanners.map((banner, index) => {
          const isActive = index === activeIndex

          return (
            <article
              key={banner.id}
              aria-hidden={!isActive}
              className={`hero-banner-slide absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? 'z-10 translate-x-0 opacity-100'
                  : index < activeIndex
                    ? 'z-0 -translate-x-6 opacity-0'
                    : 'z-0 translate-x-6 opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt=""
                className={`hero-banner-photo absolute inset-0 size-full object-cover transition-transform duration-[8500ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="hero-banner-overlay absolute inset-0 bg-linear-to-r from-brand-teal/92 via-brand-teal/55 to-brand-teal/15" />
              <div className="hero-banner-overlay absolute inset-0 bg-linear-to-t from-brand-teal/40 via-transparent to-brand-teal/10" />

              <div className="hero-carousel-copy relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 py-16 sm:px-6 md:px-8 lg:px-10">
                <div
                  className={`max-w-xl text-center md:text-left ${isActive ? 'hero-banner-copy-active' : ''}`}
                  key={isActive ? `copy-${banner.id}-${activeIndex}` : `copy-${banner.id}-idle`}
                >
                  <p className="hero-banner-kicker font-display text-xs font-semibold tracking-[0.28em] text-white/85 uppercase opacity-0 sm:text-sm">
                    {banner.kicker}
                  </p>
                  <h2 className="hero-banner-title font-display mt-3 text-4xl font-semibold tracking-wide text-white uppercase opacity-0 sm:text-5xl md:text-6xl lg:text-7xl">
                    {banner.title}
                  </h2>
                  <p className="hero-banner-subtitle font-display mt-2 text-lg font-medium tracking-wide text-white/90 opacity-0 sm:text-xl md:text-2xl">
                    {banner.subtitle}
                  </p>
                  <Link
                    to={banner.ctaLink}
                    className="hero-banner-cta font-display mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-semibold tracking-[0.14em] text-brand-charcoal uppercase opacity-0 transition-transform hover:scale-[1.03] sm:text-sm"
                    style={{ background: gradientGold }}
                  >
                    {banner.ctaLabel}
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous banner"
        className="hero-carousel-arrow absolute top-1/2 left-3 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:left-5 sm:size-10 md:left-8"
      >
        <HiOutlineArrowLeft className="size-4 sm:size-5" />
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next banner"
        className="hero-carousel-arrow absolute top-1/2 right-3 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:right-5 sm:size-10 md:right-8"
      >
        <HiOutlineArrowRight className="size-4 sm:size-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-7">
        {heroBanners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            aria-label={`Go to banner ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-500 ${
              index === activeIndex
                ? 'size-2.5 bg-white sm:size-3'
                : 'size-2 bg-white/40 hover:bg-white/70 sm:size-2.5'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
