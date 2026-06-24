import { lifestyleAssets, wellnessAssets } from './siteAssets'

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTimeMinutes: number
  image: string
  author: string
  content: BlogContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-medicinal-cannabis',
    title: 'What is medicinal cannabis?',
    excerpt:
      'A clear introduction to cannabis as a botanical medicine — how it works, who it may help, and why quality and traceability matter.',
    category: 'Education',
    publishedAt: '2026-03-01',
    readTimeMinutes: 6,
    image: lifestyleAssets.cannabis,
    author: 'Polisupport Team',
    content: [
      {
        type: 'paragraph',
        text: 'Medicinal cannabis refers to plant-derived products used to support specific wellness goals under informed, responsible use. Unlike recreational use, the focus is on consistent formulas, verified potency, and formats that fit daily routines — from sublingual oils to capsules and topicals.',
      },
      {
        type: 'heading',
        text: 'The endocannabinoid system',
      },
      {
        type: 'paragraph',
        text: 'The human body has an endocannabinoid system (ECS) — a network of receptors and signaling molecules involved in balance, mood, sleep, discomfort, and recovery. Phytocannabinoids from cannabis, such as CBD and others, interact with this system, which is why research continues to explore their role in complementary wellness.',
      },
      {
        type: 'heading',
        text: 'Why quality matters',
      },
      {
        type: 'list',
        items: [
          'Independent lab testing for potency and contaminants',
          'Traceable sourcing and transparent labeling',
          'Consistent extraction methods for reliable dosing',
          'Clear product categories aligned to specific benefits',
        ],
      },
      {
        type: 'paragraph',
        text: 'At Polisupport, every line is designed around a benefit — sleep, focus, recovery, and more — so you can choose products with intention rather than guesswork.',
      },
    ],
  },
  {
    slug: 'cannabis-based-medicines-formats',
    title: 'Cannabis-based medicines: oils, capsules, gummies & more',
    excerpt:
      'From tinctures to topicals — how modern cannabis wellness products are formulated and which format may suit your routine.',
    category: 'Products',
    publishedAt: '2026-02-18',
    readTimeMinutes: 7,
    image: lifestyleAssets.tinctures,
    author: 'Polisupport Team',
    content: [
      {
        type: 'paragraph',
        text: 'Cannabis-based medicines today go far beyond a single delivery method. Premium brands offer oils, capsules, gummies, drinks, topicals, and more — each with different onset times, duration, and use cases.',
      },
      {
        type: 'heading',
        text: 'Oils & tinctures',
      },
      {
        type: 'paragraph',
        text: 'Sublingual oils are among the most popular formats. Drops placed under the tongue can be absorbed efficiently, making them a flexible option for evening relaxation or daytime balance when dosed thoughtfully.',
      },
      {
        type: 'heading',
        text: 'Capsules & gummies',
      },
      {
        type: 'paragraph',
        text: 'Encapsulated formulas and gummies offer pre-measured servings and discretion. They are ideal for people who prefer a familiar supplement routine without the taste of botanical extracts.',
      },
      {
        type: 'heading',
        text: 'Topicals',
      },
      {
        type: 'paragraph',
        text: 'Creams, balms, and sprays are designed for localized application — supporting muscular comfort and skin care without systemic effects. They are often chosen for post-workout recovery or targeted relief.',
      },
      {
        type: 'list',
        items: [
          'Oils — fast, flexible sublingual use',
          'Capsules — precise, everyday dosing',
          'Gummies — portable and approachable',
          'Topicals — local, non-ingestible care',
        ],
      },
    ],
  },
  {
    slug: 'cbd-and-wellness-research',
    title: 'CBD and wellness: what the research suggests',
    excerpt:
      'An overview of how CBD is studied for sleep, stress, discomfort, and daily balance — without overpromising outcomes.',
    category: 'Science',
    publishedAt: '2026-02-05',
    readTimeMinutes: 8,
    image: lifestyleAssets.labs,
    author: 'Polisupport Team',
    content: [
      {
        type: 'paragraph',
        text: 'Cannabidiol (CBD) is one of the most researched non-intoxicating cannabinoids. Studies and clinical interest have expanded around sleep quality, perceived stress, exercise recovery, and general well-being — though individual results vary.',
      },
      {
        type: 'heading',
        text: 'Areas of growing interest',
      },
      {
        type: 'list',
        items: [
          'Sleep onset and nighttime restlessness',
          'Daytime stress and nervous tension',
          'Exercise-induced discomfort and recovery',
          'Skin hydration and topical care',
        ],
      },
      {
        type: 'heading',
        text: 'A balanced perspective',
      },
      {
        type: 'paragraph',
        text: 'CBD is not a cure-all. Responsible brands present it as one tool within a broader wellness routine — alongside sleep hygiene, movement, nutrition, and professional guidance when needed. Always consult a healthcare provider if you take other medications or have underlying conditions.',
      },
      {
        type: 'paragraph',
        text: 'Polisupport formulas are developed with this philosophy: premium botanical support, rigorous testing, and honest communication about what our products are designed to do.',
      },
    ],
  },
  {
    slug: 'full-spectrum-broad-spectrum-isolate',
    title: 'Full spectrum, broad spectrum & isolate explained',
    excerpt:
      'Understand the difference between extract types and why cannabinoids and terpenes may work together in a complete botanical profile.',
    category: 'Education',
    publishedAt: '2026-01-22',
    readTimeMinutes: 5,
    image: wellnessAssets.focus,
    author: 'Polisupport Team',
    content: [
      {
        type: 'paragraph',
        text: 'Not all cannabis extracts are created equal. The terms full spectrum, broad spectrum, and isolate describe how much of the plant\'s natural chemistry is preserved during extraction.',
      },
      {
        type: 'heading',
        text: 'Full spectrum',
      },
      {
        type: 'paragraph',
        text: 'Full spectrum extracts retain a wide range of cannabinoids, terpenes, and other plant compounds. Many users and formulators value this "whole plant" approach for a richer botanical experience.',
      },
      {
        type: 'heading',
        text: 'Broad spectrum',
      },
      {
        type: 'paragraph',
        text: 'Broad spectrum products contain multiple cannabinoids and terpenes but typically omit THC or reduce it to trace levels, depending on formulation and regulation.',
      },
      {
        type: 'heading',
        text: 'Isolate',
      },
      {
        type: 'paragraph',
        text: 'Isolate is a purified single compound — often CBD alone. It offers consistency and simplicity but lacks the additional plant compounds found in spectrum extracts.',
      },
    ],
  },
  {
    slug: 'choosing-the-right-cannabis-product',
    title: 'How to choose the right cannabis wellness product',
    excerpt:
      'A practical guide to matching product lines, formats, and wellness goals — from sleep support to focus and recovery.',
    category: 'Guides',
    publishedAt: '2026-01-10',
    readTimeMinutes: 6,
    image: lifestyleAssets.gummys,
    author: 'Polisupport Team',
    content: [
      {
        type: 'paragraph',
        text: 'Choosing a cannabis wellness product starts with your goal, not the trendiest format. Ask what moment you are supporting — rest, focus, movement, or daily balance — then narrow by product line and category.',
      },
      {
        type: 'heading',
        text: 'Step 1: Define your goal',
      },
      {
        type: 'list',
        items: [
          'Sleep & rest → REST line, evening oils or gummies',
          'Focus & clarity → HARMONY line, daytime formats',
          'Recovery & activity → ACTIVE line, topicals or capsules',
          'Potency & performance → MAX line, higher-strength oils',
        ],
      },
      {
        type: 'heading',
        text: 'Step 2: Pick your format',
      },
      {
        type: 'paragraph',
        text: 'If you are new to botanical wellness, capsules or gummies offer simple serving sizes. Experienced users often prefer oils for flexible dosing. Topicals suit localized needs without ingestion.',
      },
      {
        type: 'heading',
        text: 'Step 3: Verify quality',
      },
      {
        type: 'paragraph',
        text: 'Look for lab reports, clear ingredient lists, and brands that explain their extraction and testing process. Transparency is the foundation of medicinal cannabis you can trust.',
      },
    ],
  },
  {
    slug: 'cannabis-sleep-and-stress',
    title: 'Cannabis, sleep & stress: supporting calmer routines',
    excerpt:
      'How botanical formulas are used alongside sleep hygiene and stress management — and what to expect from REST and HARMONY lines.',
    category: 'Wellness',
    publishedAt: '2025-12-28',
    readTimeMinutes: 7,
    image: wellnessAssets.sleep,
    author: 'Polisupport Team',
    content: [
      {
        type: 'paragraph',
        text: 'Poor sleep and chronic stress often reinforce each other. Medicinal cannabis products are frequently explored as complementary support — not a replacement for medical treatment, but a potential ally in a structured evening or mindfulness routine.',
      },
      {
        type: 'heading',
        text: 'Building a nighttime ritual',
      },
      {
        type: 'list',
        items: [
          'Consistent bedtime and reduced screen time',
          'A calming sublingual oil 30–60 minutes before sleep',
          'REST-line gummies for those who prefer a measured serving',
          'Cool, dark environment and light stretching',
        ],
      },
      {
        type: 'heading',
        text: 'Daytime stress support',
      },
      {
        type: 'paragraph',
        text: 'HARMONY and related formulas are positioned for focus and emotional balance during demanding days. Lower servings and non-sedating formats are typically preferred when mental clarity is the priority.',
      },
      {
        type: 'paragraph',
        text: 'Our specialists can help you combine lines and formats responsibly. Explore products by wellness goal in our catalog or speak with our team via WhatsApp.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedBlogPosts(count = 3): BlogPost[] {
  return blogPosts.slice(0, count)
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
