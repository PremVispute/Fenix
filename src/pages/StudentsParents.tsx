import { HeartHandshake, Lightbulb, School, Sparkles } from 'lucide-react'
import { servicesByCategory } from '../data/services'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Reveal } from '../components/ui/Reveal'
import { Media } from '../components/ui/Media'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { StatBand } from '../components/ui/StatBand'
import { PageHero } from '../components/sections/PageHero'
import { ProcessSection } from '../components/sections/ProcessSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { CtaBand } from '../components/sections/CtaBand'

const concerns = [
  {
    icon: Lightbulb,
    title: '“What is my child naturally good at?”',
    body: 'Assessment-based insights can add another perspective on strengths, interests and learning preferences.',
  },
  {
    icon: School,
    title: '“Which career options could suit their interests?”',
    body: 'Career counselling explores possibilities alongside a student’s own goals and circumstances.',
  },
  {
    icon: HeartHandshake,
    title: '“How can I support my child without putting pressure on them?”',
    body: 'Support starts with understanding the individual — not comparing them with others.',
  },
  {
    icon: Sparkles,
    title: '“My child is unsure about their future — where do we begin?”',
    body: 'Not knowing can itself be the starting point. You don’t always need the answers before you begin.',
  },
]

const studentOutcomes = [
  'Explore your interests and strengths',
  'Understand different career possibilities',
  'Make more informed academic choices',
  'Build communication and professional skills',
  'Prepare for higher education opportunities',
  'Develop greater confidence in your next step',
]

const studentParentFaqs = [
  {
    question: 'Does my child need to take an assessment before career counselling?',
    answer:
      'No. Career counselling can be undertaken independently. Assessments may be included where they are relevant to the student\u2019s needs.',
  },
  {
    question: 'Which assessment is right for my child?',
    answer:
      'This depends on what you are hoping to understand or explore. Fenix can help you identify the appropriate service based on your requirements.',
  },
  {
    question: 'Is an assessment a diagnosis?',
    answer:
      'No. Fenix\u2019s assessment services are intended to provide structured insights and support exploration. They should not be treated as a medical or psychological diagnosis.',
  },
  {
    question: 'Can parents participate in the counselling process?',
    answer:
      'Yes. Parent involvement can be useful, particularly when discussing academic choices, career exploration and a student\u2019s development.',
  },
  {
    question: 'Can Fenix help students who have no idea what career they want?',
    answer:
      'Yes. Not knowing what you want to pursue can be a starting point for exploration. Career counselling can help students understand their options and identify areas worth exploring.',
  },
  {
    question: 'Do you work only with school students?',
    answer:
      'No. Services can also support college students, graduates and young professionals depending on their requirements.',
  },
]

const simpleApproach = [
  { title: 'Understand', body: 'Start with the student\u2019s individual strengths, interests, needs and aspirations.' },
  { title: 'Explore', body: 'Look at possible academic, career and development pathways.' },
  { title: 'Assess', body: 'Where appropriate, use assessment-based insights to add another perspective.' },
  { title: 'Guide', body: 'Use the information to support more informed conversations and decisions.' },
  { title: 'Develop', body: 'Build the skills and confidence needed for the next stage.' },
]

export const StudentsParents = () => (
  <>
    <PageHero
      eyebrow="For Students & Parents"
      title={
        <>
          Understand Their Potential.
          <br />
          <span className="script font-normal text-burgundy">Support Their Journey.</span>
        </>
      }
      body="Every student is different. Their interests, strengths, learning preferences and aspirations can shape the choices they make. Fenix helps students and parents navigate these stages with assessment-based insights, career guidance and practical skill development."
      primary={{ label: 'Explore Our Services', to: '/services' }}
      secondary={{ label: 'Explore Assessments', to: '/services/assessments-career' }}
      script={
        <>
          Together
          <br />
          Towards Success
        </>
      }
      mediaLabel="Student and parent"
      compact
    />

    <Section tone="cream">
      <SectionHeading
        eyebrow="The Right Questions Can Make a Difference"
        title={
          <>
            The Questions Families <span className="script font-normal">Bring Us</span>
          </>
        }
        body="You don’t always need to have the answers before you begin. Sometimes you simply need the right conversation."
        align="center"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {concerns.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 80}>
            <div className="flex h-full gap-4 rounded-2xl border border-rose/25 bg-cream-warm p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-mist text-burgundy">
                <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-base font-semibold text-burgundy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>

    {/* For students */}
    <Section tone="warm">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <SectionHeading
          eyebrow="For Students"
          title={
            <>
              Your future doesn&rsquo;t have to be figured out{' '}
              <span className="script font-normal">all at once.</span>
            </>
          }
          body="Whether you're unsure about your career, exploring your strengths or preparing for the next stage of your education, you can start by understanding where you are today."
        />
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {studentOutcomes.map((item, index) => (
            <Reveal as="li" key={item} delay={index * 60}>
              <div className="flex items-start gap-2.5 border-t border-rose/30 pt-3 text-sm text-ink-soft">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-burgundy" aria-hidden />
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>

    <Section tone="cream">
      <SectionHeading
        eyebrow="How Can Fenix Help?"
        title={
          <>
            Assessments &amp; <span className="script font-normal">Career Guidance</span>
          </>
        }
        action={{ label: 'View All Services', to: '/services' }}
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {servicesByCategory('assessments-career').map((service, index) => (
          <Reveal key={service.slug} delay={(index % 5) * 70}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>

    <Section tone="warm">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="For Parents"
            title={
              <>
                Child Psychology &amp; <span className="script font-normal">Parenting Support</span>
              </>
            }
            body="Parents naturally want the best for their children. But understanding what a child needs, how they learn and where their interests lie can sometimes be challenging. Fenix offers assessment and counselling services that help parents gain additional perspectives and have more informed conversations."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {servicesByCategory('child-psychology-parenting').map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col gap-4">
          <Media
            label="Parent and child"
            alt=""
            tone="sage"
            className="aspect-3/4 w-full rounded-[999px_999px_2rem_2rem] shadow-[var(--shadow-card)]"
          />
          <ScriptAccent className="text-burgundy">
            Every Child,
            <br />A Different Path
          </ScriptAccent>
        </div>
      </div>
    </Section>

    <StatBand quote="Guiding you at every step, from self-discovery to success." />

    <ProcessSection
      steps={simpleApproach}
      eyebrow="A Simple Approach"
      title={
        <>
          From Understanding to <span className="script font-normal">Next Steps</span>
        </>
      }
      body="Five stages that connect understanding a student with the skills they need for what comes next."
    />

    <TestimonialsSection />

    <FaqSection items={studentParentFaqs} />

    <CtaBand
      title={
        <>
          Ready to Take the <span className="script font-normal">Next Step?</span>
        </>
      }
      body="Whether you're a student looking for direction or a parent looking for a better way to support your child, the journey can begin with understanding."
    />
  </>
)
