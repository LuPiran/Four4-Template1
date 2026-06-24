import type { BrandLine } from './productBrand'
import { brandAssets } from './siteAssets'

export const brandLogoHeader = brandAssets.header
export const brandLogoFooter = brandAssets.footer
export const brandLogoFavicon = brandAssets.favicon

const brandLineImages: Partial<Record<BrandLine, string>> = {
  max: '/products/max.png',
  daily: '/products/start.png',
  pure: '/products/pure.png',
  harmony: '/products/harmony.png',
  active: '/products/active.png',
  rest: '/products/rest.png',
}

export function getBrandLineImage(brandLine: BrandLine): string {
  return brandLineImages[brandLine] ?? '/products/max.png'
}
