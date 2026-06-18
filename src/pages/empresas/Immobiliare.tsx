import { ArrowRight, MapPin, TrendingUp, KeyRound, Banknote, Building, Home, BedDouble, Bath, Maximize, Quote, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BackgroundDecor from '../../components/BackgroundDecor'
import ContactForm from '../../components/ContactForm'
import WhatsAppButton from '../../components/WhatsAppButton'
import SEO from '../../components/SEO'
import { seoMeta } from '../../data/seo'
import { whatsappMessages } from '../../utils/whatsapp'

const accent = '#C7372F'
const heroImg = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'

const services = [
  { num: '01', icon: Home, title: 'Venta de propiedades', text: 'Cartera de inmuebles seleccionados en ubicaciones estratégicas del país.' },
  { num: '02', icon: Building, title: 'Proyectos inmobiliarios', text: 'Planeación y ejecución de desarrollos residenciales y comerciales con visión.' },
  { num: '03', icon: TrendingUp, title: 'Inversiones', text: 'Oportunidades de inversión inmobiliaria con retorno sostenible a largo plazo.' },
  { num: '04', icon: Banknote, title: 'Préstamos inmobiliarios', text: 'Soluciones de financiamiento adaptadas al perfil y necesidad de cada cliente.' },
  { num: '05', icon: KeyRound, title: 'Asesoría para compradores', text: 'Acompañamiento profesional en la búsqueda y adquisición de propiedades.' },
]

const ctaImg = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'

const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+200', label: 'Propiedades gestionadas' },
  { value: '+500', label: 'Clientes satisfechos' },
  { value: 'RD', label: 'Cobertura nacional' },
]

const featured = {
  name: 'Proyecto residencial DSTD',
  location: 'Santo Domingo, RD',
  description: 'Complejo de apartamentos modernos con amenidades premium, áreas verdes y diseño contemporáneo en una de las zonas de mayor plusvalía del país.',
  priceLabel: 'Desde $150,000',
  specs: [
    { icon: BedDouble, label: '3 habitaciones' },
    { icon: Bath, label: '2 baños' },
    { icon: Maximize, label: '120 m²' },
  ],
  img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1974&auto=format&fit=crop',
}

