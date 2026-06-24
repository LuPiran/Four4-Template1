import type { BrandLine } from '../data/productBrand'
import type { ProductCategory } from '../data/productDetails'
import type { PathologyId } from '../data/pathologies'
import { categoryLabels } from '../data/productDetails'
import { brandLines } from '../data/productBrand'
import { pathologyLabels } from '../data/pathologies'

export type ShopFilter = {
  category?: ProductCategory
  wellness?: PathologyId
  line?: BrandLine
}

const VALID_CATEGORIES = new Set(Object.keys(categoryLabels))
const VALID_LINES = new Set(Object.keys(brandLines))
const VALID_WELLNESS = new Set(Object.keys(pathologyLabels))

export function buildShopUrl(filter: ShopFilter = {}): string {
  const params = new URLSearchParams()
  if (filter.category) params.set('category', filter.category)
  if (filter.wellness) params.set('wellness', filter.wellness)
  if (filter.line) params.set('line', filter.line)
  const qs = params.toString()
  return qs ? `/shop?${qs}` : '/shop'
}

export function parseShopFilters(searchParams: URLSearchParams): ShopFilter {
  const filter: ShopFilter = {}

  const category = searchParams.get('category')
  if (category && VALID_CATEGORIES.has(category)) {
    filter.category = category as ProductCategory
  }

  const wellness = searchParams.get('wellness')
  if (wellness && VALID_WELLNESS.has(wellness)) {
    filter.wellness = wellness as PathologyId
  }

  const line = searchParams.get('line')
  if (line && VALID_LINES.has(line)) {
    filter.line = line as BrandLine
  }

  return filter
}

export function getShopPageTitle(filter: ShopFilter): string {
  if (filter.wellness) return pathologyLabels[filter.wellness]
  if (filter.category) return categoryLabels[filter.category]
  if (filter.line) return brandLines[filter.line].label
  return 'Our products'
}

export function getShopPageDescription(filter: ShopFilter): string {
  if (filter.wellness) {
    return `Products selected for ${pathologyLabels[filter.wellness].toLowerCase()} — botanical quality with results our customers love.`
  }
  if (filter.category) {
    return `${categoryLabels[filter.category]} from our premium wellness line.`
  }
  if (filter.line) {
    return `${brandLines[filter.line].meaning} — explore the ${brandLines[filter.line].label} line.`
  }
  return 'A premium wellness line — botanical quality with results our customers love.'
}
