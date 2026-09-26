import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { site } from '../../data/site'
import primaryLogo from '../../assets/Primary_Logo.svg'
import primaryCompact from '../../assets/Primary_Compact.svg'
import textOnly from '../../assets/Only_Text.svg'

const variants = {
  /** Horizontal lockup — globe beside the wordmark. */
  primary: { src: primaryLogo, width: 1066, height: 330, className: 'h-14' },
  /** Stacked lockup — globe above the wordmark. */
  compact: { src: primaryCompact, width: 666, height: 574, className: 'h-36' },
  /** Wordmark and tagline, no globe. */
  text: { src: textOnly, width: 666, height: 248, className: 'h-14' },
} as const

/**
 * The supplied artwork is drawn for light grounds: the globe sits on an
 * off-white square and the lettering is burgundy and ink. `mix-blend-multiply`
 * melts that square into cream surfaces; on dark surfaces, place the logo on
 * a light plate.
 */
export const Logo = ({
  variant = 'primary',
  className,
  onClick,
}: {
  variant?: keyof typeof variants
  className?: string
  onClick?: () => void
}) => {
  const logo = variants[variant]
  return (
    <Link to="/" onClick={onClick} aria-label={`${site.name} — home`} className="inline-flex shrink-0">
      <img
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={site.name}
        className={cn('w-auto mix-blend-multiply', logo.className, className)}
      />
    </Link>
  )
}
