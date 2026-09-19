import { useState, type FormEvent } from 'react'
import { Check, Compass, Globe2, Mail, MapPin, Phone, Presentation, Users } from 'lucide-react'
import { site } from '../data/site'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Button, ButtonLink } from '../components/ui/Button'
import { Media } from '../components/ui/Media'
import { Reveal } from '../components/ui/Reveal'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { PageHero } from '../components/sections/PageHero'
import { FaqSection } from '../components/sections/FaqSection'

const fieldClass =
  'w-full rounded-xl border border-rose/40 bg-cream-warm px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 transition-colors focus:border-burgundy focus:outline-none'

const labelClass = 'flex flex-col gap-1.5 text-xs font-semibold tracking-[0.12em] text-ink uppercase'

const details = [
  { icon: Phone, label: 'Phone', value: site.contact.phone, href: site.contact.phoneHref },
  { icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: MapPin, label: 'In Person', value: 'Bengaluru, Karnataka, India' },
  { icon: Globe2, label: 'Online', value: 'Available based on programme and requirement' },
]

const helpAreas = [
  {
    icon: Compass,
    title: 'Assessments & Career',
    body: 'Explore strengths, interests and possibilities through assessment-based services and career counselling.',
  },
  {
    icon: Presentation,
    title: 'Training & Development',
    body: 'Build communication, leadership, workplace and professional skills through practical training.',
  },
  {
    icon: Globe2,
    title: 'IELTS & Language Training',
    body: 'Develop your English language skills and prepare for IELTS across Listening, Reading, Writing and Speaking.',
  },
  {
    icon: Users,
    title: 'Corporate & Institutional Training',
    body: 'Discuss training requirements for your organisation, institution, students or professional groups.',
  },
]

const iAmOptions = [
  'Student',
  'Parent / Guardian',
  'Working Professional',
  'Educational Institution',
  'Corporate / Organisation',
  'Other',
]

const helpOptions = [
  'Assessments & Career',
  'Training & Development',
  'IELTS / Language Training',
  'Corporate / Institutional Training',
  'Not Sure — Help Me Choose',
]

const modeOptions = ['Online', 'In Person', 'Either']

export const Contact = () => {
  const [sent, setSent] = useState(false)

  /* No backend yet — swap this for the form endpoint when it is ready. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s Define Your
            <br />
            <span className="script font-normal text-burgundy">Next Step.</span>
          </>
        }
        body="Have a question, need guidance, or looking for the right learning or training programme? Tell us what you're looking for, and let's start the conversation."
        primary={{ label: 'Enquire Now', to: '#enquire' }}
        script={
          <>
            Progress Begins
            <br />
            with a Conversation
          </>
        }
        mediaLabel="Consultation"
        compact
      />

      {/* How can we help */}
      <Section tone="warm">
        <SectionHeading
          eyebrow="How Can We Help?"
          title={
            <>
              Find the Right <span className="script font-normal">Starting Point</span>
            </>
          }
          body="Whether you're a student, parent, professional, educational institution or organisation, Fenix Learning Services can help you explore the right service for your needs."
          align="center"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpAreas.map((area, index) => (
            <Reveal as="li" key={area.title} delay={index * 70}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-rose/25 bg-cream p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-rose-mist text-burgundy">
                  <area.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="font-display text-base font-semibold text-burgundy">{area.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="cream" id="enquire">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Form */}
          <div className="flex flex-col gap-6 rounded-3xl border border-rose/25 bg-cream-warm p-7 sm:p-9">
            <SectionHeading
              eyebrow="Enquire Now"
              title={
                <>
                  Tell Us What You&rsquo;re <span className="script font-normal">Looking For</span>
                </>
              }
            />

            {sent ? (
              <div
                role="status"
                className="flex flex-col items-start gap-3 rounded-2xl border border-sage/40 bg-sage-soft/50 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-sage text-cream">
                  <Check className="size-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold">Thank you — enquiry received.</h3>
                <p className="text-sm text-ink-soft">
                  Fenix will get back to you shortly. For anything urgent, call{' '}
                  <a href={site.contact.phoneHref} className="font-semibold text-burgundy">
                    {site.contact.phone}
                  </a>
                  .
                </p>
                <Button variant="secondary" onClick={() => setSent(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Name *
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Enter your full name"
                    />
                  </label>
                  <label className={labelClass}>
                    Email Address *
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="Enter your email address"
                    />
                  </label>
                  <label className={labelClass}>
                    Phone Number *
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="Enter your phone number"
                    />
                  </label>
                  <label className={labelClass}>
                    I Am A *
                    <select name="role" required className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {iAmOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={labelClass}>
                    How Can We Help You? *
                    <select name="interest" required className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {helpOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={labelClass}>
                    Preferred Mode
                    <select name="mode" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {modeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className={labelClass}>
                  Tell Us More
                  <textarea
                    name="message"
                    rows={5}
                    className={fieldClass}
                    placeholder="Tell us a little about what you are looking for."
                  />
                </label>
                <Button type="submit" arrow className="self-start">
                  Submit Enquiry
                </Button>
                <p className="text-xs leading-relaxed text-ink-soft">
                  By submitting this form, you agree that Fenix Learning Services may use the
                  information provided to respond to your enquiry and provide information related to
                  your request. Please refer to our{' '}
                  <a href="/privacy-policy" className="font-semibold text-burgundy hover:underline">
                    Privacy Policy
                  </a>{' '}
                  for details on how your information is handled.
                </p>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <ul className="grid gap-4 sm:grid-cols-2">
              {details.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-2 rounded-2xl border border-rose/25 bg-cream-warm p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-rose-mist text-burgundy">
                    <item.icon className="size-4" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="text-[0.65rem] font-semibold tracking-[0.2em] text-ink-soft uppercase">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium break-words text-burgundy hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>

            <p className="text-sm leading-relaxed text-ink-soft">
              Sessions and training formats can vary depending on the service and requirement.
            </p>

            <div className="relative overflow-hidden rounded-3xl">
              <Media label="Map — Bengaluru" alt="" className="aspect-4/3 w-full" tone="sage" />
            </div>

            <ScriptAccent className="text-burgundy">
              We ignite the flame to define your future.
            </ScriptAccent>
          </div>
        </div>
      </Section>

      {/* Not sure where to start */}
      <Section tone="warm" width="narrow" className="py-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow centered>Not Sure Where to Start?</Eyebrow>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            That&rsquo;s okay. Start with a{' '}
            <span className="script font-normal">conversation.</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            You don&rsquo;t need to know exactly which service you need. Tell us what you&rsquo;re
            looking to achieve, and we can help you understand where to begin.
          </p>
          <ButtonLink to="#enquire" variant="secondary" arrow className="mt-2">
            Not Sure — Help Me Choose
          </ButtonLink>
        </div>
      </Section>

      <FaqSection />
    </>
  )
}
