import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'onDark' | 'link'
type Size = 'sm' | 'md' | 'lg'

interface Styling {
  variant?: Variant
  size?: Size
  /** Trailing arrow, as used throughout the brand layouts */
  arrow?: boolean
  className?: string
}

const base =
  'group inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-[var(--ease-brand)] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  /* Burgundy background, cream text */
  primary:
    'rounded-full bg-burgundy text-cream shadow-[0_10px_24px_-12px_rgb(105_20_32/0.7)] hover:bg-burgundy-deep hover:shadow-[0_16px_32px_-14px_rgb(105_20_32/0.8)] hover:-translate-y-0.5',
  /* Cream background, burgundy border and text */
  secondary:
    'rounded-full border border-burgundy/40 bg-cream-warm text-burgundy hover:border-burgundy hover:bg-burgundy hover:text-cream hover:-translate-y-0.5',
  /* Sits on the burgundy and midnight bands */
  onDark:
    'rounded-full border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-burgundy hover:-translate-y-0.5',
  /* Burgundy text link */
  link: 'font-semibold text-burgundy hover:text-burgundy-deep',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const styles = ({ variant = 'primary', size = 'md', className }: Styling) =>
  cn(base, variants[variant], variant === 'link' ? 'text-sm' : sizes[size], className)

const Content = ({ children, arrow }: { children: ReactNode; arrow?: boolean }) => (
  <>
    {children}
    {arrow && (
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:translate-x-1"
        aria-hidden
      />
    )}
  </>
)

type LinkProps = Styling & Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>

export const ButtonLink = ({ variant, size, arrow, className, children, ...rest }: LinkProps) => (
  <Link className={styles({ variant, size, className })} {...rest}>
    <Content arrow={arrow}>{children}</Content>
  </Link>
)

type AnchorProps = Styling & ComponentPropsWithoutRef<'a'>

export const ButtonAnchor = ({ variant, size, arrow, className, children, ...rest }: AnchorProps) => (
  <a className={styles({ variant, size, className })} {...rest}>
    <Content arrow={arrow}>{children}</Content>
  </a>
)

type ButtonProps = Styling & ComponentPropsWithoutRef<'button'>

export const Button = ({
  variant,
  size,
  arrow,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button type={type} className={styles({ variant, size, className })} {...rest}>
    <Content arrow={arrow}>{children}</Content>
  </button>
)
