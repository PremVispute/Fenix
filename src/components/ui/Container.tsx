import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export const Container = ({
  children,
  className,
  width = 'default',
}: {
  children: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'wide'
}) => (
  <div
    className={cn(
      'mx-auto w-full px-5 sm:px-8',
      width === 'narrow' && 'max-w-3xl',
      width === 'default' && 'max-w-7xl',
      width === 'wide' && 'max-w-[90rem]',
      className,
    )}
  >
    {children}
  </div>
)
