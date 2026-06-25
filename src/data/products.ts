import type { ProductCategory } from './productDetails'
import { isActiveProductCategory } from './catalogConfig'
import type { BrandLine } from './productBrand'
import { getProductColor } from './productBrand'
import { getBrandLineImage } from './productImages'
import type { PathologyId } from './pathologies'

export type ShowcaseProduct = {
  id: string
  name: string
  price: number
  image: string
  imageHover: string
  brandLine: BrandLine
  pathologies: PathologyId[]
  category: ProductCategory
  description?: string
  highlights?: string[]
  howToUse?: string
  ingredients?: string[]
  images?: string[]
}

const EXCLUDED_BRAND_LINES: BrandLine[] = ['balance', 'power']

const catalogProducts: ShowcaseProduct[] = [
  {
    id: '1',
    name: 'Full Spectrum Oil 1000mg',
    price: 89,
    brandLine: 'max',
    pathologies: ['sleep', 'anxiety', 'stress'],
    category: 'oil',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
    description:
      'High-potency full spectrum oil for daily balance, sleep, and moments of decompression. Botanical formula with natural terpenes and traceable origin.',
    highlights: [
      '1000mg per bottle — premium dosage',
      'Full spectrum of cannabinoids',
      'Independently lab tested',
      'Sleep and relaxation support',
    ],
    howToUse:
      'Shake well before use. Apply sublingual drops as directed on the label and hold for 60 seconds. Use preferably at night or at the same time daily.',
    ingredients: [
      'Full spectrum botanical extract',
      'Organic hemp seed oil',
      'Natural terpenes',
      'No artificial preservatives',
    ],
  },
  {
    id: '2',
    name: 'Sleep Support Capsules 750mg',
    price: 49,
    brandLine: 'rest',
    pathologies: ['sleep', 'stress'],
    category: 'caplets',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1550572017-edd226fa7858?w=500&h=500&fit=crop',
  },
  {
    id: '3',
    name: 'Relax Tropical Gummies 750mg',
    price: 44,
    brandLine: 'harmony',
    pathologies: ['anxiety', 'stress'],
    category: 'gummies',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1622484214629-906bbbf33663?w=500&h=500&fit=crop',
  },
  {
    id: '4',
    name: 'Recovery Topical Balm 500mg',
    price: 39,
    brandLine: 'active',
    pathologies: ['pain', 'recovery', 'skin'],
    category: 'topicals',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop',
  },
  {
    id: '5',
    name: 'Wellness Shot Drink 300mg',
    price: 28,
    brandLine: 'active',
    pathologies: ['energy', 'focus'],
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=500&fit=crop',
  },
  {
    id: '6',
    name: 'Calm Mint Pod Vape 800mg',
    price: 54,
    brandLine: 'harmony',
    pathologies: ['anxiety', 'stress'],
    category: 'pod-vape',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop',
  },
  {
    id: '8',
    name: 'Daily Vitality Capsules 600mg',
    price: 47,
    brandLine: 'daily',
    pathologies: ['energy', 'focus'],
    category: 'caplets',
    image: 'https://images.unsplash.com/photo-1550572017-edd226fa7858?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop',
  },
  {
    id: '9',
    name: 'Focus Berry Gummies 500mg',
    price: 42,
    brandLine: 'harmony',
    pathologies: ['focus', 'energy'],
    category: 'gummies',
    image: 'https://images.unsplash.com/photo-1622484214629-906bbbf33663?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=500&fit=crop',
  },
  {
    id: '10',
    name: 'Hydration Premium Cream 400mg',
    price: 36,
    brandLine: 'pure',
    pathologies: ['skin', 'recovery'],
    category: 'topicals',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop',
  },
  {
    id: '11',
    name: 'Zero THC Isolate Oil 300mg',
    price: 59,
    brandLine: 'pure',
    pathologies: ['anxiety'],
    category: 'oil',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
  },
  {
    id: '12',
    name: 'Calm Day Capsules 450mg',
    price: 45,
    brandLine: 'harmony',
    pathologies: ['stress', 'anxiety'],
    category: 'caplets',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1550572017-edd226fa7858?w=500&h=500&fit=crop',
  },
  {
    id: '13',
    name: 'Night Melaton Gummies 600mg',
    price: 46,
    brandLine: 'rest',
    pathologies: ['sleep'],
    category: 'gummies',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1622484214629-906bbbf33663?w=500&h=500&fit=crop',
  },
  {
    id: '14',
    name: 'Muscle Relief Spray 350mg',
    price: 34,
    brandLine: 'active',
    pathologies: ['pain', 'recovery'],
    category: 'topicals',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop',
  },
  {
    id: '15',
    name: 'Detox Green Drink 250mg',
    price: 26,
    brandLine: 'daily',
    pathologies: ['energy'],
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=500&fit=crop',
  },
  {
    id: '16',
    name: 'Focus Citrus Pod Vape 650mg',
    price: 52,
    brandLine: 'harmony',
    pathologies: ['focus', 'energy'],
    category: 'pod-vape',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop',
  },
  {
    id: '17',
    name: 'Night Drops Oil 900mg',
    price: 84,
    brandLine: 'rest',
    pathologies: ['sleep', 'stress'],
    category: 'oil',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
  },
  {
    id: '19',
    name: 'Immune Boost Gummies 400mg',
    price: 40,
    brandLine: 'daily',
    pathologies: ['energy'],
    category: 'gummies',
    image: 'https://images.unsplash.com/photo-1622484214629-906bbbf33663?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=500&fit=crop',
  },
  {
    id: '20',
    name: 'Relax Tea Drink 200mg',
    price: 24,
    brandLine: 'rest',
    pathologies: ['stress', 'sleep'],
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=500&fit=crop',
  },
  {
    id: '21',
    name: 'Sleep Lavender Pod Vape 700mg',
    price: 53,
    brandLine: 'rest',
    pathologies: ['sleep'],
    category: 'pod-vape',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&h=500&fit=crop',
  },
  {
    id: '22',
    name: 'Facial Glow Serum 300mg',
    price: 38,
    brandLine: 'pure',
    pathologies: ['skin'],
    category: 'topicals',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop',
  },
  {
    id: '23',
    name: 'Everyday Vitality Oil 600mg',
    price: 72,
    brandLine: 'daily',
    pathologies: ['energy', 'focus'],
    category: 'oil',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
    description:
      'A balanced daily oil from the DAILY line for steady vitality, focus, and everyday wellness support.',
    highlights: [
      '600mg per bottle — ideal for daily routines',
      'Light, consistent botanical profile',
      'Independently lab tested',
      'Morning or midday use',
    ],
    howToUse:
      'Shake well before use. Place drops under the tongue, hold for 60 seconds, and swallow. Best taken at the same time each day.',
    ingredients: [
      'Broad spectrum botanical extract',
      'Organic hemp seed oil',
      'Natural terpenes',
      'No artificial preservatives',
    ],
  },
  {
    id: '24',
    name: 'Mental Clarity Oil 750mg',
    price: 76,
    brandLine: 'harmony',
    pathologies: ['focus', 'anxiety', 'stress'],
    category: 'oil',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    description:
      'HARMONY-line oil designed for mental clarity, calm focus, and balanced performance throughout the day.',
    highlights: [
      '750mg per bottle — clarity-focused formula',
      'Smooth sublingual delivery',
      'Independently lab tested',
      'Focus and calm support',
    ],
    howToUse:
      'Shake well before use. Apply sublingual drops as directed and hold for 60 seconds before swallowing. Use during focus-heavy tasks or study sessions.',
    ingredients: [
      'Broad spectrum botanical extract',
      'Organic hemp seed oil',
      'Focus-oriented terpene blend',
      'No artificial preservatives',
    ],
  },
  {
    id: '25',
    name: 'Active Recovery Oil 800mg',
    price: 82,
    brandLine: 'active',
    pathologies: ['recovery', 'pain', 'energy'],
    category: 'oil',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
    description:
      'ACTIVE-line oil for post-workout recovery, muscular comfort, and sustained energy in active lifestyles.',
    highlights: [
      '800mg per bottle — performance-oriented dosage',
      'Formulated for recovery routines',
      'Independently lab tested',
      'Post-activity support',
    ],
    howToUse:
      'Shake well before use. Take sublingual drops after physical activity or as part of your recovery routine. Hold under the tongue for 60 seconds.',
    ingredients: [
      'Full spectrum botanical extract',
      'Organic hemp seed oil',
      'Recovery-focused terpene blend',
      'No artificial preservatives',
    ],
  },
]

