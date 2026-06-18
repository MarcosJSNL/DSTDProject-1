export interface Company {
  id: string
  name: string
  short: string
  description: string
  /** Tailwind accent color hex used for subtle per-card identity */
  accent: string
  image: string
}

export const companies: Company[] = [
  {
    id: 'hormigones',
    name: 'DSTD Hormigones',
    short: 'Hormigón y concreto',
    description:
      'Hormigón y concreto premezclado para obras que exigen resistencia, calidad y puntualidad.',
    accent: '#E8772E',
    image: '/img/hormigones.jpg',
  },
  {
    id: 'industrias',
    name: 'DSTD Industrias',
    short: 'Materiales industriales',
    description:
      'Materiales industriales, blocks, varillas, cemento, vigas H y soluciones para proyectos de construcción.',
    accent: '#7FC241',
    image: '/img/industrias.jpg',
  },
  {
    id: 'immobiliare',
    name: 'DSTD Immobiliare',
    short: 'Real estate y desarrollo',
    description:
      'Propiedades, proyectos, inversiones y préstamos inmobiliarios con visión de desarrollo.',
    accent: '#C7372F',
    image: '/img/immobiliare.jpg',
  },
  {
    id: 'agregados',
    name: 'DSTD Agregados',
    short: 'Áridos y agregados',
    description:
      'Arena, grava, piedra y agregados para obras, proyectos y suministro de materiales.',
    accent: '#8B6B43',
    image: '/img/agregados.jpg',
  },
]
