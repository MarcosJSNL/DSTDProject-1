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
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Suministro de materiales para obra comercial',
    category: 'industrias',
    description: 'Entrega de blocks, cemento, varillas y vigas H para centro comercial.',
    location: 'Santiago, RD',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Desarrollo residencial DSTD Immobiliare',
    category: 'immobiliare',
    description: 'Proyecto inmobiliario de 80 unidades con áreas verdes y amenidades.',
    location: 'Punta Cana, RD',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Entrega de agregados para carretera',
    category: 'agregados',
    description: 'Suministro de arena, grava y piedra para proyecto de infraestructura vial.',
    location: 'La Romana, RD',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Alianza comercial para proyecto hotelero',
    category: 'general',
    description: 'Colaboración estratégica entre divisiones para desarrollo de resort.',
    location: 'Bávaro, RD',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Infraestructura corporativa DSTD',
    category: 'general',
    description: 'Construcción de oficinas corporativas con materiales del grupo.',
    location: 'Santo Domingo, RD',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
  },
]
