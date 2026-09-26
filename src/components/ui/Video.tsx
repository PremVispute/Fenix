import { PlayCircle } from 'lucide-react'
import { cn } from '../../lib/cn'

/** Turns a YouTube watch / share / shorts link into its embeddable URL. */
const youtubeEmbed = (src: string) => {
  const match = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : undefined
}

/**
 * Branded video slot. Accepts a YouTube link or a self-hosted file, and holds
 * its shape with a placeholder until the footage is supplied.
 */
export const Video = ({
  src,
  poster,
  title,
  className,
}: {
  src?: string
  poster?: string
  title: string
  className?: string
}) => {
  const embed = src && youtubeEmbed(src)

  return (
    <div className={cn('relative overflow-hidden bg-midnight', className)}>
      {embed ? (
        <iframe
          src={embed}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="size-full border-0"
        />
      ) : src ? (
        <video src={src} poster={poster} controls preload="metadata" className="size-full object-cover">
          <track kind="captions" />
        </video>
      ) : (
        <div
          className="flex size-full flex-col items-center justify-center gap-3 bg-linear-to-br from-midnight-soft via-midnight to-burgundy-deep p-6 text-center text-cream/70"
          role="img"
          aria-label={`${title} — video coming soon`}
        >
          <PlayCircle className="size-10" strokeWidth={1.2} aria-hidden />
          <span className="max-w-[24ch] text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
            {title}
          </span>
        </div>
      )}
    </div>
  )
}
