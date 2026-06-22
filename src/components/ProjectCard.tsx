import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandText from './BrandText'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  location: string
  image: string
  accentColor?: string
}

export default function ProjectCard({
  title,
  category,
  description,
  location,
  image,
  accentColor = '#C8A45D',
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl glass-card shadow-premium transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent" />
        <span
          className="absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
          style={{ backgroundColor: `${accentColor}cc` }}
        >
          {category}
        </span>
      </div>
      <div className="p-7">
        <h3 className="text-lg font-medium text-navy"><BrandText>{title}</BrandText></h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-graphite/60">
          <MapPin size={14} strokeWidth={1.5} />
          {location}
        </div>
        <p className="mt-3 text-sm text-graphite/65 leading-relaxed line-clamp-3">{description}</p>
        <Link
          to="/contacto"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors duration-300 hover:text-champagne"
        >
          Ver proyecto
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
