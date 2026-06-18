interface BackgroundDecorProps {
  /** 'light' for ivory/white sections, 'dark' for navy sections */
  tone?: 'light' | 'dark'
  /** Show the subtle dotted grid */
  dots?: boolean
}

/**
 * Subtle animated background decoration: floating blurred gradient orbs,
 * an optional dotted grid and a slow-rotating ring. Purely decorative.
 */
export default function BackgroundDecor({
  tone = 'light',
  dots = true,
}: BackgroundDecorProps) {
  const isDark = tone === 'dark'
  const champagne = '#C8A45D'
  const orb2 = isDark ? '#13294B' : '#0B1F3A'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dotted grid */}
      {dots && (
        <div
          className={`pointer-events-none absolute inset-0 ${
            isDark ? 'bg-dots-light' : 'bg-dots'
          }`}
          style={{
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      )}

      {/* Floating gradient orbs — ultra subtle in light, visible in dark */}
      <div
        className="decor-anim pointer-events-none absolute -left-20 top-0 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${champagne}${isDark ? '99' : '08'}, transparent 68%)`,
          animation: 'floatA 16s ease-in-out infinite',
        }}
      />
      <div
        className="decor-anim pointer-events-none absolute right-[-8rem] top-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${orb2}${isDark ? '80' : '06'}, transparent 68%)`,
          animation: 'floatB 20s ease-in-out infinite',
        }}
      />
      <div
        className="decor-anim pointer-events-none absolute bottom-[-6rem] left-1/3 h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${champagne}${isDark ? '88' : '08'}, transparent 68%)`,
          animation: 'floatC 18s ease-in-out infinite',
        }}
      />

      {/* Slow rotating outline ring */}
      <div
        className="decor-anim pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-2"
        style={{
          borderColor:
            isDark ? 'rgba(255,255,255,0.10)' : 'rgba(11,31,58,0.12)',
          animation: 'spinSlow 60s linear infinite',
        }}
      />

      {/* Geometric shapes */}
      <svg
        className={`decor-anim pointer-events-none absolute left-[8%] top-[15%] h-8 w-8 ${isDark ? 'opacity-25' : 'opacity-45'}`}
        style={{ animation: 'floatA 14s ease-in-out infinite' }}
        viewBox="0 0 40 40"
        fill="none"
      >
        <polygon
          points="20,2 38,38 2,38"
          stroke={isDark ? 'rgba(255,255,255,0.30)' : 'rgba(11,31,58,0.35)'}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <svg
        className={`decor-anim pointer-events-none absolute right-[12%] top-[8%] h-6 w-6 ${isDark ? 'opacity-20' : 'opacity-40'}`}
        style={{ animation: 'floatB 18s ease-in-out infinite' }}
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect
          x="2" y="2" width="28" height="28"
          stroke={isDark ? 'rgba(255,255,255,0.25)' : 'rgba(11,31,58,0.30)'}
          strokeWidth="1.5"
          fill="none"
          transform="rotate(15 16 16)"
        />
      </svg>

      <svg
        className={`decor-anim pointer-events-none absolute left-[5%] bottom-[20%] h-10 w-10 ${isDark ? 'opacity-20' : 'opacity-35'}`}
        style={{ animation: 'floatC 22s ease-in-out infinite' }}
        viewBox="0 0 48 48"
        fill="none"
      >
        <polygon
          points="24,4 44,16 44,36 24,44 4,36 4,16"
          stroke={isDark ? 'rgba(255,255,255,0.25)' : 'rgba(11,31,58,0.28)'}
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <svg
        className={`decor-anim pointer-events-none absolute right-[6%] bottom-[12%] h-7 w-7 ${isDark ? 'opacity-20' : 'opacity-35'}`}
        style={{ animation: 'floatA 20s ease-in-out infinite reverse' }}
        viewBox="0 0 36 36"
        fill="none"
      >
        <circle
          cx="18" cy="18" r="16"
          stroke={isDark ? 'rgba(255,255,255,0.23)' : 'rgba(11,31,58,0.28)'}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
      </svg>

      <svg
        className={`decor-anim pointer-events-none absolute right-[25%] top-[45%] h-5 w-5 ${isDark ? 'opacity-20' : 'opacity-40'}`}
        style={{ animation: 'floatB 16s ease-in-out infinite' }}
        viewBox="0 0 28 28"
        fill="none"
      >
        <polygon
          points="14,2 26,26 2,26"
          stroke={isDark ? 'rgba(200,164,93,0.40)' : 'rgba(200,164,93,0.50)'}
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <svg
        className={`decor-anim pointer-events-none absolute left-[18%] top-[55%] h-4 w-4 ${isDark ? 'opacity-15' : 'opacity-30'}`}
        style={{ animation: 'floatC 24s ease-in-out infinite' }}
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="3" y="3" width="18" height="18"
          stroke={isDark ? 'rgba(255,255,255,0.20)' : 'rgba(11,31,58,0.25)'}
          strokeWidth="1"
          fill="none"
          transform="rotate(45 12 12)"
        />
      </svg>

      {/* Decorative line */}
      <div
        className={`decor-anim pointer-events-none absolute left-0 top-1/3 h-[1px] w-[30%] ${isDark ? 'opacity-15' : 'opacity-25'}`}
        style={{
          background: isDark
            ? 'linear-gradient(to right, rgba(255,255,255,0.30), transparent)'
            : 'linear-gradient(to right, rgba(11,31,58,0.30), transparent)',
        }}
      />
      <div
        className={`decor-anim pointer-events-none absolute right-0 top-2/3 h-[1px] w-[25%] ${isDark ? 'opacity-15' : 'opacity-25'}`}
        style={{
          background: isDark
            ? 'linear-gradient(to left, rgba(255,255,255,0.30), transparent)'
            : 'linear-gradient(to left, rgba(11,31,58,0.30), transparent)',
        }}
      />
    </div>
  )
}
