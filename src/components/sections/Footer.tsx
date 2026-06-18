import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import BackgroundDecor from '../BackgroundDecor'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Empresas', to: '/empresas' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

const companyLinks = [
  { name: 'DSTD Hormigones', to: '/empresas/hormigones' },
  { name: 'DSTD Industrias', to: '/empresas/industrias' },
  { name: 'DSTD Immobiliare', to: '/empresas/immobiliare' },
  { name: 'DSTD Agregados', to: '/empresas/agregados' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <BackgroundDecor tone="dark" dots={false} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-champagne" />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-semibold tracking-tight">DSTD</span>
                <span className="text-[10px] uppercase tracking-widest text-white/60 -mt-0.5">
                  Enterprises
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/60 leading-relaxed">
              Grupo empresarial enfocado en construcción, industria, bienes
              raíces y agregados, con visión de desarrollo y crecimiento.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              Navegación
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
              Empresas
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((c) => (
                <li key={c.name}>
                  <Link
                    to={c.to}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-champagne"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              Contacto
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
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-champagne" strokeWidth={1.5} />
                829-367-2491
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} DSTD Enterprises. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link to="/privacidad" className="transition-colors hover:text-champagne">Política de Privacidad</Link>
            <span>·</span>
            <Link to="/terminos" className="transition-colors hover:text-champagne">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
