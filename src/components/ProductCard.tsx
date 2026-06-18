interface ProductCardProps {
  name: string
  description: string
  image?: string
  accentColor?: string
  ctaText?: string
  onCta?: () => void
}

export default function ProductCard({
  name,
  description,
  image,
  accentColor = '#C8A45D',
  ctaText = 'Cotizar',
  onCta,
}: ProductCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl glass-card shadow-premium transition-all duration-500 hover:-translate-y-1">
      <div
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(to right, ${accentColor}cc, transparent)` }}
      />
      {image ? (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
      ) : (
        <div
          className="h-48 w-full flex items-center justify-center"
          style={{ backgroundColor: `${accentColor}12` }}
        >
          <span className="text-5xl font-extralight text-navy/10">{name.charAt(0)}</span>
        </div>
      )}
      <div className="p-7">
        <h3 className="text-lg font-medium text-navy">{name}</h3>
        <p className="mt-2 text-sm text-graphite/65 leading-relaxed">{description}</p>
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
