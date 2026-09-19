import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../data/services'
import { serviceHref } from '../../data/navigation'
import { cn } from '../../lib/cn'

export const ServiceCard = ({ service, className }: { service: Service; className?: string }) => {
  const Icon = service.icon
  return (
    <Link
      to={serviceHref(service.category, service.slug)}
      className={cn(
        'group flex flex-col gap-3 rounded-2xl border border-rose/25 bg-cream-warm p-6 transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-[var(--shadow-lift)]',
        className,
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-rose-mist text-burgundy transition-colors duration-300 group-hover:bg-burgundy group-hover:text-cream">
        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-lg font-semibold text-burgundy">{service.title}</h3>
        <p className="text-xs font-medium tracking-wide text-rose uppercase">{service.kicker}</p>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-ink-soft">{service.blurb}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy">
        Learn More
        <ArrowRight
          className="size-3.5 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  )
}
