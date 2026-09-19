import { testimonials } from '../../data/content'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCarousel } from '../ui/TestimonialCarousel'

export const TestimonialsSection = ({
  title = (
    <>
      What People <span className="script font-normal">Say</span>
    </>
  ),
}: {
  title?: React.ReactNode
}) => (
  <Section tone="cream">
    <SectionHeading
      eyebrow="Testimonials"
      title={title}
      body="Real stories. Meaningful impact."
      action={{ label: 'View All Testimonials', to: '/testimonials' }}
    />
    <div className="mt-10">
      <TestimonialCarousel items={testimonials} />
    </div>
  </Section>
)
