export type BrandLine = 'max' | 'daily' | 'pure' | 'harmony' | 'active' | 'rest' | 'balance' | 'power'

export type BrandLineConfig = {
  label: string
  color: string
  meaning: string
}

export const brandLines: Record<BrandLine, BrandLineConfig> = {
  max: {
    label: 'MAX',
    color: '#0B3B3A',
    meaning: 'Potency, strength & peak performance',
  },
  daily: {
    label: 'DAILY',
    color: '#9ACD32',
    meaning: 'Vitality, balance & everyday use',
  },
  pure: {
    label: 'PURE',
    color: '#4A81A8',
    meaning: 'Purity, precision & scientific trust',
  },
  harmony: {
    label: 'HARMONY',
    color: '#4DB6AC',
    meaning: 'Focus, energy & mental clarity',
  },
  active: {
    label: 'ACTIVE',
    color: '#FF8C00',
    meaning: 'Complete wellness & energy',
  },
  rest: {
    label: 'REST',
    color: '#8A2BE2',
    meaning: 'Relaxation, sleep & recovery',
  },
  balance: {
    label: 'BALANCE',
    color: '#C00000',
    meaning: 'Body balance & harmony',
  },
  power: {
    label: 'POWER',
    color: '#1A1A1A',
    meaning: 'Maximum intensity & performance',
  },
}

export function getBrandLine(line: BrandLine): BrandLineConfig {
  return brandLines[line]
}

export function getProductColor(line: BrandLine): string {
  return brandLines[line].color
}
