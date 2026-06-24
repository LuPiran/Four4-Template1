import { Link } from 'react-router-dom'
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from 'react-icons/hi2'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
import { BrandLogo } from '../common/BrandLogo'
import { footerHelpLinks, footerNavLinks, footerPolicyLinks } from '../../data/navigation'
import { contactInfo, socialLinks } from '../../data/contact'

const socialIcons = {
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebookF,
}

const contactRows = [
  {
    id: 'phone',
    icon: HiOutlinePhone,
    href: `tel:${contactInfo.phone.replace(/\D/g, '')}`,
    content: (
      <>
        {contactInfo.phone}{' '}
        <span className="text-white/55">(Customer Service)</span>
      </>
    ),
  },
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    href: `https://wa.me/${contactInfo.whatsapp}`,
    content: (
      <>
        {contactInfo.whatsappDisplay}{' '}
        <span className="text-white/55">(Messages)</span>
      </>
    ),
  },
  {
    id: 'email',
    icon: HiOutlineEnvelope,
    href: `mailto:${contactInfo.email}`,
    content: contactInfo.email,
  },
  {
    id: 'hours',
    icon: HiOutlineClock,
    href: undefined,
    content: contactInfo.hours,
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-teal text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo size="lg" variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Premium Wellness — high-quality botanical products for balance, well-being, and a
              healthier life.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest text-brand-gold uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNavLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest text-brand-gold uppercase">Help</h3>
            <ul className="mt-4 space-y-2.5">
              {footerHelpLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest text-brand-gold uppercase">Policies</h3>
            <ul className="mt-4 space-y-2.5">
              {footerPolicyLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold tracking-widest text-brand-gold uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              {contactRows.map((row) => {
                const Icon = row.icon
                const inner = (
                  <span className="flex items-start gap-3 text-sm text-white/85">
                    <Icon className="mt-0.5 size-4 shrink-0 text-white" aria-hidden="true" />
                    <span className="leading-relaxed">{row.content}</span>
                  </span>
                )

                return (
                  <li key={row.id}>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith('http') ? '_blank' : undefined}
                        rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="transition-opacity hover:opacity-90"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.network]
                return (
                  <a
                    key={social.network}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-social-icon flex size-9 items-center justify-center rounded-md border border-white/15 text-white transition-all hover:border-white/35 hover:bg-white/10"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Polisupport Premium Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
