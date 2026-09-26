import { Link, Navigate, useParams } from 'react-router-dom'
import { Check, ChevronRight, Info, ShieldCheck } from 'lucide-react'
import { getService, serviceCategories, servicesByCategory } from '../data/services'
import { categoryHref } from '../data/navigation'
import { cn } from '../lib/cn'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Reveal } from '../components/ui/Reveal'
import { Media } from '../components/ui/Media'
import { Video } from '../components/ui/Video'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { ButtonLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { ProcessSection } from '../components/sections/ProcessSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { CtaBand } from '../components/sections/CtaBand'

/** Reassurance that biometric samples (fingerprints, iris images) are never kept. */
const DataNotice = ({ children }: { children: string }) => (
  <p className="flex items-start gap-3 rounded-2xl border border-burgundy/30 bg-rose-mist px-5 py-4 text-sm leading-relaxed text-ink">
    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-burgundy" strokeWidth={1.6} aria-hidden />
    {children}
  </p>
)

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = getService(slug)

  if (!service) return <Navigate to="/services" replace />

  const category = serviceCategories.find((entry) => entry.slug === service.category)!
  const related = servicesByCategory(service.category).filter((item) => item.slug !== service.slug)
  const Icon = service.icon

  const breadcrumb = (
    <div className="border-b border-rose/25 bg-cream">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 py-3 text-xs text-ink-soft">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <ChevronRight className="size-3" aria-hidden />
          <Link to="/services" className="hover:text-burgundy">Services</Link>
          <ChevronRight className="size-3" aria-hidden />
          <Link to={categoryHref(category.slug)} className="hover:text-burgundy">
            {category.title}
          </Link>
          <ChevronRight className="size-3" aria-hidden />
          <span className="font-medium text-burgundy">{service.title}</span>
        </nav>
      </Container>
    </div>
  )

  /* Condensed page: the definition, a video and an enquiry button */
  if (service.video) {
    return (
      <>
        {breadcrumb}
        <section className="relative overflow-hidden bg-cream-warm">
          <div
            className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-rose-mist blur-3xl"
            aria-hidden
          />
          <Container width="wide" className="relative py-14 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="flex flex-col gap-5">
                <Eyebrow>{category.title}</Eyebrow>
                <div className="flex items-center gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-burgundy text-cream">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{service.title}</h1>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-ink-soft">{service.intro}</p>
                {service.dataNotice && <DataNotice>{service.dataNotice}</DataNotice>}
                <ButtonLink to="/contact" arrow className="self-start">
                  Enquire Now
                </ButtonLink>
              </div>
              <Video
                src={service.video.src}
                poster={service.video.poster}
                title={`${service.title} — video`}
                className="aspect-video w-full rounded-3xl shadow-[var(--shadow-lift)]"
              />
            </div>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      {breadcrumb}

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-warm">
        <div
          className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-rose-mist blur-3xl"
          aria-hidden
        />
        <Container width="wide" className="relative py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="flex flex-col gap-5">
              <Eyebrow>{category.title}</Eyebrow>
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-burgundy text-cream">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                </span>
                <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{service.title}</h1>
              </div>
              <p className="script text-2xl text-burgundy sm:text-3xl">{service.kicker}</p>
              <p className="max-w-xl text-base leading-relaxed text-ink-soft">{service.intro}</p>
              {service.dataNotice && <DataNotice>{service.dataNotice}</DataNotice>}
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact" arrow>
                  Enquire Now
                </ButtonLink>
                <ButtonLink to={categoryHref(category.slug)} variant="secondary" arrow>
                  Related Services
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <Media
                src={service.image}
                imgClassName={service.imagePosition}
                label={`${service.title} — imagery`}
                alt=""
                className="aspect-4/3 w-full rounded-[2rem_999px_999px_2rem] shadow-[var(--shadow-lift)]"
              />
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 border-t border-rose/30 pt-6 sm:grid-cols-4">
            {service.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2.5">
                <span className="size-1.5 shrink-0 rounded-full bg-burgundy" aria-hidden />
                <span className="text-sm font-medium text-ink">{highlight}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {service.framework && (
        <Section tone="warm">
          <SectionHeading
            eyebrow={service.framework.eyebrow}
            title={
              <>
                {service.framework.title}{' '}
                <span className="script font-normal">{service.framework.accent}</span>
              </>
            }
            body={service.framework.body}
            align="center"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.framework.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={(index % 3) * 80}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-rose/25 bg-cream p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-burgundy font-display text-xl font-bold text-cream">
                    {item.title.charAt(0)}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-base font-semibold text-burgundy">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          {service.framework.video && (
            <Video
              src={service.framework.video}
              title={`${service.title} — explainer`}
              className="mx-auto mt-12 aspect-video w-full max-w-4xl rounded-3xl shadow-[var(--shadow-lift)]"
            />
          )}
        </Section>
      )}

      {/* Benefits */}
      <Section tone="cream">
        <SectionHeading
          eyebrow={service.benefitsEyebrow ?? 'What You Gain'}
          title={
            <>
              Why It <span className="script font-normal">Matters</span>
            </>
          }
          /* Skip the blurb when the hero intro already opens with it */
          body={service.intro.startsWith(service.blurb) ? undefined : service.blurb}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-rose/25 bg-cream-warm p-6">
                <span className="font-display text-2xl font-bold text-burgundy/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-base font-semibold text-burgundy">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Audience + outcomes */}
      <Section tone="warm">
        <div className={cn('grid gap-10 lg:gap-14', service.outcomes ? 'lg:grid-cols-3' : 'lg:grid-cols-2')}>
          <div className="flex flex-col gap-5">
            <Eyebrow>Who It Is For</Eyebrow>
            <h2 className="text-2xl font-semibold sm:text-3xl">Designed Around You</h2>
            <ul className="flex flex-col gap-3">
              {service.audience.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Check className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={2} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {service.outcomes && (
            <div className="flex flex-col gap-5">
              <Eyebrow>What You Take Away</Eyebrow>
              <h2 className="text-2xl font-semibold sm:text-3xl">Clear, Usable Outcomes</h2>
              <ul className="flex flex-col gap-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={2} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-burgundy p-8 text-cream">
            <ScriptAccent size="md" className="text-cream">
              Small Steps.
              <br />
              Big Futures.
            </ScriptAccent>
            <p className="text-sm text-cream/75">
              Tell us where you are and we will tell you honestly whether this is the right place to
              start.
            </p>
            <ButtonLink to="/contact" variant="onDark" arrow className="self-start">
              Talk to Us
            </ButtonLink>
          </div>
        </div>
      </Section>

      {service.note && (
        <Section tone="cream" width="narrow" className="py-12">
          <div className="flex flex-col gap-3 rounded-2xl border border-rose/40 bg-cream-warm p-7">
            <div className="flex items-center gap-2.5">
              <Info className="size-4 shrink-0 text-burgundy" strokeWidth={1.8} aria-hidden />
              <h2 className="font-display text-base font-semibold text-burgundy">
                {service.note.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">{service.note.body}</p>
          </div>
        </Section>
      )}

      <ProcessSection
        steps={service.process}
        title={
          <>
            What You Can <span className="script font-normal">Expect</span>
          </>
        }
      />

      {service.crossLink && (
        <Section tone="warm" width="narrow" className="py-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow centered>{service.crossLink.eyebrow}</Eyebrow>
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{service.crossLink.body}</p>
            <ButtonLink to={service.crossLink.to} variant="secondary" arrow className="mt-2">
              {service.crossLink.label}
            </ButtonLink>
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="warm">
          <SectionHeading
            eyebrow="Related Services"
            title={
              <>
                More in <span className="script font-normal">{category.title}</span>
              </>
            }
            action={{ label: 'View All Services', to: '/services' }}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.slice(0, 4).map((item, index) => (
              <Reveal key={item.slug} delay={index * 70}>
                <ServiceCard service={item} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <TestimonialsSection />

      <FaqSection items={service.faqs} />

      {service.cta ? (
        <CtaBand
          title={
            <>
              {service.cta.title} <span className="script font-normal">{service.cta.accent}</span>
            </>
          }
          body={service.cta.body}
          primary={{ label: service.cta.label, to: '/contact' }}
        />
      ) : (
        <CtaBand />
      )}
    </>
  )
}
