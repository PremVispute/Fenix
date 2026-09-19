import { Section } from '../components/ui/Section'
import { ButtonLink } from '../components/ui/Button'
import { ScriptAccent } from '../components/ui/ScriptAccent'
import { Eyebrow } from '../components/ui/Eyebrow'

export const NotFound = () => (
  <Section tone="warm" width="narrow" className="py-24 text-center">
    <div className="flex flex-col items-center gap-5">
      <Eyebrow centered>Page Not Found</Eyebrow>
      <p className="font-display text-6xl font-bold text-burgundy/20">404</p>
      <h1 className="text-3xl font-semibold sm:text-4xl">
        This Page Took a <span className="script font-normal text-burgundy">Different Path</span>
      </h1>
      <p className="max-w-md text-sm text-ink-soft">
        The page you are looking for has moved or never existed. Let us point you somewhere useful.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/" arrow>
          Back to Home
        </ButtonLink>
        <ButtonLink to="/services" variant="secondary" arrow>
          Explore Services
        </ButtonLink>
      </div>
      <ScriptAccent className="mt-6 text-rose">Every path teaches something.</ScriptAccent>
    </div>
  </Section>
)
