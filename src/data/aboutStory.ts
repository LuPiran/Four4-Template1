import { lifestyleAssets } from './siteAssets'

export const aboutFoundedYear = '2026'

export type AboutMilestone = {
  year: string
  title: string
  description: string
}

export type AboutValue = {
  title: string
  description: string
}

export const aboutIntro = {
  overline: 'Our story',
  title: 'A new voice in premium botanical wellness',
  subtitle: `Founded in ${aboutFoundedYear}`,
  description:
    'Polisupport is a young brand built from the ground up this year — with a clear conviction that medicinal cannabis deserves the same rigor, transparency, and design excellence as any premium wellness category. From our first product sketches to our launch catalog, every detail reflects that standard.',
}

export const aboutOrigin = {
  title: 'How it began',
  paragraphs: [
    `Polisupport was founded in ${aboutFoundedYear} at the intersection of plant science and conscious living. Our team saw a gap in the market — cannabis wellness products that were either overly clinical or lacking in quality standards — and set out to build something different from day one.`,
    'Rather than growing slowly behind the scenes, we spent our launch year defining a complete system: six color-coded lines mapped to real wellness moments, independent lab testing on every batch, and a store organized by benefit — sleep, focus, recovery, balance — so customers can choose with clarity, not guesswork.',
    'We opened our doors with a full catalog across oils, capsules, gummies, topicals, drinks, and pod vape formats — plus a specialist team ready to guide you through dosage, combinations, and routine design. We are new, but we built Polisupport as if it had to earn trust on day one.',
  ],
  image: lifestyleAssets.cannabis,
  imageAlt: 'Cannabis plants in natural light — the botanical foundation of Polisupport',
}

export const aboutMissionVision = {
  mission: {
    title: 'Our mission',
    text: 'To make premium botanical wellness accessible, understandable, and trustworthy from the very first order — empowering adults to build intentional routines supported by rigorously tested cannabis-based products.',
  },
  vision: {
    title: 'Our vision',
    text: 'To grow into a reference brand in medicinal cannabis — where elegance, science, and honest communication replace stigma and confusion, one customer at a time.',
  },
}

export const aboutMilestones: AboutMilestone[] = [
  {
    year: aboutFoundedYear,
    title: 'Polisupport is born',
    description:
      'The brand is founded with a single premise: premium botanical wellness should feel as refined and trustworthy as any category you already rely on — not like an afterthought.',
  },
  {
    year: 'Q1',
    title: 'Vision, lines & formulation',
    description:
      'The six-line identity takes shape — MAX, DAILY, PURE, HARMONY, ACTIVE, and REST — each tied to a clear purpose. Formulation work and packaging design run in parallel from the start.',
  },
  {
    year: 'Q2',
    title: 'Lab testing & quality standards',
    description:
      'Partnerships with independent laboratories are established before launch. Potency, purity, and contaminant testing become a non-negotiable standard — not a promise for later.',
  },
  {
    year: 'Launch',
    title: 'The catalog goes live',
    description:
      'Our full store opens with 20+ formulas across six formats. Customers can shop by wellness goal or product type from day one, with discreet packaging and tracked shipping.',
  },
  {
    year: 'Today',
    title: 'Building our first community',
    description:
      'We are just getting started — refining formulas, publishing educational content, and listening closely to the people who choose Polisupport as part of their routine.',
  },
]

export const aboutValues: AboutValue[] = [
  {
    title: 'Transparency',
    description:
      'Clear labels, honest communication, and lab reports you can trust. We never hide behind vague claims or proprietary blends without disclosure.',
  },
  {
    title: 'Quality from day one',
    description:
      'Being new does not mean cutting corners. Every batch is tested for potency, purity, and contaminants — premium raw materials and clean formulas are our baseline.',
  },
  {
    title: 'Design with purpose',
    description:
      'From packaging to the online store, design helps you navigate choices. Color-coded lines and benefit-led categories remove friction from discovery.',
  },
  {
    title: 'Respect for the plant',
    description:
      'We work with full and broad spectrum extracts that honor the entourage effect — preserving cannabinoids and terpenes whenever formulation allows.',
  },
  {
    title: 'Human guidance',
    description:
      'Botanical wellness is personal. Our specialists are available to help with product selection, dosing considerations, and building a routine that fits your life.',
  },
  {
    title: 'Responsible innovation',
    description:
      'We innovate within clear safety and compliance boundaries — for adults who choose cannabis as part of a broader, informed wellness lifestyle.',
  },
]

export const aboutCommitments = [
  'Independent third-party lab testing on every production batch',
  'Traceable ingredients with no artificial preservatives',
  'Benefit-led navigation — shop by wellness goal or product format',
  'Discreet packaging and reliable tracked shipping',
  'Educational content that informs without overpromising',
] as const

export const aboutStats = [
  { value: aboutFoundedYear, label: 'Year founded' },
  { value: '6', label: 'Signature product lines' },
  { value: '6', label: 'Product formats' },
  { value: '20+', label: 'Formulas at launch' },
] as const
