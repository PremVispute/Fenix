import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

type Tone = 'cream' | 'warm' | 'burgundy' | 'midnight' | 'rose' | 'sage'

const tones: Record<Tone, string> = {
  warm: 'bg-cream-warm text-ink',
  cream: 'bg-cream text-ink',
  rose: 'bg-rose-mist text-ink',
  sage: 'bg-sage-soft text-ink',
  burgundy: 'bg-burgundy text-cream [&_h1]:text-cream [&_h2]:text-cream [&_h3]:text-cream [&_h4]:text-cream',
  midnight:
    'bg-midnight text-cream [&_h1]:text-cream [&_h2]:text-cream [&_h3]:text-cream [&_h4]:text-cream',
}

export const Section = ({
  children,
  tone = 'warm',
  className,
  containerClassName,
  width,
  id,
  bare = false,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
  containerClassName?: string
  width?: 'default' | 'narrow' | 'wide'
  id?: string
  /** Skip the container when the section needs full-bleed control */
  bare?: boolean
}) => (
  <section id={id} className={cn('relative py-16 sm:py-20 lg:py-24', tones[tone], className)}>
    {bare ? (
      children
    ) : (
      <Container width={width} className={containerClassName}>
        {children}
      </Container>
    )}
  </section>
)
