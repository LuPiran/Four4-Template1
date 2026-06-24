export type PolicySection = {
  id: string
  title: string
  paragraphs?: string[]
  list?: string[]
}

export type PolicyDocument = {
  slug: string
  title: string
  lastUpdated: string
  intro: string
  sections: PolicySection[]
}

export const policies: PolicyDocument[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: 'June 16, 2026',
    intro:
      'Polisupport Premium Wellness (“Polisupport,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, place an order, or contact our team.',
    sections: [
      {
        id: 'information-we-collect',
        title: 'Information we collect',
        paragraphs: [
          'We may collect personal information that you voluntarily provide when you create an order, complete a contact form, subscribe to communications, or reach out to customer support. This may include your name, email address, phone number, shipping address, and message content.',
          'We automatically collect certain technical data when you browse our site, such as IP address, browser type, device information, pages viewed, and referring URLs. We use cookies and similar technologies to improve site performance and understand how visitors use our catalog.',
        ],
      },
      {
        id: 'how-we-use',
        title: 'How we use your information',
        list: [
          'Process and fulfill orders, including shipping and customer service follow-up',
          'Respond to inquiries submitted through our contact form, email, or WhatsApp',
          'Improve our website, product assortment, and user experience',
          'Send transactional messages related to your order or account activity',
          'Comply with applicable laws, regulations, and legal requests',
        ],
      },
      {
        id: 'sharing',
        title: 'How we share information',
        paragraphs: [
          'We do not sell your personal information. We may share data with trusted service providers who help us operate our business — such as payment processors, shipping carriers, email delivery tools, and form processing services — only to the extent necessary to perform those services.',
          'We may also disclose information if required by law or to protect the rights, safety, and security of Polisupport, our customers, or others.',
        ],
      },
      {
        id: 'retention-security',
        title: 'Data retention & security',
        paragraphs: [
          'We retain personal information only as long as needed to fulfill the purposes described in this policy, unless a longer retention period is required by law.',
          'We implement reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission over the internet is completely secure.',
        ],
      },
      {
        id: 'your-rights',
        title: 'Your choices & rights',
        paragraphs: [
          'Depending on your location, you may have rights to access, correct, delete, or restrict certain uses of your personal information. To make a request, contact us using the details below.',
          'You can opt out of non-essential marketing emails by using the unsubscribe link in any promotional message we send.',
        ],
      },
      {
        id: 'contact-privacy',
        title: 'Contact us',
        paragraphs: [
          'If you have questions about this Privacy Policy or our data practices, email contact@polisupport.com or write to Polisupport Premium Wellness at the address listed on our Contact page.',
        ],
      },
    ],
  },
  {
    slug: 'refund-policy',
    title: 'Refund Policy',
    lastUpdated: 'June 16, 2026',
    intro:
      'We want you to shop with confidence. This Refund Policy describes when returns, exchanges, or refunds may be available for Polisupport products purchased through our official website.',
    sections: [
      {
        id: 'eligibility',
        title: 'Eligibility for returns',
        paragraphs: [
          'Due to the nature of wellness and consumable products, we can only accept returns of unopened, unused items in their original sealed packaging within 30 days of delivery.',
          'Products that have been opened, used, or tampered with are not eligible for return unless they arrive damaged, defective, or incorrect.',
        ],
      },
      {
        id: 'non-returnable',
        title: 'Non-returnable items',
        list: [
          'Opened or used oils, capsules, gummies, drinks, topicals, or pod vape products',
          'Items marked as final sale or promotional clearance',
          'Products returned without proof of purchase',
          'Orders that do not comply with applicable age or legal requirements',
        ],
      },
      {
        id: 'damaged-incorrect',
        title: 'Damaged or incorrect orders',
        paragraphs: [
          'If your order arrives damaged, defective, or different from what you purchased, contact us within 7 days of delivery with your order number and photos of the product and packaging. We will review your case and, when approved, offer a replacement or refund as appropriate.',
        ],
      },
      {
        id: 'refund-process',
        title: 'Refund process',
        list: [
          'Contact our support team at contact@polisupport.com or via WhatsApp with your order details',
          'Receive return authorization and instructions if a physical return is required',
          'Ship eligible items back in secure packaging when requested',
          'Refunds are issued to the original payment method after inspection, typically within 5–10 business days',
        ],
      },
      {
        id: 'shipping-costs',
        title: 'Return shipping',
        paragraphs: [
          'Customers are responsible for return shipping costs unless the return is due to our error (wrong item, damaged product, or fulfillment mistake).',
        ],
      },
    ],
  },
  {
    slug: 'shipping-policy',
    title: 'Shipping Policy',
    lastUpdated: 'June 16, 2026',
    intro:
      'This Shipping Policy explains how Polisupport processes, packages, and delivers orders placed through our online store.',
    sections: [
      {
        id: 'processing',
        title: 'Order processing',
        paragraphs: [
          'Orders are typically processed within 1–2 business days after payment confirmation. During peak periods or product launches, processing may take slightly longer.',
          'You will receive an email confirmation when your order is placed and a notification with tracking information once your package ships.',
        ],
      },
      {
        id: 'shipping-methods',
        title: 'Shipping methods & timeframes',
        list: [
          'Standard shipping: 3–7 business days within the continental United States',
          'Expedited shipping: 2–3 business days where available at checkout',
          'Delivery times are estimates and not guaranteed once the carrier has possession of the package',
        ],
      },
      {
        id: 'packaging',
        title: 'Discreet packaging',
        paragraphs: [
          'All Polisupport orders are shipped in plain, discreet packaging without external branding that identifies product contents. Your privacy matters to us.',
        ],
      },
      {
        id: 'rates',
        title: 'Shipping rates',
        paragraphs: [
          'Shipping costs are calculated at checkout based on destination, order weight, and selected delivery speed. Promotional free-shipping offers, when available, will be displayed on the website or communicated during checkout.',
        ],
      },
      {
        id: 'restrictions',
        title: 'Shipping restrictions',
        paragraphs: [
          'We ship to addresses within the United States where our products are legally permitted. We reserve the right to cancel or refuse orders that cannot be fulfilled due to regulatory restrictions, incorrect addresses, or failed age verification.',
          'Customers are responsible for providing accurate shipping information. Polisupport is not liable for delays or failed delivery caused by incorrect or incomplete addresses.',
        ],
      },
      {
        id: 'lost-packages',
        title: 'Lost or delayed packages',
        paragraphs: [
          'If tracking shows delivered but you have not received your package, contact us within 7 days. If a package is lost in transit, we will work with the carrier to locate it or arrange a replacement when appropriate.',
        ],
      },
    ],
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    lastUpdated: 'June 16, 2026',
    intro:
      'These Terms of Service (“Terms”) govern your access to and use of the Polisupport website, products, and related services. By using our site or placing an order, you agree to these Terms.',
    sections: [
      {
        id: 'eligibility',
        title: 'Eligibility',
        paragraphs: [
          'You must be at least 21 years of age (or the minimum legal age in your jurisdiction, if higher) to purchase Polisupport products. By using this website, you represent that you meet this requirement and that hemp-derived or cannabis-based products are legal where you live.',
        ],
      },
      {
        id: 'products',
        title: 'Products & wellness statements',
        paragraphs: [
          'Polisupport offers botanical wellness products organized by benefit and format. Our products are not intended to diagnose, treat, cure, or prevent any disease.',
          'Product descriptions, blog content, and FAQ resources are provided for educational and informational purposes only. Always consult a qualified healthcare professional before using cannabis-based products, especially if you are pregnant, nursing, taking medication, or have a medical condition.',
        ],
      },
      {
        id: 'orders',
        title: 'Orders & payment',
        list: [
          'All orders are subject to acceptance and product availability',
          'We reserve the right to refuse or cancel any order at our discretion',
          'Prices and promotions may change without notice; the price at checkout applies to your order',
          'You agree to provide accurate billing and shipping information',
        ],
      },
      {
        id: 'intellectual-property',
        title: 'Intellectual property',
        paragraphs: [
          'All content on this website — including logos, product names, line identities, text, images, and design — is owned by Polisupport or its licensors and may not be copied, reproduced, or distributed without written permission.',
        ],
      },
      {
        id: 'limitation',
        title: 'Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by law, Polisupport shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability for any claim related to a purchase shall not exceed the amount you paid for the relevant order.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes to these Terms',
        paragraphs: [
          'We may update these Terms from time to time. The “Last updated” date at the top of this page indicates when revisions were made. Continued use of the site after changes constitutes acceptance of the updated Terms.',
        ],
      },
      {
        id: 'contact-terms',
        title: 'Contact',
        paragraphs: [
          'Questions about these Terms may be directed to contact@polisupport.com or through our Contact page.',
        ],
      },
    ],
  },
]

export function getPolicyBySlug(slug: string): PolicyDocument | undefined {
  return policies.find((policy) => policy.slug === slug)
}

export const policySlugs = policies.map((policy) => policy.slug)
