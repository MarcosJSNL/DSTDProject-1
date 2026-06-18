interface WhatsAppConfig {
  phone: string
  message?: string
}

export function getWhatsAppUrl({ phone, message }: WhatsAppConfig): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const text = encodeURIComponent(message || '')
  return `https://wa.me/${cleanPhone}${text ? `?text=${text}` : ''}`
}

export const defaultPhone = '18293672491'

export const whatsappMessages = {
  hormigones:
    'Hola, estoy interesado en cotizar hormigón para una obra. Me gustaría recibir más información.',
  industrias:
    'Hola, estoy interesado en cotizar materiales industriales con DSTD Industrias.',
  immobiliare:
    'Hola, estoy interesado en propiedades, proyectos o préstamos con DSTD Immobiliare.',
  agregados:
    'Hola, estoy interesado en cotizar agregados como arena, grava o piedra.',
  general:
    'Hola, me gustaría recibir información sobre DSTD Enterprises.',
}
