import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { site } from '../../data/site'

/**
 * Placeholder lockup — the flame mark and wordmark are stand-ins.
 * Swap the <svg> for the supplied asset (or an <img src="/logo.svg" />)
 * and the rest of the layout stays as is.
 */
export const Logo = ({
  onDark = false,
  className,
  onClick,
}: {
  onDark?: boolean
  className?: string
  onClick?: () => void
}) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label={`${site.name} — home`}
    className={cn('group flex items-center gap-2.5', className)}
  >
    <svg viewBox="0 0 40 40" className="size-9 shrink-0" aria-hidden>
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="none"
        strokeWidth="1.2"
        className={onDark ? 'stroke-cream/40' : 'stroke-burgundy/30'}
      />
      <path
        d="M20 8c3.6 3.4 5.6 6.6 5.6 9.8 0 2-.9 3.7-2.4 4.9.5-1.7.3-3.3-.7-4.8-.5 3.7-2.6 5.2-4.6 7-1.8 1.6-2.7 3.2-2.7 5 0 3.3 2.6 6 5.9 6.1-4.9.5-9.1-3.2-9.1-8 0-2.6 1-4.7 3.3-7.3 3-3.4 4.4-6 4.7-12.7Z"
        className={onDark ? 'fill-rose-soft' : 'fill-burgundy'}
      />
    </svg>
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          'font-display text-lg font-bold tracking-[0.12em]',
          onDark ? 'text-cream' : 'text-burgundy',
        )}
      >
        FENIX
      </span>
      <span
        className={cn(
          'text-[0.5rem] font-medium tracking-[0.3em] whitespace-nowrap',
          onDark ? 'text-cream/60' : 'text-ink-soft',
        )}
      >
        LEARNING SERVICES
      </span>
    </span>
  </Link>
)
