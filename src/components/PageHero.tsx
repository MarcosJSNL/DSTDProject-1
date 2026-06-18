import Reveal from './Reveal'
import BackgroundDecor from './BackgroundDecor'

interface PageHeroProps {
  eyebrow: string
  eyebrowAccent?: string
  title: string
  description?: string
  bgImage?: string
  tone?: 'dark' | 'light'
}

export default function PageHero({
  eyebrow,
  eyebrowAccent = 'bg-champagne',
  title,
  description,
  bgImage,
  tone = 'dark',
}: PageHeroProps) {
  const isDark = tone === 'dark'

  return (
    <section className={`relative overflow-hidden py-28 md:py-36 ${isDark ? 'bg-navy-deep' : 'bg-white'}`}>
      {bgImage && (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-navy-deep/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep/90" />
        </>
      )}
      <BackgroundDecor tone={isDark ? 'dark' : 'light'} dots={false} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-5">
            <span className={`h-1.5 w-1.5 rounded-full ${eyebrowAccent}`} />
            <span className={`text-xs md:text-sm uppercase tracking-[0.2em] ${isDark ? 'text-white/70' : 'text-navy/60'}`}>
              {eyebrow}
            </span>
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] max-w-3xl ${isDark ? 'text-white' : 'text-navy'}`}
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </h1>
          {description && (
            <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-white/80' : 'text-graphite/70'}`}>
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
