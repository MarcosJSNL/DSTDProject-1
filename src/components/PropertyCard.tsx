import { MapPin } from 'lucide-react'

interface PropertyCardProps {
  name: string
  type: string
  location: string
  description: string
  priceLabel?: string
  image?: string
  accentColor?: string
  ctaText?: string
  onCta?: () => void
}

export default function PropertyCard({
  name,
  type,
  location,
  description,
  priceLabel,
  image,
  accentColor = '#C7372F',
  ctaText = 'Ver detalles',
  onCta,
}: PropertyCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl glass-card shadow-premium transition-all duration-500 hover:-translate-y-1">
      <div
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(to right, ${accentColor}cc, transparent)` }}
      />
      {image ? (
        <div className="h-52 overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
      ) : (
        <div className="h-52 w-full flex items-center justify-center" style={{ backgroundColor: `${accentColor}12` }}>
          <span className="text-6xl font-extralight text-navy/10">{name.charAt(0)}</span>
        </div>
      )}
      <div className="p-7">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>{type}</span>
          {priceLabel && <span className="text-xs text-graphite/50">· {priceLabel}</span>}
        </div>
        <h3 className="mt-2 text-xl font-medium text-navy">{name}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-graphite/60">
          <MapPin size={14} className="shrink-0" strokeWidth={1.5} />
          {location}
        </div>
        <p className="mt-3 text-sm text-graphite/65 leading-relaxed">{description}</p>
        {onCta && (
          <button
            onClick={onCta}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:opacity-80"
            style={{ color: accentColor }}
          >
            {ctaText}
            <span className="text-lg leading-none">→</span>
          </button>
        )}
      </div>
    </div>
  )
}
