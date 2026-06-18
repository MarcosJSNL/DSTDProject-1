import { Sparkles, X } from 'lucide-react'

interface Props {
  open: boolean
  onClick: () => void
}

export default function AssistantButton({ open, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Cerrar asistente' : 'Abrir asistente'}
      className={[
        'group relative flex h-14 w-14 items-center justify-center',
        'rounded-full',
        'bg-navy-deep text-champagne',
        'border border-champagne/20',
        'shadow-[0_4px_20px_rgba(200,164,93,0.25)]',
        'transition-all duration-300',
        'hover:scale-110 hover:border-champagne/40 hover:shadow-[0_6px_28px_rgba(200,164,93,0.35)]',
        'active:scale-95',
      ].join(' ')}
    >
      {/* Subtle pulse ring */}
      <span className="absolute inset-0 rounded-full border border-champagne/20 animate-ping opacity-20 pointer-events-none" />

      <span className="relative transition-transform duration-300 group-hover:rotate-12">
        {open ? <X size={22} strokeWidth={2} /> : <Sparkles size={22} strokeWidth={1.5} />}
      </span>
    </button>
  )
}
