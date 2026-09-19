import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { Testimonial } from '../../data/content'
import { cn } from '../../lib/cn'
import { Media } from './Media'

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

export const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <figure className="flex h-full flex-col gap-4 rounded-2xl border border-rose/25 bg-cream-warm p-6 shadow-[var(--shadow-card)]">
    <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
      &ldquo;{item.quote}&rdquo;
    </blockquote>
    <figcaption className="flex items-center gap-3 border-t border-rose/20 pt-4">
      <Media
        label=""
        alt={item.name}
        className="size-11 shrink-0 rounded-full"
        tone="rose"
      />
      <div>
        <p className="font-display text-sm font-semibold text-midnight">{item.name}</p>
        <p className="text-xs text-ink-soft">{item.role}</p>
      </div>
      <div className="ml-auto">
        <Stars rating={item.rating} />
      </div>
    </figcaption>
  </figure>
)

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
            <TestimonialCard key={item.name} item={item} />
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
