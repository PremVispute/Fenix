import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialIcon } from '../ui/SocialIcon'
import { footerNav } from '../../data/navigation'
import { site } from '../../data/site'

const Column = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-[0.7rem] font-semibold tracking-[0.22em] text-rose-soft uppercase">{title}</h3>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className="text-sm text-cream/70 transition-colors hover:text-cream">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = () => (
  <footer className="bg-midnight text-cream">
    <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr_1.1fr]">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-5">
          <Link to="/" aria-label={`${site.name} — home`} className="flex items-center gap-2.5">
            <svg viewBox="0 0 40 40" className="size-10" aria-hidden>
              <circle cx="20" cy="20" r="18.5" fill="none" strokeWidth="1.2" className="stroke-cream/30" />
              <path
                d="M20 8c3.6 3.4 5.6 6.6 5.6 9.8 0 2-.9 3.7-2.4 4.9.5-1.7.3-3.3-.7-4.8-.5 3.7-2.6 5.2-4.6 7-1.8 1.6-2.7 3.2-2.7 5 0 3.3 2.6 6 5.9 6.1-4.9.5-9.1-3.2-9.1-8 0-2.6 1-4.7 3.3-7.3 3-3.4 4.4-6 4.7-12.7Z"
                className="fill-rose-soft"
              />
            </svg>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-[0.12em] text-cream">FENIX</span>
              <span className="text-[0.55rem] font-medium tracking-[0.3em] text-cream/60">
                LEARNING SERVICES
              </span>
            </span>
          </Link>
          <p className="script text-xl text-rose-soft">{site.tagline}</p>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">{site.summary}</p>
          <ul className="flex gap-3">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-cream hover:bg-cream hover:text-midnight"
                >
                  <SocialIcon name={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Column title="Quick Links" links={footerNav.quickLinks} />
        <Column title="Services" links={footerNav.services} />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-[0.7rem] font-semibold tracking-[0.22em] text-rose-soft uppercase">
              Connect
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a href={site.contact.phoneHref} className="flex items-center gap-2.5 hover:text-cream">
                  <Phone className="size-4 shrink-0 text-rose-soft" aria-hidden />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2.5 hover:text-cream">
                  <Mail className="size-4 shrink-0 text-rose-soft" aria-hidden />
                  <span className="break-words">{site.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-rose-soft" aria-hidden />
                {site.contact.location}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 border-l border-cream/15 pl-4">
            {site.pillars.map((pillar) => (
              <span
                key={pillar}
                className="text-[0.7rem] font-semibold tracking-[0.3em] text-rose-soft uppercase"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <ul className="flex gap-6">
          {footerNav.legal.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-xs text-cream/50 transition-colors hover:text-cream">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)
