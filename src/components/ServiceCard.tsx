import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  text: string
  accentColor?: string
}

export default function ServiceCard({ icon: Icon, title, text, accentColor = '#C8A45D' }: ServiceCardProps) {
  return (
    <div className="group h-full rounded-3xl glass-card p-7 shadow-premium transition-all duration-500 hover:-translate-y-1">
      <div
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(to right, ${accentColor}cc, transparent)` }}
      />
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-opacity-20"
        style={{ backgroundColor: `${accentColor}18` }}
      >
        <Icon size={24} style={{ color: accentColor }} strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 text-lg font-medium text-navy">{title}</h3>
      <p className="mt-2 text-sm text-graphite/65 leading-relaxed">{text}</p>
    </div>
  )
}
