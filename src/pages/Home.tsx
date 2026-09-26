import { Link } from 'react-router-dom'
import {
  BriefcaseBusiness,
  Compass,
  Fingerprint,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react'
import { coreServiceSlugs, getService, services } from '../data/services'
import { serviceHref } from '../data/navigation'
import { differentiators, processSteps } from '../data/content'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Eyebrow } from '../components/ui/Eyebrow'
import { ButtonLink } from '../components/ui/Button'
import { Media } from '../components/ui/Media'
import { images } from '../data/images'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { Reveal } from '../components/ui/Reveal'
import { QuoteBand } from '../components/ui/QuoteBand'
import { PageHero } from '../components/sections/PageHero'
import { ProcessSection } from '../components/sections/ProcessSection'
import { FaqSection } from '../components/sections/FaqSection'
import { PartnersStrip } from '../components/sections/PartnersStrip'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CtaBand } from '../components/sections/CtaBand'

const coreServices = coreServiceSlugs.map((slug) => getService(slug)!).filter(Boolean)
const dmit = getService('dmit-assessment')!

/** The homepage closes the approach on a conversation rather than development. */
const homeProcess = [
  ...processSteps.slice(0, 3),
  {
    title: 'Discuss',
    body: 'We talk through the insights, options and next steps with you, so learning turns into practical progress.',
  },
]

