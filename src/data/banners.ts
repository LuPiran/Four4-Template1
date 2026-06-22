import type { IconType } from 'react-icons'
import { GiDrop, GiFruitBowl } from 'react-icons/gi'
import { HiOutlineBeaker, HiOutlineBolt, HiOutlineCube, HiOutlineSparkles } from 'react-icons/hi2'

export type HeroBanner = {
  id: string
  badge: string
  title: string
  titleAccent: string
  description: string
  promoLabel?: string
  promoOld?: string
  promoNew?: string
  floatingTag?: string
  icon: IconType
}

export const heroBanners: HeroBanner[] = [
  {
    id: 'oil',
    badge: 'New arrival',
    title: 'Premium Oil',
    titleAccent: 'Balance & Wellness',
    description:
      'High-purity botanical formula for daily routines. Limited edition with hand-selected natural ingredients.',
    promoLabel: '20% OFF',
    promoOld: '$49.99',
    promoNew: '$39.99',
    floatingTag: 'Best seller',
    icon: GiDrop,
  },
  {
    id: 'sleep',
    badge: 'Restorative sleep',
    title: 'Sleep Support',
    titleAccent: 'Calmer nights',
    description:
      'Capsules developed for deep relaxation and quality rest, with a balanced botanical blend.',
    promoLabel: '15% OFF',
    promoOld: '$37.99',
    promoNew: '$32.29',
    floatingTag: 'Customer favorite',
    icon: HiOutlineBeaker,
  },
  {
    id: 'gummies',
    badge: 'Tropical flavor',
    title: 'Relax Gummies',
    titleAccent: 'Pleasure in every dose',
    description:
      'Tropical gummies with a gentle effect for decompression moments throughout your day.',
    promoLabel: '2-Pack deal',
    promoOld: '$31.98',
    promoNew: '$25.58',
    floatingTag: 'Summer edition',
    icon: GiFruitBowl,
  },
  {
    id: 'platform',
    badge: 'Complete platform',
    title: 'Polisupport System',
    titleAccent: 'Store + Premium management',
    description:
      'Catalog, orders, inventory, and customers in one elegant ecosystem — the same experience as our landing.',
    floatingTag: '50+ products',
    icon: HiOutlineCube,
  },
  {
    id: 'topical',
    badge: 'Muscle recovery',
    title: 'Recovery Balm',
    titleAccent: 'Relief where you need it',
    description:
      'Fast-absorbing topical balm for post-workout massages and muscular comfort with a premium botanical formula.',
    promoLabel: '10% OFF',
    promoOld: '$25.99',
    promoNew: '$23.39',
    floatingTag: 'Post-workout',
    icon: HiOutlineSparkles,
  },
  {
    id: 'drink',
    badge: 'Energy & focus',
    title: 'Wellness Shot',
    titleAccent: 'Boost your day',
    description:
      '300mg functional shot for intense routines — practical, fast, and built to Polisupport quality standards.',
    promoLabel: 'Buy 2 Get 1',
    promoOld: '$35.97',
    promoNew: '$23.98',
    floatingTag: 'Quick & easy',
    icon: HiOutlineBolt,
  },
]
