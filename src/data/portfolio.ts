
/** Central, editable portfolio content for Abinash Sarangi. */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const crimson: Palette = {
  from: '#06152D',
  via: '#0878F9',
  to: '#030B1A',
  accent: '#00D9FF',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const profile = {
  fullName: 'Abinash Sarangi',
  displayName: 'Abinash Sarangi',
  firstName: 'ABINASH',
  seriesTag: 'NETWORKING • SYSTEMS • CYBERSECURITY',

  originalLabel: 'AN ABS ORIGINAL',
  role: 'Networking & Cybersecurity',

  tagline: ['Networking', 'Systems Administration', 'Cybersecurity'],

  intro:
    'Computer Science and Engineering graduate with completed CCNA training, focused on networking, systems administration and cybersecurity. Interested in reliable network infrastructure, practical troubleshooting and defensive security.',

  location: 'Odisha, India',
  email: 'sarangiabinash17@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/abinash-sarangi-b8443b252',
    github: 'https://github.com/Abinash9012',
  },

  resumePdf: '/assets/Abinash_Sarangi_Resume.pdf',

  portrait: {
    src: '/assets/network-portrait.png',
    srcSet: '/assets/network-portrait.png',
    alt: 'Blue network globe connecting servers, routers and systems',
  },

  interests: [
    'Routing & Switching',
    'Network Security',
    'System Administration',
    'Troubleshooting',
  ],
};

export const education = [
  {
    school: 'KMBB College of Engineering and Technology',
    place: 'Odisha',
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2021 – 2025',
    score: 'CGPA: 7.88',
  },
];

export const experience = [
  {
    company: 'Luminous Infoways',
    role: 'Intern',
    place: 'Bhubaneswar, Odisha',
    period: 'Jan – Apr 2025',
    points: [
      'Internship experience; add a concise verified description of responsibilities here.',
    ],
  },
];

export type Metric = {
  value: string;
  label: string;
};

