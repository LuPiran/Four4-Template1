import { useId, useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import type { FaqItem } from '../../data/faq'

type FaqAccordionItemProps = {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}

export function FaqAccordionItem({ item, isOpen, onToggle }: FaqAccordionItemProps) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="faq-trigger group flex w-full items-start justify-between gap-4 py-5 text-left transition-colors"
      >
        <span className="font-display pr-2 text-sm font-semibold text-brand-teal transition-colors duration-300 group-hover:text-brand-sea md:text-base">
          {item.question}
        </span>
        <span
          className={`faq-chevron mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-teal/15 bg-brand-cream/50 text-brand-teal transition-all duration-300 group-hover:border-brand-sea/30 group-hover:bg-white ${
            isOpen ? 'faq-chevron--open border-brand-sea/30 bg-white' : ''
          }`}
        >
          <HiOutlineChevronDown className="size-4" aria-hidden="true" />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`faq-panel ${isOpen ? 'faq-panel--open' : 'faq-panel--closed'}`}
      >
        <div className="faq-panel__inner">
          <p className="faq-panel__content pb-5 text-sm font-light leading-relaxed text-brand-charcoal/70 md:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

type FaqAccordionGroupProps = {
  items: FaqItem[]
  defaultOpenId?: string
}

export function FaqAccordionGroup({ items, defaultOpenId }: FaqAccordionGroupProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null)

  return (
    <div className="faq-accordion divide-y divide-brand-teal/10 rounded-2xl border border-brand-teal/10 bg-white px-5 md:px-6">
      {items.map((item) => (
        <FaqAccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
        />
      ))}
    </div>
  )
}
