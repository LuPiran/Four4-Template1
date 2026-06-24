import type { PathologyId } from './pathologies'

export const brandAssets = {
  header: '/brand/logo-header.png',
  footer: '/brand/logo-footer.png',
  favicon: '/brand/logo-small.png',
} as const

export const wellnessAssets: Record<PathologyId, string> = {
  sleep: '/wellness/sleep.jpg',
  anxiety: '/wellness/ansiedade.jpg',
  stress: '/wellness/stress.jpg',
  pain: '/wellness/pain.jpg',
  recovery: '/wellness/gym.jpg',
  focus: '/wellness/foco.jpg',
  energy: '/wellness/energy.jpg',
  skin: '/wellness/cansado.jpg',
}

export const lifestyleAssets = {
  labs: '/lifestyle/labs.jpg',
  medicos: '/lifestyle/medicos.jpg',
  cannabis: '/lifestyle/cannabis.jpg',
  tinctures: '/tinctures.jpg',
  gummys: '/gummys.jpg',
} as const

export const wellnessGalleryImages = [
  wellnessAssets.sleep,
  wellnessAssets.focus,
  wellnessAssets.stress,
  wellnessAssets.pain,
  wellnessAssets.recovery,
  wellnessAssets.energy,
  wellnessAssets.anxiety,
  lifestyleAssets.labs,
] as const
