import { Layers, Target, Boxes, Building2 } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import BackgroundDecor from '../BackgroundDecor'

const keyData = [
  { icon: Layers, label: '4 divisiones de negocio', value: 'Estructura integrada' },
  { icon: Target, label: 'Enfoque en desarrollo', value: 'Visión a largo plazo' },
  { icon: Boxes, label: 'Soluciones para proyectos', value: 'De principio a fin' },
  { icon: Building2, label: 'Presencia corporativa', value: 'Integral y sólida' },
]

export default function GroupSection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BackgroundDecor tone="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — narrative */}
          <Reveal>
            <SectionHeading
              eyebrow="Un grupo, múltiples sectores"
              tone="light"
              title="Una visión corporativa que conecta sectores estratégicos."
              description="DSTD Enterprises nace como un ecosistema empresarial enfocado en desarrollar soluciones, proyectos y oportunidades en sectores clave para el crecimiento: construcción, industria, bienes raíces y agregados."
            />
          </Reveal>

          {/* Right — 2x2 mini feature cards */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {keyData.map((d) => (
                <div
                  key={d.label}
                  className="group relative overflow-hidden rounded-2xl glass-card p-6 md:p-7 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,31,58,0.18)]"
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                    <d.icon size={20} className="text-champagne" strokeWidth={1.5} />
                  </div>
                  <div className="mt-4 text-sm md:text-base font-medium text-navy leading-snug">
                    {d.label}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-graphite/60">{d.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
