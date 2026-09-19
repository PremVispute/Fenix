import { partners } from '../../data/content'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export const PartnersStrip = () => (
  <Section tone="warm" className="py-14">
    <SectionHeading
      eyebrow="Our Network"
      title="Trusted by Leading Institutions & Organisations"
      align="center"
    />
    <div
      className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-label="Partner institutions"
    >
      <ul className="flex w-max animate-[fenix-marquee_38s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
        {[...partners, ...partners].map((partner, index) => (
          <li
            key={`${partner}-${index}`}
            className="flex h-20 w-56 shrink-0 items-center justify-center rounded-xl border border-rose/25 bg-cream px-6 text-center"
            aria-hidden={index >= partners.length}
          >
            <span className="font-display text-sm font-semibold tracking-wide text-ink-soft">
              {partner}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <p className="mt-6 text-center text-sm text-ink-soft">
      And many more institutions, schools and organisations.
    </p>
  </Section>
)
