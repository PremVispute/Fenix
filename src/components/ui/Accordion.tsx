import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '../../lib/cn'

export const Accordion = ({
  items,
  className,
}: {
  items: { question: string; answer: string }[]
  className?: string
}) => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className={cn('divide-y divide-rose/30 border-y border-rose/30', className)}>
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-burgundy"
              >
                <span className="font-sans text-base font-medium">{item.question}</span>
                <Plus
                  className={cn(
                    'size-5 shrink-0 text-burgundy transition-transform duration-300 ease-[var(--ease-brand)]',
                    isOpen && 'rotate-45',
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              className={cn(
                'grid transition-all duration-300 ease-[var(--ease-brand)]',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-sm leading-relaxed text-ink-soft sm:max-w-3xl">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
