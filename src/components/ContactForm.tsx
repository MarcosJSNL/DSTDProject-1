import { useState } from 'react'
import { Send } from 'lucide-react'
import { getWhatsAppUrl, defaultPhone } from '../utils/whatsapp'

interface Field {
  name: string
  label: string
  type?: string
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

interface ContactFormProps {
  fields: Field[]
  submitLabel?: string
  accentColor?: string
  onSubmit?: (data: Record<string, string>) => void
}

export default function ContactForm({
  fields,
  submitLabel = 'Enviar mensaje',
  accentColor = '#C8A45D',
  onSubmit,
}: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = fields.reduce((acc, field) => {
      acc[field.name] = values[field.name] || ''
      return acc
    }, {} as Record<string, string>)

    if (onSubmit) {
      onSubmit(data)
    } else {
      const lines = fields
        .filter((f) => data[f.name])
        .map((f) => {
          const val = data[f.name]
          if (f.type === 'select' && f.options) {
            const opt = f.options.find((o) => o.value === val)
            return `*${f.label}:* ${opt?.label || val}`
          }
          return `*${f.label}:* ${val}`
        })
      const message = ['Hola, tengo una consulta desde el sitio web de DSTD Enterprises:', '', ...lines].join('\n')
      window.open(getWhatsAppUrl({ phone: defaultPhone, message }), '_blank')
      setValues({})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="mb-1.5 block text-sm font-medium text-navy">{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={values[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
              rows={5}
              className="w-full rounded-xl border border-navy/10 bg-ivory px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 transition-shadow"
              style={{ '--tw-ring-color': `${accentColor}50` } as React.CSSProperties}
            />
          ) : field.type === 'select' && field.options ? (
            <select
              name={field.name}
              value={values[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              className="w-full rounded-xl border border-navy/10 bg-ivory px-5 py-3 text-sm text-navy focus:outline-none focus:ring-2 transition-shadow"
              style={{ '--tw-ring-color': `${accentColor}50` } as React.CSSProperties}
            >
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type || 'text'}
              value={values[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-navy/10 bg-ivory px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 transition-shadow"
              style={{ '--tw-ring-color': `${accentColor}50` } as React.CSSProperties}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-medium text-white transition-colors duration-300"
        style={{ backgroundColor: '#0B1F3A' }}
        onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = accentColor))}
        onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = '#0B1F3A'))}
      >
        {submitLabel}
        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
