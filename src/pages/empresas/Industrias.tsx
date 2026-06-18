import { ArrowRight, Boxes, Layers, Hammer, Building2, Factory, Wrench, Warehouse, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BackgroundDecor from '../../components/BackgroundDecor'
import ContactForm from '../../components/ContactForm'
import WhatsAppButton from '../../components/WhatsAppButton'
import SEO from '../../components/SEO'
import { seoMeta } from '../../data/seo'
import { whatsappMessages } from '../../utils/whatsapp'

const accent = '#7FC241'
const heroImg = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop'

const catalog = [
  { name: 'Blocks', description: 'Bloques de concreto de alta resistencia en distintas medidas y acabados.', img: '/img/productos/blocks.jpeg' },
  { name: 'Cemento', description: 'Cemento Portland de calidad garantizada para estructuras y acabados.', img: '/img/productos/cemento.jpg' },
  { name: 'Varillas', description: 'Acero corrugado para refuerzo estructural según especificaciones técnicas.', img: '/img/productos/varillas.jpg' },
  { name: 'Vigas H', description: 'Vigas de acero estructural para techos, entrepisos y grandes luces.', img: '/img/productos/vigas-h.jpg' },
  { name: 'Aluzinc', description: 'Láminas de aluzinc resistentes a la corrosión para techos y cerramientos.', img: '/img/productos/aluzinc.jpg' },
  { name: 'Materiales industriales', description: 'Insumos diversos para construcción, obra civil y proyectos especiales.', img: '/img/productos/materiales-industriales.webp' },
]

const sectors = [
  { icon: Building2, label: 'Construcción residencial' },
  { icon: Factory, label: 'Proyectos industriales' },
  { icon: Warehouse, label: 'Obras comerciales' },
  { icon: Hammer, label: 'Remodelaciones' },
  { icon: Wrench, label: 'Infraestructura' },
  { icon: PackageCheck, label: 'Obra pública' },
]

const processSteps = [
  { step: '01', title: 'Solicitud', text: 'Nos indicas los productos, cantidades y lugar de entrega.' },
  { step: '02', title: 'Cotización', text: 'Elaboramos una propuesta competitiva con tiempos de entrega claros.' },
  { step: '03', title: 'Confirmación', text: 'Ajustamos detalles y confirmamos el pedido para producción o despacho.' },
  { step: '04', title: 'Entrega', text: 'Transportamos los materiales puntualmente a tu obra o almacén.' },
]

export default function Industrias() {
  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/empresas/industrias']} pathname="/empresas/industrias" />

      {/* Hero — cinematic full-bleed */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <img src={heroImg} alt="DSTD Industrias" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(115deg, ${accent}33, transparent 50%)` }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 pt-28">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/80">División Industrias</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.02]" style={{ letterSpacing: '-0.035em' }}>
              El material que da <span style={{ color: accent }}>estructura</span> a tus ideas.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              Blocks, cemento, varillas, vigas H y soluciones integrales para proyectos de construcción de todo tipo.
            </p>
            <div className="mt-8">
              <WhatsAppButton variant="inline" message={whatsappMessages.industrias} label="Cotizar por WhatsApp" />
            </div>
          </Reveal>
        </div>
        {/* Product strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-navy-deep/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 py-5">
              {['Blocks', 'Cemento', 'Varillas', 'Vigas H', 'Aluzinc'].map((m, i) => (
                <div key={m} className="flex items-center gap-8">
                  {i > 0 && <span className="hidden sm:block h-1 w-1 rounded-full bg-white/30" />}
                  <span className="text-sm font-medium uppercase tracking-wider text-white/85">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro — overlapping image with floating stat card */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-[24rem] shadow-premium-lg">
                  <img src="/img/industrias.jpg" alt="Almacén DSTD Industrias" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-2xl bg-white p-6 shadow-premium-lg max-w-[15rem]">
                  <Boxes size={28} style={{ color: accent }} strokeWidth={1.5} />
                  <div className="mt-3 text-2xl font-semibold text-navy">+50 productos</div>
                  <div className="text-sm text-graphite/60">en inventario permanente</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Sobre la división</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Calidad certificada, disponibilidad garantizada.
              </h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">
                Ofrecemos una gama completa de materiales industriales con calidad certificada, desde blocks y cemento hasta varillas y vigas H, todo bajo un estándar de excelencia y abastecimiento continuo.
              </p>
              <div className="mt-8 space-y-3">
                {['Stock permanente para cualquier escala', 'Asesoría técnica especializada', 'Precios competitivos por volumen'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    <span className="text-sm md:text-base text-navy">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catalog — image product grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Catálogo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Nuestra línea de productos.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 100}>
                <div className="group h-full overflow-hidden rounded-3xl bg-ivory shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-lg">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: accent }}>{p.name}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-graphite/65 leading-relaxed">{p.description}</p>
                    <Link to="/contacto" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: accent }}>
                      Cotizar
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors — icon grid */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Sectores atendidos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                ¿A quién servimos?
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) * 90}>
                <div className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:border-transparent hover:shadow-premium">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors" style={{ backgroundColor: `${accent}18` }}>
                    <s.icon size={22} style={{ color: accent }} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm md:text-base font-medium text-navy">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — vertical rail */}
      <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
        <BackgroundDecor tone="dark" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>Proceso de cotización.</h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">Simple, rápido y transparente, de la solicitud a la entrega.</p>
            </Reveal>
            <div className="lg:col-span-8">
              <div className="relative border-l border-white/15 pl-8 space-y-10">
                {processSteps.map((s, i) => (
                  <Reveal key={s.step} delay={i * 100}>
                    <div className="relative">
                      <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: accent }}>{s.step}</span>
                      <h3 className="text-xl font-medium text-white">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
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
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>Cotizar materiales.</h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">Completa el formulario y recibe una propuesta adaptada a tu proyecto.</p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-navy/10 bg-ivory p-5">
                <Layers size={24} style={{ color: accent }} strokeWidth={1.5} />
                <p className="text-sm text-graphite/70">Indícanos cantidades y lugar de entrega para una propuesta más precisa.</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8 shadow-premium">
                <ContactForm
                  fields={[
                    { name: 'name', label: 'Nombre', required: true, placeholder: 'Tu nombre' },
                    { name: 'phone', label: 'Teléfono', required: true, placeholder: '829-367-2491' },
                    { name: 'product', label: 'Producto de interés', type: 'select', options: [
                      { value: '', label: 'Selecciona' },
                      { value: 'blocks', label: 'Blocks' },
                      { value: 'cemento', label: 'Cemento' },
                      { value: 'varillas', label: 'Varillas' },
                      { value: 'vigas', label: 'Vigas H' },
                      { value: 'aluzinc', label: 'Aluzinc' },
                      { value: 'otros', label: 'Otros materiales' },
                    ]},
                    { name: 'quantity', label: 'Cantidad aproximada', placeholder: 'Ej. 500 blocks' },
                    { name: 'location', label: 'Ubicación de entrega', placeholder: 'Dirección o ciudad' },
                    { name: 'message', label: 'Mensaje adicional', type: 'textarea', placeholder: 'Detalles del proyecto...' },
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
                <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>¿Necesitas materiales para tu obra?</h2>
                <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">Cotiza con nosotros y recibe una propuesta adaptada a tu proyecto.</p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-[#7FC241] hover:text-white">
                    Solicitar cotización
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link to="/empresas" className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy">Ver otras divisiones</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
