import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Eyebrow } from './Eyebrow'
import { ButtonLink } from './Button'

export const SectionHeading = ({
  eyebrow,
  title,
  body,
  action,
  align = 'left',
  onDark = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  action?: { label: string; to: string }
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}) => (
  <div
    className={cn(
      'flex flex-col gap-4',
      align === 'center' && 'items-center text-center',
      action && align === 'left' && 'sm:flex-row sm:items-end sm:justify-between sm:gap-8',
      className,
    )}
  >
    <div className={cn('flex flex-col gap-3', align === 'center' && 'items-center', 'max-w-2xl')}>
      {eyebrow && <Eyebrow onDark={onDark} centered={align === 'center'}>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {body && (
        <p className={cn('text-base leading-relaxed', onDark ? 'text-cream/75' : 'text-ink-soft')}>
          {body}
        </p>
      )}
    </div>
    {action && (
      <ButtonLink to={action.to} variant="link" arrow className={cn(onDark && 'text-rose-soft hover:text-cream')}>
        {action.label}
      </ButtonLink>
    )}
  </div>
)
