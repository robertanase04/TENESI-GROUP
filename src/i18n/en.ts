/**
 * English translations — complete, natural mirror of the Romanian copy.
 * Keep this file's keys in sync with ro.ts.
 */
import type ro from './ro'

const en: typeof ro = {
  meta: {
    lang: 'en',
  },

  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    cta: 'Request a quote',
  },

  common: {
    company: 'TENESI GROUP',
    companyFull: 'SC TENESI GROUP SRL',
    learnMore: 'Learn more',
    viewAll: 'View all',
    getQuote: 'Request a quote',
    discoverServices: 'Explore services',
    scroll: 'Scroll',
    backToTop: 'Top',
  },

  home: {
    hero: {
      eyebrow: 'Industrial & agri-livestock construction · Romania',
      titleLine1: 'We build the infrastructure',
      titleLine2: 'that protects',
      titleHighlight: "Romania's harvest",
      subtitle:
        'Steel grain silos, industrial halls, livestock farms and grain dryers — engineered, installed and commissioned turnkey, with durability and engineering precision.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'See our services',
      specCapacity: 'S350GD galvanized steel',
      specStandard: 'EUROCODE & EN ISO 14122 compliant',
      specTurnkey: 'Turnkey delivery',
    },
    intro: {
      eyebrow: 'What we do',
      title: 'One team, from foundation to commissioning',
      text: 'We cover the entire grain storage and processing chain — from engineering design and foundations through to mechanical assembly, conveying systems and maintenance. Four areas of expertise, one accountable partner.',
    },
    services: {
      silos: {
        title: 'Steel grain silos',
        desc: 'Flat-bottom and conical-base silos built from hot-dip galvanized corrugated steel, with aeration, sensors and access platforms.',
      },
      halls: {
        title: 'Halls & light structures',
        desc: 'Industrial halls and light steel structures for storage, logistics and production, with foundations and concrete platforms.',
      },
      farms: {
        title: 'Livestock farms',
        desc: 'Shelters, barns and fattening units with steel structure, reinforced floors and functionally compartmented spaces.',
      },
      dryers: {
        title: 'Grain dryers',
        desc: 'Installation and commissioning of drying plants, including heat-recovery modules for greater energy efficiency.',
      },
    },
    stats: {
      eyebrow: 'Why trust us',
      title: 'Reliability you can measure',
      items: {
        years: { value: '40+', label: 'years of experience in agricultural engineering' },
        projects: { value: '20+', label: 'years in silo construction' },
        capacity: { value: 'RO', label: 'projects across all of Romania' },
        counties: { value: 'INT.', label: 'and projects abroad' },
      },
    },
    portfolioTeaser: {
      eyebrow: 'Portfolio',
      title: 'Work that speaks for itself',
      text: 'A selection of our silo, hall and farm projects. Real photographs will be added soon.',
      cta: 'See the full portfolio',
    },
    cta: {
      title: 'Got a storage or processing project?',
      text: 'Tell us what you need — we’ll prepare a technical solution and a quote, no strings attached.',
      button: 'Talk to us',
    },
  },

  about: {
    hero: {
      eyebrow: 'About us',
      title: 'Robust engineering, trust forged in steel',
      subtitle:
        'TENESI GROUP is a Romanian company in industrial and agri-livestock construction, dedicated to grain storage and processing infrastructure.',
    },
    story: {
      eyebrow: 'Our story',
      title: 'A dependable partner for farmers and integrators',
      p1: 'With over 40 years of experience in agricultural engineering and more than 20 years in silo construction, TENESI GROUP SRL delivers turnkey the infrastructure that protects the value of the harvest: steel silos, industrial halls, livestock farms and grain drying plants.',
      p2: 'We work with high-strength materials — hot-dip galvanized steel sheet — and follow European design and safety standards. Every project is treated as a long-term investment for our client.',
      p3: 'From the family farm to large collection centres, we run projects across all of Romania and even beyond its borders, with the same approach: correctly sized solutions, careful execution and maintenance that extends the life of the investment.',
    },
    values: {
      eyebrow: 'Our values',
      title: 'Principles we don’t negotiate',
      items: {
        quality: {
          title: 'Quality',
          desc: 'Certified materials and execution compliant with European standards, checked at every stage.',
        },
        safety: {
          title: 'Safety',
          desc: 'EUROCODE and EN ISO 14122 compliance — stairs, platforms and structures designed for people.',
        },
        onTime: {
          title: 'On-time delivery',
          desc: 'Modular assembly and rigorous planning, so the harvest is stored on time.',
        },
        durability: {
          title: 'Durability',
          desc: 'Anti-corrosion protection and solutions designed for decades of operation.',
        },
      },
    },
    process: {
      eyebrow: 'How we work',
      title: 'From consultancy to commissioning',
      steps: {
        s1: { title: 'Design', desc: 'Technical consultancy, sizing and a project tailored to the site and your needs.' },
        s2: { title: 'Foundation', desc: 'Execution of properly reinforced foundations and concrete platforms.' },
        s3: { title: 'Structure assembly', desc: 'Assembly of the steel structure with high-strength bolts.' },
        s4: { title: 'Equipment', desc: 'Installation of conveying, aeration, drying and automation systems.' },
        s5: { title: 'Commissioning', desc: 'Testing, adjustments and handover of the plant within parameters.' },
        s6: { title: 'Maintenance', desc: 'Post-installation support and maintenance for long-lasting operation.' },
      },
    },
  },

  services: {
    hero: {
      eyebrow: 'Services',
      title: 'Complete solutions for storage and processing',
      subtitle:
        'Four areas of expertise, integrated under a single accountable contractor — from design to commissioning.',
    },
    specsLabel: 'Typical specifications',
    list: {
      silos: {
        title: 'Steel grain silos',
        desc: 'We design and install flat-bottom (free-standing) and conical-base silos from hot-dip galvanized corrugated steel, assembled with high-strength bolts. Capacities ranging from farm storage to large collection centres.',
        specs: [
          'S350GD hot-dip galvanized steel, corrugated profile',
          'Flat-bottom and conical-base silos',
          'Aeration, ventilation and temperature / humidity / level sensors',
          'Stairs and platforms compliant with EN ISO 14122',
        ],
      },
      halls: {
        title: 'Light steel structures & industrial halls',
        desc: 'Design and assembly of steel halls for storage, logistics and production. Steel-frame structures with trapezoidal cladding, foundations and concrete platforms, sized to EUROCODE.',
        specs: [
          'Steel frames with variable spans',
          'Trapezoidal cladding / sandwich panels',
          'Foundations and concrete platforms',
          'Sizing in accordance with EUROCODE',
        ],
      },
      farms: {
        title: 'Livestock farms',
        desc: 'Buildings for livestock farms — shelters, barns and fattening units — with steel structure, reinforced floors and compartmented spaces, adapted to the farm’s workflow.',
        specs: [
          'Steel structure for shelters and barns',
          'Reinforced, wear-resistant floors',
          'Functional compartmentation',
          'Optimised ventilation and natural lighting',
        ],
      },
      dryers: {
        title: 'Grain dryers',
        desc: 'Installation and commissioning of grain drying plants, including heat-recovery modules for energy efficiency and lower operating costs.',
        specs: [
          'Continuous or batch drying plants',
          'Heat-recovery modules',
          'Integration with conveying systems',
          'Process automation and control',
        ],
      },
      turnkey: {
        title: 'Complete turnkey services',
        desc: 'From engineering design and foundations to mechanical and electrical assembly, conveying systems (conveyors, elevators, augers), commissioning and post-installation maintenance — a single partner for the entire project.',
        specs: [
          'Engineering design and foundations',
          'Mechanical and electrical assembly',
          'Conveyors, elevators and augers',
          'Commissioning and maintenance',
        ],
      },
    },
  },

  portfolio: {
    hero: {
      eyebrow: 'Portfolio',
      title: 'Projects built to last',
      subtitle:
        'A selection of our work, organised by category. Real project photographs will be added soon.',
    },
    filters: {
      all: 'All',
      silozuri: 'Silos',
      hale: 'Halls',
      ferme: 'Farms',
      uscatoare: 'Dryers',
    },
    placeholderNote: 'Demo image — to be replaced with the real project photograph.',
    empty: 'No work in this category yet.',
    lightbox: {
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
  },

  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s build something that lasts',
      subtitle:
        'Tell us about your project. We’ll get back with a technical solution and an estimate tailored to your needs.',
    },
    info: {
      title: 'Contact details',
      phoneLabel: 'Phone',
      phone: '0761 503 204',
      emailLabel: 'Email',
      email: 'ciceronetanase@yahoo.com',
      addressLabel: 'Registered office',
      address: '54B Chișinău St., Brăila, Romania',
      hoursLabel: 'Hours',
      hours: 'Monday – Friday, 08:00 – 17:00',
    },
    form: {
      title: 'Send us a message',
      note: 'This form is prepared for future integration. For now it opens your email app.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'address@example.com',
      phone: 'Phone',
      phonePlaceholder: '+40 7xx xxx xxx',
      message: 'Message',
      messagePlaceholder: 'Briefly describe your project...',
      submit: 'Send message',
      mapNote: 'Indicative map — the exact location will be added later.',
    },
  },

  footer: {
    tagline: 'Steel infrastructure for grain storage and processing.',
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    placeholderLegal: 'VAT: RO33246762 · Trade Reg.: J09/326/2014',
    builtNote: 'Industrial & agri-livestock construction · Romania',
  },

  notFound: {
    title: 'Page not found',
    text: 'It looks like the structure you’re looking for doesn’t exist yet.',
    cta: 'Back home',
  },
}

export default en
