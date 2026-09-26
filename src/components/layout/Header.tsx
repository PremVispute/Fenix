import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { categoryHref, megaMenuColumns, primaryNav } from '../../data/navigation'
import { Container } from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { Logo } from './Logo'
import { MegaMenu } from './MegaMenu'

export const Header = () => {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 8)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const { pathname } = useLocation()

  const closeAll = () => {
    setServicesOpen(false)
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* Lock the page behind the mobile panel */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openServices = () => {
    window.clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative py-2 text-[0.8125rem] font-medium tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-burgundy after:transition-transform after:duration-300 hover:text-burgundy hover:after:scale-x-100',
      isActive ? 'text-burgundy after:scale-x-100' : 'text-ink',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-cream transition-shadow duration-300',
        scrolled ? 'border-rose/30 shadow-[0_10px_30px_-24px_rgb(30_32_43/0.5)]' : 'border-transparent',
      )}
    >
      <Container width="wide">
        <div className="flex h-18 items-center justify-between gap-6">
          <Logo onClick={closeAll} />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-5 2xl:gap-7">
              {primaryNav.map((item) =>
                item.label === 'Services' ? (
                  <li
                    key={item.to}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((open) => !open)}
                      className={cn(
                        'flex items-center gap-1 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors hover:text-burgundy',
                        pathname.startsWith('/services') ? 'text-burgundy' : 'text-ink',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn('size-3.5 transition-transform duration-300', servicesOpen && 'rotate-180')}
                        aria-hidden
                      />
                    </button>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={linkClass}
                      onClick={closeAll}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block">
              <ButtonLink to="/contact" size="sm" arrow onClick={closeAll}>
                Enquire Now
              </ButtonLink>
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex size-10 items-center justify-center rounded-full border border-rose/40 text-burgundy transition-colors hover:bg-burgundy hover:text-cream xl:hidden"
            >
              {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </Container>

      {/* Desktop mega-menu */}
      <div
        onMouseEnter={openServices}
        onMouseLeave={scheduleClose}
        className={cn(
          'absolute inset-x-0 top-full hidden px-6 transition-all duration-300 ease-[var(--ease-brand)] xl:block',
          servicesOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0',
        )}
      >
        <MegaMenu onNavigate={closeAll} />
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          'fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-rose/30 bg-cream-warm transition-all duration-300 ease-[var(--ease-brand)] xl:hidden',
          mobileOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0',
        )}
        aria-hidden={!mobileOpen}
      >
        <Container className="flex flex-col gap-1 py-6">
          {primaryNav.map((item) =>
            item.label === 'Services' ? (
              <div key={item.to} className="border-b border-rose/20 py-1">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between py-3 text-base font-medium"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'size-4 text-burgundy transition-transform duration-300',
                      mobileServicesOpen && 'rotate-180',
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-[var(--ease-brand)]',
                    mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-5 pb-4">
                      {megaMenuColumns.flat().map((group) => (
                        <div key={group.slug} className="flex flex-col gap-1.5">
                          <Link
                            to={categoryHref(group.slug)}
                            className="eyebrow"
                            onClick={closeAll}
                          >
                            {group.title}
                          </Link>
                          {group.links.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              onClick={closeAll}
                              className="py-1 pl-3 text-sm text-ink-soft hover:text-burgundy"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeAll}
                className={({ isActive }) =>
                  cn(
                    'border-b border-rose/20 py-4 text-base font-medium transition-colors',
                    isActive ? 'text-burgundy' : 'text-ink hover:text-burgundy',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <ButtonLink to="/contact" className="mt-6 w-full" arrow onClick={closeAll}>
            Enquire Now
          </ButtonLink>
          <Logo variant="text" onClick={closeAll} className="mx-auto mt-10 h-16" />
        </Container>
      </div>
    </header>
  )
}
