import { HardHat, ShieldCheck, Truck, ArrowRight, CheckCircle, ClipboardList, CalendarDays, Gauge, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BackgroundDecor from '../../components/BackgroundDecor'
import ContactForm from '../../components/ContactForm'
import WhatsAppButton from '../../components/WhatsAppButton'
import SEO from '../../components/SEO'
import { seoMeta } from '../../data/seo'
import { whatsappMessages } from '../../utils/whatsapp'

const accent = '#E8772E'
const heroImg = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'

const stats = [
  { value: '4000+', label: 'PSI de resistencia' },
  { value: '24/7', label: 'Producción continua' },
  { value: '100%', label: 'Control de calidad' },
  { value: '15+', label: 'Tipos de mezcla' },
]

const services = [
  { icon: HardHat, title: 'Hormigón premezclado', text: 'Concreto de alta resistencia preparado bajo estrictos estándares de calidad para todo tipo de obra.', feature: true },
  { icon: Truck, title: 'Vaciado para obras', text: 'Servicio completo de transporte y vaciado con camiones hormigoneros equipados.' },
  { icon: ShieldCheck, title: 'Hormigón para zapatas', text: 'Mezclas específicas con resistencia y fluidez optimizada para cimentaciones.' },
  { icon: CheckCircle, title: 'Hormigón para columnas', text: 'Concreto con alta cohesionabilidad y resistencia para elementos verticales.' },
  { icon: ClipboardList, title: 'Hormigón para losas', text: 'Mezclas de fácil manejo y terminado para losas, entrepisos y techos.' },
  { icon: CalendarDays, title: 'Programación de entregas', text: 'Coordinación precisa de horarios para mantener la continuidad de la obra.' },
]

const processSteps = [
  { step: '01', title: 'Cotización', text: 'Recibimos los requerimientos de tu proyecto y elaboramos una propuesta técnica y comercial.' },
  { step: '02', title: 'Programación', text: 'Coordinamos fechas, horarios y logística de entrega según la agenda de tu obra.' },
  { step: '03', title: 'Producción', text: 'Preparamos la mezcla en planta con control de calidad en cada batch.' },
  { step: '04', title: 'Entrega y vaciado', text: 'Transportamos y vaciamos el concreto puntualmente en el sitio acordado.' },
]

const projectTypes = [
  { name: 'Edificios residenciales', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Infraestructura vial', img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2025&auto=format&fit=crop' },
  { name: 'Obras industriales', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop' },
]

export default function Hormigones() {
  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/empresas/hormigones']} pathname="/empresas/hormigones" />

      {/* Hero — cinematic full-bleed */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-end">
        <img src={heroImg} alt="DSTD Hormigones" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${accent}26, transparent 55%)` }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-40">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/80">División Hormigones</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.02] max-w-4xl" style={{ letterSpacing: '-0.035em' }}>
              Hormigón que sostiene <span style={{ color: accent }}>grandes proyectos</span>.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              Concreto premezclado de alta resistencia para obras que exigen calidad, precisión y puntualidad en cada entrega.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats band — overlapping accent strip */}
      <section className="relative z-20 -mt-px" style={{ backgroundColor: accent }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="px-4 py-8 md:py-10 text-center">
                  <div className="text-3xl md:text-4xl font-semibold text-white tabular-nums">{s.value}</div>
                  <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-white/80">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — asymmetric with framed image */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4" style={{ borderColor: accent }} />
                <div className="rounded-3xl overflow-hidden h-[26rem] shadow-premium-lg">
                  <img src="/img/hormigones.jpg" alt="Planta de hormigón DSTD" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-br-3xl border-r-4 border-b-4" style={{ borderColor: accent }} />
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-6">
              <div className="border-l-2 pl-6 md:pl-8" style={{ borderColor: `${accent}55` }}>
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Sobre la división</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                  Resistencia diseñada para durar.
                </h2>
                <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">
                  Desde edificaciones residenciales hasta infraestructura de gran escala, DSTD Hormigones entrega concreto premezclado que cumple con los más altos parámetros técnicos del sector construcción.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[{ icon: Gauge, t: 'Mezclas calibradas' }, { icon: Layers, t: 'Para cada elemento' }].map((f) => (
                    <div key={f.t} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${accent}18` }}>
                        <f.icon size={20} style={{ color: accent }} strokeWidth={1.5} />
                      </span>
                      <span className="text-sm font-medium text-navy">{f.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services — bento grid with feature card */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Soluciones de concreto a la medida.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100} className={s.feature ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}>
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl p-8 shadow-premium transition-all duration-500 hover:-translate-y-1 ${s.feature ? 'text-white' : 'glass-card'}`}
                  style={s.feature ? { background: `linear-gradient(160deg, ${accent}, #c2611f)` } : undefined}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.feature ? 'bg-white/15' : ''}`}
                    style={!s.feature ? { backgroundColor: `${accent}18` } : undefined}
                  >
                    <s.icon size={26} style={{ color: s.feature ? '#fff' : accent }} strokeWidth={1.5} />
                  </span>
                  <h3 className={`mt-6 text-xl font-medium ${s.feature ? 'text-white' : 'text-navy'}`}>{s.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${s.feature ? 'text-white/85' : 'text-graphite/65'}`}>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — horizontal timeline */}
      <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
        <BackgroundDecor tone="dark" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Del pedido al vaciado.
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                Un flujo claro para garantizar calidad y puntualidad en cada entrega.
              </p>
            </div>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-5 hidden lg:block h-px bg-white/15" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {processSteps.map((s, i) => (
                <Reveal key={s.step} delay={i * 120}>
                  <div className="relative">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: accent }}>
                      {s.step}
                    </span>
                    <h3 className="mt-5 text-xl font-medium text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types — image cards */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Proyectos atendidos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Tipos de obra que cubrimos.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {projectTypes.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="group relative h-72 overflow-hidden rounded-3xl shadow-premium">
                  <img src={t.img} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                  <div className="absolute left-0 top-0 h-1.5 w-full transition-all duration-500 group-hover:h-2.5" style={{ backgroundColor: accent }} />
                  <h3 className="absolute bottom-6 left-6 right-6 text-xl font-medium text-white">{t.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Form */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Cotización</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Cotizar hormigón.
              </h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">
                Completa el formulario y recibe una propuesta técnica y comercial adaptada a tu obra.
              </p>
              <div className="mt-8">
                <WhatsAppButton variant="inline" message={whatsappMessages.hormigones} label="Cotizar por WhatsApp" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8 shadow-premium">
                <ContactForm
                  fields={[
                    { name: 'name', label: 'Nombre', required: true, placeholder: 'Tu nombre' },
                    { name: 'phone', label: 'Teléfono', required: true, placeholder: '829-367-2491' },
                    { name: 'location', label: 'Ubicación de la obra', required: true, placeholder: 'Dirección o ciudad' },
                    { name: 'projectType', label: 'Tipo de proyecto', type: 'select', options: [
                      { value: '', label: 'Selecciona' },
                      { value: 'residencial', label: 'Residencial' },
                      { value: 'comercial', label: 'Comercial' },
                      { value: 'industrial', label: 'Industrial' },
                      { value: 'infraestructura', label: 'Infraestructura' },
                      { value: 'otro', label: 'Otro' },
                    ]},
                    { name: 'volume', label: 'Metros cúbicos aproximados', placeholder: 'Ej. 50 m³' },
                    { name: 'date', label: 'Fecha deseada', type: 'date' },
                    { name: 'message', label: 'Mensaje adicional', type: 'textarea', placeholder: 'Detalles especiales de tu obra...' },
                  ]}
                  submitLabel="Solicitar cotización"
                  accentColor={accent}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 md:px-16 md:py-24 shadow-premium">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: accent }} />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                  ¿Listo para concretar tu proyecto?
                </h2>
                <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
                  Contáctanos y recibe una cotización adaptada a las necesidades de tu obra.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-[#E8772E] hover:text-white">
                    Solicitar cotización
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link to="/empresas" className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy">
                    Ver otras divisiones
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
