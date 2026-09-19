import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

const supportsObserver = typeof IntersectionObserver !== 'undefined'

/** Fades content up the first time it scrolls into view. */
export const Reveal = ({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article'
}) => {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(!supportsObserver)

  useEffect(() => {
    const node = ref.current
    if (!node || !supportsObserver) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node
      }}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        shown ? 'animate-[fenix-rise_0.7s_var(--ease-brand)_both]' : 'opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
