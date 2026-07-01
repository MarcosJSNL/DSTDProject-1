import { Fragment } from 'react'

interface BrandTextProps {
  children: string
  className?: string
  dstdClassName?: string
}

/**
 * Renders a string and shows every "DSTD" acronym in the gothic
 * (blackletter) brand font, keeping it inline and baseline-aligned
 * with the surrounding text.
 */
export default function BrandText({ children, className, dstdClassName }: BrandTextProps) {
  const parts = children.split(/(DSTD)/g)
  const brandClass = dstdClassName ?? 'font-gothic'
  const hasExplicitSize = /(^|\s)text-/.test(brandClass)
  const dstdSpanClass = `${hasExplicitSize ? '' : 'text-[1.5em]'} ${brandClass}`.trim()

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part === 'DSTD' ? (
          <span key={i} className={dstdSpanClass}>
            DSTD
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </span>
  )
}
