import { useState, type FormEvent } from 'react'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import { useToast } from '../../context/ToastContext'
import { validateContactForm } from '../../utils/contactValidation'
import { submitContactMessage } from '../../utils/submitContact'
import { gradientGold } from '../../styles/colors'

const inputClass =
  'w-full rounded-xl border border-brand-teal/15 bg-white px-4 py-3 text-sm font-light text-brand-charcoal outline-none transition-colors placeholder:text-brand-charcoal/40 focus:border-brand-sea focus:ring-2 focus:ring-brand-sea/20'

const labelClass = 'mb-1.5 block font-display text-xs font-semibold tracking-wide text-brand-charcoal/60 uppercase'

type ContactFormProps = {
  idPrefix?: string
}

export function ContactForm({ idPrefix = 'contact' }: ContactFormProps) {
  const { showToast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const validationError = validateContactForm({ name, email, phone, message })
    if (validationError) {
      showToast(validationError, 'error')
      return
    }

    setIsSubmitting(true)

    const result = await submitContactMessage({ name, email, phone, message, subject })

    setIsSubmitting(false)

    if (!result.success) {
      showToast(result.message ?? 'Unable to send your message.', 'error')
      return
    }

    showToast('Message sent successfully. We will get back to you soon.', 'success')
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
  }

  return (
    <form
      id="contact-form"
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-teal/10 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="font-display text-lg font-semibold text-brand-teal md:text-xl">Send us a message</h2>
      <p className="mt-1 text-sm font-light text-brand-charcoal/60">
        All fields marked with * are required. Your information is only used to respond to your inquiry.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClass}>
            Name *
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputClass}
            autoComplete="name"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-email`} className={labelClass}>
              Email *
            </label>
            <input
              id={`${idPrefix}-email`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={inputClass}
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
              Phone
            </label>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-0000"
              className={inputClass}
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-subject`} className={labelClass}>
            Subject
          </label>
          <input
            id={`${idPrefix}-subject`}
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Product question, order help, partnership…"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-message`} className={labelClass}>
            Message *
          </label>
          <textarea
            id={`${idPrefix}-message`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            rows={6}
            className={`${inputClass} resize-y min-h-[9rem]`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-display mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        style={{ background: gradientGold }}
      >
        <HiOutlinePaperAirplane className="size-5" aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
