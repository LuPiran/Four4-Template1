import type { IconType } from 'react-icons'
import {
  HiOutlineArrowPath,
  HiOutlineBolt,
  HiOutlineCloud,
  HiOutlineFire,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineMoon,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import { showcaseProducts } from './products'

export type PathologyId =
  | 'sleep'
  | 'anxiety'
  | 'pain'
  | 'focus'
  | 'recovery'
  | 'stress'
  | 'energy'
  | 'skin'

export type PathologyItem = {
  id: PathologyId
  name: string
  description: string
  longDescription: string
  icon: IconType
  accent: string
  image: string
}

export const pathologies: PathologyItem[] = [
  {
    id: 'sleep',
    name: 'Sleep & rest',
    description: 'Support for restorative sleep and nighttime relaxation.',
    longDescription:
      'Formulas developed for those seeking calmer nights, with botanical ingredients that help ease the transition into deep, restful sleep.',
    icon: HiOutlineMoon,
    accent: 'from-indigo-500/20 to-violet-500/30',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop',
  },
  {
    id: 'anxiety',
    name: 'Anxiety',
    description: 'Help managing daily anxiety and nervous tension.',
    longDescription:
      'Products designed for moments of restlessness and emotional overload, promoting a sense of calm without compromising mental clarity.',
    icon: HiOutlineHeart,
    accent: 'from-rose-400/20 to-pink-500/25',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
  {
    id: 'stress',
    name: 'Stress',
    description: 'Promotes calm and resilience against everyday stress.',
    longDescription:
      'REST and HARMONY lines focused on unwinding after intense days — from the workplace to your nightly self-care ritual.',
    icon: HiOutlineCloud,
    accent: 'from-sky-400/20 to-blue-500/25',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
  },
  {
    id: 'pain',
    name: 'Pain & inflammation',
    description: 'Support for muscular comfort and inflammatory response.',
    longDescription:
      'Topicals and oral formulas that help ease localized discomfort and support bodily well-being after physical exertion.',
    icon: HiOutlineFire,
    accent: 'from-orange-400/20 to-red-500/25',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=600&h=400&fit=crop',
  },
  {
    id: 'recovery',
    name: 'Muscle recovery',
    description: 'Aids post-workout recovery and muscular comfort.',
    longDescription:
      'Balms, sprays, and capsules from the ACTIVE and BALANCE lines formulated for active lifestyles seeking regeneration support.',
    icon: HiOutlineArrowPath,
    accent: 'from-emerald-400/20 to-teal-500/25',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
  },
  {
    id: 'focus',
    name: 'Focus & concentration',
    description: 'Support for mental clarity and sustained attention.',
    longDescription:
      'Gummies, pods, and drinks from the HARMONY line for moments that demand productivity, study, or mental performance without excess stimulation.',
    icon: HiOutlineLightBulb,
    accent: 'from-amber-400/20 to-yellow-500/25',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
  },
  {
    id: 'energy',
    name: 'Energy & vitality',
    description: 'Daytime energy support with balance and lightness.',
    longDescription:
      'Shots, capsules, and gummies from the DAILY and ACTIVE lines to wake up energized and maintain vitality throughout the day.',
    icon: HiOutlineBolt,
    accent: 'from-lime-400/20 to-green-500/25',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
  },
  {
    id: 'skin',
    name: 'Skin & hydration',
    description: 'Nourishes the skin barrier and topical hydration.',
    longDescription:
      'Creams, serums, and balms from the PURE line with selected botanical ingredients for local care and a conscious skincare routine.',
    icon: HiOutlineSparkles,
    accent: 'from-cyan-400/20 to-sky-500/25',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d880?w=600&h=400&fit=crop',
  },
]

export const pathologyLabels: Record<PathologyId, string> = Object.fromEntries(
  pathologies.map((item) => [item.id, item.name]),
) as Record<PathologyId, string>

export function getPathologyById(id: PathologyId): PathologyItem | undefined {
  return pathologies.find((item) => item.id === id)
}

export function getProductsByPathology(id: PathologyId) {
  return showcaseProducts.filter((product) => product.pathologies.includes(id))
}

export function countProductsByPathology(id: PathologyId): number {
  return getProductsByPathology(id).length
}
