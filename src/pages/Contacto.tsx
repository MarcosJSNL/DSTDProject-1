import { MapPin, Mail, ArrowRight, Globe, Headset } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BackgroundDecor from '../components/BackgroundDecor'
import BrandText from '../components/BrandText'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import WhatsAppButton from '../components/WhatsAppButton'
import SEO from '../components/SEO'
import { seoMeta } from '../data/seo'
import { companies } from '../data/companies'
import { whatsappMessages, getWhatsAppUrl } from '../utils/whatsapp'
import { useLanguage } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

export default function Contacto() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const c = t.contact
  const isEn = language === 'en'

  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/contacto']} pathname="/contacto" />
      <PageHero
        eyebrow={c.pageTitle}
        title={c.pageSubtitle}
        description={<BrandText>{isEn ? 'Connect with DSTD Enterprises and learn how our divisions can add value to your next project.' : 'Conecta con DSTD Enterprises y conoce cómo nuestras divisiones pueden aportar valor a tu próximo proyecto.'}</BrandText>}
      />

      {/* Contact Grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <Reveal>
              <SectionHeading
                eyebrow={isEn ? 'Write us' : 'Escríbenos'}
                tone="light"
                title={c.formTitle}
              />
              <div className="mt-8">
                <ContactForm
                  fields={[
                    { name: 'name', label: c.form.name, required: true, placeholder: isEn ? 'Your name' : 'Tu nombre' },
                    { name: 'email', label: c.form.email, type: 'email', required: true, placeholder: 'tu@email.com' },
                    { name: 'phone', label: isEn ? 'Phone' : 'Teléfono', placeholder: '829-367-2491' },
                    { name: 'company', label: isEn ? 'Company of interest' : 'Empresa de interés', type: 'select', options: [
                      { value: '', label: isEn ? 'Select an option' : 'Selecciona una opción' },
                      { value: 'general', label: 'DSTD Enterprises (General)' },
                      { value: 'hormigones', label: 'DSTD Hormigones' },
                      { value: 'industrias', label: 'DSTD Industrias' },
                      { value: 'immobiliare', label: 'DSTD Immobiliare' },
                      { value: 'agregados', label: 'DSTD Agregados' },
                    ]},
                    { name: 'message', label: c.form.message, type: 'textarea', required: true, placeholder: isEn ? 'Tell us about your project or inquiry...' : 'Cuéntanos sobre tu proyecto o consulta...' },
                  ]}
                  submitLabel={c.form.send}
                />
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-navy">{c.infoTitle}</h3>
                  <p className="mt-2 text-sm md:text-base text-graphite/65 leading-relaxed">
                    {isEn ? 'We are located in La Vega, Dominican Republic and ready to assist you.' : 'Estamos ubicados en La Vega, República Dominicana y listos para atenderte.'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-navy/5 bg-ivory/60 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10">
                      <MapPin size={20} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">{c.location}</div>
                      <div className="text-sm text-graphite/60">La Vega, República Dominicana</div>
                    </div>
                  </div>
                  <a
                    href="mailto:dstdenterprises@gmail.com"
                    className="flex items-center gap-4 rounded-2xl border border-navy/5 bg-ivory/60 p-4 transition-colors duration-300 hover:border-champagne/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10">
                      <Mail size={20} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">{c.email}</div>
                      <div className="text-sm text-graphite/60">dstdenterprises@gmail.com</div>
                    </div>
                  </a>

                  {[
                    {
                      icon: Globe,
                      title: isEn ? 'International' : 'Internacional',
                      numbers: ['+1 786 933 0017', '+1 786 933 0018'],
                    },
                    {
                      icon: Headset,
                      title: isEn ? 'National sales' : 'Nacional',
                      numbers: ['+1 809 858 8522', '+1 829 367 2491', '+1 809 666 6616', '+1 849 257 0251', '+1 849 564 0017', '+1 849 564 0018'],
                    },
                  ].map((group) => (
                    <div key={group.title} className="rounded-2xl border border-navy/5 bg-ivory/60 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-champagne/10">
                          <group.icon size={18} className="text-champagne" strokeWidth={1.5} />
                        </div>
                        <div className="font-medium text-navy">{group.title}</div>
                        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-2.5 py-1 text-[11px] font-semibold text-[#1DA851]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                          WhatsApp only
                        </span>
                      </div>
                      <div className="mt-3 grid gap-2 pl-12">
                        {group.numbers.map((num) => (
                          <a
                            key={num}
                            href={getWhatsAppUrl({ phone: num, message: whatsappMessages.general })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/num flex items-center gap-2 text-sm text-graphite/70 transition-colors duration-300 hover:text-[#1DA851]"
                          >
                            <span className="font-medium tracking-wide">{num}</span>
                            <ArrowRight size={14} className="opacity-0 -translate-x-1 transition-all duration-300 group-hover/num:opacity-100 group-hover/num:translate-x-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <WhatsAppButton variant="inline" message={whatsappMessages.general} label={isEn ? 'Write us on WhatsApp' : 'Escríbenos por WhatsApp'} />
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
            <SectionHeading eyebrow={t.footer.divisions} tone="light" title={isEn ? 'Contact by division.' : 'Contacto por división.'} />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl glass-card p-7 shadow-premium transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: c.accent }}>
                    {c.short}
                  </div>
                  <h3 className="mt-2 text-xl font-medium text-navy"><BrandText>{((t.companies as unknown) as Record<string, { name: string }>)[c.id]?.name ?? c.name}</BrandText></h3>
                  <p className="mt-2 text-sm text-graphite/65 leading-relaxed">{((t.companies as unknown) as Record<string, { description: string }>)[c.id]?.description ?? c.description}</p>
                  <Link
                    to={`/empresas/${c.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors duration-300 hover:text-champagne"
                  >
                    {isEn ? 'Learn more' : 'Conocer más'}
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
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">{t.careers.eyebrow}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                {t.careers.title}
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                <BrandText>{t.careers.description}</BrandText>
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {t.careers.areas.map((area) => (
                  <div key={area} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-sm">
                    {area}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8">
                <h3 className="text-xl font-medium text-navy">{t.careers.applicationTitle}</h3>
                <p className="mt-2 text-sm text-graphite/60">{t.careers.applicationDesc}</p>
                <div className="mt-6">
                  <ContactForm
                    fields={[
                      { name: 'name', label: t.careers.form.fullName, required: true, placeholder: t.careers.form.fullNamePlaceholder },
                      { name: 'phone', label: t.careers.form.phone, required: true, placeholder: '829-367-2491' },
                      { name: 'email', label: t.careers.form.email, type: 'email', required: true, placeholder: t.careers.form.emailPlaceholder },
                      { name: 'area', label: t.careers.form.area, type: 'select', options: [...t.careers.selectOptions] },
                      { name: 'message', label: t.careers.form.message, type: 'textarea', placeholder: t.careers.form.messagePlaceholder },
                    ]}
                    submitLabel={t.careers.form.submit}
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
