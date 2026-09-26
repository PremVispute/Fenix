import { useState } from 'react'
import { gallery } from '../data/content'
import { cn } from '../lib/cn'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Media } from '../components/ui/Media'
import { Video } from '../components/ui/Video'
import { Reveal } from '../components/ui/Reveal'
import { CtaBand } from '../components/sections/CtaBand'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Photos', value: 'photo' },
  { label: 'Videos', value: 'video' },
] as const

export const Gallery = () => {
  const [active, setActive] = useState<(typeof filters)[number]['value']>('all')
  const visible = active === 'all' ? gallery : gallery.filter((item) => item.type === active)

  return (
    <>
      <Section tone="warm">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments From Our <span className="script font-normal">Sessions</span>
            </>
          }
          body="A look at our workshops, assessments, training programmes and the people we have had the privilege to work with."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={active === filter.value}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors',
                active === filter.value
                  ? 'border-burgundy bg-burgundy text-cream'
                  : 'border-rose/40 text-ink-soft hover:border-burgundy hover:text-burgundy',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <Reveal as="li" key={`${item.type}-${item.caption}`} delay={(index % 3) * 70}>
              <figure className="flex flex-col gap-3">
                {item.type === 'video' ? (
                  <Video
                    src={item.src}
                    poster={item.poster}
                    title={item.caption}
                    className="aspect-4/3 w-full rounded-2xl"
                  />
                ) : (
                  <Media
                    src={item.src}
                    label={item.caption}
                    alt={item.caption}
                    className="aspect-4/3 w-full rounded-2xl"
                  />
                )}
                <figcaption className="text-sm font-medium text-ink">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  )
}
