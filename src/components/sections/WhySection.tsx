import { Network, Layers3, BadgeCheck, ClipboardCheck, LineChart } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import BackgroundDecor from '../BackgroundDecor'

const benefits = [
  {
    icon: Network,
    title: 'Ecosistema empresarial integrado',
    text: 'Divisiones que se complementan y potencian entre sí.',
  },
  {
    icon: Layers3,
    title: 'Soluciones para diferentes sectores',
    text: 'Cobertura amplia: construcción, industria, inmobiliaria y agregados.',
  },
  {
    icon: BadgeCheck,
    title: 'Identidad corporativa sólida',
    text: 'Una marca madre que respalda cada empresa del grupo.',
  },
  {
    icon: ClipboardCheck,
    title: 'Enfoque en calidad y cumplimiento',
    text: 'Estándares consistentes y compromiso con cada entrega.',
  },
  {
    icon: LineChart,
    title: 'Visión de crecimiento a largo plazo',
    text: 'Decisiones orientadas a un desarrollo sostenible y duradero.',
  },
]

export default function WhySection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BackgroundDecor tone="light" dots={false} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Por qué elegir DSTD"
                tone="light"
                title="Un socio empresarial pensado para construir a largo plazo."
                description="No somos una sola empresa: somos un grupo estructurado para aportar valor real en cada proyecto."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 border-t border-navy/10">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 90}>
                <div className="group flex items-start gap-5 border-b border-navy/10 py-6 transition-colors duration-300">
                  <b.icon
                    size={24}
                    className="mt-0.5 shrink-0 text-champagne transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <h3 className="text-lg md:text-xl font-medium text-navy leading-snug">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base text-graphite/65 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
