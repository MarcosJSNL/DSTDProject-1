import { MessageSquare, X } from 'lucide-react'

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
        'group flex items-center gap-2.5 rounded-full',
        'bg-navy-deep text-white shadow-premium-lg',
        'border border-white/10',
        'transition-all duration-300 hover:bg-navy hover:shadow-2xl',
        'pl-4 pr-3 py-3',
      ].join(' ')}
    >
      <span className="text-sm font-medium tracking-wide">Asistente DSTD</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
        {open ? <X size={18} strokeWidth={2} /> : <MessageSquare size={18} strokeWidth={2} />}
      </span>
    </button>
  )
}
