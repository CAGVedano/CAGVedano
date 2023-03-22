export const ActivityAreas = [
  {
    name: 'Area Famiglia e Adulti',
    slug: 'area-famiglia-e-adulti',
    admins: ['Dott.ssa Licia Vitale'],
    email: null,
    icon: 'user-group'
  },
  {
    name: 'Area Minori',
    slug: 'area-minori',
    admins: [],
    email: null,
    icon: 'user'
  },
  {
    name: 'Area Politiche Giovanili',
    slug: 'area-politiche-giovanili',
    admins: [],
    email: null,
    icon: 'academic-cap'
  },
  {
    name: 'Area Progetti Individualizzati',
    slug: 'area-progetti-individualizzati',
    admins: ['Dott.ssa Laura Cazzani'],
    email: null,
    icon: 'shield-check'
  },
  {
    name: 'Area Socioculturale',
    slug: 'area-socioculturale',
    admins: ['Dott.ssa Wanda Ferraro'],
    email: 'formando@laquilonescs.it',
    icon: 'light-bulb'
  },
  {
    name: 'Area Formazione e Valutazione',
    slug: 'area-formazione-e-valutazione',
    admins: ['Dott.ssa Elena Berloso', 'Dott.ssa Antonella Somma'],
    email: null,
    icon: 'presentation-chart-bar'
  }
]

export const ActivityLocations = [
  {
    name: 'Sesto Calende',
  },
  {
    name: 'Tradate' 
  },
  {
    name: 'Azzate'
  },
  {
    name: 'Arcisate' 
  },
  {
    name: 'Luino e Cittiglio'
  }
]

