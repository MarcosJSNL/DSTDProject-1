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
      {lines.map((line, lineIndex) => {
        const words = line.split(' ')
        let charCounter = 0
        return (
          <span key={lineIndex} className="block">
            {words.map((word, wordIndex) => {
              const wordSpan = (
                <span
                  key={`word-${lineIndex}-${wordIndex}`}
                  className="inline-block whitespace-nowrap"
                >
                  {word.split('').map((char, charIndex) => {
                    const delay =
                      lineIndex * line.length * charDelay +
                      charCounter * charDelay
                    charCounter += 1
                    return (
                      <span
                        key={`${lineIndex}-${wordIndex}-${charIndex}`}
                        className="inline-block"
                        style={{
                          opacity: triggered ? 1 : 0,
                          transform: triggered
                            ? 'translateX(0)'
                            : 'translateX(-18px)',
                          transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
                          transitionDelay: `${delay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </span>
              )
              charCounter += 1
              return (
                <span key={`wrap-${lineIndex}-${wordIndex}`}>
                  {wordSpan}
                  {wordIndex < words.length - 1 ? ' ' : null}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}
