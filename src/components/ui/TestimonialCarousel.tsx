import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { Testimonial } from '../../data/content'
import { cn } from '../../lib/cn'

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn('size-3.5', index < rating ? 'fill-burgundy text-burgundy' : 'text-rose/40')}
        aria-hidden
      />
    ))}
  </div>
)

const initials = (name: string) =>
  name
    .replace(/\b(Dr|Mr|Mrs|Ms)\.\s*/g, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

/** Quotes longer than this are trimmed in the carousel, with a link to the full text. */
const LONG_QUOTE = 320

export const TestimonialCard = ({ item, compact = false }: { item: Testimonial; compact?: boolean }) => {
  const long = compact && item.quote.flat().join(' ').length > LONG_QUOTE

  return (
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-rose/25 bg-cream-warm p-6 shadow-[var(--shadow-card)]">
      <blockquote
        className={cn(
          'flex flex-1 flex-col gap-3 text-sm leading-relaxed text-ink-soft',
          long && 'max-h-52 overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent)]',
        )}
      >
        {item.quote.map((part, index) =>
          Array.isArray(part) ? (
            <ul key={index} className="flex list-disc flex-col gap-1 pl-5">
              {part.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : (
            <p key={index}>
              {index === 0 && '\u201c'}
              {part}
              {index === item.quote.length - 1 && '\u201d'}
            </p>
          ),
        )}
      </blockquote>
      {long && (
        <Link to="/testimonials" className="self-start text-xs font-semibold text-burgundy hover:underline">
          Read full testimonial
        </Link>
      )}
      <figcaption className="flex items-center gap-3 border-t border-rose/20 pt-4">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-mist font-display text-sm font-semibold text-burgundy"
          aria-hidden
        >
          {initials(item.name)}
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-midnight">{item.name}</p>
          {item.role && <p className="text-xs text-ink-soft">{item.role}</p>}
        </div>
        {item.rating && (
          <div className="ml-auto">
            <Stars rating={item.rating} />
          </div>
        )}
      </figcaption>
    </figure>
  )
}

export const TestimonialCarousel = ({ items }: { items: Testimonial[] }) => {
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      setPerPage(width < 640 ? 1 : width < 1024 ? 2 : 3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const pages = Math.max(1, Math.ceil(items.length / perPage))
  const current = Math.min(page, pages - 1)
  const visible = items.slice(current * perPage, current * perPage + perPage)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-stretch gap-4">
        <button
          type="button"
          onClick={() => setPage((value) => (value - 1 + pages) % pages)}
          aria-label="Previous testimonials"
          className="hidden size-10 shrink-0 items-center justify-center self-center rounded-full border border-rose/40 text-burgundy transition-colors hover:bg-burgundy hover:text-cream sm:flex"
        >
          <ChevronLeft className="size-4" aria-hidden />
        </button>

        <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <TestimonialCard key={item.name} item={item} compact />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPage((value) => (value + 1) % pages)}
          aria-label="Next testimonials"
          className="hidden size-10 shrink-0 items-center justify-center self-center rounded-full border border-rose/40 text-burgundy transition-colors hover:bg-burgundy hover:text-cream sm:flex"
        >
          <ChevronRight className="size-4" aria-hidden />
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: pages }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPage(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              index === current ? 'w-8 bg-burgundy' : 'w-2.5 bg-rose/40 hover:bg-rose',
            )}
          />
        ))}
      </div>
    </div>
  )
}
