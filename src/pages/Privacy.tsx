import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Eyebrow'
import { site } from '../data/site'

interface PolicySection {
  title: string
  body: string
  list?: string[]
  after?: string
}

const sections: PolicySection[] = [
  {
    title: '1. Information We Collect',
    body: 'When you submit an enquiry through our website, we may collect information such as your:',
    list: ['Name', 'Email address', 'Phone number', 'Enquiry details', 'Service you are interested in'],
    after: 'We only ask for information that is relevant to responding to your enquiry.',
  },
  {
    title: '2. Biometric Data \u2014 Never Stored',
    body: 'Some assessments, such as DMIT and IRIS Analysis, involve capturing fingerprints or iris images. This data is used only to generate your assessment report and is permanently deleted afterwards. We do not keep, store or share any fingerprints, iris images or other biometric data.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We may use the information you provide to:',
    list: [
      'Respond to your enquiry',
      'Understand your requirements',
      'Provide information about our services',
      'Contact you regarding your enquiry',
    ],
    after: 'We do not sell your personal information.',
  },
  {
    title: '4. How We Protect Your Information',
    body: 'We take reasonable steps to keep the information you provide secure and prevent unauthorised access or misuse. However, no method of transmitting information online can be guaranteed to be completely secure.',
  },
  {
    title: '5. Third-Party Services',
    body: 'Our website may use third-party services such as website hosting, forms, analytics or communication tools. These services may process information as necessary to provide their functions. We may also provide links to external websites, whose privacy practices are governed by their own policies.',
  },
  {
    title: '6. Your Choices',
    body: 'You may contact us if you would like to ask about, update or request deletion of personal information you have provided to us, subject to applicable legal requirements.',
  },
  {
    title: '7. Contact Us',
    body: `If you have any questions about this Privacy Policy or how your information is handled, please contact ${site.name} by email at ${site.contact.email} or by phone on ${site.contact.phone}.`,
  },
  {
    title: '8. Updates to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated date.',
  },
]

export const Privacy = () => (
  <Section tone="warm" width="narrow">
    <div className="flex flex-col gap-4">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
      <p className="text-sm text-ink-soft">Last updated: [Insert Date]</p>
      <p className="text-base leading-relaxed text-ink-soft">
        {site.name} respects your privacy. This Privacy Policy explains how we handle the
        information you provide when you use our website or contact us.
      </p>
    </div>

    <div className="mt-10 flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-2">
          <h2 className="font-display text-xl font-semibold text-burgundy">{section.title}</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{section.body}</p>
          {section.list && (
            <ul className="mt-1 flex flex-col gap-1.5">
              {section.list.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-burgundy" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.after && (
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{section.after}</p>
          )}
        </section>
      ))}
    </div>
  </Section>
)