export const Activities = [
  {
    name: 'Famiglie allo specchio',
    description: 'Servizio di consulenza familiare',
    area: 'Famiglia e Adulti',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: 'Servizio affidi zonale',
    description: 'Ufficio di Piano Sesto Calende',
    area: 'Famiglia e Adulti',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: 'Affiancamento familiare',
    description: "Azione di sperimentazione nell'ambito del Servizio Affidi Zonale",
    area: 'Famiglia e Adulti',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: 'LuCi',
    description: "Servizio Affidi e prossimità familiare",
    area: 'Famiglia e Adulti',
    locations: [
      'Luino e Cittiglio'
    ]
  },
  {
    name: 'Incontriamoci a casa',
    description: "Servizio sperimentale di affido leggero per anziani",
    area: 'Famiglia e Adulti',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "O.P.LA'",
    description: "Opportunità Per il LAvoro",
    area: 'Famiglia e Adulti',
    locations: [
      'Arcisate', 'Azzate', 'Tradate'
    ]
  },
  {
    name: "Tradate Welfare",
    description: null,
    area: 'Famiglia e Adulti',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Lavoro e famiglia junior",
    description: "Conciliazione vita-lavoro",
    area: 'Famiglia e Adulti',
    locations: [
      'Tradate', 'Sesto Calende'
    ]
  },
  {
    name: "Casa Caracol 2",
    description: "Housing sociale temporaneo per nuclei familiari in emergenza abitativa",
    area: 'Famiglia e Adulti',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Buena Onda",
    description: "Pedagogiste e psicologa a scuola presso l'IIS Dalla Chiesa di Sesto Calende",
    area: 'Minori',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Sakido",
    description: "Progetto di cura, prevenzione e sensibilizzazione al fenomeno del ritiro sociale in adolescenza",
    area: 'Formazione',
    locations: [
    ]
  },
  {
    name: "Progetto SHiP!",
    description: "Condividere linguaggi, azioni e relazioni",
    area: 'Minori',
    locations: [
      'Luino e Cittiglio', 'Tradate', 'Sesto Calende'
    ]
  },
  {
    name: "cORTOcircuito",
    description: "Progetto di orto sociale",
    area: 'Minori',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Il CAG dei bambini",
    description: "Centro Aggregazione Giovanile a Corgeno",
    area: 'Minori',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Centro estivo a Corgeno di Vergiate 2022",
    description: null,
    area: 'Minori',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Centro estivo di Gornate Olona",
    description: null,
    area: 'Minori',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Sportelli di ascolto minori",
    description: null,
    area: 'Minori',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Punto e Virgola",
    description: "Servizio di doposcuola - Primaria di Besano",
    area: 'Minori',
    locations: [
    ]
  },
  {
    name: "Progetto FUORI GIRI",
    description: "Penale minorile",
    area: 'Minori',
    locations: [
      'Tradate', 'Sesto Calende'
    ]
  },
  {
    name: "Laboratori sul tema \"violenza e stereotipi di genere\"",
    description: null,
    area: 'Minori',
    locations: [
    ]
  },
  {
    name: "Progetto LEGO",
    description: "Consulenza, formazione e sostegno sui Disturbi Specifici dell'Apprendimento",
    area: 'Minori',
    locations: [
      'Azzate'
    ]
  },
  {
    name: "Centro Aggregazione Giovanile - Corgeno di Vergiate",
    description: null,
    area: 'Politiche Giovanili',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "InformaGiovani & InformaLavoro - Comune di Vergiate",
    description: null,
    area: 'Politiche Giovanili',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Educativa di strada Cruna del lago - distretto di Sesto Calende",
    description: null,
    area: 'Politiche Giovanili',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Centro Aggregazione Giovanile - Vedano Olona",
    description: null,
    area: 'Politiche Giovanili',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Tandem - CicloVedano",
    description: null,
    area: 'Politiche Giovanili',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Tandem 2.0 - Bando \"Vivai\"",
    description: "Prevenzione del disagio e promozione del protagonismo giovanile",
    area: 'Politiche Giovanili',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Casa Caracol",
    description: "Progetto di Housing sociale temporaneo rivolto a soggetti fragili",
    area: 'Politiche Giovanili',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Progetto SCHEGGE - Distretto di Sesto Calende",
    description: "Prevenzione del disagio e promozione del protagonismo giovanile",
    area: 'Politiche Giovanili',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Progetto STRANGE - Vedano Olona",
    description: "Prevenzione del disagio e promozione del protagonismo giovanile",
    area: 'Politiche Giovanili',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Magneti",
    description: "Giovani generatori di energie",
    area: 'Politiche Giovanili',
    locations: [
      'Sesto Calende', 'Tradate'
    ],
  },
  {
    name: "Assistenza domiciliare minori (prevenzione) Distretto Sesto Calende",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Assistenza domiciliare minori (tutela) Distretto Sesto Calende",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Voucher Assistenze scolastiche e Assistenze Domiciliari minori",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [
      'Arcisate'
    ]
  },
  {
    name: "Voucher Assistenze scolastiche Castronno",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [
      'Azzate'
    ]
  },
  {
    name: "Assistenze scolastiche e Assistenze domiciliari minori Tradate",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Assistenze scolastiche e Assistenza domiciliare minori Castronno",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [
      'Azzate'
    ]
  },
  {
    name: "Assistenze scolastiche e Assistenza domiciliare minori Piambello",
    description: null,
    area: 'Progetti Individualizzati',
    locations: [

    ]
  },
  {
    name: "Progetto POP UP",
    description: "Coinvolgimento e animazione di comunità attraverso attività culturali ed esperienze artistiche",
    area: 'Socioculturale',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Piccoli esploratori di storie",
    description: "Letture animate per bambini tra i 5 e gli 11 anni",
    area: 'Socioculturale',
    locations: [

    ]
  },
  {
    name: "Il TerzoSabato",
    description: null,
    area: 'Socioculturale',
    locations: [

    ]
  },
  {
    name: "Progetto Closlieu",
    description: null,
    area: 'Socioculturale',
    locations: []
  },
  {
    name: "Ready to Read",
    description: null,
    area: 'Socioculturale',
    locations: [

    ]
  },
  {
    name: "Estate al Bosco",
    description: "Rassegna teatrale Comune di Vergiate",
    area: 'Socioculturale',
    locations: [
      'Sesto Calende'
    ]
  },
  {
    name: "Libri su misura",
    description: null,
    area: 'Socioculturale',
    locations: []
  },
  {
    name: "Laboratori contro la violenza di genere",
    description: null,
    area: 'Socioculturale',
    locations: [
      'Tradate'
    ]
  },
  {
    name: "Virtualmente compatibili",
    description: null,
    area: 'Formazione',
    locations: [

    ]
  },
  {
    name: "L'Educatore a scuola",
    description: null,
    area: 'Formazione',
    locations: [

    ]
  },
  {
    name: "Dal Pei alla Relazione educativa",
    description: null,
    area: 'Formazione',
    locations: [

    ]
  },
  {
    name: "Supervisione pedagogica Insegnanti",
    description: null,
    area: 'Formazione',
    locations: [

    ]
  },
  {
    name: "Pensiero divergente e creativo",
    description: null,
    area: 'Formazione',
    locations: [

    ]
  },
  {
    name: "Lupus in Tabula",
    description: null,
    area: 'Formazione',
    locations: [
      
    ]
  },
  {
    name: "I disturbi dell'apprendimento, strategie e strumenti2. (Progetto Lego)",
    description: null,
    area: 'Formazione',
    locations: []
  },
  {
    name: "Formazione Assistenze domiciliari minori",
    description: null,
    area: 'Formazione',
    locations: [
      
    ]
  },
  {
    name: "Formazione sul tema delle dipendenze",
    description: null,
    area: 'Formazione',
    locations: [
      
    ]
  },
  {
    name: "Edubar",
    description: null,
    area: 'Formazione',
    locations: [
      
    ]
  },
]