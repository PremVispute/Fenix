import { Building2, Presentation, Star, Users } from 'lucide-react'
import { stats } from '../../data/site'
import { Container } from './Container'
import { ScriptAccent } from './ScriptAccent'
import { Reveal } from './Reveal'

const icons = { users: Users, presentation: Presentation, building: Building2, star: Star }

export const StatBand = ({ quote }: { quote?: string }) => (
  <section className="bg-burgundy text-cream">
    <Container className="py-12 lg:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-4">
          {stats.map((stat, index) => {
            const Icon = icons[stat.icon]
            return (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="flex items-center gap-3 sm:justify-center lg:justify-start">
                  <Icon className="size-7 shrink-0 text-rose-soft" strokeWidth={1.4} aria-hidden />
                  <div>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-2xl font-bold sm:text-3xl">{stat.value}</dd>
                    <dd className="text-xs tracking-wide text-cream/70">{stat.label}</dd>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </dl>
        {quote && (
          <div className="flex items-start gap-3 border-t border-cream/20 pt-6 lg:max-w-xs lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <span className="font-accent text-5xl leading-none text-rose-soft" aria-hidden>
              &ldquo;
            </span>
            <ScriptAccent size="sm" className="text-cream/90">
              {quote}
            </ScriptAccent>
          </div>
        )}
      </div>
    </Container>
  </section>
)
