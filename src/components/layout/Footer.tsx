import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialIcon } from '../ui/SocialIcon'
import { Logo } from './Logo'
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
          {/* The artwork is drawn for light grounds, so it sits on a cream plate. */}
          <div className="self-start rounded-2xl bg-white px-6 py-5">
            <Logo variant="compact" />
          </div>
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
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-cream"
                >
                  <SocialIcon name="whatsapp" className="shrink-0 text-rose-soft" />
                  WhatsApp
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
