import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react'
import BackgroundDecor from '../BackgroundDecor'
import BrandText from '../BrandText'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

const companyLinks = [
  { key: 'hormigones', to: '/empresas/hormigones' },
  { key: 'industrias', to: '/empresas/industrias' },
  { key: 'immobiliare', to: '/empresas/immobiliare' },
  { key: 'agregados', to: '/empresas/agregados' },
]

const socials = [
  { label: 'Enterprises', instagram: 'https://www.instagram.com/dstdenterprises', facebook: 'https://www.facebook.com/share/17jYTgkND3/' },
  { label: 'Hormigones', instagram: 'https://www.instagram.com/dstdhormigones', facebook: 'https://www.facebook.com/share/18jqmPNQwK/' },
  { label: 'Industrias', instagram: 'https://www.instagram.com/dstdindustrias', facebook: 'https://www.facebook.com/share/1Fxk63NvQi/' },
  { label: 'Immobiliare', instagram: 'https://www.instagram.com/dstdimmobiliare', facebook: 'https://www.facebook.com/share/1BHDiUrS6R/' },
  { label: 'Agregados', instagram: 'https://www.instagram.com/dstdagregados', facebook: 'https://www.facebook.com/share/1cAiK3Uz8E/' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { language } = useLanguage()
  const t = getTranslation(language)

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.companies, to: '/empresas' },
    { label: t.nav.projects, to: '/proyectos' },
    { label: t.nav.about, to: '/nosotros' },
    { label: t.nav.contact, to: '/contacto' },
  ]

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <BackgroundDecor tone="dark" dots={false} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-champagne" />
              <span className="font-gothic-red text-3xl leading-none">DSTD</span>
              <span className="text-sm font-medium uppercase tracking-widest text-white/60">
                Enterprises
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/60 leading-relaxed">
              {language === 'es'
                ? 'Grupo empresarial enfocado en construcción, industria, bienes raíces y agregados, con visión de desarrollo y crecimiento.'
                : 'Business group focused on construction, industry, real estate and aggregates, with a vision for development and growth.'}
            </p>

            {/* Social media */}
            <div className="mt-6 space-y-4">
              {/* Instagram */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Instagram size={16} className="text-champagne shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Instagram</span>
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.instagram}
                      href={s.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 transition-colors duration-300 hover:border-champagne/40 hover:text-champagne"
                    >
                      <Instagram size={14} strokeWidth={1.5} className="shrink-0" />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Facebook */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Facebook size={16} className="text-champagne shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Facebook</span>
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.facebook}
                      href={s.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 transition-colors duration-300 hover:border-champagne/40 hover:text-champagne"
                    >
                      <Facebook size={14} strokeWidth={1.5} className="shrink-0" />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-champagne"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              {t.footer.divisions}
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((c) => (
                <li key={c.key}>
                  <Link
                    to={c.to}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-champagne"
                  >
                    <BrandText dstdClassName="font-gothic-red">{((t.companies as unknown) as Record<string, { name: string }>)[c.key]?.name ?? c.key}</BrandText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              {t.footer.contact}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-champagne" strokeWidth={1.5} />
                La Vega, República Dominicana
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-champagne" strokeWidth={1.5} />
                dstdenterprises@gmail.com
              </li>
            </ul>
            <div className="mt-5 space-y-4">
              {[
                {
                  title: language === 'es' ? 'Internacional' : 'International',
                  numbers: ['+1 786 933 0017', '+1 786 933 0018'],
                },
                {
                  title: language === 'es' ? 'Nacional' : 'National sales',
                  numbers: ['+1 809 858 8522', '+1 829 367 2491', '+1 809 666 6616', '+1 849 257 0251', '+1 849 564 0017', '+1 849 564 0018'],
                },
              ].map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-champagne shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-white/90">{group.title}</span>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#25D366]/15 px-2 py-0.5 text-[10px] font-semibold text-[#3ddc7f]">
                      <span className="h-1 w-1 rounded-full bg-[#25D366]" />
                      WhatsApp
                    </span>
                  </div>
                  <div className="mt-2 space-y-1 pl-6">
                    {group.numbers.map((num) => (
                      <a
                        key={num}
                        href={`https://wa.me/${num.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-white/60 transition-colors duration-300 hover:text-champagne"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} <BrandText dstdClassName="font-gothic-red">DSTD Enterprises</BrandText>. {t.footer.rights}
          </p>
          <div
            className="flex items-center gap-4 text-xs text-white/40 relative z-[100]"
            style={{ pointerEvents: 'auto' }}
          >
            <Link
              to="/privacidad"
              className="relative cursor-pointer transition-colors hover:text-champagne py-1"
              style={{ pointerEvents: 'auto' }}
            >
              {t.footer.privacy}
            </Link>
            <span>·</span>
            <Link
              to="/terminos"
              className="relative cursor-pointer transition-colors hover:text-champagne py-1"
              style={{ pointerEvents: 'auto' }}
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://www.instagram.com/codify.webagency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white/30 hover:text-champagne transition-colors duration-300"
          >
            {language === 'es'
              ? 'Sitio web creado por Codify Web Agency'
              : 'Website created by Codify Web Agency'}
          </a>
        </div>
      </div>
    </footer>
  )
}
