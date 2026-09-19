import { cn } from '../../lib/cn'

/**
 * The italic phrases set beside imagery across the brand layouts,
 * e.g. "A Brighter Future Begins Here".
 */
export const ScriptAccent = ({
  children,
  className,
  size = 'md',
}: {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) => (
  <p
    className={cn(
      'script',
      size === 'sm' && 'text-xl',
      size === 'md' && 'text-2xl sm:text-3xl',
      size === 'lg' && 'text-3xl sm:text-4xl lg:text-5xl',
      className,
    )}
  >
    {children}
  </p>
)
