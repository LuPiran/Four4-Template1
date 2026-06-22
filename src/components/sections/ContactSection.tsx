import { useState, type FormEvent } from 'react'
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from 'react-icons/hi2'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ScrollReveal } from '../common/ScrollReveal'
import { contactInfo } from '../../data/contact'
import { openWhatsAppChat } from '../../utils/whatsappContact'
import { gradientGold } from '../../styles/colors'

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors placeholder:text-brand-charcoal/40 focus:border-brand-sea focus:ring-2 focus:ring-brand-sea/20'

const channels = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: contactInfo.whatsappDisplay,
    href: `https://wa.me/${contactInfo.whatsapp}`,
    accent: 'bg-[#25D366]/10 text-[#128C7E]',
  },
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    accent: 'bg-brand-teal/10 text-brand-teal',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\D/g, '')}`,
    accent: 'bg-brand-sea/15 text-brand-sea',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: contactInfo.instagram,
    href: contactInfo.instagramUrl,
    accent: 'bg-brand-gold/15 text-brand-gold-dark',
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    value: contactInfo.facebook,
    href: contactInfo.facebookUrl,
    accent: 'bg-blue-50 text-blue-600',
  },
]

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    openWhatsAppChat({ name, email, phone, message })
  }

  return (
    <section id="contact" className="bg-brand-cream/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">Contact us</p>
          <h2 className="mt-2 text-2xl font-semibold text-brand-teal md:text-4xl">Get in touch</h2>
          <p className="mt-3 text-sm text-brand-charcoal/60 md:text-base">
            Send your message via WhatsApp or choose another support channel on the right.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal animation="fade-right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="text-lg font-semibold text-brand-charcoal">Message via WhatsApp</h3>
              <p className="mt-1 text-sm text-brand-charcoal/55">
                Fill out the form and continue the conversation directly on WhatsApp.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold tracking-wide text-brand-charcoal/60 uppercase">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold tracking-wide text-brand-charcoal/60 uppercase">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold tracking-wide text-brand-charcoal/60 uppercase">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold tracking-wide text-brand-charcoal/60 uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-brand-charcoal transition-all hover:scale-[1.02] hover:shadow-lg sm:w-auto"
                style={{ background: gradientGold }}
              >
                <FaWhatsapp className="size-5 text-[#128C7E]" />
                Send via WhatsApp
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={100}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-charcoal">Other channels</h3>
                <p className="mt-1 text-sm text-brand-charcoal/55">
                  Choose your preferred way to reach us.
                </p>

                <ul className="mt-5 space-y-3">
                  {channels.map((channel) => {
                    const Icon = channel.icon
                    return (
                      <li key={channel.label}>
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition-all hover:border-brand-sea/40 hover:shadow-md"
                        >
                          <span
                            className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${channel.accent}`}
                          >
                            <Icon className="size-5" />
                          </span>
                          <span>
                            <span className="block text-xs font-semibold tracking-wide text-brand-charcoal/50 uppercase">
                              {channel.label}
                            </span>
                            <span className="mt-0.5 block text-sm font-medium text-brand-charcoal group-hover:text-brand-teal">
                              {channel.value}
                            </span>
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                      <HiOutlineClock className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-brand-charcoal/50 uppercase">
                        Hours
                      </p>
                      <p className="text-sm font-medium text-brand-charcoal">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-sea/15 text-brand-sea">
                      <HiOutlineMapPin className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-brand-charcoal/50 uppercase">
                        Location
                      </p>
                      <p className="text-sm font-medium text-brand-charcoal">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