const properties = [
  { name: 'Solar para inversión', type: 'Terreno', location: 'Punta Cana, RD', priceLabel: 'Consultar', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Apartamento en desarrollo', type: 'Residencial', location: 'Santiago, RD', priceLabel: 'Desde $120,000', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Propiedad comercial', type: 'Comercial', location: 'Santo Domingo, RD', priceLabel: 'Consultar', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
]

const testimonial = {
  quote: 'El acompañamiento de DSTD Immobiliare hizo que invertir fuera simple y seguro. Profesionalismo y transparencia de principio a fin.',
  author: 'Carlos Méndez',
  role: 'Inversionista',
}

export default function Immobiliare() {
  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/empresas/immobiliare']} pathname="/empresas/immobiliare" />

      {/* Hero — editorial centered */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center text-center">
        <img src={heroImg} alt="DSTD Immobiliare" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 sm:pt-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 justify-center">
              <span className="h-px w-8 bg-white/40" />
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80">División Immobiliare</span>
              <span className="h-px w-8 bg-white/40" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
              Espacios que generan <span className="italic" style={{ color: '#ec6b62' }}>valor</span> a largo plazo.
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
              Conectamos personas con oportunidades inmobiliarias sólidas: propiedades, proyectos, inversión y financiamiento con visión de desarrollo.
            </p>
            <div className="mt-9 flex justify-center">
              <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg px-8 py-3 font-medium text-white transition-colors duration-300" style={{ backgroundColor: accent }}>
                Agendar asesoría
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial statement + stats */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <Reveal className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Quiénes somos</span>
              <h2 className="mt-5 text-3xl md:text-5xl font-light text-navy leading-[1.08]" style={{ letterSpacing: '-0.02em' }}>
                Más que propiedades, <span className="italic" style={{ color: accent }}>construimos patrimonio</span>.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <p className="text-base md:text-lg text-graphite/65 leading-relaxed">
                Combinamos visión de desarrollo, conocimiento del mercado y un acompañamiento cercano para que cada decisión inmobiliaria sea sólida, rentable y duradera.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[2rem] border border-navy/10 bg-white/60 backdrop-blur">
              {stats.map((s, i) => (
                <div key={s.label} className={`px-6 py-8 text-center ${i !== 0 ? 'border-l border-navy/10' : ''} ${i === 2 ? 'border-l-0 lg:border-l' : ''} ${i >= 2 ? 'border-t border-navy/10 lg:border-t-0' : ''}`}>
                  <div className="text-3xl md:text-4xl font-light" style={{ color: accent }}>{s.value}</div>
                  <div className="mt-1.5 text-xs md:text-sm text-graphite/55">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured property — showcase */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Propiedad destacada</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-navy" style={{ letterSpacing: '-0.02em' }}>La oportunidad del momento.</h2>
              </div>
              <span className="hidden md:block text-6xl font-extralight text-navy/10 leading-none">01</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 grid lg:grid-cols-2 overflow-hidden rounded-[2rem] bg-ivory shadow-premium-lg">
              <div className="group relative h-80 lg:h-auto overflow-hidden">
                <img src={featured.img} alt={featured.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: accent }}>Destacado</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-graphite/60">
                  <MapPin size={16} style={{ color: accent }} />
                  {featured.location}
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-light text-navy leading-tight" style={{ letterSpacing: '-0.02em' }}>{featured.name}</h3>
                <p className="mt-4 text-base text-graphite/65 leading-relaxed">{featured.description}</p>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {featured.specs.map((sp) => (
                    <div key={sp.label} className="rounded-2xl border border-navy/10 bg-white px-3 py-4 text-center">
                      <sp.icon size={20} className="mx-auto" style={{ color: accent }} strokeWidth={1.5} />
                      <div className="mt-2 text-xs font-medium text-navy leading-tight">{sp.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-navy/10 pt-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-graphite/50">Precio</div>
                    <div className="text-2xl font-semibold" style={{ color: accent }}>{featured.priceLabel}</div>
                  </div>
                  <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors" style={{ backgroundColor: accent }}>
                    Ver detalles
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Property listings — magazine cards */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Más oportunidades</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-navy leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>Explora nuestro portafolio.</h2>
              </div>
              <Link to="/contacto" className="group inline-flex items-center gap-2 text-sm font-medium text-navy">
                Ver portafolio completo
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: accent }} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Link to="/contacto" className="group relative block h-[26rem] overflow-hidden rounded-3xl shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-lg">
                  <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">{p.type}</span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-1.5 text-xs text-white/70">
                      <MapPin size={13} />
                      {p.location}
                    </div>
                    <h3 className="mt-1.5 text-xl font-medium text-white">{p.name}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="text-sm font-semibold text-white">{p.priceLabel}</span>
                      <span className="inline-flex items-center gap-1 text-sm text-white/80">
                        Detalles
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — minimal numbered list on navy */}
      <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
        <BackgroundDecor tone="dark" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">Servicios</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-light text-white leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                Soluciones inmobiliarias integrales.
              </h2>
              <p className="mt-5 text-base text-white/70 leading-relaxed">
                Acompañamiento experto en cada etapa, desde la búsqueda hasta la formalización.
              </p>
            </Reveal>
            <div className="lg:col-span-8 border-t border-white/10">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="group -mx-4 flex items-start gap-5 rounded-xl border-b border-white/10 px-4 py-6 transition-colors duration-300 hover:bg-white/[0.03]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs font-medium" style={{ color: accent }}>{s.num}</span>
                    <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <s.icon size={20} className="text-white/60" strokeWidth={1.5} />
                        <h3 className="text-lg md:text-xl font-medium text-white">{s.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.text}</p>
                    </div>
                    <ArrowRight size={18} className="mt-1 shrink-0 text-transparent transition-colors duration-300 group-hover:text-white/40" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <Reveal>
            <Quote size={48} className="mx-auto" style={{ color: accent }} strokeWidth={1.25} />
            <p className="mt-8 text-2xl md:text-3xl font-light text-navy leading-[1.4]" style={{ letterSpacing: '-0.01em' }}>
              “{testimonial.quote}”
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-navy/20" />
              <div className="text-sm">
                <div className="font-medium text-navy">{testimonial.author}</div>
                <div className="text-graphite/55">{testimonial.role}</div>
              </div>
              <span className="h-px w-8 bg-navy/20" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Smart Form */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">Asesoría</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-navy leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>Agendar asesoría.</h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">Cuéntanos qué buscas y un asesor te contactará con las mejores opciones.</p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, t: 'Asesoría transparente y sin compromiso' },
                  { icon: TrendingUp, t: 'Oportunidades con potencial de plusvalía' },
                  { icon: KeyRound, t: 'Acompañamiento hasta la entrega de llaves' },
                ].map((b) => (
                  <div key={b.t} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${accent}18` }}>
                      <b.icon size={18} style={{ color: accent }} strokeWidth={1.5} />
                    </span>
                    <span className="text-sm md:text-base text-navy">{b.t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <WhatsAppButton variant="inline" message={whatsappMessages.immobiliare} label="Contactar por WhatsApp" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8 shadow-premium">
                <ContactForm
                  fields={[
                    { name: 'name', label: 'Nombre', required: true, placeholder: 'Tu nombre' },
                    { name: 'phone', label: 'Teléfono', required: true, placeholder: '829-367-2491' },
                    { name: 'interest', label: 'Interés', type: 'select', options: [
                      { value: '', label: 'Selecciona' },
                      { value: 'comprar', label: 'Comprar' },
                      { value: 'vender', label: 'Vender' },
                      { value: 'invertir', label: 'Invertir' },
                      { value: 'prestamo', label: 'Préstamo' },
                    ]},
                    { name: 'propertyType', label: 'Tipo de propiedad', type: 'select', options: [
                      { value: '', label: 'Selecciona' },
                      { value: 'apartamento', label: 'Apartamento' },
                      { value: 'casa', label: 'Casa' },
                      { value: 'terreno', label: 'Terreno' },
                      { value: 'comercial', label: 'Comercial' },
                      { value: 'otro', label: 'Otro' },
                    ]},
                    { name: 'budget', label: 'Presupuesto aproximado', placeholder: 'Ej. $150,000' },
                    { name: 'location', label: 'Ubicación deseada', placeholder: 'Ciudad o zona' },
                    { name: 'message', label: 'Mensaje adicional', type: 'textarea', placeholder: 'Cuéntanos más sobre lo que buscas...' },
                  ]}
                  submitLabel="Solicitar asesoría"
                  accentColor={accent}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA — cinematic */}
      <section className="relative overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(115deg, ${accent}44, transparent 55%)` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-28 md:py-36 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl font-light text-white leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              Encuentra tu próxima <span className="italic" style={{ color: '#ec6b62' }}>inversión</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">Explora nuestras oportunidades inmobiliarias y recibe asesoría personalizada.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-[#C7372F] hover:text-white">
                Contactar
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/empresas" className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy">Ver otras divisiones</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
