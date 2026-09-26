import { useState, type FormEvent } from 'react'
import { Check, Star } from 'lucide-react'
import { cn } from '../lib/cn'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button, ButtonLink } from '../components/ui/Button'
import { fieldClass, labelClass } from '../lib/form'

const serviceOptions = [
  'DMIT Assessment',
  'Psychometric / RIASEC Assessment',
  'Growing Mind Assessment',
  'IRIS Analysis',
  'Career Counselling',
  'Child Psychology & Parenting',
  'Soft Skills / Leadership Training',
  'Campus to Corporate Training',
  'Hospitality Training',
  'IELTS Training',
  'Other',
]

export const Reviews = () => {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [sent, setSent] = useState(false)

  /* No backend yet — swap this for the form endpoint when it is ready. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  const shown = hovered || rating

  return (
    <Section tone="warm" width="narrow">
      <div className="flex flex-col gap-8 rounded-3xl border border-rose/25 bg-cream p-7 sm:p-10">
        <SectionHeading
          eyebrow="Leave a Review"
          title={
            <>
              Share Your <span className="script font-normal">Experience</span>
            </>
          }
          body="If Fenix Learning Services has supported you through an assessment, counselling session, training programme or learning experience, we would appreciate hearing about it."
        />

        {sent ? (
          <div
            role="status"
            className="flex flex-col items-start gap-3 rounded-2xl border border-sage/40 bg-sage-soft/50 p-6"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-sage text-cream">
              <Check className="size-5" strokeWidth={2} aria-hidden />
            </span>
            <h2 className="font-display text-lg font-semibold">Thank you for your review.</h2>
            <p className="text-sm text-ink-soft">
              We read every review and truly appreciate you taking the time to share your experience.
            </p>
            <ButtonLink to="/testimonials" variant="secondary" arrow>
              Read Testimonials
            </ButtonLink>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-1.5 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                Your Rating *
              </legend>
              <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className="cursor-pointer" onMouseEnter={() => setHovered(value)}>
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      required
                      checked={rating === value}
                      onChange={() => setRating(value)}
                      className="peer sr-only"
                    />
                    <span className="sr-only">{value} out of 5</span>
                    <Star
                      className={cn(
                        'size-8 rounded-sm transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-burgundy',
                        value <= shown ? 'fill-burgundy text-burgundy' : 'text-rose',
                      )}
                      strokeWidth={1.4}
                      aria-hidden
                    />
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Name *
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Enter your name"
                />
              </label>
              <label className={labelClass}>
                You Are A
                <input
                  name="role"
                  className={fieldClass}
                  placeholder="e.g. Parent, Student, HR Manager"
                />
              </label>
            </div>

            <label className={labelClass}>
              Service Taken *
              <select name="service" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClass}>
              Your Review *
              <textarea
                name="review"
                rows={5}
                required
                className={fieldClass}
                placeholder="Tell us about your experience with Fenix."
              />
            </label>

            <label className="flex items-start gap-2.5 text-sm text-ink-soft">
              <input name="consent" type="checkbox" className="mt-1 accent-burgundy" />
              I am happy for Fenix Learning Services to publish this review on its website.
            </label>

            <Button type="submit" arrow className="self-start">
              Submit Review
            </Button>
          </form>
        )}
      </div>
    </Section>
  )
}
