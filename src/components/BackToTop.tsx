import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={[
        'fixed bottom-24 right-6 z-[60]',
        'flex h-11 w-11 items-center justify-center rounded-full',
        'bg-navy text-white shadow-lg',
        'transition-all duration-300',
        'hover:bg-champagne hover:scale-110',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  )
}
