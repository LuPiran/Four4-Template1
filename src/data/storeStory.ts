import type { BrandLine } from './productBrand'
import { brandLines } from './productBrand'
import { lifestyleAssets, wellnessAssets, wellnessGalleryImages } from './siteAssets'

export type StorePillar = {
  title: string
  description: string
  image: string
}

export type ProductCategoryShowcase = {
  key: string
  label: string
  description: string
  productCount: number
}

export type ExperienceStep = {
  step: string
  title: string
  description: string
}

export const storeIntro = {
  overline: 'Polisupport',
  title: 'Botanical wellness with science, elegance, and purpose',
  paragraphs: [
    'Polisupport was born from the union of botanical research and refined design. Every product is crafted for a moment in your routine — from an energized morning to deep, restorative rest.',
    'Our store brings together 20+ formulas across six categories, organized into six color-coded lines that reflect each product benefit. Transparency, traceability, and premium quality in every bottle.',
  ],
  collageImages: [
    {
      src: '/products/max.png',
      alt: 'Polisupport MAX line',
      className: 'top-0 left-0 z-10 w-[58%]',
    },
    {
      src: '/products/harmony.png',
      alt: 'Polisupport HARMONY line',
      className: 'top-[12%] right-0 z-20 w-[52%]',
    },
    {
      src: '/products/pure.png',
      alt: 'Polisupport PURE line',
      className: 'bottom-0 left-[18%] z-30 w-[48%]',
    },
  ],
}

export const storePillars: StorePillar[] = [
  {
    title: 'Full spectrum',
    description:
      'Full and broad spectrum extracts that preserve natural cannabinoids and terpenes for a complete botanical experience.',
    image: '/products/max.png',
  },
  {
    title: 'Lab tested',
    description:
      'Every batch undergoes independent purity, potency, and contaminant testing — with lab reports available.',
    image: lifestyleAssets.labs,
  },
  {
    title: 'Selected ingredients',
    description:
      'Traceable raw materials with no artificial preservatives. Clean formulas for conscious, daily use.',
    image: wellnessAssets.energy,
  },
]

const EXCLUDED_SHOWCASE_LINES: BrandLine[] = ['balance', 'power']

export const brandLineShowcase = (Object.keys(brandLines) as BrandLine[])
  .filter((line) => !EXCLUDED_SHOWCASE_LINES.includes(line))
  .map((line) => ({
    line,
    ...brandLines[line],
  }))

export const productCategories: ProductCategoryShowcase[] = [
  {
    key: 'oil',
    label: 'Oils',
    description: 'High-potency sublingual drops for balance and relaxation.',
    productCount: 6,
  },
]

export const galleryImages = [...wellnessGalleryImages]

export const experienceSteps: ExperienceStep[] = [
  {
    step: '01',
    title: 'Choose your line',
    description: 'Each color represents a benefit — MAX for potency, REST for sleep, HARMONY for focus, and more.',
  },
  {
    step: '02',
    title: 'Explore the catalog',
    description: 'Premium sublingual oils across our wellness lines — find the ideal formula for your routine.',
  },
  {
    step: '03',
    title: 'Talk to specialists',
    description: 'Our team guides you on dosage, combinations, and the best product for your goals.',
  },
  {
    step: '04',
    title: 'Receive with confidence',
    description: 'Discreet packaging, tracked shipping, and quality-tested products in every order.',
  },
]
