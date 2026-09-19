import { faqs } from '../../data/content'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Accordion } from '../ui/Accordion'

export const FaqSection = ({ items = faqs }: { items?: { question: string; answer: string }[] }) => (
  <Section tone="warm">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Quick Answers to <span className="script font-normal">Common Questions</span>
          </>
        }
        body="Everything you might want to know before getting started."
      />
      <Accordion items={items} />
    </div>
  </Section>
)
