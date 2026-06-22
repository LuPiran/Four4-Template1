import type { ShowcaseProduct } from './products'

export type ProductCategory = 'oil' | 'caplets' | 'gummies' | 'pod-vape' | 'topicals' | 'drinks'

export type ProductDetailContent = {
  tagline: string
  description: string
  highlights: string[]
  howToUse: string
  ingredients: string[]
  shipping: string
}

const categoryLabels: Record<ProductCategory, string> = {
  oil: 'Oils',
  caplets: 'Capsules',
  gummies: 'Gummies',
  'pod-vape': 'Pod Vape',
  topicals: 'Topicals',
  drinks: 'Drinks',
}

const categoryTaglines: Record<ProductCategory, string> = {
  oil: 'Premium extraction with a full spectrum of natural cannabinoids.',
  caplets: 'Encapsulated formula with controlled absorption for daily use.',
  gummies: 'Premium flavor with precise dosing in a practical, delicious format.',
  'pod-vape': 'Advanced technology with smooth vapor and a refined experience.',
  topicals: 'High-performance local application for botanical care.',
  drinks: 'Ready-to-drink functional beverage with selected ingredients.',
}

const categoryHowToUse: Record<ProductCategory, string> = {
  oil: 'Shake well before use. Place sublingual drops as indicated on the label and hold for 60 seconds before swallowing. Use at the same time every day for best results.',
  caplets:
    'Take 1 capsule with water, preferably after a light meal. Do not exceed the recommended daily dose. Consult a healthcare professional for prolonged use.',
  gummies:
    'Consume 1 gummy per day, chewing completely before swallowing. Store in a cool, dry place away from children and pets.',
  'pod-vape':
    'Connect the pod to a compatible device. Inhale gently at spaced intervals. Do not share the device and dispose of it responsibly.',
  topicals:
    'Apply a generous amount to the desired area and massage until fully absorbed. Reapply as needed. Avoid contact with eyes and mucous membranes.',
  drinks:
    'Shake lightly, serve chilled, and consume within 24 hours of opening. Ideal for daytime breaks or pre/post-activity moments.',
}

const categoryIngredients: Record<ProductCategory, string[]> = {
  oil: [
    'Full spectrum botanical extract',
    'Organic hemp seed oil',
    'Natural terpenes',
    'Free of artificial preservatives, colors, and sugars',
  ],
  caplets: [
    'Standardized botanical extract',
    'Vegetable capsule (HPMC)',
    'Microcrystalline cellulose',
    'Magnesium stearate',
    'Vegan and gluten-free formula',
  ],
  gummies: [
    'Botanical extract',
    'Fruit pectin',
    'Natural juice',
    'Citric acid',
    'Natural colorants',
    'No animal gelatin',
  ],
  'pod-vape': [
    'Refined botanical extract',
    'Botanical terpenes',
    'Pharmaceutical-grade vaporization base',
    'No nicotine additives',
  ],
  topicals: [
    'Botanical extract',
    'Shea butter',
    'Fractionated coconut oil',
    'Beeswax',
    'Natural menthol',
    'Vitamin E',
  ],
  drinks: [
    'Filtered water',
    'Botanical extract',
    'Natural concentrated juice',
    'Citric acid',
    'Stevia',
    'No artificial colorants',
  ],
}

function extractMg(name: string): string | null {
  const match = name.match(/(\d+)\s*mg/i)
  return match ? `${match[1]}mg` : null
}

function buildHighlights(product: ShowcaseProduct): string[] {
  const mg = extractMg(product.name)
  return [
    mg ? `${mg} per unit — premium dosage` : 'Calibrated premium dosage',
    '100% independently lab tested',
    'Traceable botanical extract',
    `${categoryLabels[product.category]} line`,
    'GMP quality-controlled production',
  ]
}

export function getProductDetailContent(product: ShowcaseProduct): ProductDetailContent {
  const description =
    product.description?.trim() ||
    `${product.name} is part of Polisupport's ${categoryLabels[product.category]} line, developed for those seeking high-quality botanical wellness. With a premium formula and rigorous quality control, every batch undergoes purity, potency, and contaminant testing — ensuring transparency and confidence with every use.`

  return {
    tagline: categoryTaglines[product.category],
    description,
    highlights:
      product.highlights?.filter(Boolean).length ? product.highlights! : buildHighlights(product),
    howToUse: product.howToUse?.trim() || categoryHowToUse[product.category],
    ingredients:
      product.ingredients?.filter(Boolean).length
        ? product.ingredients!
        : categoryIngredients[product.category],
    shipping:
      'Free shipping on orders over $75. Estimated delivery of 3–7 business days to major cities. Discreet, secure packaging. Returns and exchanges within 30 days per store policy.',
  }
}

export function getProductImages(product: ShowcaseProduct): string[] {
  if (product.images?.length) return product.images
  return [product.image, product.imageHover]
}

export { categoryLabels }
