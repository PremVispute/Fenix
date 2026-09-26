import { site } from '../../data/site'
import { SocialIcon } from '../ui/SocialIcon'

/** Floating chat shortcut, pinned to the corner of every page. */
export const WhatsAppButton = () => (
  <a
    href={site.contact.whatsappHref}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with Fenix on WhatsApp"
    className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_28px_-10px_rgb(0_0_0/0.45)] transition-transform duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 sm:right-7 sm:bottom-7"
  >
    <SocialIcon name="whatsapp" className="size-7" />
  </a>
)
