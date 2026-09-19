import { Navigate, useParams } from 'react-router-dom'
import { ArrowRight, BookMarked, Compass, GraduationCap, Users } from 'lucide-react'
import {
  serviceCategories,
  servicesByCategory,
  type ServiceCategorySlug,
} from '../data/services'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Reveal } from '../components/ui/Reveal'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { PageHero } from '../components/sections/PageHero'
import { ProcessSection } from '../components/sections/ProcessSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { CtaBand } from '../components/sections/CtaBand'

const approach = [
  { title: 'Assess', body: 'Discover your strengths, interests and potential.' },
  { title: 'Understand', body: 'Gain deeper self-awareness and clarity.' },
  { title: 'Guide', body: 'Receive expert recommendations and direction.' },
  { title: 'Develop', body: 'Build the skills and confidence to grow.' },
]

const audienceIcons = [GraduationCap, Users, BookMarked, Compass]

const audiences = [
  { icon: GraduationCap, title: 'Students', body: 'Understand your strengths, interests and career possibilities.' },
  { icon: Users, title: 'Parents', body: 'Gain insight to support your child’s educational and developmental journey.' },
  { icon: BookMarked, title: 'Young Professionals', body: 'Explore career direction, upskill and plan your next step.' },
  { icon: Compass, title: 'Career Changers', body: 'Get structured guidance when considering a new direction.' },
]

export const ServiceCategory = () => {
  const { category } = useParams<{ category: string }>()
  const meta = serviceCategories.find((entry) => entry.slug === category)

  if (!meta) return <Navigate to="/services" replace />

  const list = servicesByCategory(meta.slug as ServiceCategorySlug)
  const page = meta.page
  const steps = page?.approach ?? approach
  const audienceList = page?.audiences
    ? page.audiences.map((item, index) => ({ ...item, icon: audienceIcons[index % audienceIcons.length] }))
    : audiences

  return (
    <>
      <PageHero
        eyebrow={meta.title}
        title={
          page ? (
            <>
              {page.heroTitle}
              <br />
              <span className="script font-normal text-burgundy">{page.heroAccent}</span>
            </>
          ) : (
            <>
              Understand Yourself.
              <br />
              <span className="script font-normal text-burgundy">Make Informed Choices.</span>
            </>
          )
        }
        body={meta.blurb}
        primary={{ label: 'Enquire Now', to: '/contact' }}
        secondary={{ label: 'Explore Services', to: '#services' }}
        script={
          page ? (
            <>
              {page.heroScript.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </>
          ) : (
            <>
              Clarity Today,
              <br />A Brighter Tomorrow
            </>
          )
        }
        mediaLabel={`${meta.title} — hero`}
        compact
      />

      {/* Approach */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <SectionHeading
            eyebrow={page ? page.introEyebrow : 'Explore Your Potential'}
            title={
              page ? (
                <>
                  {page.introTitle}{' '}
                  <span className="script font-normal">{page.introAccent}</span>
                </>
              ) : (
                <>
                  A Smarter Approach to a <span className="script font-normal">Brighter Future</span>
                </>
              )
            }
            body={
              page
                ? page.introBody
                : 'Our assessments and guidance solutions combine insight and personalised support to help individuals make confident, informed decisions at every stage of life.'
            }
            action={{ label: 'Our Approach', to: '/about' }}
          />
          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 80} className="relative">
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-rose-mist font-display text-sm font-bold text-burgundy">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-semibold tracking-[0.12em] text-burgundy uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink-soft">{step.body}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute top-6 -right-3 hidden size-4 text-rose sm:block"
                    aria-hidden
                  />
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Services in this area */}
      <Section tone="warm" id="services">
        <SectionHeading
          eyebrow={`Our ${meta.title} Solutions`}
          title={
            <>
              Programmes in this <span className="script font-normal">Practice Area</span>
            </>
          }
          action={{ label: 'View All Services', to: '/services' }}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {list.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 5) * 70}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who is this for */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Who Is This For"
              title={
                <>
                  Guidance for <span className="script font-normal">Every Stage</span>
                </>
              }
            />
            <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {audienceList.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 70}>
                  <div className="flex h-full flex-col gap-2">
                    <span className="flex size-11 items-center justify-center rounded-full bg-cream-warm text-burgundy">
                      <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <figure className="flex flex-col gap-3 border-l-2 border-burgundy/30 pl-6">
            <span className="font-accent text-5xl leading-none text-rose" aria-hidden>
              &ldquo;
            </span>
            <ScriptAccent size="sm">
              {page
                ? page.pullQuote
                : 'When individuals know themselves better, they make better choices. And better choices create brighter tomorrows.'}
            </ScriptAccent>
            <figcaption className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase">
              Fenix Learning Services
            </figcaption>
          </figure>
        </div>
      </Section>

      <ProcessSection
        eyebrow="Our Process"
        title={
          <>
            Simple Steps. <span className="script font-normal">Meaningful Progress.</span>
          </>
        }
      />

      <TestimonialsSection
        title={
          <>
            Real Stories. <span className="script font-normal">Lasting Impact.</span>
          </>
        }
      />

      <FaqSection items={page?.faqs} />

      <CtaBand
        title={
          page ? (
            <>
              {page.ctaTitle} <span className="script font-normal">{page.ctaAccent}</span>
            </>
          ) : (
            <>
              Not Sure Where to <span className="script font-normal">Begin?</span>
            </>
          )
        }
        body={
          page
            ? page.ctaBody
            : 'Let us understand your needs and help you choose the right Fenix solution for your journey.'
        }
        script={
          <>
            The Right Guidance
            <br />
            Changes Everything
          </>
        }
      />
    </>
  )
}
