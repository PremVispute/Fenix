import type { ReactNode } from 'react'
import { Container } from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { ScriptAccent } from '../ui/ScriptAccent'

export const CtaBand = ({
  title = (
    <>
      Let&rsquo;s Build a <span className="script font-normal">Brighter Future</span> Together
    </>
  ),
  body = 'Book a consultation and take the first step towards your goals.',
  primary = { label: 'Enquire Now', to: '/contact' },
  secondary = { label: 'Contact Us', to: '/contact' },
  script = (
    <>
      Progress Begins
      <br />
      with a Conversation
    </>
  ),
}: {
  title?: ReactNode
  body?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
  script?: ReactNode
}) => (
  <section className="relative overflow-hidden bg-midnight text-cream">
    <div
      className="pointer-events-none absolute inset-0 bg-linear-to-r from-midnight via-midnight to-burgundy-deep/70"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute -top-24 right-1/4 size-96 rounded-full bg-burgundy/40 blur-3xl"
      aria-hidden
    />
    <Container className="relative py-16 lg:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_auto_1fr]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl leading-tight font-semibold text-cream sm:text-4xl">{title}</h2>
          <p className="max-w-lg text-sm text-cream/70 sm:text-base">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to={primary.to} arrow>
            {primary.label}
          </ButtonLink>
          <ButtonLink to={secondary.to} variant="onDark" arrow>
            {secondary.label}
          </ButtonLink>
        </div>
        <ScriptAccent size="sm" className="hidden text-right text-rose-soft lg:block">
          {script}
        </ScriptAccent>
      </div>
    </Container>
  </section>
)
