import { useState } from 'react'
import { articles } from '../data/content'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { cn } from '../lib/cn'
import { ArticleCard } from '../components/sections/InsightsSection'
import { PageHero } from '../components/sections/PageHero'
import { CtaBand } from '../components/sections/CtaBand'

const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))]

export const Insights = () => {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? articles : articles.filter((a) => a.category === active)

  return (
    <>
      <PageHero
        eyebrow="Fenix Insights"
        title={
          <>
            Ideas for Your
            <br />
            <span className="script font-normal text-burgundy">Next Step.</span>
          </>
        }
        body="Practical perspectives on careers, student development, parenting, assessments, workplace skills and English-language learning."
        primary={{ label: 'Explore Our Services', to: '/services' }}
        script={
          <>
            Knowledge Today,
            <br />A Brighter Tomorrow
          </>
        }
        mediaLabel="Reading — insights"
        compact
      />

      <Section tone="cream">
        <SectionHeading
          eyebrow="Latest Articles"
          title={
            <>
              From the <span className="script font-normal">Fenix Desk</span>
            </>
          }
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors',
                active === category
                  ? 'border-burgundy bg-burgundy text-cream'
                  : 'border-rose/40 text-ink-soft hover:border-burgundy hover:text-burgundy',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((article, index) => (
            <Reveal key={article.slug} delay={(index % 3) * 80}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="warm" width="narrow" className="py-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-xl font-semibold text-burgundy">More Coming Soon</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            We&rsquo;re preparing useful resources to help students, parents, professionals and
            organisations make more informed decisions and keep growing.
          </p>
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Have a Question We Have Not <span className="script font-normal">Written About?</span>
          </>
        }
        body="Ask it directly — we are happy to point you in the right direction."
      />
    </>
  )
}
