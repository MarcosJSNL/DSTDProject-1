export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant'
  text: string
  actions?: ActionButton[]
}

export interface ActionButton {
  label: string
  type: 'link' | 'whatsapp' | 'text'
  href?: string
  message?: string
}

function makeWhatsAppAction(label: string, message: string): ActionButton {
  return {
    label,
    type: 'whatsapp',
    message,
  }
}

function makeLinkAction(label: string, href: string): ActionButton {
  return {
    label,
    type: 'link',
    href,
  }
}

export const quickQuestions = [
  '¿Qué es DSTD Enterprises?',
  'Quiero cotizar hormigón',
  'Busco materiales de construcción',
  'Me interesan propiedades o préstamos',
  'Necesito arena, grava o piedra',
  '¿Cómo puedo contactarles?',
]

export const initialMessage: ChatMessage = {
  id: 'welcome',
  sender: 'assistant',
  text: 'Hola, soy el asistente virtual de DSTD Enterprises. Puedo ayudarte con información sobre nuestras empresas, servicios, proyectos, cotizaciones y contacto.',
}

export function getResponse(userText: string): ChatMessage {
  const t = userText.toLowerCase()

  // DSTD Enterprises general
  if (/dstd|empresa|empresarial|grupo|holding|qué es|quiénes son/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'DSTD Enterprises es un grupo empresarial que integra diferentes divisiones enfocadas en construcción, hormigón, industria, immobiliare y agregados, con una visión de desarrollo, confianza y crecimiento.',
      actions: [
        makeLinkAction('Ver empresas', '/empresas'),
        makeLinkAction('Ir a contacto', '/contacto'),
      ],
    }
  }

  // Hormigones / concreto
  if (/hormigón|hormigon|concreto|vaciado|zapata|columna|losa|mezcla|psi|batch/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'Para servicios de hormigón o concreto premezclado, puedes contactar a DSTD Hormigones. Ofrecemos soluciones para obras, vaciados, programación de entregas y asesoría para proyectos. ¿Deseas cotizar hormigón?',
      actions: [
        makeLinkAction('Ver DSTD Hormigones', '/empresas/hormigones'),
        makeWhatsAppAction('Cotizar por WhatsApp', 'Hola, estoy interesado en cotizar hormigón para una obra.'),
      ],
    }
  }

  // Industrias / materiales
  if (/block|cemento|varilla|viga|material|industrial|construcción|aluzinc/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'Para materiales industriales y de construcción, DSTD Industrias puede ayudarte con blocks, cemento, varillas, vigas H y otros materiales para proyectos. ¿Deseas solicitar una cotización?',
      actions: [
        makeLinkAction('Ver DSTD Industrias', '/empresas/industrias'),
        makeWhatsAppAction('Cotizar por WhatsApp', 'Hola, estoy interesado en cotizar materiales industriales con DSTD Industrias.'),
      ],
    }
  }

  // Immobiliare / propiedades
  if (/propiedad|casa|apartamento|solar|préstamo|prestamo|financiamiento|inversión|inversion|inmobiliario|bienes raíces/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'Para propiedades, proyectos inmobiliarios, inversiones y préstamos, DSTD Immobiliare puede orientarte. Podemos ayudarte a encontrar oportunidades para comprar, invertir o financiar. ¿Deseas agendar una asesoría?',
      actions: [
        makeLinkAction('Ver DSTD Immobiliare', '/empresas/immobiliare'),
        makeWhatsAppAction('Agendar asesoría por WhatsApp', 'Hola, estoy interesado en propiedades, proyectos o préstamos con DSTD Immobiliare.'),
      ],
    }
  }

  // Agregados
  if (/arena|grava|piedra|agregado|material selecto|árido|arido|suministro/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'Para arena, grava, piedra y agregados, DSTD Agregados ofrece suministro para obras y proyectos de construcción. ¿Deseas cotizar agregados?',
      actions: [
        makeLinkAction('Ver DSTD Agregados', '/empresas/agregados'),
        makeWhatsAppAction('Cotizar por WhatsApp', 'Hola, estoy interesado en cotizar agregados como arena, grava o piedra.'),
      ],
    }
  }

  // Contacto
  if (/contacto|teléfono|telefono|email|correo|ubicación|ubican|escribir|hablar/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'Puedes contactarnos a través de WhatsApp, formulario web o nuestras redes sociales. También puedo dirigirte a la división correcta según lo que necesites.',
      actions: [
        makeLinkAction('Ir a contacto', '/contacto'),
        makeWhatsAppAction('Escríbenos por WhatsApp', 'Hola, me gustaría recibir información sobre DSTD Enterprises.'),
      ],
    }
  }

  // Cotizar genérico
  if (/cotizar|cotización|cotizacion|precio|costo|cuánto|cunto/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'Con gusto te ayudamos con una cotización. ¿Sobre cuál división deseas información? Puedes elegir entre hormigón, materiales industriales, propiedades o agregados.',
      actions: [
        makeLinkAction('Ver empresas', '/empresas'),
        makeWhatsAppAction('Cotizar por WhatsApp', 'Hola, me gustaría recibir una cotización de DSTD Enterprises.'),
      ],
    }
  }

  // Proyectos
  if (/proyecto|obra|desarrollo|construir|edificar/.test(t)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: 'En DSTD Enterprises contamos con capacidades que cubren todo el ciclo del desarrollo: desde la materia prima hasta el proyecto terminado. ¿Te interesa hormigón, materiales, propiedades o agregados para tu proyecto?',
      actions: [
        makeLinkAction('Ver empresas', '/empresas'),
        makeLinkAction('Ver proyectos', '/proyectos'),
      ],
    }
  }

  // Fallback
  return {
    id: Date.now().toString(),
    sender: 'assistant',
    text: 'Puedo ayudarte con información sobre DSTD Enterprises, hormigón, materiales industriales, propiedades, préstamos, agregados, proyectos y contacto. ¿Sobre cuál área deseas información?',
    actions: [
      makeLinkAction('Ver empresas', '/empresas'),
      makeLinkAction('Ir a contacto', '/contacto'),
    ],
  }
}

export function getQuickQuestionResponse(question: string): ChatMessage {
  const q = question.toLowerCase()

  if (q.includes('qué es')) {
    return getResponse('dstd enterprises')
  }
  if (q.includes('hormigón')) {
    return getResponse('cotizar hormigón')
  }
  if (q.includes('materiales')) {
    return getResponse('materiales de construcción')
  }
  if (q.includes('propiedades') || q.includes('préstamos')) {
    return getResponse('propiedades')
  }
  if (q.includes('arena') || q.includes('grava')) {
    return getResponse('agregados')
  }
  if (q.includes('contactar')) {
    return getResponse('contacto')
  }

  return getResponse(question)
}
