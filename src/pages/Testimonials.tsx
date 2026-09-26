import { testimonials } from '../data/content'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TestimonialCard } from '../components/ui/TestimonialCarousel'
import { Reveal } from '../components/ui/Reveal'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { Eyebrow } from '../components/ui/Eyebrow'
import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/sections/PageHero'
import { PartnersStrip } from '../components/sections/PartnersStrip'
import { CtaBand } from '../components/sections/CtaBand'

const journeys = [
  {
    title: 'Career Counselling',
    body: 'Guidance and support through academic and career decisions.',
  },
  {
    title: 'Assessments',
    body: 'Experiences with assessment-based insights and self-understanding.',
  },
  {
    title: 'Student Development',
    body: 'Communication, confidence and workplace-readiness programmes.',
  },
  {
    title: 'Corporate & Institutional Training',
    body: 'Learning experiences for teams, professionals and students.',
  },
  {
    title: 'IELTS Training',
    body: 'Learner experiences with structured English and IELTS preparation.',
  },
]

export const Testimonials = () => (
  <>
    <PageHero
      eyebrow="Testimonials"
      title={
        <>
          Real Experiences.
          <br />
          <span className="script font-normal text-burgundy">Real Perspectives.</span>
        </>
      }
      body="The most meaningful measure of any learning experience is the difference it makes to the people who take part. Explore experiences and feedback from students, parents, professionals and organisations who have engaged with Fenix Learning Services."
      primary={{ label: 'Leave a Review', to: '/reviews' }}
      script={
        <>
          Meaningful
          <br />
          Impact
        </>
      }
      mediaLabel="Happy students"
      compact
    />

    <Section tone="cream">
      <SectionHeading
        eyebrow="What People Say About Fenix"
        title={
          <>
            In Their <span className="script font-normal">Own Words</span>
          </>
        }
        align="center"
      />
      {/* Masonry columns, since the testimonials vary a lot in length */}
      <div className="mt-12 gap-6 sm:columns-2 lg:columns-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={(index % 3) * 80} className="mb-6 break-inside-avoid">
            <TestimonialCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>

    <Section tone="warm" width="narrow" className="py-14">
      <figure className="flex flex-col items-center gap-4 text-center">
        <span className="font-accent text-6xl leading-none text-rose" aria-hidden>
          &ldquo;
        </span>
        <ScriptAccent size="lg" className="text-midnight">
          Guiding you at every step, from self-discovery to success.
        </ScriptAccent>
        <figcaption className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase">
          Fenix Learning Services
        </figcaption>
      </figure>
    </Section>

    {/* Experiences across learning journeys */}
    <Section tone="cream">
      <SectionHeading
        eyebrow="Experiences Across Different Learning Journeys"
        title={
          <>
            Every Journey Looks a Little{' '}
            <span className="script font-normal">Different</span>
          </>
        }
        align="center"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {journeys.map((item, index) => (
          <Reveal as="li" key={item.title} delay={(index % 3) * 70}>
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-rose/25 bg-cream-warm p-6">
              <h3 className="font-display text-base font-semibold text-burgundy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>

    {/* Review invitation */}
    <Section tone="cream" width="narrow" className="py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Eyebrow centered>Have You Worked With Fenix?</Eyebrow>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Your experience <span className="script font-normal">matters.</span>
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          If you have participated in a Fenix programme, training session or counselling
          experience, we&rsquo;d love to hear about it.
        </p>
        <ButtonLink to="/reviews" variant="secondary" arrow className="mt-2">
          Leave a Review
        </ButtonLink>
      </div>
    </Section>

    <PartnersStrip />

    <CtaBand
      title={
        <>
          Write the Next <span className="script font-normal">Story</span>
        </>
      }
      body="Book a consultation and take the first step towards your goals."
    />
  </>
)
