import { useEffect, useRef, useState, type FormEvent } from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../../data/contact'
import { openWhatsAppChat } from '../../utils/whatsappContact'
import { validateContactForm } from '../../utils/contactValidation'
import { useToast } from '../../context/ToastContext'
import { gradientGold } from '../../styles/colors'

const CLOSE_DURATION_MS = 320

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal outline-none transition-all placeholder:text-brand-charcoal/40 focus:border-brand-sea focus:ring-2 focus:ring-brand-sea/20'

export function WhatsAppFloat() {
  const { showToast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const animationState = isClosing ? 'closing' : 'open'

  function openPanel() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setIsClosing(false)
    setIsOpen(true)
  }

  function closePanel() {
    if (!isOpen || isClosing) return
    setIsClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
      closeTimerRef.current = null
    }, CLOSE_DURATION_MS)
  }

  function togglePanel() {
    if (isOpen) closePanel()
    else openPanel()
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const validationError = validateContactForm({ name, email, phone, message })
    if (validationError) {
      showToast(validationError, 'error')
      return
    }

    openWhatsAppChat({ name, email, phone, message })
    closePanel()
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePanel()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  return (
    <div className="whatsapp-float-root fixed right-4 bottom-4 z-[90] sm:right-6 sm:bottom-6">
      {(isOpen || isClosing) && (
        <button
          type="button"
          className={`whatsapp-float-backdrop fixed inset-0 bg-brand-charcoal/25 backdrop-blur-[2px] md:hidden ${
            animationState === 'closing' ? 'whatsapp-float-backdrop-out' : 'whatsapp-float-backdrop-in'
          }`}
          onClick={closePanel}
          aria-label="Close form"
        />
      )}

      <div className="relative flex flex-col items-end gap-4">
        {(isOpen || isClosing) && (
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-float-title"
            tabIndex={-1}
            className={`whatsapp-float-panel w-[min(100vw-2.5rem,380px)] overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_24px_64px_-12px_rgba(0,75,73,0.35)] ${
              animationState === 'closing' ? 'whatsapp-float-panel-out' : 'whatsapp-float-panel-in'
            }`}
          >
            <div className="relative overflow-hidden bg-linear-to-br from-brand-teal via-brand-teal to-brand-sea px-5 py-4 text-white">
              <div className="whatsapp-float-header-glow pointer-events-none absolute -top-8 -right-8 size-32 rounded-full bg-brand-gold/20 blur-2xl" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/15 text-[#25D366] backdrop-blur-sm">
                    <FaWhatsapp className="size-6" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold-light uppercase">
                      Support
                    </p>
                    <h2 id="whatsapp-float-title" className="text-base font-semibold">
                      Chat with Polisupport
                    </h2>
                    <p className="mt-0.5 text-xs text-white/75">Fast response via WhatsApp</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closePanel}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close"
                >
                  <HiOutlineXMark className="size-5" />
                </button>
              </div>
            </div>

            <form noValidate onSubmit={handleSubmit} className="whatsapp-float-form p-5">
              <div className="space-y-3">
                <div>
                  <label htmlFor="wa-float-name" className="mb-1 block text-[10px] font-bold tracking-wide text-brand-charcoal/55 uppercase">
                    Name
                  </label>
                  <input
                    id="wa-float-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="wa-float-email" className="mb-1 block text-[10px] font-bold tracking-wide text-brand-charcoal/55 uppercase">
                      Email
                    </label>
                    <input
                      id="wa-float-email"
                      type="text"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="wa-float-phone" className="mb-1 block text-[10px] font-bold tracking-wide text-brand-charcoal/55 uppercase">
                      Phone
                    </label>
                    <input
                      id="wa-float-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="wa-float-message" className="mb-1 block text-[10px] font-bold tracking-wide text-brand-charcoal/55 uppercase">
                    Message
                  </label>
                  <textarea
                    id="wa-float-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-brand-charcoal transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                style={{ background: gradientGold }}
              >
                <FaWhatsapp className="size-5 text-[#128C7E]" />
                Send on WhatsApp
              </button>

              <p className="mt-3 text-center text-[10px] text-brand-charcoal/45">
                {contactInfo.hours} · {contactInfo.whatsappDisplay}
              </p>
            </form>
          </div>
        )}

        <button
          type="button"
          onClick={togglePanel}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          className={`whatsapp-float-trigger group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.65)] transition-all duration-500 hover:scale-105 hover:shadow-[0_16px_40px_-8px_rgba(37,211,102,0.75)] sm:size-16 ${
            isOpen ? 'whatsapp-float-trigger-active' : 'whatsapp-float-trigger-idle'
          }`}
        >
          <span className="whatsapp-float-pulse absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
          <span className="whatsapp-float-pulse-delayed absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />

          <FaWhatsapp
            className={`relative z-10 size-7 transition-all duration-500 sm:size-8 ${
              isOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <HiOutlineXMark
            className={`absolute z-10 size-7 transition-all duration-500 sm:size-8 ${
              isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
            }`}
          />
        </button>
      </div>
    </div>
  )
}
