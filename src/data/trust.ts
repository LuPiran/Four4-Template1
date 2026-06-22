import type { IconType } from 'react-icons'
import { GiPlantRoots } from 'react-icons/gi'
import { TbLeaf } from 'react-icons/tb'
import {
  HiOutlineBeaker,
  HiOutlineHandRaised,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

export type TrustBadge = {
  icon: IconType
  title: string
  subtitle: string
}

export const trustBadges: TrustBadge[] = [
  { icon: HiOutlineShieldCheck, title: 'GMP Quality', subtitle: 'Certified production' },
  { icon: HiOutlineBeaker, title: 'Lab Tested', subtitle: 'Independent analysis' },
  { icon: TbLeaf, title: '100% Natural', subtitle: 'Botanical ingredients' },
  { icon: HiOutlineScale, title: 'Low Sugar', subtitle: 'Balanced formulas' },
  { icon: HiOutlineHandRaised, title: 'Non-GMO', subtitle: 'Controlled sourcing' },
  { icon: GiPlantRoots, title: 'Vegan', subtitle: 'Cruelty-free' },
]
