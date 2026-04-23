export const translations = {
  es: {
    meta: {
      title: 'Candela - Energia que transforma',
      description:
        'Velas artesanales con proposito. Iluminamos ideas, espacios y emociones con diseno y autenticidad.',
      ogDescription:
        'Velas con proposito: sostenibles, autenticas y con impacto.',
    },
    nav: {
      openMenu: 'Abrir menu',
      closeMenu: 'Cerrar menu',
      links: [
        { name: 'Inicio', to: 'inicio', offset: -80 },
        { name: 'Servicios', to: 'servicios', offset: -50 },
        { name: 'Nosotros', to: 'nosotros', offset: -50 },
        { name: 'Proposito', to: 'proposito', offset: -50 },
        { name: 'Valores', to: 'valores', offset: -50 },
        { name: 'Vision', to: 'vision', offset: -50 },
        { name: 'Testimonios', to: 'testimonios', offset: -100 },
        { name: 'Catalogo', to: 'catalog', offset: -50 },
        { name: 'Contacto', to: 'contacto', offset: -50 },
      ],
      language: 'Idioma',
    },
    hero: {
      title: 'Energia que transforma.',
      body: 'En Candela creemos en el poder de lo simple, lo claro y lo brillante.',
      cta: 'Conocenos',
      logoAlt: 'Logo de Candela',
    },
    services: {
      title: 'Nuestros Servicios',
      intro: 'Ofrecemos soluciones enfocadas en energia, sostenibilidad y claridad.',
      items: [
        {
          title: 'Eficiencia energetica',
          description: 'Optimizamos recursos y reducimos tu huella energetica.',
        },
        {
          title: 'Instalaciones solares',
          description: 'Soluciones limpias y sostenibles para tu empresa o hogar.',
        },
        {
          title: 'Asesoria tecnica',
          description: 'Te guiamos en cada paso hacia un futuro mas brillante.',
        },
      ],
    },
    about: {
      title: 'Quienes somos?',
      body1:
        'En Candela creemos en la energia que inspira. Somos un equipo comprometido con la sostenibilidad, la eficiencia y el bienestar colectivo.',
      body2:
        'Nuestro enfoque se basa en la transparencia, el impacto positivo y la tecnologia al servicio de las personas.',
      imageAlt: 'Equipo de trabajo',
    },
    purpose: {
      title: 'Nuestro Proposito',
      intro: 'Lo que guia cada vela que encendemos, cada idea que iluminamos.',
      items: [
        {
          title: 'Sostenibilidad',
          text: 'Creamos soluciones con impacto positivo y duradero en el planeta.',
        },
        {
          title: 'Inspiracion',
          text: 'Disenamos experiencias que conectan con emociones autenticas.',
        },
        {
          title: 'Comunidad',
          text: 'Creemos en crecer junto a quienes confian en nosotros.',
        },
      ],
    },
    values: {
      title: 'Nuestros Valores',
      intro: 'Lo que nos sostiene, enciende y representa.',
      items: [
        {
          title: 'Claridad',
          text: 'Creemos en lo simple, lo esencial y lo comprensible. Cada decision importa.',
        },
        {
          title: 'Compromiso',
          text: 'Cuidamos lo que creamos. Trabajamos con intencion, no por inercia.',
        },
        {
          title: 'Autenticidad',
          text: 'No prometemos humo. Lo nuestro enciende realidades con proposito.',
        },
      ],
    },
    vision: {
      title: 'Nuestra Vision',
      line1: 'Iluminar hogares, inspirar decisiones y construir futuro con cada vela.',
      line2: 'Encendemos ideas que brillan, duran y dejan huella.',
    },
    testimonials: {
      title: 'Lo que dicen de nosotros',
      items: [
        {
          name: 'Luis Fernandez',
          text: 'Candela transformo por completo nuestra eficiencia energetica. El equipo es excelente.',
          avatar:
            'https://ui-avatars.com/api/?name=Luis+Fernandez&background=F87171&color=fff&size=256',
        },
        {
          name: 'Ana Vega',
          text: 'Trabajar con Candela fue una experiencia profesional, humana y muy inspiradora.',
          avatar:
            'https://ui-avatars.com/api/?name=Ana+Vega&background=F472B6&color=fff&size=256',
        },
        {
          name: 'Carlos Lima',
          text: 'No solo redujimos costos, sino que aprendimos mucho sobre sostenibilidad real.',
          avatar:
            'https://ui-avatars.com/api/?name=Carlos+Lima&background=60A5FA&color=fff&size=256',
        },
      ],
    },
    catalog: {
      title: 'Nuestro Catalogo',
      filters: {
        all: 'Todos',
        lavender: 'Lavanda',
        citrus: 'Citricos',
        cinnamonVanilla: 'Canela y Vainilla',
      },
      products: [
        {
          id: 1,
          name: 'Vela Aromatica Lavanda',
          price: 'EUR12.99',
          scentKey: 'lavender',
          image: '/img/lavanda.jpg',
          color: '#bfa2db',
          description: 'Relajante mezcla de lavanda francesa para calmar la mente.',
        },
        {
          id: 2,
          name: 'Vela Citrica Energizante',
          price: 'EUR10.50',
          scentKey: 'citrus',
          image: '/img/citricos.jpg',
          color: '#ffe066',
          description: 'Notas frescas de naranja, limon y mandarina.',
        },
        {
          id: 3,
          name: 'Vela de Canela y Vainilla',
          price: 'EUR11.75',
          scentKey: 'cinnamonVanilla',
          image: '/img/canela.jpg',
          color: '#e59866',
          description: 'Mezcla reconfortante y calida para el hogar.',
        },
      ],
    },
    contact: {
      title: 'Hablemos',
      intro: 'Tienes un proyecto o una idea en mente? Cuentanos como podemos ayudarte.',
      responseTime: 'Responderemos en menos de 24h.',
      placeholders: {
        name: 'Tu nombre',
        email: 'Tu correo',
        message: 'Escribe tu mensaje...',
      },
      submit: 'Enviar mensaje',
      error: 'Hubo un error. Intenta mas tarde.',
    },
    thanks: {
      title: 'Gracias!',
      body: 'Hemos recibido tu mensaje. Te responderemos pronto.',
      cta: 'Volver al sitio',
    },
    cta: {
      title: 'Listo para encender tu proxima idea?',
      body: 'Creamos mas que velas. Creamos momentos, mensajes y energia que transforma.',
      button: 'Hablemos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    meta: {
      title: 'Candela - Energy that transforms',
      description:
        'Handcrafted candles with purpose. We illuminate ideas, spaces, and emotions through design and authenticity.',
      ogDescription:
        'Purpose-driven candles: sustainable, authentic, and designed to leave an impact.',
    },
    nav: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      links: [
        { name: 'Home', to: 'inicio', offset: -80 },
        { name: 'Services', to: 'servicios', offset: -50 },
        { name: 'About', to: 'nosotros', offset: -50 },
        { name: 'Purpose', to: 'proposito', offset: -50 },
        { name: 'Values', to: 'valores', offset: -50 },
        { name: 'Vision', to: 'vision', offset: -50 },
        { name: 'Testimonials', to: 'testimonios', offset: -100 },
        { name: 'Catalog', to: 'catalog', offset: -50 },
        { name: 'Contact', to: 'contacto', offset: -50 },
      ],
      language: 'Language',
    },
    hero: {
      title: 'Energy that transforms.',
      body: 'At Candela, we believe in the power of what is simple, clear, and bright.',
      cta: 'Get to know us',
      logoAlt: 'Candela logo',
    },
    services: {
      title: 'Our Services',
      intro: 'We create solutions focused on energy, sustainability, and clarity.',
      items: [
        {
          title: 'Energy efficiency',
          description: 'We optimize resources and reduce your energy footprint.',
        },
        {
          title: 'Solar installations',
          description: 'Clean and sustainable solutions for your business or home.',
        },
        {
          title: 'Technical guidance',
          description: 'We guide you through every step toward a brighter future.',
        },
      ],
    },
    about: {
      title: 'About us',
      body1:
        'At Candela, we believe in inspiring energy. We are a team committed to sustainability, efficiency, and collective wellbeing.',
      body2:
        'Our approach is built on transparency, positive impact, and technology that serves people.',
      imageAlt: 'Work team',
    },
    purpose: {
      title: 'Our Purpose',
      intro: 'What guides every candle we light and every idea we illuminate.',
      items: [
        {
          title: 'Sustainability',
          text: 'We create solutions with a lasting and positive impact on the planet.',
        },
        {
          title: 'Inspiration',
          text: 'We design experiences that connect with genuine emotions.',
        },
        {
          title: 'Community',
          text: 'We believe in growing alongside the people who trust us.',
        },
      ],
    },
    values: {
      title: 'Our Values',
      intro: 'What supports us, ignites us, and represents us.',
      items: [
        {
          title: 'Clarity',
          text: 'We believe in what is simple, essential, and understandable. Every decision matters.',
        },
        {
          title: 'Commitment',
          text: 'We care for what we create. We work with intention, not inertia.',
        },
        {
          title: 'Authenticity',
          text: 'We do not sell smoke. What we do lights up reality with purpose.',
        },
      ],
    },
    vision: {
      title: 'Our Vision',
      line1: 'To illuminate homes, inspire decisions, and build a future with every candle.',
      line2: 'We light ideas that shine, last, and leave a mark.',
    },
    testimonials: {
      title: 'What people say about us',
      items: [
        {
          name: 'Luis Fernandez',
          text: 'Candela completely transformed our energy efficiency. The team is outstanding.',
          avatar:
            'https://ui-avatars.com/api/?name=Luis+Fernandez&background=F87171&color=fff&size=256',
        },
        {
          name: 'Ana Vega',
          text: 'Working with Candela was a professional, human, and deeply inspiring experience.',
          avatar:
            'https://ui-avatars.com/api/?name=Ana+Vega&background=F472B6&color=fff&size=256',
        },
        {
          name: 'Carlos Lima',
          text: 'We did not just reduce costs, we also learned a lot about real sustainability.',
          avatar:
            'https://ui-avatars.com/api/?name=Carlos+Lima&background=60A5FA&color=fff&size=256',
        },
      ],
    },
    catalog: {
      title: 'Our Catalog',
      filters: {
        all: 'All',
        lavender: 'Lavender',
        citrus: 'Citrus',
        cinnamonVanilla: 'Cinnamon and Vanilla',
      },
      products: [
        {
          id: 1,
          name: 'Lavender Scented Candle',
          price: 'EUR12.99',
          scentKey: 'lavender',
          image: '/img/lavanda.jpg',
          color: '#bfa2db',
          description: 'A relaxing blend of French lavender to calm the mind.',
        },
        {
          id: 2,
          name: 'Energizing Citrus Candle',
          price: 'EUR10.50',
          scentKey: 'citrus',
          image: '/img/citricos.jpg',
          color: '#ffe066',
          description: 'Fresh notes of orange, lemon, and mandarin.',
        },
        {
          id: 3,
          name: 'Cinnamon and Vanilla Candle',
          price: 'EUR11.75',
          scentKey: 'cinnamonVanilla',
          image: '/img/canela.jpg',
          color: '#e59866',
          description: 'A warm and comforting blend for the home.',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      intro: 'Do you have a project or an idea in mind? Tell us how we can help.',
      responseTime: 'We reply in under 24 hours.',
      placeholders: {
        name: 'Your name',
        email: 'Your email',
        message: 'Write your message...',
      },
      submit: 'Send message',
      error: 'There was an error. Please try again later.',
    },
    thanks: {
      title: 'Thank you!',
      body: 'We have received your message. We will get back to you soon.',
      cta: 'Back to site',
    },
    cta: {
      title: 'Ready to light your next idea?',
      body: 'We create more than candles. We create moments, messages, and energy that transforms.',
      button: 'Get in touch',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  nl: {
    meta: {
      title: 'Candela - Energie die verandert',
      description:
        'Handgemaakte kaarsen met een doel. We verlichten ideeen, ruimtes en emoties met ontwerp en authenticiteit.',
      ogDescription:
        'Kaarsen met betekenis: duurzaam, authentiek en gemaakt om impact te hebben.',
    },
    nav: {
      openMenu: 'Menu openen',
      closeMenu: 'Menu sluiten',
      links: [
        { name: 'Home', to: 'inicio', offset: -80 },
        { name: 'Diensten', to: 'servicios', offset: -50 },
        { name: 'Over ons', to: 'nosotros', offset: -50 },
        { name: 'Doel', to: 'proposito', offset: -50 },
        { name: 'Waarden', to: 'valores', offset: -50 },
        { name: 'Visie', to: 'vision', offset: -50 },
        { name: 'Ervaringen', to: 'testimonios', offset: -100 },
        { name: 'Catalogus', to: 'catalog', offset: -50 },
        { name: 'Contact', to: 'contacto', offset: -50 },
      ],
      language: 'Taal',
    },
    hero: {
      title: 'Energie die verandert.',
      body: 'Bij Candela geloven we in de kracht van eenvoud, helderheid en licht.',
      cta: 'Leer ons kennen',
      logoAlt: 'Candela-logo',
    },
    services: {
      title: 'Onze Diensten',
      intro: 'We bieden oplossingen gericht op energie, duurzaamheid en helderheid.',
      items: [
        {
          title: 'Energie-efficiëntie',
          description: 'We optimaliseren middelen en verkleinen je energievoetafdruk.',
        },
        {
          title: 'Zonne-installaties',
          description: 'Schone en duurzame oplossingen voor je bedrijf of woning.',
        },
        {
          title: 'Technisch advies',
          description: 'We begeleiden je stap voor stap naar een helderdere toekomst.',
        },
      ],
    },
    about: {
      title: 'Wie zijn wij?',
      body1:
        'Bij Candela geloven we in energie die inspireert. We zijn een team dat zich inzet voor duurzaamheid, efficiëntie en collectief welzijn.',
      body2:
        'Onze aanpak is gebaseerd op transparantie, positieve impact en technologie in dienst van mensen.',
      imageAlt: 'Werkteam',
    },
    purpose: {
      title: 'Ons Doel',
      intro: 'Wat elke kaars die we aansteken en elk idee dat we verlichten richting geeft.',
      items: [
        {
          title: 'Duurzaamheid',
          text: 'We creëren oplossingen met een blijvende en positieve impact op de planeet.',
        },
        {
          title: 'Inspiratie',
          text: 'We ontwerpen ervaringen die aansluiten bij oprechte emoties.',
        },
        {
          title: 'Gemeenschap',
          text: 'We geloven in groeien samen met de mensen die ons vertrouwen.',
        },
      ],
    },
    values: {
      title: 'Onze Waarden',
      intro: 'Wat ons draagt, aansteekt en vertegenwoordigt.',
      items: [
        {
          title: 'Helderheid',
          text: 'We geloven in eenvoud, essentie en begrijpelijkheid. Elke beslissing telt.',
        },
        {
          title: 'Betrokkenheid',
          text: 'We zorgen voor wat we maken. We werken bewust, niet op de automatische piloot.',
        },
        {
          title: 'Authenticiteit',
          text: 'We verkopen geen rook. Wat wij doen, zet de werkelijkheid met een doel in vuur en vlam.',
        },
      ],
    },
    vision: {
      title: 'Onze Visie',
      line1: 'Huizen verlichten, beslissingen inspireren en met elke kaars aan de toekomst bouwen.',
      line2: 'We ontsteken ideeën die schijnen, blijven en een spoor achterlaten.',
    },
    testimonials: {
      title: 'Wat mensen over ons zeggen',
      items: [
        {
          name: 'Luis Fernandez',
          text: 'Candela heeft onze energie-efficiëntie volledig veranderd. Het team is uitstekend.',
          avatar:
            'https://ui-avatars.com/api/?name=Luis+Fernandez&background=F87171&color=fff&size=256',
        },
        {
          name: 'Ana Vega',
          text: 'Samenwerken met Candela was professioneel, menselijk en erg inspirerend.',
          avatar:
            'https://ui-avatars.com/api/?name=Ana+Vega&background=F472B6&color=fff&size=256',
        },
        {
          name: 'Carlos Lima',
          text: 'We hebben niet alleen kosten verlaagd, maar ook veel geleerd over echte duurzaamheid.',
          avatar:
            'https://ui-avatars.com/api/?name=Carlos+Lima&background=60A5FA&color=fff&size=256',
        },
      ],
    },
    catalog: {
      title: 'Onze Catalogus',
      filters: {
        all: 'Alles',
        lavender: 'Lavendel',
        citrus: 'Citrus',
        cinnamonVanilla: 'Kaneel en Vanille',
      },
      products: [
        {
          id: 1,
          name: 'Lavendelgeurkaars',
          price: 'EUR12.99',
          scentKey: 'lavender',
          image: '/img/lavanda.jpg',
          color: '#bfa2db',
          description: 'Een ontspannende mix van Franse lavendel om de geest tot rust te brengen.',
        },
        {
          id: 2,
          name: 'Verfrissende Citruskaars',
          price: 'EUR10.50',
          scentKey: 'citrus',
          image: '/img/citricos.jpg',
          color: '#ffe066',
          description: 'Frisse tonen van sinaasappel, citroen en mandarijn.',
        },
        {
          id: 3,
          name: 'Kaneel- en Vanillekaars',
          price: 'EUR11.75',
          scentKey: 'cinnamonVanilla',
          image: '/img/canela.jpg',
          color: '#e59866',
          description: 'Een warme en troostende mix voor thuis.',
        },
      ],
    },
    contact: {
      title: 'Laten we praten',
      intro: 'Heb je een project of idee in gedachten? Vertel ons hoe we kunnen helpen.',
      responseTime: 'We reageren binnen 24 uur.',
      placeholders: {
        name: 'Je naam',
        email: 'Je e-mail',
        message: 'Schrijf je bericht...',
      },
      submit: 'Bericht verzenden',
      error: 'Er is een fout opgetreden. Probeer het later opnieuw.',
    },
    thanks: {
      title: 'Bedankt!',
      body: 'We hebben je bericht ontvangen. We nemen snel contact met je op.',
      cta: 'Terug naar de site',
    },
    cta: {
      title: 'Klaar om je volgende idee aan te steken?',
      body: 'We maken meer dan kaarsen. We maken momenten, boodschappen en energie die verandert.',
      button: 'Laten we praten',
    },
    footer: {
      rights: 'Alle rechten voorbehouden.',
    },
  },
};

export const languageOptions = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
];
