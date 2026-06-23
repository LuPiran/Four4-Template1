import type { BrandLine } from './productBrand'
import { brandLines } from './productBrand'

export type StorePillar = {
  title: string
  description: string
  image: string
}

export type ProductCategoryShowcase = {
  key: string
  label: string
  description: string
  image: string
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
      src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=700&fit=crop',
      alt: 'Polisupport premium botanical oil',
      className: 'top-0 left-0 z-10 w-[58%]',
    },
    {
      src: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=500&fit=crop',
      alt: 'Wellness gummies',
      className: 'top-[12%] right-0 z-20 w-[52%]',
    },
    {
      src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=550&fit=crop',
      alt: 'Topicals and natural care',
      className: 'bottom-0 left-[18%] z-30 w-[48%]',
    },
  ],
}

export const storePillars: StorePillar[] = [
  {
    title: 'Full spectrum',
    description:
      'Full and broad spectrum extracts that preserve natural cannabinoids and terpenes for a complete botanical experience.',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=700&h=500&fit=crop',
  },
  {
    title: 'Lab tested',
    description:
      'Every batch undergoes independent purity, potency, and contaminant testing — with lab reports available.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&h=500&fit=crop',
  },
  {
    title: 'Selected ingredients',
    description:
      'Traceable raw materials with no artificial preservatives. Clean formulas for conscious, daily use.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=700&h=500&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=450&fit=crop',
    productCount: 4,
  },
  {
    key: 'caplets',
    label: 'Capsules',
    description: 'Precise dosing in a practical format for daily routines.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=450&fit=crop',
    productCount: 4,
  },
  {
    key: 'gummies',
    label: 'Gummies',
    description: 'Premium flavor with portability — wellness you can take anywhere.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=450&fit=crop',
    productCount: 4,
  },
  {
    key: 'topicals',
    label: 'Topicals',
    description: 'Balms, creams, and sprays for local care and recovery.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=450&fit=crop',
    productCount: 4,
  },
  {
    key: 'drinks',
    label: 'Drinks',
    description: 'Functional shots and teas ready for immediate consumption.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=450&fit=crop',
    productCount: 3,
  },
  {
    key: 'pod-vape',
    label: 'Pod Vape',
    description: 'Advanced technology with smooth vapor and a refined experience.',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=450&fit=crop',
    productCount: 3,
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1622484214629-906bbbf33663?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=400&fit=crop',
]

export const experienceSteps: ExperienceStep[] = [
  {
    step: '01',
    title: 'Choose your line',
    description: 'Each color represents a benefit — MAX for potency, REST for sleep, HARMONY for focus, and more.',
  },
  {
    step: '02',
    title: 'Explore the catalog',
    description: 'Oils, capsules, gummies, topicals, drinks, and pods — find the ideal format for your routine.',
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
