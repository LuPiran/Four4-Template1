import { lifestyleAssets } from './siteAssets'

export type HeroBanner = {
  id: string
  kicker: string
  title: string
  subtitle: string
  image: string
  ctaLabel: string
  ctaLink: string
}

export const heroBanners: HeroBanner[] = [
  {
    id: 'tinctures',
    kicker: 'Premium',
    title: 'Tinctures',
    subtitle: 'MAX · PURE · REST',
    image: lifestyleAssets.tinctures,
    ctaLabel: 'Shop oils',
    ctaLink: '/shop?category=oil',
  },
  {
    id: 'night-oil',
    kicker: 'Evening ritual',
    title: 'Night drops',
    subtitle: 'REST · MAX',
    image: lifestyleAssets.tinctures,
    ctaLabel: 'Shop oils',
    ctaLink: '/shop?category=oil',
  },
]
