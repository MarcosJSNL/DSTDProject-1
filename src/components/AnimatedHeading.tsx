import { useState, useEffect, type CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  charDelay?: number
  initialDelay?: number
  transitionDuration?: number
  style?: CSSProperties
}

export default function AnimatedHeading({
  text,
  className = '',
  charDelay = 30,
  initialDelay = 200,
  transitionDuration = 500,
  style,
}: AnimatedHeadingProps) {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay =
              lineIndex * line.length * charDelay + charIndex * charDelay
            const displayChar = char === ' ' ? '\u00A0' : char
            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                className="inline-block"
                style={{
                  opacity: triggered ? 1 : 0,
                  transform: triggered ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                {displayChar}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
