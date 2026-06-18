import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import { useLanguage } from '../context/LanguageContext'

interface LegalLayoutProps {
  title: string
  children: React.ReactNode
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  const { language } = useLanguage()
  const isEn = language === 'en'

  return (
    <div className="bg-ivory min-h-screen">
      <SEO title={title} description={`${title} ${isEn ? 'of DSTD Enterprises.' : 'de DSTD Enterprises.'}`} pathname="" />
      <div className="relative bg-navy-deep py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-champagne">
            <ArrowLeft size={16} />
            {isEn ? 'Back to home' : 'Volver al inicio'}
          </Link>
          <h1 className="mt-6 text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
            {title}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 md:py-24">
        <article className="text-base md:text-lg text-graphite/80 leading-relaxed space-y-6">
          {children}
        </article>
      </div>
    </div>
  )
}
