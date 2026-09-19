import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { serviceCategories, services, servicesByCategory } from '../data/services'
import { categoryHref } from '../data/navigation'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Reveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { PageHero } from '../components/sections/PageHero'
import { ProcessSection } from '../components/sections/ProcessSection'
import { CtaBand } from '../components/sections/CtaBand'

export const Services = () => (
  <>
    <PageHero
      eyebrow="Our Services"
      title={
        <>
          Find the Right Path
          <br />
          for <span className="script font-normal text-burgundy">Your Next Step.</span>
        </>
      }
      body="Every journey is different. Whether you're exploring a career, understanding your strengths, preparing for the workplace, developing professional skills or working towards an IELTS goal, Fenix offers personalised solutions designed around your needs."
      primary={{ label: 'Find Your Service', to: '#all-services' }}
      secondary={{ label: 'Talk to Fenix', to: '/contact' }}
      script={
        <>
          Clarity Today,
          <br />A Brighter Tomorrow
        </>
      }
      mediaLabel="Books — learning"
      compact
    />

    {/* Category overview */}
    <Section tone="cream">
      <SectionHeading
        eyebrow="How Can We Help You?"
        title={
          <>
            Our Practice Areas. One Purpose:{' '}
            <span className="script font-normal">Your Growth.</span>
          </>
        }
        body="Explore the Fenix Learning Services portfolio and find the area that fits your current goals."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceCategories.map((category, index) => {
          const Icon = category.icon
          const count = servicesByCategory(category.slug).length
          return (
            <Reveal key={category.slug} delay={index * 80}>
              <Link
                to={categoryHref(category.slug)}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-rose/25 bg-cream-warm p-6 transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-burgundy text-cream">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-burgundy">{category.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-soft">{category.blurb}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy">
                  {count} {count === 1 ? 'service' : 'services'}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>

    {/* Full list */}
    <Section tone="warm" id="all-services">
      <SectionHeading
        eyebrow="Our Services"
        title={
          <>
            Everything We <span className="script font-normal">Offer</span>
          </>
        }
        body="Guidance. Assessment. Training. Development. Personalised solutions designed around what you are trying to achieve."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={(index % 4) * 70}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>

    <ProcessSection />

    {/* Not sure where to start */}
    <Section tone="warm" width="narrow" className="py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Eyebrow centered>Not Sure Where to Start?</Eyebrow>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          You don&rsquo;t have to figure it out{' '}
          <span className="script font-normal">alone.</span>
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          You may know that you want to make a change without knowing exactly which service you
          need. That&rsquo;s okay. Tell us what you&rsquo;re trying to achieve, and Fenix can help
          you understand the available options and identify an appropriate place to begin.
        </p>
        <ButtonLink to="/contact" variant="secondary" arrow className="mt-2">
          Talk to Fenix
        </ButtonLink>
      </div>
    </Section>

    {/* Why choose the right service */}
    <Section tone="cream">
      <SectionHeading
        eyebrow="Why Choose the Right Service?"
        title={
          <>
            Because Your Goal Should Shape Your{' '}
            <span className="script font-normal">Learning Journey.</span>
          </>
        }
        align="center"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'For Students',
            body: 'Explore strengths, interests, academic choices, career possibilities and workplace readiness.',
          },
          {
            title: 'For Parents',
            body: 'Gain additional perspectives to better understand and support your child\u2019s development and future choices.',
          },
          {
            title: 'For Professionals',
            body: 'Strengthen communication, leadership, workplace and industry-specific skills.',
          },
          {
            title: 'For Organisations',
            body: 'Develop practical learning programmes around professional skills, leadership, workplace readiness and industry requirements.',
          },
        ].map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 70}>
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-rose/25 bg-cream-warm p-6">
              <h3 className="font-display text-base font-semibold text-burgundy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-10 text-center text-sm leading-relaxed text-ink-soft">
        Our services are designed to connect different stages of growth &mdash; from gaining greater
        self-awareness and exploring possibilities to developing practical skills and preparing for
        what&rsquo;s next.
      </p>
    </Section>

    <CtaBand
      title={
        <>
          Ready to Take Your <span className="script font-normal">Next Step?</span>
        </>
      }
      body="Whether you need career guidance, assessment-based insights, professional training or IELTS preparation, Fenix Learning Services is here to help."
    />
  </>
)
