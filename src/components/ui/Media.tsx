import { ImageIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Branded image slot. Renders the real image once a `src` is supplied and a
 * tasteful placeholder until then, so layouts hold their shape while the
 * photography is being finalised.
 */
export const Media = ({
  src,
  alt = '',
  label,
  className,
  imgClassName,
  tone = 'rose',
}: {
  src?: string
  alt?: string
  /** Shown inside the placeholder to describe the intended shot */
  label?: string
  className?: string
  imgClassName?: string
  tone?: 'rose' | 'sage' | 'burgundy' | 'midnight'
}) => {
  const tones = {
    rose: 'from-rose-soft via-rose-mist to-cream text-burgundy/50',
    sage: 'from-sage-soft via-cream to-cream text-sage',
    burgundy: 'from-burgundy-soft via-burgundy to-burgundy-deep text-cream/60',
    midnight: 'from-midnight-soft via-midnight to-midnight text-cream/50',
  } as const

  return (
    <div className={cn('relative overflow-hidden bg-cream', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn('size-full object-cover', imgClassName)}
        />
      ) : (
        <div
          className={cn(
            'flex size-full flex-col items-center justify-center gap-3 bg-linear-to-br p-6 text-center',
            tones[tone],
          )}
          role="img"
          aria-label={alt || label || 'Image placeholder'}
        >
          <ImageIcon className="size-7 opacity-70" aria-hidden />
          {label && (
            <span className="max-w-[22ch] text-[0.65rem] font-semibold tracking-[0.18em] uppercase opacity-70">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