export type ProjectGalleryImage = {
  src: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  image?: string;
  gallery?: ProjectGalleryImage[];
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ccn-campus-network',
    title: 'CCN Campus Network Design Project',
    year: 'Add year',
    genre: 'Campus Networking • Cisco Packet Tracer',
    logline:
      'A multi-campus network design created in Cisco Packet Tracer, connecting campus buildings and departments through a structured, documented network topology.',
    stack: [
      'Cisco Packet Tracer',
      'Routing & Switching',
      'VLANs',
      'Network Documentation',
    ],
    github:
      'https://github.com/Abinash9012/Campus-Network-Design-Project',
    build: [
      'Designed a campus network topology with main and sub-campus layouts.',
      'Organized devices and network connections to represent campus-wide communication.',
      'Prepared supporting project documentation, topology screenshots and usage notes.',
    ],
    features: [
      'Main campus topology',
      'Sub-campus 1 and sub-campus 2 topologies',
      'Full network overview',
      'Structured project files and setup instructions',
      'Network architecture documentation',
    ],
    metrics: [
      { value: '3', label: 'campus topology views' },
      { value: '1', label: 'full network overview' },
    ],
    gallery: [
      {
        src: 'https://raw.githubusercontent.com/Abinash9012/Campus-Network-Design-Project/main/screenshots/MainCampus.png',
        caption: 'Main Campus Topology',
      },
      {
        src: 'https://raw.githubusercontent.com/Abinash9012/Campus-Network-Design-Project/main/screenshots/SubCampus1.png',
        caption: 'Sub-Campus 1 Topology',
      },
      {
        src: 'https://raw.githubusercontent.com/Abinash9012/Campus-Network-Design-Project/main/screenshots/SubCampus2.png',
        caption: 'Sub-Campus 2 Topology',
      },
      {
        src: 'https://raw.githubusercontent.com/Abinash9012/Campus-Network-Design-Project/main/screenshots/Network.png',
        caption: 'Full Network Overview',
      },
    ],
    palette: crimson,
    motif: 'flow',
  },

  {
    id: 'multi-site-enterprise',
    title: 'Multi-Site Enterprise Network Simulation',
    year: 'Add year',
    genre: 'Enterprise Networking • Cisco Packet Tracer',
    logline:
      'A secure HQ–branch network simulation focused on segmented connectivity, routing, address assignment and controlled remote access.',
    stack: [
      'Cisco Packet Tracer',
      'VLANs',
      'Inter-VLAN Routing',
      'OSPF',
      'DHCP',
      'SSH / ACL / PAT',
    ],
    github:
      'https://github.com/Abinash9012/Multi-Site-Enterprise-Network',
    build: [
      'Designed and configured an HQ–branch enterprise network.',
      'Implemented VLANs, inter-VLAN routing, OSPF and DHCP.',
      'Configured SSH, standard and extended ACLs, and PAT for secure access, traffic filtering and connectivity.',
      'Verified routing and end-to-end connectivity with network troubleshooting commands.',
    ],
    features: [
      'VLAN segmentation',
      'Inter-VLAN routing',
      'OSPF routing',
      'DHCP address allocation',
      'SSH remote access',
      'Access control lists and PAT',
    ],
    metrics: [
      { value: 'HQ + Branch', label: 'network layout' },
      { value: 'OSPF', label: 'routing protocol' },
    ],
    gallery: [
      {
        src: 'https://raw.githubusercontent.com/Abinash9012/Multi-Site-Enterprise-Network/main/Project.png',
        caption: 'Multi-Site Enterprise Lab',
      },
    ],
    palette: crimson,
    motif: 'shield',
  },

  {
    id: 'five-floor-enterprise',
    title: '5-Floor Enterprise Network Architecture',
    year: 'Add year',
    genre: 'Enterprise Network Design • Cisco Packet Tracer',
    logline:
      'A five-floor, multi-department enterprise network plan emphasizing departmental segmentation, automatic IP allocation and efficient resource use.',
    stack: [
      'Cisco Packet Tracer',
      'VLANs',
      'DHCP',
      'Network Architecture',
    ],
    github:
      'https://github.com/Abinash9012/Five-floor-enterprise-network',
    build: [
      'Designed a five-floor, multi-department enterprise network.',
      'Planned VLAN segmentation and DHCP-based automatic IP allocation.',
      'Planned inter-department communication and high availability while keeping resource requirements efficient.',
    ],
    features: [
      'Five-floor topology plan',
      'Departmental VLAN segmentation',
      'Automatic IP allocation with DHCP',
      'Inter-department connectivity',
      'Resource-efficient network layout',
    ],
    metrics: [
      { value: '5 Floors', label: 'enterprise layout' },
      { value: 'DHCP', label: 'address allocation' },
    ],
    gallery: [
      {
        src: 'https://raw.githubusercontent.com/Abinash9012/Five-floor-enterprise-network/main/Project.png',
        caption: 'Five-Floor Network Architecture',
      },
    ],
    palette: crimson,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ccna',
    title: 'CCNA Training Completed',
    org: 'CTTC, Bhubaneswar',
    detail:
      'Completed CCNA training. Add the official certificate URL once available.',
    laurel: 'Training completed',
  },
  {
    id: 'btech',
    title: 'B.Tech Graduate',
    org: 'Computer Science & Engineering',
    detail:
      'Completed B.Tech in 2025 at KMBB College of Engineering and Technology.',
    laurel: '2025',
  },
  {
    id: 'cloud',
    title: 'Google Cloud Arcade',
    org: 'Google Cloud',
    detail:
      'Participating in Google Cloud Arcade learning labs. Add completed badges or achievements when confirmed.',
    laurel: 'Learning in progress',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'CTTC, Bhubaneswar',
    name: 'CCNA Training — completed; certificate link to be added',
    link: '#',
  },
  {
    issuer: 'Simplilearn',
    name: 'CCNA 200-301: Networking Fundamentals',
    link: '#',
  },
  {
    issuer: 'Google Cloud',
    name: 'Arcade Facilitator Program 2026 — add completed badges',
    link: '#',
  },
];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'networking',
    title: 'Networking',
    subtitle: 'Core network concepts and infrastructure',
    skills: [
      { name: 'TCP/IP', mono: 'IP' },
      { name: 'Routing & Switching', mono: 'R/S' },
      { name: 'LAN / WAN', mono: 'L/W' },
      { name: 'VLANs', mono: 'VL' },
      { name: 'Ethernet', mono: 'Et' },
      { name: 'DHCP', mono: 'DH' },
      { name: 'DNS', mono: 'DN' },
      { name: 'FTP', mono: 'FT' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Security concepts and defensive fundamentals',
    skills: [
      { name: 'Firewalls', mono: 'FW' },
      { name: 'Cybersecurity Fundamentals', mono: 'CS' },
      { name: 'Network Troubleshooting', mono: 'NT' },
      { name: 'Access Control Lists', mono: 'ACL' },
      { name: 'SSH', mono: 'SSH' },
      { name: 'NAT / PAT', mono: 'NAT' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems',
    subtitle: 'Operating systems and administration',
    skills: [
      { name: 'Windows OS', mono: 'Win' },
      { name: 'Ubuntu Linux', mono: 'Ub' },
      { name: 'Active Directory', mono: 'AD' },
      { name: 'System Troubleshooting', mono: 'ST' },
    ],
  },
  {
    id: 'tools',
    title: 'Networking Tools',
    subtitle: 'Tools used for network learning and practice',
    skills: [
      { name: 'Cisco Packet Tracer', mono: 'PT' },
      { name: 'PuTTY', mono: 'Pu' },
      { name: 'Google Cloud Basics', mono: 'GC', note: 'Basic' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'TCP/IP': ['Networking fundamentals'],
  'Routing & Switching': [
    'CCNA training',
    'Enterprise network simulations',
  ],
  'Cisco Packet Tracer': [
    'CCN campus network design',
    'Enterprise network simulations',
  ],
  PuTTY: ['Remote terminal tool'],
  Firewalls: ['Network security fundamentals'],
  'Google Cloud Basics': ['Basic cloud concepts'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2025',
    synopsis:
      'The Computer Science and Engineering degree that built the foundation for a career in IT.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'CSE Graduate',
        description:
          'B.Tech in Computer Science & Engineering at KMBB College of Engineering and Technology.',
        tags: ['B.Tech', 'CSE'],
        runtime: '2021 – 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Into Networking',
    period: 'CCNA Training',
    synopsis:
      'Building practical understanding of network fundamentals and infrastructure.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'CCNA Training',
        description:
          'Completed CCNA training at CTTC, Bhubaneswar. Add certificate details when available.',
        tags: ['TCP/IP', 'Routing', 'Switching'],
        runtime: 'Completed',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Campus Network Design',
        description:
          'Created a documented multi-campus network design project using Cisco Packet Tracer.',
        tags: ['Campus Network', 'Topology'],
        runtime: 'Project',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Systems & Security',
    period: 'Current focus',
    synopsis:
      'Developing a career path around networking, system administration and cybersecurity.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Security Track',
        description:
          'Learning and practicing defensive network security concepts in authorized environments.',
        tags: ['Firewalls', 'Security'],
        runtime: 'Ongoing',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Systems Track',
        description:
          'Networking and operating system skills for entry-level infrastructure roles.',
        tags: ['Windows', 'Ubuntu', 'DNS'],
        runtime: 'Ongoing',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'What Comes Next',
    period: 'In progress',
    synopsis:
      'Add real projects, certifications and milestones here as you complete them.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Next Chapter',
        description:
          'Replace this placeholder with your next verified learning or career milestone.',
        tags: ['Career', 'Learning'],
        runtime: 'To be updated',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Core focus',
    title: 'Networking',
    detail: 'Routing, switching and network fundamentals',
    palette: ocean,
  },
  {
    label: 'Training',
    title: 'CCNA',
    detail: 'Training completed at CTTC, Bhubaneswar',
    palette: crimson,
  },
  {
    label: 'Career direction',
    title: 'Cybersecurity',
    detail:
      'Interested in security-focused, infrastructure-oriented technical roles',
    palette: violet,
  },
  {
    label: 'Systems',
    title: 'Administration',
    detail: 'Windows, Ubuntu and troubleshooting',
    palette: jade,
  },
  {
    label: 'Project',
    title: 'Campus Network',
    detail: 'CCN Campus Network Design Project',
    palette: amber,
  },
  {
    label: 'Cloud',
    title: 'Google Cloud',
    detail: 'Basic concepts and Arcade labs',
    palette: ocean,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: [
      'KMBB College of Engineering and Technology',
      '2021 – 2025',
    ],
    chips: ['Graduated 2025'],
  },
  {
    kicker: 'Training',
    title: 'CCNA Training',
    lines: [
      'Completed at CTTC, Bhubaneswar',
      'Add official certificate details when available',
    ],
    chips: ['Networking'],
  },
  {
    kicker: 'Skills',
    title: 'Networks first.',
    lines: [
      'TCP/IP · Routing & Switching · VLANs · DNS / DHCP',
      'Windows · Ubuntu · Packet Tracer · PuTTY',
    ],
    chips: ['Networking', 'Systems', 'Security'],
  },
  {
    kicker: 'Career focus',
    title: 'Security-minded.',
    lines: [
      'Interested in networking and cybersecurity roles',
      'Prefer infrastructure and technical support over coding-heavy work',
    ],
  },
  {
    kicker: 'Current learning',
    title: 'Building the next chapter',
    lines: [
      'Google Cloud Arcade labs',
      'Document verified projects and certifications as they are completed',
    ],
  },
];

export type ProfileId = 'abinash' | 'recruiter' | 'networking' | 'security';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'abinash',
    name: 'Abinash',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, training & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'about', 'journey', 'originals', 'picks'],
  },
  {
    id: 'networking',
    name: 'Networking',
    blurb: 'Network skills & lab work first',
    color: '#46e3a8',
    order: ['skills', 'journey', 'originals', 'about', 'picks', 'moments', 'story'],
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    blurb: 'Security interests & skills first',
    color: '#ffb547',
    order: ['picks', 'skills', 'originals', 'journey', 'moments', 'about', 'story'],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Education & training',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: 'Campus networking • Enterprise network design',
    palette: crimson,
  },
  picks: {
    nav: 'Focus',
    card: 'Top Focus',
    meta: 'Networking • Systems • Security',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Milestones',
    card: 'Milestones',
    meta: `${achievements.length} Milestones • ${certifications.length} Learning items`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • Profile summary',
    palette: violet,
  },
};
