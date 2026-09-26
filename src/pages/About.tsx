import { Eye, Gem, Target } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Media } from '../components/ui/Media'
import { images } from '../data/images'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { Reveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/sections/PageHero'
import { CtaBand } from '../components/sections/CtaBand'
import { credentials, differentiators, values } from '../data/content'

const purpose = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To empower individuals through personalised guidance, assessment-based insights and practical skill development, helping them make informed choices and turn their potential into meaningful progress.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'To create an environment of powerful learning where individuals can recognise their strengths, develop their capabilities and work towards consistent, meaningful performance.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    body: 'Integrity, empathy, excellence, inclusivity and growth — the principles behind every conversation and programme.',
  },
]

const areasOfWork = [
  {
    title: 'Career Counselling',
    body: 'Guidance for academic choices, career exploration and professional direction.',
  },
  {
    title: 'Assessments & Career Exploration',
    body: 'DMIT, Psychometric / RIASEC, Growing Mind Assessment and IRIS Analysis.',
  },
  {
    title: 'Skill Development',
    body: 'Soft skills, communication, leadership and professional development.',
  },
  {
    title: 'Industry-Focused Training',
    body: 'Hospitality, campus-to-corporate and workplace-oriented training.',
  },
  {
    title: 'IELTS Training',
    body: 'Structured preparation across Listening, Reading, Writing and Speaking.',
  },
]

const approach = [
  { title: 'Understand', body: 'Start with the individual, their goals, aspirations, strengths and challenges.' },
  {
    title: 'Assess',
    body: 'Where appropriate, use assessment tools to gain additional perspectives on interests, preferences, personality and areas of development.',
  },
  { title: 'Guide', body: 'Turn relevant insights into practical conversations, possibilities and next steps.' },
  { title: 'Develop', body: 'Build the skills, confidence and capabilities needed to move forward.' },
]

const openingQuestions = [
  'What am I good at?',
  'What career could suit me?',
  'What skills do I need to develop?',
  'How can I prepare for what’s next?',
]

