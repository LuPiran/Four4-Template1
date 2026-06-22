import { useCallback, useEffect, useState } from 'react'
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineSparkles,
} from 'react-icons/hi2'
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
          const Icon = banner.icon

          return (
            <article
              key={banner.id}
              aria-hidden={!isActive}
              className={`hero-banner-bg absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? 'z-10 translate-x-0 opacity-100'
                  : index < activeIndex
                    ? 'z-0 -translate-x-8 opacity-0'
                    : 'z-0 translate-x-8 opacity-0'
              }`}
            >
              <div
                className="animate-aurora pointer-events-none absolute -top-32 -right-32 size-64 rounded-full bg-brand-gold/20 blur-3xl md:size-96"
                aria-hidden="true"
              />
              <div
                className="animate-float-delayed pointer-events-none absolute -bottom-32 -left-16 size-64 rounded-full bg-white/10 blur-3xl md:-bottom-40 md:-left-20 md:size-[28rem]"
                aria-hidden="true"
              />
              <div
                className="animate-glow-pulse pointer-events-none absolute top-1/2 left-1/2 hidden size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-3xl sm:block md:size-64"
                aria-hidden="true"
              />

              <div className="hero-carousel-content relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-6 px-4 py-8 pb-20 sm:gap-8 sm:px-6 sm:py-10 md:grid-cols-2 md:gap-10 md:px-8 md:py-12 md:pb-16 lg:gap-16 lg:px-10 lg:py-16">
                <div
                  className={`hero-carousel-copy order-1 mx-auto w-full max-w-xl text-center md:mx-0 md:max-w-none md:text-left ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  } transition-all duration-700 delay-100`}
                >
                  <span
                    className="inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-brand-charcoal uppercase sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs"
                    style={{ background: gradientGold }}
                  >
                    <HiOutlineSparkles className="animate-bounce-subtle size-3 shrink-0 sm:size-3.5" />
                    <span className="truncate">{banner.badge}</span>
                  </span>

                  <h2 className="mt-4 text-[1.65rem] leading-[1.15] font-semibold text-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-6xl">
                    {banner.title}
                    <span className="animate-gradient-shift mt-1.5 block bg-linear-to-r from-brand-gold-light via-white to-brand-gold-dark bg-clip-text text-[1.35rem] text-transparent sm:mt-2 sm:text-2xl md:text-3xl lg:text-5xl">
                      {banner.titleAccent}
                    </span>
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:mx-0 md:max-w-lg md:text-lg">
                    {banner.description}
                  </p>

                  {banner.promoLabel && (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-4 md:justify-start">
                      <span className="animate-badge-pulse text-xl font-bold text-brand-gold-light sm:text-2xl md:text-3xl">
                        {banner.promoLabel}
                      </span>
                      {banner.promoOld && (
                        <span className="text-xs text-white/50 line-through sm:text-sm">{banner.promoOld}</span>
                      )}
                      {banner.promoNew && (
                        <span className="text-base font-semibold text-white sm:text-lg">{banner.promoNew}</span>
                      )}
                    </div>
                  )}
                </div>

                <div
                  className={`hero-carousel-visual order-2 flex items-center justify-center transition-all duration-700 delay-150 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                >
                  <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72">
                    <div
                      className="animate-glow-pulse absolute inset-0 rounded-full bg-brand-gold/25 blur-2xl"
                      aria-hidden="true"
                    />
                    <div
                      className="animate-spin-slow absolute inset-2 rounded-full border border-dashed border-white/25 sm:inset-3 md:inset-4"
                      aria-hidden="true"
                    />
                    <div className="animate-float relative flex size-full items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                      <div
                        className="flex size-[72%] items-center justify-center rounded-full transition-transform duration-500"
                        style={{ background: gradientGold }}
                      >
                        <Icon className="size-[42%] text-brand-teal" />
                      </div>
                    </div>
                    {banner.floatingTag && (
                      <span className="animate-badge-pulse absolute -top-1 right-0 max-w-[9rem] truncate rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-brand-teal shadow-lg sm:max-w-none sm:px-3 sm:py-1.5 sm:text-xs md:-top-2 md:right-2">
                        {banner.floatingTag}
                      </span>
                    )}
                  </div>
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
        className="hero-carousel-arrow absolute top-[42%] left-2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:left-4 sm:size-10 md:top-1/2 md:left-6 md:size-11 lg:left-8"
      >
        <HiOutlineArrowLeft className="size-4 sm:size-5" />
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next banner"
        className="hero-carousel-arrow absolute top-[42%] right-2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:right-4 sm:size-10 md:top-1/2 md:right-6 md:size-11 lg:right-8"
      >
        <HiOutlineArrowRight className="size-4 sm:size-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-5 sm:gap-2 md:bottom-6">
        {heroBanners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            aria-label={`Go to banner ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 sm:h-2 ${
              index === activeIndex
                ? 'w-6 bg-brand-gold sm:w-8'
                : 'w-1.5 bg-white/40 hover:bg-white/70 sm:w-2'
            }`}
          />
        ))}
      </div>

      <div className="absolute right-4 bottom-4 z-20 hidden text-xs font-medium text-white/50 md:right-6 md:bottom-6 lg:block">
        {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </section>
  )
}
