import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Empresas', to: '/empresas' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

function makeLinkClass(overlay: boolean) {
  return function linkClass({ isActive }: { isActive: boolean }) {
    const base = 'text-sm transition-colors duration-300'
    if (overlay) {
      return [
        base,
        isActive
          ? 'text-[#C8A45D] font-medium'
          : 'text-white/90 hover:text-[#C8A45D]',
      ].join(' ')
    }
    return [
      base,
      isActive
        ? 'text-[#C8A45D] font-medium'
        : 'text-navy/90 hover:text-[#C8A45D]',
    ].join(' ')
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const overlay = pathname === '/' || /^\/empresas\/.+/.test(pathname)

  return (
    <nav className={`px-6 md:px-12 lg:px-16 py-4 relative z-50 ${overlay ? '' : 'bg-navy-deep'}`}>
      <div className={`max-w-7xl mx-auto rounded-xl px-4 py-2 flex items-center justify-between ${overlay ? 'liquid-glass' : 'bg-ivory border border-navy/10'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-[#C8A45D]" />
          <div className="flex flex-col leading-none">
            <span className={`text-2xl font-semibold tracking-tight ${overlay ? 'text-white' : 'text-navy'}`}>
              DSTD
            </span>
            <span className={`text-[10px] uppercase tracking-widest -mt-0.5 ${overlay ? 'text-white/70' : 'text-navy/70'}`}>
              Enterprises
            </span>
          </div>
        </Link>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={makeLinkClass(overlay)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <Link
            to="/contacto"
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${overlay ? 'bg-white text-black hover:bg-[#C8A45D] hover:text-white' : 'bg-navy text-white hover:bg-[#C8A45D]'}`}
          >
            Contactar
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${overlay ? 'text-white' : 'text-navy'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden mt-2 max-w-7xl mx-auto rounded-xl px-4 py-4 flex flex-col gap-3 ${overlay ? 'liquid-glass' : 'bg-ivory border border-navy/10'}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                [
                  'text-sm transition-colors duration-300',
                  isActive
                    ? 'text-[#C8A45D] font-medium'
                    : overlay ? 'text-white/90 hover:text-[#C8A45D]' : 'text-navy/90 hover:text-[#C8A45D]',
                ].join(' ')
              }
              onClick={() => setMobileOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 text-center mt-1 ${overlay ? 'bg-white text-black hover:bg-[#C8A45D] hover:text-white' : 'bg-navy text-white hover:bg-[#C8A45D]'}`}
            onClick={() => setMobileOpen(false)}
          >
            Contactar
          </Link>
        </div>
      )}
    </nav>
  )
}
