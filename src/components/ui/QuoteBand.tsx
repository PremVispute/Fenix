import { Container } from './Container'
import { ScriptAccent } from './ScriptAccent'

export const QuoteBand = ({ quote }: { quote: string }) => (
  <section className="bg-burgundy text-cream">
    <Container className="py-12 lg:py-14">
      <figure className="flex items-start justify-center gap-3">
        <span className="font-accent text-5xl leading-none text-rose-soft" aria-hidden>
          &ldquo;
        </span>
        <ScriptAccent size="md" className="text-cream/90">
          {quote}
        </ScriptAccent>
      </figure>
    </Container>
  </section>
)
