export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type FaqCategory = {
  id: string
  title: string
  description: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'about',
    title: 'About Polisupport & medicinal cannabis',
    description: 'Understanding our brand, botanical wellness, and how medicinal cannabis fits a conscious routine.',
    items: [
      {
        id: 'about-1',
        question: 'What is Polisupport?',
        answer:
          'Polisupport is a premium botanical wellness brand focused on cannabis-based products designed for specific moments in your day — from morning vitality to nighttime rest. We combine refined design, transparent labeling, and rigorous quality standards across oils, capsules, gummies, topicals, drinks, and more.',
      },
      {
        id: 'about-2',
        question: 'What does “medicinal cannabis” mean in your catalog?',
        answer:
          'We use the term to describe plant-derived formulas developed with consistency, traceability, and wellness goals in mind — not as a substitute for prescription medication. Our products are organized by benefit (sleep, focus, recovery, etc.) and format so you can choose with clarity and intention.',
      },
      {
        id: 'about-3',
        question: 'How are your product lines organized?',
        answer:
          'Each Polisupport line has a color-coded identity and a clear purpose: MAX for potency, DAILY for everyday balance, PURE for precision, HARMONY for focus, ACTIVE for energy and recovery, and REST for sleep and relaxation. Within each line you will find multiple formats to match your routine.',
      },
      {
        id: 'about-4',
        question: 'Who are Polisupport products intended for?',
        answer:
          'Our catalog is designed for adults seeking high-quality botanical support as part of a broader wellness lifestyle. They are not intended for children, pregnant or nursing individuals, or anyone with a medical condition without prior consultation with a qualified healthcare professional.',
      },
    ],
  },
  {
    id: 'products',
    title: 'Products & formulas',
    description: 'Formats, ingredients, spectrum types, and how to compare options in our store.',
    items: [
      {
        id: 'products-1',
        question: 'What product formats do you offer?',
        answer:
          'We offer sublingual oils (tinctures), capsules, gummies, topicals (balms, creams, sprays), functional drinks, and pod vape products. Each format has a different onset profile and use case — oils tend to act faster sublingually, while capsules and gummies offer pre-measured servings.',
      },
      {
        id: 'products-2',
        question: 'What is the difference between full spectrum and broad spectrum?',
        answer:
          'Full spectrum extracts preserve a wide range of naturally occurring cannabinoids and terpenes from the plant. Broad spectrum products also contain multiple compounds but are formulated without THC or with only trace amounts, depending on the specific formula. Isolate products contain a single purified compound, typically CBD alone.',
      },
      {
        id: 'products-3',
        question: 'Do your products contain THC?',
        answer:
          'Formulas vary by line and product. Full spectrum items may contain trace levels of THC within legal limits where applicable. Product labels and lab reports indicate cannabinoid content per serving. If you must avoid THC entirely, choose broad spectrum or isolate-based products and review the certificate of analysis before purchasing.',
      },
      {
        id: 'products-4',
        question: 'How should I choose between oils, capsules, and gummies?',
        answer:
          'Choose oils if you want flexible dosing and faster sublingual absorption. Capsules suit those who prefer a supplement-like routine with fixed servings. Gummies are ideal for portability and ease of use. Your wellness goal, lifestyle, and personal preference should guide the decision — our team can help via WhatsApp if you are unsure.',
      },
      {
        id: 'products-5',
        question: 'Are your ingredients natural?',
        answer:
          'We prioritize traceable botanical ingredients and avoid artificial preservatives where possible. Each product page and label lists active ingredients and carrier oils. If you have allergies or dietary restrictions, review the ingredient list carefully or contact us before ordering.',
      },
    ],
  },
  {
    id: 'usage',
    title: 'Usage, dosing & safety',
    description: 'Responsible use, expectations, interactions, and when to seek professional advice.',
    items: [
      {
        id: 'usage-1',
        question: 'How do I determine the right dose?',
        answer:
          'Start low and go slow — especially if you are new to cannabis wellness products. Follow the serving size on the label, wait to assess how you feel, and adjust gradually only if needed. Dosing is individual and depends on body weight, metabolism, sensitivity, and the product format. When in doubt, consult a healthcare provider.',
      },
      {
        id: 'usage-2',
        question: 'How long does it take to feel an effect?',
        answer:
          'Sublingual oils may be noticed within 15–45 minutes when held under the tongue. Ingested formats such as capsules and gummies typically take longer — often 45–90 minutes or more — because they pass through the digestive system. Topicals act locally and are not designed for systemic effects.',
      },
      {
        id: 'usage-3',
        question: 'Can I combine multiple Polisupport products?',
        answer:
          'Some customers use different formats for different times of day (for example, a daytime gummy and an evening oil). Combining products increases total cannabinoid intake, so pay attention to cumulative serving sizes. We recommend speaking with our specialists or your healthcare provider before stacking multiple formulas.',
      },
      {
        id: 'usage-4',
        question: 'Can I use Polisupport products with prescription medications?',
        answer:
          'Cannabinoids may interact with certain medications, including blood thinners and drugs metabolized by the liver. Always inform your doctor or pharmacist about any botanical supplements you use. Polisupport does not provide medical advice — professional guidance is essential if you take ongoing prescriptions.',
      },
      {
        id: 'usage-5',
        question: 'Are there side effects I should know about?',
        answer:
          'Some individuals report mild drowsiness, dry mouth, or digestive discomfort, especially when starting out or taking higher servings. Discontinue use and seek medical advice if you experience an adverse reaction. Do not drive or operate machinery if a product affects your alertness.',
      },
      {
        id: 'usage-6',
        question: 'Can I travel with my products?',
        answer:
          'Cannabis laws differ by country, state, and transport mode. It is your responsibility to verify local regulations before traveling with any hemp or cannabis-derived product. We do not recommend international travel with our products unless you have confirmed compliance at your destination.',
      },
    ],
  },
  {
    id: 'quality',
    title: 'Lab testing & quality assurance',
    description: 'How we verify potency, purity, and consistency in every batch.',
    items: [
      {
        id: 'quality-1',
        question: 'Are Polisupport products lab tested?',
        answer:
          'Yes. Every batch undergoes independent third-party testing for cannabinoid potency and common contaminants such as pesticides, heavy metals, and microbial impurities. Testing is central to our quality promise and supports the transparency we expect from a premium wellness brand.',
      },
      {
        id: 'quality-2',
        question: 'Can I access lab reports (COAs)?',
        answer:
          'Certificates of Analysis are available for our formulas. You may request a COA for a specific batch by contacting our support team with the product name and lot number printed on your packaging. We are committed to making verification straightforward for informed customers.',
      },
      {
        id: 'quality-3',
        question: 'How should I store my products?',
        answer:
          'Store in a cool, dry place away from direct sunlight and heat. Close containers tightly after each use. Keep out of reach of children and pets. Refrigeration is generally not required for oils unless stated on the label, but avoid leaving products in hot vehicles.',
      },
      {
        id: 'quality-4',
        question: 'What is the shelf life of your products?',
        answer:
          'Shelf life varies by format and is printed on each package. Oils and capsules typically remain stable for 12–24 months when stored properly. If you notice changes in color, odor, or texture, discontinue use and contact us.',
      },
    ],
  },
  {
    id: 'orders',
    title: 'Orders, shipping & returns',
    description: 'Checkout, delivery, tracking, and policies for a smooth purchase experience.',
    items: [
      {
        id: 'orders-1',
        question: 'How do I place an order?',
        answer:
          'Browse our catalog, add items to your cart, and complete checkout with your shipping details. You will receive an order confirmation by email once the purchase is submitted. For assistance choosing products before you buy, use our WhatsApp line or browse by wellness goal in the shop.',
      },
      {
        id: 'orders-2',
        question: 'Which payment methods do you accept?',
        answer:
          'We accept major credit and debit cards through our secure checkout. Payment options may vary by region. All transactions are processed over encrypted connections — we do not store full card details on our servers.',
      },
      {
        id: 'orders-3',
        question: 'How long does shipping take?',
        answer:
          'Orders are typically processed within 1–2 business days. Domestic delivery usually takes 3–7 business days depending on your location and carrier. You will receive tracking information by email when your package ships. Delivery times are estimates and may vary during peak periods.',
      },
      {
        id: 'orders-4',
        question: 'Is packaging discreet?',
        answer:
          'Yes. We use plain outer packaging without external branding that identifies the contents. Your privacy matters — billing descriptors and shipping labels are designed to be unobtrusive while meeting carrier requirements.',
      },
      {
        id: 'orders-5',
        question: 'What is your return policy?',
        answer:
          'Unopened products in original condition may be returned within 30 days of delivery for a refund or exchange, subject to our complete return policy. Opened consumable items cannot be resold for safety reasons and are generally not eligible for return unless defective or damaged in transit. Contact support to initiate a return.',
      },
      {
        id: 'orders-6',
        question: 'What if my order arrives damaged?',
        answer:
          'Contact us within 48 hours of delivery with your order number and photos of the damage. We will arrange a replacement or refund for verified shipping damage. Retain all packaging until your case is resolved, as carriers may require it.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal & compliance',
    description: 'Regulatory context, age requirements, and responsible access.',
    items: [
      {
        id: 'legal-1',
        question: 'Are your products legal where I live?',
        answer:
          'Hemp-derived products containing less than 0.3% delta-9 THC by dry weight are federally legal in many U.S. jurisdictions under the 2018 Farm Bill, but state and local laws vary and change. It is your responsibility to confirm that purchasing and possessing our products is lawful in your area before ordering.',
      },
      {
        id: 'legal-2',
        question: 'Is there an age requirement to purchase?',
        answer:
          'You must be at least 21 years of age (or the minimum legal age in your jurisdiction, if higher) to purchase Polisupport products. By completing checkout you confirm that you meet this requirement.',
      },
      {
        id: 'legal-3',
        question: 'Will CBD show up on a drug test?',
        answer:
          'Full spectrum products contain trace cannabinoids that may, in rare cases, result in a positive test for THC metabolites depending on sensitivity, serving size, and frequency of use. If you are subject to drug testing, consider broad spectrum or isolate products and discuss risks with your employer or testing authority.',
      },
      {
        id: 'legal-4',
        question: 'Does Polisupport make medical claims?',
        answer:
          'No. Our products are not intended to diagnose, treat, cure, or prevent any disease. Statements on our website describe general wellness goals and product characteristics. Always seek professional medical advice for health conditions.',
      },
    ],
  },
]

export const faqIntro = {
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about Polisupport',
  description:
    'Clear, detailed answers about our medicinal cannabis products, quality standards, safe use, and ordering. Can’t find what you need? Our specialists are ready to help.',
}

export function getFaqItemCount(): number {
  return faqCategories.reduce((total, category) => total + category.items.length, 0)
}
