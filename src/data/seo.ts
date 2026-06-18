export interface SEOMeta {
  title: string
  description: string
}

export const seoMeta: Record<string, SEOMeta> = {
  '/': {
    title: 'DSTD Enterprises | Grupo empresarial en construcción, industria, immobiliare y agregados',
    description:
      'DSTD Enterprises integra construcción, hormigones, industria, immobiliare y agregados bajo una visión de desarrollo, confianza y crecimiento a largo plazo.',
  },
  '/empresas': {
    title: 'Empresas DSTD | Hormigones, Industrias, Immobiliare y Agregados',
    description:
      'Conoce las cuatro divisiones de DSTD Enterprises: Hormigones, Industrias, Immobiliare y Agregados. Calidad y excelencia en cada sector.',
  },
  '/proyectos': {
    title: 'Proyectos DSTD | Desarrollo, construcción y soluciones empresariales',
    description:
      'Descubre los proyectos y capacidades de DSTD Enterprises: obras, materiales, inmobiliario y agregados.',
  },
  '/nosotros': {
    title: 'Nosotros | DSTD Enterprises',
    description:
      'Conoce la visión, misión y valores de DSTD Enterprises. Un grupo empresarial enfocado en desarrollo sostenible.',
  },
  '/contacto': {
    title: 'Contacto | DSTD Enterprises',
    description:
      'Contacta con DSTD Enterprises. Cotiza hormigón, materiales, propiedades o agregados en República Dominicana.',
  },
  '/empresas/hormigones': {
    title: 'DSTD Hormigones | Hormigón y concreto premezclado',
    description:
      'DSTD Hormigones ofrece concreto premezclado de alta resistencia para obras que exigen calidad y puntualidad.',
  },
  '/empresas/industrias': {
    title: 'DSTD Industrias | Materiales industriales para construcción',
    description:
      'DSTD Industrias provee blocks, cemento, varillas, vigas H y soluciones integrales para construcción.',
  },
  '/empresas/immobiliare': {
    title: 'DSTD Immobiliare | Propiedades, proyectos y préstamos inmobiliarios',
    description:
      'DSTD Immobiliare conecta personas con oportunidades inmobiliarias sólidas: propiedades, proyectos e inversiones.',
  },
  '/empresas/agregados': {
    title: 'DSTD Agregados | Arena, grava, piedra y agregados',
    description:
      'DSTD Agregados suministra arena, grava, piedra y materiales áridos para obras y proyectos de construcción.',
  },
}

export const siteUrl = 'https://dstdenterprises.com'
export const ogImage = '/img/og-image.jpg'
