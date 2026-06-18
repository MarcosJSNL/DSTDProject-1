import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  /** 'dark' = light text on dark bg, 'light' = dark text on light bg */
  tone?: 'light' | 'dark'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.2em] ${
              isDark ? 'text-white/70' : 'text-navy/60'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] ${
          isDark ? 'text-white' : 'text-navy'
        }`}
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-white/75' : 'text-graphite/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
