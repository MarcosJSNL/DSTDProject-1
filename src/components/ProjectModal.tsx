import { useEffect } from 'react'
import { MapPin, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandText from './BrandText'

interface Project {
  id: string
  title: string
  category: string
  description: string
  location: string
  image: string
}

interface ProjectModalProps {
  project: Project | null
  accentColor?: string
  onClose: () => void
  contactLabel?: string
}

export default function ProjectModal({
  project,
  accentColor = '#C8A45D',
  onClose,
  contactLabel = 'Contactar',
}: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm transition-opacity duration-300" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-colors duration-300 hover:bg-white hover:text-champagne"
          aria-label="Cerrar"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          <span
            className="absolute left-5 top-5 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: `${accentColor}cc` }}
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium text-navy leading-tight">
            <BrandText>{project.title}</BrandText>
          </h2>

          <div className="mt-3 flex items-center gap-1.5 text-sm text-graphite/60">
            <MapPin size={16} strokeWidth={1.5} />
            {project.location}
          </div>

          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-graphite/40 font-medium">
              Descripción
            </h3>
            <p className="mt-3 text-base text-graphite/75 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contacto"
              onClick={onClose}
              className="group inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-champagne"
            >
              {contactLabel}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={onClose}
              className="rounded-lg border border-navy/15 px-8 py-3 text-sm font-medium text-navy transition-colors duration-300 hover:bg-navy/5"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
