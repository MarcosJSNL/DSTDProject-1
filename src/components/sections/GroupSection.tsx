import { Layers, Target, Boxes, Building2 } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import BackgroundDecor from '../BackgroundDecor'
import BrandText from '../BrandText'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

const icons = [Layers, Target, Boxes, Building2]

export default function GroupSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const g = t.groupSection

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BackgroundDecor tone="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — narrative */}
          <Reveal>
            <SectionHeading
              eyebrow={g.eyebrow}
              tone="light"
              title={g.title}
              description={<BrandText>{g.description}</BrandText>}
            />
          </Reveal>

          {/* Right — 2x2 mini feature cards */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {g.cards.map((d, i) => {
                const Icon = icons[i]
                return (
                  <div
                    key={d.label}
                    className="group relative overflow-hidden rounded-2xl glass-card p-6 md:p-7 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,31,58,0.18)]"
                  >
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                      <Icon size={20} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <div className="mt-4 text-sm md:text-base font-medium text-navy leading-snug">
                      {d.label}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-graphite/60">{d.value}</div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
