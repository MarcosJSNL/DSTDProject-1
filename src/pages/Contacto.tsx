import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BackgroundDecor from '../components/BackgroundDecor'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import WhatsAppButton from '../components/WhatsAppButton'
import SEO from '../components/SEO'
import { seoMeta } from '../data/seo'
import { companies } from '../data/companies'
import { whatsappMessages } from '../utils/whatsapp'

export default function Contacto() {
  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/contacto']} pathname="/contacto" />
      <PageHero
        eyebrow="Contacto"
        title="Construyamos nuevas oportunidades juntos."
        description="Conecta con DSTD Enterprises y conoce cómo nuestras divisiones pueden aportar valor a tu próximo proyecto."
      />

      {/* Contact Grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <Reveal>
              <SectionHeading
                eyebrow="Escríbenos"
                tone="light"
                title="Envíanos un mensaje."
              />
              <div className="mt-8">
                <ContactForm
                  fields={[
                    { name: 'name', label: 'Nombre completo', required: true, placeholder: 'Tu nombre' },
                    { name: 'email', label: 'Correo electrónico', type: 'email', required: true, placeholder: 'tu@email.com' },
                    { name: 'phone', label: 'Teléfono', placeholder: '829-367-2491' },
                    { name: 'company', label: 'Empresa de interés', type: 'select', options: [
                      { value: '', label: 'Selecciona una opción' },
                      { value: 'general', label: 'DSTD Enterprises (General)' },
                      { value: 'hormigones', label: 'DSTD Hormigones' },
                      { value: 'industrias', label: 'DSTD Industrias' },
                      { value: 'immobiliare', label: 'DSTD Immobiliare' },
                      { value: 'agregados', label: 'DSTD Agregados' },
                    ]},
                    { name: 'message', label: 'Mensaje', type: 'textarea', required: true, placeholder: 'Cuéntanos sobre tu proyecto o consulta...' },
                  ]}
                  submitLabel="Enviar mensaje"
                />
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-navy">Datos de contacto</h3>
                  <p className="mt-2 text-sm md:text-base text-graphite/65 leading-relaxed">
                    Estamos ubicados en La Vega, República Dominicana y listos para atenderte.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10">
                      <MapPin size={20} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">Ubicación</div>
                      <div className="text-sm text-graphite/60">La Vega, República Dominicana</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10">
                      <Mail size={20} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">Correo</div>
                      <div className="text-sm text-graphite/60">dstdenterprises@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10">
                      <Phone size={20} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">Teléfono</div>
                      <div className="text-sm text-graphite/60">829-367-2491</div>
                    </div>
                  </div>
                </div>

                <WhatsAppButton variant="inline" message={whatsappMessages.general} label="Escríbenos por WhatsApp" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Division Contact Cards */}
      <section className="relative overflow-hidden bg-[#EDE9E2] py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionHeading eyebrow="Divisiones" tone="light" title="Contacto por división." />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl glass-card p-7 shadow-premium transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: c.accent }}>
                    {c.short}
                  </div>
                  <h3 className="mt-2 text-xl font-medium text-navy">{c.name}</h3>
                  <p className="mt-2 text-sm text-graphite/65 leading-relaxed">{c.description}</p>
                  <Link
                    to={`/empresas/${c.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors duration-300 hover:text-champagne"
                  >
                    Conocer más
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trabaja con nosotros */}
      <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
        <BackgroundDecor tone="dark" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">Carreras</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Trabaja con nosotros.
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                En DSTD Enterprises buscamos personas comprometidas, con visión de crecimiento y actitud de servicio. Si quieres formar parte de un grupo empresarial en expansión, envíanos tu información.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Operaciones', 'Administración', 'Ventas', 'Construcción', 'Logística', 'Atención al cliente'].map((area) => (
                  <div key={area} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-sm">
                    {area}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8">
                <h3 className="text-xl font-medium text-navy">Postulación</h3>
                <p className="mt-2 text-sm text-graphite/60">Completa el formulario y nos pondremos en contacto contigo.</p>
                <div className="mt-6">
                  <ContactForm
                    fields={[
                      { name: 'name', label: 'Nombre completo', required: true, placeholder: 'Tu nombre' },
                      { name: 'phone', label: 'Teléfono', required: true, placeholder: '829-367-2491' },
                      { name: 'email', label: 'Correo electrónico', type: 'email', required: true, placeholder: 'tu@email.com' },
                      { name: 'area', label: 'Área de interés', type: 'select', options: [
                        { value: '', label: 'Selecciona un área' },
                        { value: 'operaciones', label: 'Operaciones' },
                        { value: 'administracion', label: 'Administración' },
                        { value: 'ventas', label: 'Ventas' },
                        { value: 'construccion', label: 'Construcción' },
                        { value: 'logistica', label: 'Logística' },
                        { value: 'atencion', label: 'Atención al cliente' },
                      ]},
                      { name: 'message', label: 'Mensaje / Notas', type: 'textarea', placeholder: 'Cuéntanos sobre ti. Adjuntarás tu CV más adelante.' },
                    ]}
                    submitLabel="Enviar postulación"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
