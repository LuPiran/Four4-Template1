export const colors = {
  gold: '#C5A059',
  tealDark: '#004B49',
  seaGreen: '#4E937A',
  cream: '#F8F5F0',
  charcoal: '#373F41',
  gradientGold: {
    from: '#EBC07E',
    to: '#C59135',
  },
} as const

export const gradientGold = `linear-gradient(90deg, ${colors.gradientGold.from} 0%, ${colors.gradientGold.to} 100%)`
