import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ButtonLink } from '../ui/Button'
import { Media } from '../ui/Media'
import { ScriptAccent } from '../ui/ScriptAccent'

const journey = ['Learn', 'Grow', 'Explore', 'Achieve']

export const PageHero = ({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  script,
  mediaLabel,
  mediaSrc,
  chips,
  compact = false,
}: {
  eyebrow: string
  title: ReactNode
  body: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
  script?: ReactNode
  mediaLabel?: string
  mediaSrc?: string
  /** The small reassurance items under the hero copy */
  chips?: { icon: ReactNode; label: string }[]
  compact?: boolean
}) => (
  <section className="relative overflow-hidden bg-cream-warm">
    {/* Soft brand washes behind the copy */}
    <div
      className="pointer-events-none absolute -top-40 -left-40 size-[32rem] rounded-full bg-rose-mist blur-3xl"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute top-1/3 -left-10 size-72 rounded-full bg-sage-soft/50 blur-3xl"
      aria-hidden
    />

    <Container width="wide" className="relative">
      <div
        className={cn(
          'grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14',
          compact ? 'py-14 lg:py-20' : 'py-16 lg:py-24',
        )}
      >
        <div className="flex flex-col gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              'font-semibold text-midnight',
              compact
                ? 'text-3xl sm:text-4xl lg:text-5xl'
                : 'text-4xl sm:text-5xl lg:text-[3.75rem]',
            )}
          >
            {title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{body}</p>

          {(primary || secondary) && (
            <div className="flex flex-wrap gap-3">
              {primary && (
                <ButtonLink to={primary.to} arrow>
                  {primary.label}
                </ButtonLink>
              )}
              {secondary && (
                <ButtonLink to={secondary.to} variant="secondary" arrow>
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}

          {chips && (
            <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-4 border-t border-rose/25 pt-6">
              {chips.map((chip) => (
                <li key={chip.label} className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-rose-mist text-burgundy">
                    {chip.icon}
                  </span>
                  <span className="text-sm font-medium text-ink">{chip.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-stretch gap-6">
            {/* Arc-framed imagery */}
            <div className="relative min-w-0 flex-1">
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[12rem_2rem_2rem_12rem] bg-linear-to-br from-rose-soft/60 to-sage-soft/40"
                aria-hidden
              />
              <Media
                src={mediaSrc}
                label={mediaLabel ?? 'Hero imagery'}
                alt=""
                className="relative aspect-4/3 w-full rounded-[12rem_2rem_2rem_12rem] shadow-[var(--shadow-lift)]"
              />
            </div>

            {/* Script accent + journey rail */}
            <div className="hidden w-28 shrink-0 flex-col justify-between py-1 text-right lg:flex">
              {script ? (
                <ScriptAccent size="sm" className="text-burgundy">
                  {script}
                </ScriptAccent>
              ) : (
                <span />
              )}
              <ul className="flex flex-col gap-1.5">
                {journey.map((step) => (
                  <li
                    key={step}
                    className="text-[0.6rem] font-semibold tracking-[0.28em] text-ink-soft uppercase"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Same accents, stacked on smaller screens */}
          <div className="flex flex-col gap-3 lg:hidden">
            {script && (
              <ScriptAccent size="sm" className="text-burgundy">
                {script}
              </ScriptAccent>
            )}
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {journey.map((step) => (
                <li
                  key={step}
                  className="text-[0.6rem] font-semibold tracking-[0.28em] text-ink-soft uppercase"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
)
