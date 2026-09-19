import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categoryHref, megaMenuColumns } from '../../data/navigation'

/**
 * Structured three-column dropdown rather than one long vertical list.
 * Columns: Assessments & Career | Training & Development | Language Training
 * (the shorter Child Psychology group shares the third column).
 */
export const MegaMenu = ({ onNavigate }: { onNavigate?: () => void }) => (
  <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-rose/25 bg-cream-warm shadow-[var(--shadow-menu)]">
    <div className="grid gap-x-8 gap-y-8 p-8 lg:grid-cols-3">
      {megaMenuColumns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-7">
          {column.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.slug} className="flex flex-col gap-3">
                <Link
                  to={categoryHref(group.slug)}
                  onClick={onNavigate}
                  className="group flex items-center gap-2.5"
                >
                  <span className="flex size-8 items-center justify-center rounded-lg bg-rose-mist text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-cream">
                    <Icon className="size-4" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="eyebrow group-hover:text-burgundy-deep">{group.title}</span>
                  <ArrowRight
                    className="size-3 text-burgundy opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
                <ul className="flex flex-col">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={onNavigate}
                        className="group flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-rose-mist"
                      >
                        <span className="text-sm font-medium text-ink transition-colors group-hover:text-burgundy">
                          {link.label}
                        </span>
                        <span className="text-xs text-ink-soft">{link.kicker}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      ))}
    </div>

    <div className="flex flex-col gap-3 border-t border-rose/25 bg-rose-mist/60 px-8 py-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-ink-soft">
        Not sure where to begin? We will help you choose the right starting point.
      </p>
      <div className="flex items-center gap-5">
        <Link
          to="/services"
          onClick={onNavigate}
          className="text-sm font-semibold text-burgundy hover:text-burgundy-deep"
        >
          View all services
        </Link>
        <Link
          to="/contact"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 rounded-full bg-burgundy px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-burgundy-deep"
        >
          Enquire Now
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  </div>
)
