import { Building2, GraduationCap, Hotel, Landmark, Layers, Sparkles, Target, Users } from 'lucide-react'
import { servicesByCategory } from '../data/services'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Reveal } from '../components/ui/Reveal'
import { Media } from '../components/ui/Media'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { ButtonLink } from '../components/ui/Button'
import { Eyebrow } from '../components/ui/Eyebrow'
import { StatBand } from '../components/ui/StatBand'
import { PageHero } from '../components/sections/PageHero'
import { PartnersStrip } from '../components/sections/PartnersStrip'
import { FaqSection } from '../components/sections/FaqSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CtaBand } from '../components/sections/CtaBand'

const engagements = [
  {
    icon: Target,
    title: 'Understand',
    body: 'Identify the audience, learning requirements and objectives.',
  },
  {
    icon: Layers,
    title: 'Learn',
    body: 'Introduce relevant concepts, frameworks and practical approaches.',
  },
  {
    icon: Users,
    title: 'Practise',
    body: 'Use activities, scenarios and guided exercises to reinforce learning.',
  },
  {
    icon: Building2,
    title: 'Apply',
    body: 'Connect learning to academic, professional or workplace situations.',
  },
  {
    icon: Sparkles,
    title: 'Develop',
    body: 'Encourage continued application and personal growth beyond the training session.',
  },
]

const institutionFocus = [
  'Communication skills',
  'Interview preparation',
  'Professional grooming',
  'Workplace etiquette',
  'Confidence building',
  'Presentation skills',
  'Leadership development',
  'Campus to Corporate readiness',
  'Career exploration and counselling',
  'Assessment-based development',
]

const corporateFocus = [
  'Communication',
  'Leadership',
  'Emotional Intelligence',
  'Teamwork',
  'Presentation skills',
  'Conflict management',
  'Confidence and professional presence',
  'Workplace effectiveness',
  'Training and facilitation skills',
]

const corporateFaqs = [
  {
    question: 'What types of organisations does Fenix work with?',
    answer:
      'Fenix\u2019s services can support corporates, educational institutions, student groups and professional audiences.',
  },
  {
    question: 'Can training be customised?',
    answer:
      'Yes. Training can be structured around the audience, learning objectives and requirements of the organisation or institution.',
  },
  {
    question: 'Can institutions arrange Campus to Corporate programmes?',
    answer:
      'Yes. Campus to Corporate training is designed specifically to support students and graduates preparing for professional environments.',
  },
  {
    question: 'Can corporate training be conducted for teams?',
    answer: 'Yes. Programmes can be structured for teams or professional groups based on their learning requirements.',
  },
  {
    question: 'What topics can be included in corporate training?',
    answer:
      'Depending on the programme, topics can include communication, leadership, emotional intelligence, teamwork, presentation skills, conflict management, confidence, professional presence and training skills.',
  },
  {
    question: 'How do we discuss a training requirement?',
    answer:
      'Get in touch with Fenix with your audience, objectives and requirements to explore a suitable training programme.',
  },
]

const sectors = [
  { icon: GraduationCap, label: 'Colleges & Universities' },
  { icon: Hotel, label: 'Hospitality & Resorts' },
  { icon: Landmark, label: 'Corporates & Enterprises' },
  { icon: Building2, label: 'Schools & Institutions' },
]

