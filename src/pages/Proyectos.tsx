import { useState } from 'react'
import {
  HardHat,
  Factory,
  Building,
  Mountain,
  Handshake,
  Briefcase,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BackgroundDecor from '../components/BackgroundDecor'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import { seoMeta } from '../data/seo'
import { projects } from '../data/projects'

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'hormigones', label: 'Hormigones' },
  { key: 'industrias', label: 'Industrias' },
  { key: 'immobiliare', label: 'Immobiliare' },
  { key: 'agregados', label: 'Agregados' },
]

const categoryAccent: Record<string, string> = {
  hormigones: '#E8772E',
  industrias: '#7FC241',
  immobiliare: '#C7372F',
  agregados: '#C8A45D',
  general: '#C8A45D',
}

const capabilities = [
  { icon: HardHat, title: 'Obras y construcción', text: 'Ejecución y soporte para proyectos de construcción de distintas escalas.' },
  { icon: Building, title: 'Proyectos inmobiliarios', text: 'Desarrollo, inversión y financiamiento con visión a futuro.' },
  { icon: Factory, title: 'Suministro de materiales', text: 'Blocks, varillas, cemento, vigas H y materiales industriales.' },
  { icon: Mountain, title: 'Agregados', text: 'Arena, grava y piedra para obras y proyectos.' },
  { icon: Handshake, title: 'Soluciones industriales', text: 'Colaboraciones estratégicas que multiplican el alcance del grupo.' },
  { icon: Briefcase, title: 'Desarrollo corporativo', text: 'Estructura empresarial sólida orientada al crecimiento sostenible.' },
]

export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="bg-[#F2EFE9]">
      <SEO {...seoMeta['/proyectos']} pathname="/proyectos" />
      <PageHero
        eyebrow="Capacidades"
        title="Capacidades que cubren todo el ciclo del desarrollo."
        description="Desde la materia prima hasta el proyecto terminado, el grupo aporta valor en cada etapa."
      />

      {/* Capabilities */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionHeading eyebrow="Proyectos y capacidades" tone="light" title="Áreas de especialización." />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl glass-card p-8 md:p-10 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(11,31,58,0.18)]">
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                      <c.icon size={24} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl font-extralight tabular-nums text-navy/15 transition-colors duration-300 group-hover:text-champagne/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl md:text-2xl font-medium text-navy">{c.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-graphite/65 leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionHeading eyebrow="Galería" tone="light" title="Proyectos realizados." />
          </Reveal>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === f.key
                    ? 'bg-navy text-white'
                    : 'bg-ivory text-navy/70 hover:bg-navy/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <ProjectCard
                  title={p.title}
                  category={p.category}
                  description={p.description}
                  location={p.location}
                  image={p.image}
                  accentColor={categoryAccent[p.category] || '#C8A45D'}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 md:px-16 md:py-24 shadow-premium">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-navy-light/40 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                  Construyamos nuevas oportunidades juntos.
                </h2>
                <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
                  Conecta con DSTD Enterprises y conoce cómo nuestras divisiones pueden aportar valor a tu próximo proyecto.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-champagne hover:text-white">
                    Contactar
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link to="/empresas" className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy">
                    Ver empresas
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
