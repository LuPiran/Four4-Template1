export type Review = {
  id: string
  name: string
  rating: number
  product: string
  text: string
  avatar: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Mariana Costa',
    rating: 5,
    product: 'Full Spectrum Oil',
    text: 'Exceptional quality. I noticed improvements in sleep and daily routine within a few weeks. Fast delivery and impeccable packaging.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  },
  {
    id: '2',
    name: 'Rafael Mendes',
    rating: 5,
    product: 'Sleep Support Capsules',
    text: 'Impeccable Polisupport service. The capsules really help me relax before bed. Highly recommend.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  },
  {
    id: '3',
    name: 'Camila Ferreira',
    rating: 4,
    product: 'Relax Tropical Gummies',
    text: 'Incredible tropical flavor with a gentle effect. Perfect for the end of the day. Already part of my routine.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
  },
  {
    id: '4',
    name: 'Lucas Almeida',
    rating: 5,
    product: 'Recovery Topical Balm',
    text: 'Excellent for post-workout muscle recovery. Premium texture and noticeable results. Beautiful packaging.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
  },
]