export const Home = () => (
  <>
    <PageHero
      eyebrow="People · Potential · Progress"
      title={
        <>
          Your Potential Has a Direction.
          <br />
          <span className="script font-normal text-burgundy">Let’s Find It.</span>
        </>
      }
      body="Discover your strengths, understand your possibilities and build the skills to take your next step with clarity and confidence."
      primary={{ label: 'Enquire Now', to: '/contact' }}
      secondary={{ label: 'Explore Our Services', to: '/services' }}
      script={
        <>
          A Brighter
          <br />
          Future
          <br />
          Begins Here
        </>
      }
      mediaLabel="Student portrait — hero"
      mediaSrc={images.homeHero}
      mediaClassName="origin-bottom scale-[1.15]"
      chips={[
        { icon: <Target className="size-4" strokeWidth={1.6} aria-hidden />, label: 'Know Your Strengths' },
        { icon: <Lightbulb className="size-4" strokeWidth={1.6} aria-hidden />, label: 'Build Practical Skills' },
        { icon: <Compass className="size-4" strokeWidth={1.6} aria-hidden />, label: 'Make Confident Choices' },
      ]}
    />

    {/* Core services strip */}
    <Section tone="cream" className="py-12 lg:py-14" width="wide">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-2xl font-semibold text-burgundy">Our Core Services</h2>
          <p className="text-sm text-ink-soft">
            Personalised learning and guidance across our key practice areas.
          </p>
          <ButtonLink to="/services" variant="link" arrow className="mt-1 self-start">
            View All Services
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:divide-x lg:divide-rose/25">
          {coreServices.map((service) => {
            const Icon = service.icon
            return (
              <li key={service.slug}>
                <Link
                  to={serviceHref(service.category, service.slug)}
                  className="group flex h-full flex-col items-center gap-2 px-2 text-center"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-rose-mist text-burgundy transition-all duration-300 ease-[var(--ease-brand)] group-hover:-translate-y-1 group-hover:bg-burgundy group-hover:text-cream">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="text-xs leading-snug font-medium text-ink transition-colors group-hover:text-burgundy">
                    {service.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>

    {/* DMIT banner */}
    <section className="relative overflow-hidden bg-burgundy text-cream">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-burgundy-deep/70 to-transparent"
        aria-hidden
      />
      <Container width="wide" className="relative py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr_auto] lg:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-cream sm:text-4xl lg:text-[2.75rem]">
              {dmit.title}
            </h2>
            <p className="script text-2xl text-rose-soft">{dmit.kicker}</p>
            <p className="max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">{dmit.blurb}</p>
            <ButtonLink
              to={serviceHref(dmit.category, dmit.slug)}
              variant="onDark"
              arrow
              className="mt-2 self-start"
            >
              Explore Assessments &amp; Career
            </ButtonLink>
          </div>

          <div className="relative">
            <Media
              src={images.homeDmit}
              label="Child portrait — DMIT"
              alt=""
              className="aspect-4/3 w-full rounded-[2rem_999px_999px_2rem] shadow-[var(--shadow-lift)]"
            />
          </div>

          <div className="flex flex-col gap-3 lg:max-w-[12rem]">
            <ScriptAccent className="text-cream">
              Discover What Makes You, You.
            </ScriptAccent>
            <p className="text-sm text-cream/60">
              One perspective among several — never the whole answer.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 border-t border-cream/20 pt-6 sm:grid-cols-4">
          {dmit.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2.5">
              <Fingerprint className="size-4 shrink-0 text-rose-soft" strokeWidth={1.5} aria-hidden />
              <span className="text-sm text-cream/85">{highlight}</span>
            </li>
          ))}
        </ul>

        {dmit.dataNotice && (
          <p className="mt-6 flex items-start gap-2.5 rounded-xl border border-cream/20 bg-burgundy-deep/40 px-4 py-3 text-sm text-cream/90">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-rose-soft" strokeWidth={1.6} aria-hidden />
            {dmit.dataNotice}
          </p>
        )}
      </Container>
    </section>

    {/* Why choose Fenix */}
    <Section tone="warm">
      <div className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Why Fenix"
          title={
            <>
              A Trusted Partner in Your <span className="script font-normal">Learning</span> and
              Growth Journey
            </>
          }
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {differentiators.map((value, index) => (
            <Reveal as="li" key={value.title} delay={index * 70}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-rose/25 bg-cream p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-rose-mist text-burgundy">
                  <TrendingUp className="size-4" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="font-display text-base font-semibold text-burgundy">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>

    <QuoteBand quote="Guiding you at every step, from self-discovery to success." />

    <ProcessSection
      steps={homeProcess}
      eyebrow="Understand. Assess. Guide. Discuss."
      title={
        <>
          A Practical Approach to <span className="script font-normal">Growth</span>
        </>
      }
      body="Meaningful development begins with understanding where you are and where you want to go."
    />

    <TestimonialsSection />

    {/* Review invitation */}
    <Section tone="warm" width="narrow" className="py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Eyebrow centered>Have You Worked With Fenix?</Eyebrow>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Your experience <span className="script font-normal">matters to us</span>
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          If Fenix Learning Services has supported you through an assessment, counselling session,
          training programme or learning experience, we would appreciate you sharing your
          experience.
        </p>
        <ButtonLink to="/reviews" variant="secondary" arrow className="mt-2">
          Leave a Review
        </ButtonLink>
      </div>
    </Section>

    <PartnersStrip />

    {/* Audience split */}
    <Section tone="cream">
      <SectionHeading
        eyebrow="Who We Work With"
        title={
          <>
            Guidance for <span className="script font-normal">Every Stage</span>
          </>
        }
        body="Whether you are choosing a career, developing your skills, preparing for the workplace or finding your path, it starts with understanding your strengths, interests, abilities and potential."
        align="center"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[
          {
            icon: Compass,
            title: 'For Students & Parents',
            body: 'Assessments, counselling and guidance that turn an uncertain decision into a confident one.',
            to: '/students-parents',
            label: 'Explore Student Services',
          },
          {
            icon: BriefcaseBusiness,
            title: 'For Corporates & Institutions',
            body: 'Training and development programmes that build capability across teams, campuses and properties.',
            to: '/corporates',
            label: 'Explore Corporate Services',
          },
        ].map((item) => (
          <Reveal key={item.to}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-rose/25 bg-cream-warm p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-burgundy text-cream">
                <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <ButtonLink to={item.to} variant="link" arrow className="self-start">
                {item.label}
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-ink-soft">
        {services.length} services across four practice areas —{' '}
        <Link to="/services" className="font-semibold text-burgundy hover:underline">
          see the full list
        </Link>
        .
      </p>
    </Section>

    <FaqSection />

    <CtaBand
      title={
        <>
          Ready to Define Your <span className="script font-normal">Next Step?</span>
        </>
      }
      body="Whether you are exploring a career direction, developing new skills, preparing for the workplace or looking for learning solutions for your organisation, Fenix Learning Services is here to help."
    />
  </>
)
