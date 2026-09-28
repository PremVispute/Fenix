import { lazy, Suspense, useRef, useState, type FormEvent } from 'react'
import type HCaptchaWidget from '@hcaptcha/react-hcaptcha'
import { Check, Globe2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site } from '../data/site'
import { fieldClass, labelClass } from '../lib/form'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { FaqSection } from '../components/sections/FaqSection'

const details = [
  { icon: Phone, label: 'Phone', value: site.contact.phone, href: site.contact.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us on WhatsApp', href: site.contact.whatsappHref },
  { icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: MapPin, label: 'In Person', value: 'Bengaluru, Karnataka, India' },
  { icon: Globe2, label: 'Online', value: 'Available based on programme and requirement' },
]

const helpOptions = [
  'Assessments & Career',
  'Training & Development',
  'IELTS / Language Training',
  'Corporate / Institutional Training',
  'Not Sure — Help Me Choose',
]

/*
 * hCaptcha stays off until spam becomes a problem. To switch it on, enable it
 * in the Web3Forms dashboard and set VITE_HCAPTCHA=true, then rebuild.
 */
const captchaEnabled = import.meta.env.VITE_HCAPTCHA === 'true'
/* Web3Forms' shared hCaptcha site key for free plans. */
const captchaSitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'
/* Loaded on demand, so visitors don't download it while captcha is off. */
const HCaptcha = lazy(() => import('@hcaptcha/react-hcaptcha'))

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'captcha'

export const Contact = () => {
  const [status, setStatus] = useState<Status>('idle')
  const [captchaToken, setCaptchaToken] = useState('')
  const captchaRef = useRef<HCaptchaWidget>(null)

  /* Web3Forms emails each submission to the address tied to the access key. */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (captchaEnabled && !captchaToken) {
      setStatus('captcha')
      return
    }
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          ...(captchaEnabled && { 'h-captcha-response': captchaToken }),
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry: ${data.interest} — ${data.name}`,
          from_name: 'Fenix Website',
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    } finally {
      // A captcha token only works once, so ask for a fresh one next time.
      captchaRef.current?.resetCaptcha()
      setCaptchaToken('')
    }
  }

  return (
    <>
      <Section tone="warm" id="enquire" className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          {/* Form */}
          <div className="flex flex-col gap-6 rounded-3xl border border-rose/25 bg-cream p-7 sm:p-9">
            <SectionHeading
              eyebrow="Contact Us"
              title={
                <>
                  Let&rsquo;s Define Your <span className="script font-normal">Next Step</span>
                </>
              }
              body="Tell us what you're looking for and we'll get back to you."
            />

            {status === 'sent' ? (
              <div
                role="status"
                className="flex flex-col items-start gap-3 rounded-2xl border border-sage/40 bg-sage-soft/50 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-sage text-cream">
                  <Check className="size-5" strokeWidth={2} aria-hidden />
                </span>
                <h2 className="font-display text-lg font-semibold">Thank you — enquiry received.</h2>
                <p className="text-sm text-ink-soft">
                  Fenix will get back to you shortly. For anything urgent, call{' '}
                  <a href={site.contact.phoneHref} className="font-semibold text-burgundy">
                    {site.contact.phone}
                  </a>
                  .
                </p>
                <Button variant="secondary" onClick={() => setStatus('idle')}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot — hidden from people, bots that tick it are rejected by Web3Forms. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Name *
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Enter your full name"
                    />
                  </label>
                  <label className={labelClass}>
                    Phone Number *
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="Enter your phone number"
                    />
                  </label>
                  <label className={labelClass}>
                    Email Address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="Enter your email address"
                    />
                  </label>
                  <label className={labelClass}>
                    How Can We Help? *
                    <select name="interest" required className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {helpOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className={labelClass}>
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us a little about what you are looking for."
                  />
                </label>
                {captchaEnabled && (
                  <Suspense>
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={captchaSitekey}
                      reCaptchaCompat={false}
                      onVerify={(token) => {
                        setCaptchaToken(token)
                        setStatus((current) => (current === 'captcha' ? 'idle' : current))
                      }}
                      onExpire={() => setCaptchaToken('')}
                    />
                  </Suspense>
                )}
                {status === 'captcha' && (
                  <p role="alert" className="text-sm text-burgundy">
                    Please complete the captcha check before submitting.
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="text-sm text-burgundy">
                    Sorry, your enquiry could not be sent. Please try again, or call us on{' '}
                    <a href={site.contact.phoneHref} className="font-semibold underline">
                      {site.contact.phone}
                    </a>
                    .
                  </p>
                )}
                <Button type="submit" arrow className="self-start" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                </Button>
                <p className="text-xs leading-relaxed text-ink-soft">
                  By submitting this form, you agree that Fenix Learning Services may use the
                  information provided to respond to your enquiry. See our{' '}
                  <a href="/privacy-policy" className="font-semibold text-burgundy hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>

          {/* Details */}
          <ul className="flex flex-col gap-4">
            {details.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-rose/25 bg-cream p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-mist text-burgundy">
                  <item.icon className="size-4" strokeWidth={1.6} aria-hidden />
                </span>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <h3 className="text-[0.65rem] font-semibold tracking-[0.2em] text-ink-soft uppercase">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                      className="text-sm font-medium break-words text-burgundy hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FaqSection />
    </>
  )
}
