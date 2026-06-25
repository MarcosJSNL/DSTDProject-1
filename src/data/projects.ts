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
    image: 'https://images.unsplash.com/photo-1673978484091-6a743a9058cf?q=80&w=1920&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Entrega de agregados para carretera',
    category: 'agregados',
    description: 'Suministro de arena, grava y piedra para proyecto de infraestructura vial.',
    location: 'La Romana, RD',
    image: 'https://images.unsplash.com/photo-1637076988526-f7a77037845c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Alianza comercial para proyecto hotelero',
    category: 'general',
    description: 'Colaboración estratégica entre divisiones para desarrollo de resort.',
    location: 'Bávaro, RD',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Infraestructura corporativa',
    category: 'general',
    description: 'Construcción de oficinas corporativas con materiales del grupo.',
    location: 'Santo Domingo, RD',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1920&auto=format&fit=crop',
  },
]
