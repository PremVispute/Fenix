import { cn } from '../../lib/cn'

/** The small ruled label that opens most sections. */
export const Eyebrow = ({
  children,
  className,
  onDark = false,
  centered = false,
}: {
  children: string
  className?: string
  onDark?: boolean
  centered?: boolean
}) => (
  <div className={cn('flex items-center gap-3', centered && 'justify-center', className)}>
    <span className={cn('h-px w-8', onDark ? 'bg-cream/50' : 'bg-rose')} aria-hidden />
    <span className={cn('eyebrow', onDark && 'text-rose-soft')}>{children}</span>
    <span className={cn('h-px w-8', onDark ? 'bg-cream/50' : 'bg-rose')} aria-hidden />
  </div>
)
