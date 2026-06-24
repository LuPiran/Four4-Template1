import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { ContactForm } from '../components/contact/ContactForm'
import { contactInfo, contactPageContent, contactSupportHours } from '../data/contact'

type ContactPageProps = {
  surface?: 'cream' | 'warm'
}

export function ContactPage({ surface = 'cream' }: ContactPageProps) {
  const pageBg = surface === 'warm' ? 'bg-brand-warm' : 'bg-white'

  return (
    <div className={`page-content-enter ${pageBg} pb-16 md:pb-20`}>
      <div className="mx-auto max-w-3xl px-6 pt-10 md:pt-14 lg:px-10">
        <ScrollReveal className="text-center">
          <nav className="text-sm font-light text-brand-charcoal/50" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-1.5">
              <li>
                <Link to="/" className="transition-colors hover:text-brand-teal">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal/70">Contact us</li>
            </ol>
          </nav>
          <h1 className="font-display mt-5 text-3xl font-semibold tracking-[0.12em] text-brand-teal uppercase md:text-4xl">
            {contactPageContent.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal className="mt-10 space-y-5 text-sm font-light leading-relaxed text-brand-charcoal/80 md:text-base" delay={60}>
          <p>{contactPageContent.intro}</p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold text-brand-charcoal">Address:</span> {contactInfo.address}
            </p>
            <p>
              <span className="font-semibold text-brand-charcoal">Email:</span>{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-brand-teal underline-offset-2 hover:underline">
                {contactInfo.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-charcoal">Toll free:</span>{' '}
              <a href={`tel:${contactInfo.tollFree.replace(/\D/g, '')}`} className="text-brand-teal underline-offset-2 hover:underline">
                {contactInfo.tollFree}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-charcoal">Phone:</span>{' '}
              <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="text-brand-teal underline-offset-2 hover:underline">
                {contactInfo.phone}
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-brand-charcoal">Customer support hours</p>
            <ul className="mt-2 space-y-1">
              {contactSupportHours.map((slot) => (
                <li key={slot.days}>
                  <span className="font-medium text-brand-charcoal/90">{slot.days}:</span> {slot.hours}
                </li>
              ))}
            </ul>
          </div>

          <p>{contactPageContent.formLead}</p>
          <p className="text-sm text-brand-charcoal/55">{contactPageContent.responseTime}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-10" delay={120}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </div>
  )
}
