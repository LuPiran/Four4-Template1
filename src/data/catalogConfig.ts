import type { ProductCategory } from './productDetails'

export const ACTIVE_PRODUCT_CATEGORIES: ProductCategory[] = ['oil']

export function isActiveProductCategory(category: ProductCategory): boolean {
  return ACTIVE_PRODUCT_CATEGORIES.includes(category)
}
