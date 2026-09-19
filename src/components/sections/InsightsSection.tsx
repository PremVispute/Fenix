import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { articles, type Article } from '../../data/content'
import { formatDate } from '../../lib/format'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Media } from '../ui/Media'
import { Reveal } from '../ui/Reveal'

export const ArticleCard = ({ article }: { article: Article }) => (
  <Link
    to={`/insights/${article.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rose/25 bg-cream-warm transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-[var(--shadow-lift)]"
  >
    <Media
      label={article.category}
      alt=""
      className="aspect-16/10 w-full"
      tone={article.category === 'Training' ? 'sage' : 'rose'}
    />
    <div className="flex flex-1 flex-col gap-2 p-5">
      <div className="flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-rose uppercase">
        <span>{formatDate(article.date)}</span>
        <span aria-hidden>·</span>
        <span>{article.readingTime}</span>
      </div>
      <h3 className="font-display text-base leading-snug font-semibold transition-colors group-hover:text-burgundy">
        {article.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-ink-soft">{article.excerpt}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy">
        Read More
        <ArrowRight
          className="size-3.5 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </div>
  </Link>
)

export const InsightsSection = () => (
  <Section tone="warm">
    <SectionHeading
      eyebrow="Fenix Insights"
      title={
        <>
          Ideas, Guidance &amp; <span className="script font-normal">Resources</span>
        </>
      }
      body="Perspectives on careers, assessments, learning and growth."
      action={{ label: 'View All Articles', to: '/insights' }}
    />
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 3).map((article, index) => (
        <Reveal key={article.slug} delay={index * 90}>
          <ArticleCard article={article} />
        </Reveal>
      ))}
    </div>
  </Section>
)