export const About = () => (
  <>
    <PageHero
      eyebrow="About Fenix"
      title={
        <>
          New Perspectives.
          <br />
          <span className="script font-normal text-burgundy">Brighter Futures.</span>
        </>
      }
      body="Helping people understand their potential and take their next step with confidence. Through career counselling, assessments, skill development and practical training, Fenix supports students, professionals and organisations at important stages of learning and career development."
      primary={{ label: 'Explore Our Services', to: '/services' }}
      script={
        <>
          New Perspectives
          <br />
          Brighter Futures
        </>
      }
      mediaLabel="Sunrise — new perspectives"
      mediaSrc={images.aboutHero}
      compact
    />

    {/* About Fenix + areas of work */}
    <Section tone="warm">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <SectionHeading
          eyebrow="About Fenix"
          title={
            <>
              Transforming Potential Into <span className="script font-normal">Performance</span>
            </>
          }
          body="Fenix Learning Services was created with a simple purpose: to help people move from potential to purposeful action. Our work brings together career guidance, assessment-based insights and practical learning to support individuals in understanding their strengths, exploring possibilities and developing the skills they need for their next step."
        />
        <div className="flex flex-col gap-5">
          <p className="text-sm leading-relaxed text-ink-soft">
            From a student considering future career options to a professional looking to
            strengthen workplace skills, Fenix offers personalised guidance and learning solutions
            based on individual needs. Our areas of work include:
          </p>
          <ul className="flex flex-col divide-y divide-rose/25 border-y border-rose/25">
            {areasOfWork.map((area, index) => (
              <Reveal as="li" key={area.title} delay={index * 60}>
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                  <h3 className="font-display text-sm font-semibold text-burgundy sm:w-56 sm:shrink-0">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{area.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* Mission, vision, values */}
    <Section tone="cream">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_0.75fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title={
              <>
                Mission, Vision &amp; <span className="script font-normal">Values</span>
              </>
            }
            body="Fenix is built around the belief that better understanding can lead to better choices — and that meaningful development happens when insight is followed by action."
          />
          <ul className="grid gap-6 sm:grid-cols-3">
            {purpose.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 90}>
                <div className="flex h-full flex-col gap-3 border-l border-rose/30 pl-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-rose-mist text-burgundy">
                    <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-burgundy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 60}>
                <div className="flex h-full flex-col gap-1.5 rounded-2xl border border-rose/25 bg-cream-warm p-5">
                  <h4 className="font-display text-base font-semibold text-burgundy">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-soft">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <figure className="flex flex-col gap-4 border-l-2 border-burgundy/30 pl-6">
          <span className="font-accent text-6xl leading-none text-rose" aria-hidden>
            &ldquo;
          </span>
          <ScriptAccent size="md" className="text-midnight">
            Growth isn’t always about doing more. Sometimes it begins with understanding what suits
            you, what motivates you and where your strengths can take you.
          </ScriptAccent>
          <figcaption className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase">
            Fenix Learning Services
          </figcaption>
        </figure>
      </div>
    </Section>

    {/* A different way of looking at growth */}
    <Section tone="warm">
      <SectionHeading
        eyebrow="A Different Way of Looking at Growth"
        title={
          <>
            Understand Yourself. Explore Your Possibilities.{' '}
            <span className="script font-normal">Develop Your Potential.</span>
          </>
        }
        body="That is why Fenix takes an approach that connects understanding, assessment, guidance and development."
        align="center"
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {approach.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 80}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-rose/25 bg-cream p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-burgundy/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>

    {/* Founder */}
    <section className="bg-cream-warm">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <Media
            src={images.founderPortrait}
            label="Founder portrait — Sumeet Bhatia"
            alt="Portrait of Sumeet Bhatia, founder of Fenix Learning Services"
            className="h-full min-h-[22rem] w-full"
          />
          <ScriptAccent className="absolute top-8 left-8 max-w-[10rem] text-burgundy">
            Experience That Shapes Our Approach
          </ScriptAccent>
        </div>
        <div className="flex flex-col justify-center gap-5 px-6 py-14 sm:px-12 lg:px-16">
          <Eyebrow>Meet the Founder</Eyebrow>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Sumeet <span className="script font-normal text-burgundy">Bhatia</span>
          </h2>
          <p className="text-xs font-semibold tracking-[0.18em] text-rose uppercase">
            Founder &amp; CEO, Fenix Learning Services
          </p>
          <div className="flex max-w-xl flex-col gap-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            <p>
              Fenix Learning Services is a founder-led learning and development practice, allowing
              clients to work directly with the professional leading their counselling and training
              engagements.
            </p>
            <p>
              Sumeet is a hospitality professional with 25 years of experience in the hotel
              industry, having opened 9 star-category hotels across India and turned around many a
              sick hotel unit into a profitable venture.
            </p>
            <p>
              Sumeet Bhatia’s professional journey spans hospitality, travel, training and career
              development. His work with Fenix covers career counselling, soft skills training,
              assessments, IELTS training, child psychology-related learning programmes and
              industry-focused professional development.
            </p>
            <p>
              His experience across hospitality and education has shaped an approach that combines
              practical industry knowledge with personalised learning and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Credentials */}
    <Section tone="cream">
      <SectionHeading
        eyebrow="Experience & Professional Training"
        title={
          <>
            Learning <span className="script font-normal">Never Stops</span>
          </>
        }
        body="Fenix’s services are supported by professional training and certifications across counselling, assessment, soft skills and language training."
        align="center"
      />
      <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((item, index) => (
          <Reveal as="li" key={item.area} delay={(index % 4) * 70}>
            <div className="flex h-full flex-col gap-1 border-t border-rose/30 pt-4">
              <h3 className="font-display text-sm font-semibold text-burgundy">{item.area}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>

    {/* What makes Fenix different */}
    <Section tone="cream">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="What Makes Fenix Different?"
            title={
              <>
                Personal Guidance. Practical Learning.{' '}
                <span className="script font-normal">Purposeful Growth.</span>
              </>
            }
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {differentiators.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80}>
                <div className="flex h-full flex-col gap-2">
                  <h3 className="font-display text-base font-semibold text-burgundy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center rounded-3xl bg-burgundy p-10 text-center">
          <ScriptAccent size="lg" className="text-cream">
            Different Minds.
            <br />
            Brighter Futures.
          </ScriptAccent>
        </div>
      </div>
    </Section>

    {/* From potential to possibility */}
    <Section tone="warm" width="narrow">
      <div className="flex flex-col items-center gap-5 text-center">
        <Eyebrow centered>From Potential to Possibility</Eyebrow>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          You don’t have to have everything figured out{' '}
          <span className="script font-normal">before you begin.</span>
        </h2>
        <p className="text-sm leading-relaxed text-ink-soft">
          Sometimes the first step is simply asking the right questions.
        </p>
        <ul className="mt-2 flex flex-wrap justify-center gap-3">
          {openingQuestions.map((question) => (
            <li
              key={question}
              className="rounded-full border border-rose/40 bg-cream px-4 py-2 text-sm text-ink"
            >
              {question}
            </li>
          ))}
        </ul>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Fenix Learning Services is here to help you explore those questions, understand your
          options and take your next step with greater clarity.
        </p>
        <ButtonLink to="/services" variant="secondary" arrow className="mt-2">
          Explore Our Services
        </ButtonLink>
      </div>
    </Section>

    <CtaBand
      title={
        <>
          Let’s Define Your <span className="script font-normal">Next Step.</span>
        </>
      }
      body="Whether you’re exploring a career, developing new skills or preparing for a new professional chapter, Fenix Learning Services can help you begin with greater clarity and confidence."
    />
  </>
)
