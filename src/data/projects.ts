export interface Project {
  id: string
  title: string
  category: 'hormigones' | 'industrias' | 'immobiliare' | 'agregados' | 'general'
  description: string
  location: string
  image: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Vaciado de concreto para complejo residencial',
    category: 'hormigones',
    description: 'Suministro y vaciado de concreto premezclado para edificio de 120 apartamentos.',
    location: 'Santo Domingo, RD',
    image: '/img/hormigones.jpg',
  },
  {
    id: '2',
    title: 'Suministro de materiales para obra comercial',
    category: 'industrias',
    description: 'Entrega de blocks, cemento, varillas y vigas H para centro comercial.',
    location: 'Santiago, RD',
    image: '/img/industrias.jpg',
  },
  {
    id: '3',
    title: 'Desarrollo residencial DSTD Immobiliare',
    category: 'immobiliare',
    description: 'Proyecto inmobiliario de 80 unidades con áreas verdes y amenidades.',
    location: 'Punta Cana, RD',
    image: '/img/immobiliare.jpg',
  },
  {
    id: '4',
    title: 'Entrega de agregados para carretera',
    category: 'agregados',
    description: 'Suministro de arena, grava y piedra para proyecto de infraestructura vial.',
    location: 'La Romana, RD',
    image: '/img/agregados.jpg',
  },
  {
    id: '5',
    title: 'Alianza comercial para proyecto hotelero',
    category: 'general',
    description: 'Colaboración estratégica entre divisiones para desarrollo de resort.',
    location: 'Bávaro, RD',
    image: '/img/hormigones.jpg',
  },
  {
    id: '6',
    title: 'Infraestructura corporativa DSTD',
    category: 'general',
    description: 'Construcción de oficinas corporativas con materiales del grupo.',
    location: 'Santo Domingo, RD',
    image: '/img/industrias.jpg',
  },
]
