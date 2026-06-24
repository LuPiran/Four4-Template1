import type { BrandLine } from './productBrand'
import { brandLines } from './productBrand'
import type { ProductCategory } from './productDetails'
import { categoryLabels } from './productDetails'
import { buildShopUrl } from '../utils/shopFilters'

export type MegaMenuLink = {
  label: string
  to: string
}

export type MegaMenuColumn = {
  title: string
  links: MegaMenuLink[]
}

const EXCLUDED_LINES: BrandLine[] = ['balance', 'power']

const categoryOrder: ProductCategory[] = ['oil', 'caplets', 'gummies', 'topicals', 'drinks', 'pod-vape']

export const productsMegaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'Shop all',
    links: [{ label: 'All products', to: buildShopUrl() }],
  },
  {
    title: 'By format',
    links: categoryOrder.map((category) => ({
      label: categoryLabels[category],
      to: buildShopUrl({ category }),
    })),
  },
  {
    title: 'By line',
    links: (Object.keys(brandLines) as BrandLine[])
      .filter((line) => !EXCLUDED_LINES.includes(line))
      .map((line) => ({
        label: brandLines[line].label,
        to: buildShopUrl({ line }),
      })),
  },
]
