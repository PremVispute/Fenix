import { ArrowRight } from 'lucide-react'
import { processSteps } from '../../data/content'
import { cn } from '../../lib/cn'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export const ProcessSection = ({
  steps = processSteps,
  eyebrow = 'Our Process',
  title = (
    <>
      From <span className="script font-normal">Insight</span> to Impact
    </>
  ),
  body = 'A simple, structured approach to help you move forward with clarity and confidence.',
}: {
  steps?: { title: string; body: string }[]
  eyebrow?: string
  title?: React.ReactNode
  body?: string
}) => (
  <Section tone="cream">
    <SectionHeading eyebrow={eyebrow} title={title} body={body} align="center" />
    <ol
      className={cn(
        'mt-12 grid gap-6 sm:grid-cols-2',
        steps.length === 3 && 'lg:grid-cols-3',
        steps.length === 4 && 'lg:grid-cols-4',
        steps.length >= 5 && 'lg:grid-cols-5',
      )}
    >
      {steps.map((step, index) => (
        <Reveal as="li" key={`${step.title}-${index}`} delay={index * 90} className="relative">
          <div className="flex h-full flex-col gap-3 rounded-2xl border border-rose/25 bg-cream-warm p-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-bold text-burgundy/25">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight
              className="absolute top-1/2 -right-4 hidden size-5 -translate-y-1/2 text-rose lg:block"
              aria-hidden
            />
          )}
        </Reveal>
      ))}
    </ol>
  </Section>
)
