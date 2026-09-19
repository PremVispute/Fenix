import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { articles, getArticle } from '../data/content'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Media } from '../components/ui/Media'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { formatDate } from '../lib/format'
import { ArticleCard } from '../components/sections/InsightsSection'
import { CtaBand } from '../components/sections/CtaBand'

export const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticle(slug)

  if (!article) return <Navigate to="/insights" replace />

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <>
      <div className="border-b border-rose/25 bg-cream">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 py-3 text-xs text-ink-soft">
            <Link to="/" className="hover:text-burgundy">Home</Link>
            <ChevronRight className="size-3" aria-hidden />
            <Link to="/insights" className="hover:text-burgundy">Insights</Link>
            <ChevronRight className="size-3" aria-hidden />
            <span className="max-w-[18rem] truncate font-medium text-burgundy">{article.title}</span>
          </nav>
        </Container>
      </div>

      <article>
        <Section tone="warm" width="narrow" className="pb-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>{article.category}</Eyebrow>
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">{article.title}</h1>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
              <span>{formatDate(article.date)}</span>
              <span aria-hidden>·</span>
              <span>{article.readingTime}</span>
            </div>
            <p className="text-lg leading-relaxed text-ink-soft">{article.excerpt}</p>
          </div>
        </Section>

        <Container width="narrow">
          <Media
            label={article.category}
            alt=""
            className="aspect-16/9 w-full rounded-3xl shadow-[var(--shadow-card)]"
          />
        </Container>

        <Section tone="warm" width="narrow" className="pt-10">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-soft">
            {article.body.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'text-lg text-ink' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            to="/insights"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy-deep"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to all insights
          </Link>
        </Section>
      </article>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Keep Reading"
          title={
            <>
              More <span className="script font-normal">Insights</span>
            </>
          }
          action={{ label: 'View All Articles', to: '/insights' }}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <ArticleCard article={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