export const Corporates = () => (
  <>
    <PageHero
      eyebrow="For Corporates & Institutions"
      title={
        <>
          Develop People.
          <br />
          <span className="script font-normal text-burgundy">Strengthen Performance.</span>
        </>
      }
      body="People are at the heart of every organisation and institution. Fenix works with corporates, educational institutions and professional groups to support communication, leadership, workplace readiness and people development through practical, learning-focused programmes."
      primary={{ label: 'Discuss Your Needs', to: '/contact' }}
      secondary={{ label: 'Explore Training', to: '/services/training-development' }}
      script={
        <>
          Empower
          <br />
          Your Team
        </>
      }
      mediaLabel="Corporate training session"
      compact
    />

    <Section tone="cream">
      <SectionHeading
        eyebrow="Training & Development"
        title={
          <>
            Training That Connects Learning With{' '}
            <span className="script font-normal">Real-World Needs</span>
          </>
        }
        body="Every organisation has different people, priorities and challenges. Fenix offers training that can be adapted to the audience — whether the goal is developing workplace skills, preparing students for professional life, strengthening leadership capabilities or building more effective trainers."
        action={{ label: 'View All Services', to: '/services' }}
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {servicesByCategory('training-development').map((service, index) => (
          <Reveal key={service.slug} delay={(index % 5) * 70}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>

    <Section tone="warm">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="relative">
          <Media
            label="Workshop in progress"
            alt=""
            className="aspect-4/3 w-full rounded-3xl shadow-[var(--shadow-card)]"
          />
          <ScriptAccent size="sm" className="absolute -top-4 -left-2 max-w-[9rem] text-burgundy">
            Learning that Lasts
          </ScriptAccent>
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="How We Engage"
            title={
              <>
                A Practical Approach to <span className="script font-normal">Learning</span>
              </>
            }
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {engagements.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80}>
                <div className="flex h-full flex-col gap-2">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-rose-mist text-burgundy">
                    <item.icon className="size-4" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold text-burgundy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <ButtonLink to="/contact" arrow className="self-start">
            Request a Proposal
          </ButtonLink>
        </div>
      </div>
    </Section>

    {/* For institutions / for corporates */}
    <Section tone="cream">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {[
          {
            eyebrow: 'For Educational Institutions',
            title: 'Prepare Students for What Comes Next.',
            body: 'Academic knowledge is only one part of professional readiness. Fenix can work with institutions to support students through programmes focused on:',
            items: institutionFocus,
            label: 'Discuss an Institutional Programme',
          },
          {
            eyebrow: 'For Corporates',
            title: 'Invest in the Skills Behind Performance.',
            body: 'Professional growth involves more than technical expertise. Fenix training can support organisations in developing capabilities such as:',
            items: corporateFocus,
            label: 'Discuss Corporate Training',
          },
        ].map((block) => (
          <Reveal key={block.eyebrow}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-rose/25 bg-cream-warm p-8">
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <h3 className="font-display text-xl font-semibold text-burgundy sm:text-2xl">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{block.body}</p>
              <ul className="flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-rose/35 bg-cream px-3 py-1.5 text-xs text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink to="/contact" variant="link" arrow className="mt-auto self-start pt-2">
                {block.label}
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm leading-relaxed text-ink-soft">
        Effective training should not end when the session does. Fenix focuses on helping
        participants understand, practise and apply skills in situations relevant to their academic
        or professional environment.
      </p>
    </Section>

    <Section tone="warm" className="py-14">
      <SectionHeading
        eyebrow="Sectors We Serve"
        title={
          <>
            Experience Across <span className="script font-normal">Industries</span>
          </>
        }
        align="center"
      />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map((sector, index) => (
          <Reveal as="li" key={sector.label} delay={index * 70}>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-rose/25 bg-cream-warm p-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-burgundy text-cream">
                <sector.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="font-display text-sm font-semibold">{sector.label}</h3>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>

    <StatBand quote="Strong people build strong organisations." />

    <PartnersStrip />

    <TestimonialsSection />

    <FaqSection items={corporateFaqs} />

    <CtaBand
      title={
        <>
          Let&rsquo;s Build the Right <span className="script font-normal">Learning Experience</span>
        </>
      }
      body="Whether you're preparing students for the workplace or developing skills within your organisation, start with a conversation about what your people need."
      primary={{ label: 'Enquire About Corporate Training', to: '/contact' }}
      secondary={{ label: 'Institutional Training', to: '/contact' }}
    />
  </>
)
