import { PenLine } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Eyebrow'
import { ButtonLink } from '../components/ui/Button'
import { CtaBand } from '../components/sections/CtaBand'

export const Blogs = () => (
  <>
    <Section tone="warm" width="narrow" className="py-24 lg:py-32">
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-mist text-burgundy">
          <PenLine className="size-6" strokeWidth={1.5} aria-hidden />
        </span>
        <Eyebrow centered>Fenix Blogs</Eyebrow>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Coming <span className="script font-normal text-burgundy">Soon</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ink-soft">
          We&rsquo;re preparing articles on careers, assessments, parenting, workplace skills and
          English-language learning. Check back soon.
        </p>
        <ButtonLink to="/services" variant="secondary" arrow className="mt-2">
          Explore Our Services
        </ButtonLink>
      </div>
    </Section>

    <CtaBand
      title={
        <>
          Have a Question in the <span className="script font-normal">Meantime?</span>
        </>
      }
      body="Ask it directly — we are happy to point you in the right direction."
    />
  </>
)
