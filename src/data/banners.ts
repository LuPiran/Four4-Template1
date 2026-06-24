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
    ctaLabel: 'Shop tinctures',
    ctaLink: '/shop?category=oil',
  },
  {
    id: 'gummies',
    kicker: 'On the go',
    title: 'Gummies',
    subtitle: 'HARMONY · ACTIVE · DAILY',
    image: lifestyleAssets.gummys,
    ctaLabel: 'Shop gummies',
    ctaLink: '/shop?category=gummies',
  },
]
