import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: "L'Aquilone",
  description: "Interventi educiativi e sociali",
  author: {
    name: "L'Aquilone",
    twitter: null,
    url: "https://laquilonescs.it",
    email: "laquilonescs@laquilonescs.it",
    summary: "Cooperative Sociale",
  },
  org: {
    name: "L'Aquilone",
    twitter: null,
    url: "https://laquilonescs.it",
    email: "laquilonescs@laquilonescs.it",
    summary: "Cooperative Sociale",
  },
  location: 'via U. Maddalena 5, Sesto Calende (VA) 21018',
  latlng: [45.72553138828107, 8.629462472649218] as [number, number],
  repository: 'https://github.com/CAGVedano/CAGVedano',
  vat: "02150100127",
  pec: "laquilonescs@legalmail.it",
  social: [
    {
      name: 'Telefono',
      link: 'tel:+390331913579',
      alias: '0331-1913579',
      icon: 'telephone',
    },
    {
      name: 'Email',
      link: 'mailto:laquilonescs@laquilonescs.it',
      alias: 'laquilonescs@laquilonescs.it',
      icon: 'envelope',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/Laquilonescs',
      alias: 'laquilonescs',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/laquilone_cooperativa_sociale/',
      alias: 'laquilone_cooperativa_sociale',
      icon: 'instagram',
    }
    // {
    //   name: 'Github',
    //   link: 'https://github.com/CAGVedano',
    //   icon: 'github',
    // }
  ],
  buildTime: new Date(),
}

export const ContactEmails = [
  {
    name: 'Amministrazione',
    address: 'amministrando@laquilonescs.it'
  },
  {
    name: 'Formazione',
    address: 'formando@laquilonescs.it'
  },
  {
    name: 'Tirocini',
    address: 'tirocinando@laquilonescs.it'
  },
  {
    name: 'Innovazione e progettazione',
    address: 'marketing@laquilonescs.it'
  },
  {
    name: 'Risorse umane',
    address: 'chiara.caresani@laquilonescs.it',
  },
  {
    name: 'Comunicazione',
    address: 'laura.barbieri@laquilonescs.it'
  },
  {
    name: 'Fundraising',
    address: 'laura.anchisi@laquilonescs.it'
  },
  {
    name: 'Referente privacy',
    address: 'marco.bicelli@laquilonescs.it'
  },
]

export const Logo = '../images/aquilone-logo.png'
export const LogoImage = '../images/aquilone-logo.png'
export const FeaturedSVG = '../images/aquilone.jpg'
export const DefaultSVG = '../images/aquilone.jpg'
export const DefaultImage = '../images/aquilone.jpg'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Su di noi', href: 'about' },
  { name: 'Attività', href: 'activities' },
  { name: 'Blog', href: 'blog' },
  { name: 'Risorse', href: 'doc/chi-siamo' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}

export const AuthorDetail = [
  {
    name: 'Dott.ssa Licia Vitale',
    description: null,
    email: 'licia.vitale@laquilonescs.it',
    phone: '3929772092',
    image: null
  },
  {
    name: 'Dott.ssa Laura Cazzani',
    description: null,
    email: 'laura.cazzani@laquilonescs.it',
    phone: '3939192718',
    image: null
  },
  {
    name: 'Dott.ssa Wanda Ferraro',
    description: null,
    email: 'wanda.ferraro@laquilonescs.it',
    phone: '3929772070',
    image: null
  },
  {
    name: 'Dott.ssa Elena Berloso',
    description: null,
    email: null,
    phone: '3386389624',
    image: null
  },
  {
    name: 'Dott.ssa Antonella Somma',
    description: null,
    email: null,
    phone: '3385087207',
    image: null
  },
]

export const DefaultAuthor = {
  name: 'Hello Astro',
  image: '../images/authors/default.png',
  contact: 'info@hellotham.com',
  description: 'Astronaut'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 9

export const GITHUB_EDIT_URL = `https://github.com/CAGVedano/CAGVedano`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  "L'Aquilone": [
    { text: 'Chi siamo', link: 'doc/chi-siamo' },
    { text: 'La nostra Mission', link: 'doc/mission' },
    { text: 'Dentro L\'Aquilone', link: 'doc/dentro-l-aquilone' },
    { text: 'Bilancio Sociale', link: 'doc/bilancio-sociale' }
  ],
  "Attività": [
    { text: 'Le nostre attività', link: 'doc/attivita' },
    { text: 'Area Famiglia e Adulti', link: 'doc/area-famiglia-e-adulti' },
    { text: 'Area Minori', link: 'doc/area-minori' },
    { text: 'Area Politiche Giovanili', link: 'doc/area-politiche-giovanili' },
    { text: 'Area Progetti Individualizzati', link: 'doc/area-progetti-individualizzati' },
    { text: 'Area Socioculturale', link: 'doc/area-socioculturale' },
    { text: 'Area Formazione e Valutazione', link: 'doc/area-formazione-e-valutazione' },
  ],
  "Altro": [
    { text: 'Tirocinio', link: 'doc/tirocinio'}
  ]
}