export const popularProductIds = ['1', '11', '17', '23', '24', '25'] as const

export const showcaseProducts = catalogProducts
  .filter((product) => !EXCLUDED_BRAND_LINES.includes(product.brandLine))
  .filter((product) => isActiveProductCategory(product.category))
  .map((product) => {
    const image = getBrandLineImage(product.brandLine)
    return {
      ...product,
      image,
      imageHover: image,
      images: product.images ?? [image],
    }
  })

export function getPopularProducts(): ShowcaseProduct[] {
  return popularProductIds
    .map((id) => getProductById(id))
    .filter((p): p is ShowcaseProduct => p !== undefined)
}

/** @deprecated use product.brandLine + getProductColor */
export function productColor(product: ShowcaseProduct): string {
  return getProductColor(product.brandLine)
}

export function getProductById(id: string): ShowcaseProduct | undefined {
  return showcaseProducts.find((product) => product.id === id)
}

export function getRelatedProducts(product: ShowcaseProduct, limit = 4): ShowcaseProduct[] {
  const sameLine = showcaseProducts.filter(
    (item) => item.brandLine === product.brandLine && item.id !== product.id,
  )
  if (sameLine.length >= limit) return sameLine.slice(0, limit)

  const sameCategory = showcaseProducts.filter(
    (item) => item.category === product.category && item.id !== product.id,
  )
  const combined = [...sameLine, ...sameCategory]
  const unique = combined.filter(
    (item, index, array) => array.findIndex((p) => p.id === item.id) === index,
  )
  return unique.slice(0, limit)
}
