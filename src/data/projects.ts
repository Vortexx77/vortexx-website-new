// ─── Shared project data ──────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  client: string;
  duration: string;
  category: string;
  liveUrl?: string;
  mockupBg: string;
  accentColor: string;
  description: string;
  fullDescription: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'nestcraft-construction',
    title: 'Nestcraft Construction',
    client: 'Ian',
    duration: '2 Weeks',
    category: 'Construction Company Website',
    liveUrl: '#',
    mockupBg: 'from-amber-900/60 to-stone-900',
    accentColor: '#f59e0b',
    description:
      'A modern construction company website that helps clients explore services, view projects, and submit organised quotation requests easily.',
    fullDescription:
      'This construction company website was created for NestCraft Construction to give clients a clear, modern, and organised way to explore the services they offer. Many people look for construction services without knowing how to compare providers, so the website\'s purpose is to present reliable information in a simple format that reflects NestCraft\'s professionalism.\n\nNestCraft handles building construction, renovation, interior finishing, and civil engineering projects. The website introduces these services through short, well-arranged sections that help clients understand what NestCraft does and the scale of projects they handle. The explanations are written in non-technical language so homeowners, commercial clients, and investors can make decisions comfortably.\n\nThe construction company website also acts as a permanent reference point for anyone evaluating a contractor. It builds trust through structured content, real project images, and organised categories like residential works, commercial buildings, and finishing projects. Project pages include location, duration, and descriptions that help potential clients assess capability and consistency.\n\nBecause many clients browse on phones, mobile responsiveness was a priority. The website loads smoothly on all devices, displays images clearly, and keeps the navigation predictable.',
    tags: ['Web Design', 'Responsive', 'Quotation System'],
  },
  {
    id: 'westway-luxury-suites',
    title: 'Westway Luxury Suites',
    client: 'Westway Group',
    duration: '3 Weeks',
    category: 'Hotels/Hospitality websites',
    liveUrl: '#',
    mockupBg: 'from-blue-900/60 to-slate-900',
    accentColor: '#3abef9',
    description:
      'An elegant hospitality website for a luxury hotel, featuring room booking, gallery, and amenity showcasing built for conversions.',
    fullDescription:
      'Westway Luxury Suites required a high-end digital presence that matched their in-person experience. The website features a seamless booking flow, immersive photo galleries, and service descriptions that communicate the brand\'s premium positioning.\n\nThe design focuses on trust, elegance, and ease of reservation. Guests can browse available room categories, view amenities, check dining options, and submit booking inquiries — all from an interface that feels as refined as the property itself.\n\nMobile optimisation was central to the build, since a significant portion of hospitality bookings happen on phones. The result is a fast, beautiful website that converts browsers into guests.',
    tags: ['Web Design', 'Booking System', 'Gallery'],
  },
  {
    id: 'urudo-uganda',
    title: 'URUDO Uganda',
    client: 'URUDO',
    duration: '2 Weeks',
    category: 'NGO websites',
    liveUrl: '#',
    mockupBg: 'from-green-900/60 to-emerald-950',
    accentColor: '#22c55e',
    description:
      'A professional NGO website designed to raise awareness, communicate impact, and facilitate donations for a Ugandan non-profit organisation.',
    fullDescription:
      'URUDO Uganda needed a digital platform that clearly communicated their mission and ongoing community projects. The website features a compelling story-driven layout, an impact statistics section, a donation pathway, and a volunteer sign-up flow.\n\nAll pages were optimised for mobile users in the region, where most access is via smartphone. The content architecture was designed to guide first-time visitors from learning about the organisation to taking action — whether donating, volunteering, or sharing the mission.\n\nThe result is a platform that serves as both a credibility tool for donors and a mobilisation hub for the community.',
    tags: ['NGO', 'Donations', 'Mobile-First'],
  },
  {
    id: 'kebisoni-sacco',
    title: 'Kebisoni SACCO',
    client: 'Kebisoni SACCO',
    duration: '3 Weeks',
    category: 'Sacco Bank websites',
    liveUrl: '#',
    mockupBg: 'from-purple-900/60 to-indigo-950',
    accentColor: '#a78bfa',
    description:
      'A fully responsive financial institution website for a savings and credit cooperative, with member portal access and service information.',
    fullDescription:
      'Kebisoni SACCO required a trustworthy, professional website that would instil confidence among their members and prospective clients. The website presents loan products, savings accounts, and membership processes clearly, supported by a secure member portal entry point and contact forms.\n\nThe design language prioritises clarity and professionalism — essential for a financial institution. Product pages break down eligibility, interest rates, and application steps in plain language so members can make informed decisions without needing to visit a branch.\n\nThe website has become a key customer-facing tool, reducing routine inquiries and bringing more qualified applicants to the SACCO.',
    tags: ['Finance', 'Member Portal', 'Responsive'],
  },
  {
    id: 'kartel-tech',
    title: 'Kartel Tech',
    client: 'Kartel Tech',
    duration: '2 Weeks',
    category: 'Tech company websites',
    liveUrl: '#',
    mockupBg: 'from-cyan-900/60 to-blue-950',
    accentColor: '#22d3ee',
    description:
      'A sleek tech company website showcasing services, case studies, and a team culture that reflects innovation and technical excellence.',
    fullDescription:
      'Kartel Tech needed a website that would position them as a credible technology partner for businesses. The design features dark-mode aesthetics, animated service cards, an interactive portfolio section, and a strong call-to-action strategy to drive consultation bookings.\n\nThe site communicates technical depth without overwhelming non-technical visitors. Each service area has its own dedicated section with plain-language explanations, process outlines, and relevant case studies — giving prospects the information they need to start a conversation.\n\nThe final product reflects a modern tech brand: confident, clean, and conversion-focused.',
    tags: ['Tech', 'Portfolio', 'Dark Mode'],
  },
  {
    id: 'heart-and-word',
    title: 'Heart and Word',
    client: 'Heart and Word',
    duration: '1 Week',
    category: 'Personal Blog Website',
    liveUrl: '#',
    mockupBg: 'from-rose-900/60 to-pink-950',
    accentColor: '#fb7185',
    description:
      'A beautifully designed personal blog platform focused on Christian faith, lifestyle, and devotional content.',
    fullDescription:
      'Heart and Word is a personal blog for an author sharing faith-based content. The website features a clean, warm reading experience with article categories, featured posts, a newsletter subscription, and social sharing tools.\n\nThe design was intentionally warm and inviting — soft tones, generous spacing, and easy-to-read typography that makes long-form devotional writing a pleasure to consume on any device.\n\nAll designed to build a loyal, engaged community around the author\'s voice and message.',
    tags: ['Blog', 'Content', 'Newsletter'],
  },
  {
    id: 'gebana-company',
    title: 'Gebana Company Ltd',
    client: 'Gebana Ltd',
    duration: '3 Weeks',
    category: 'Construction Company Website',
    liveUrl: '#',
    mockupBg: 'from-orange-900/60 to-red-950',
    accentColor: '#f97316',
    description:
      'A powerful construction and civil engineering website built for a growing company seeking stronger digital visibility.',
    fullDescription:
      'Gebana Company Ltd needed a professional website to complement their growing reputation in the construction sector. The site features project showcases, service breakdowns, a quotation system, and team profiles — all presented in a strong, confident visual design.\n\nThe project gallery allows prospective clients to assess the company\'s completed work across different construction categories, building trust before any conversation takes place. The quotation system reduces back-and-forth by collecting key project details upfront.\n\nThe website has become a central marketing asset for the company, supporting their sales process and reinforcing their credibility.',
    tags: ['Construction', 'Project Showcase', 'Quotation'],
  },
  {
    id: 'evelyne-health-training',
    title: 'Evelyne Health Training Institute',
    client: 'Evelyne HTI',
    duration: '3 Weeks',
    category: 'School & Institution Websites',
    liveUrl: '#',
    mockupBg: 'from-teal-900/60 to-green-950',
    accentColor: '#2dd4bf',
    description:
      'An institution website for a healthcare training college, featuring course listings, admissions info, and student resources.',
    fullDescription:
      'Evelyne Health Training Institute required a comprehensive website that would attract prospective students, communicate their accredited programmes, and provide current students with resources.\n\nThe site includes a full courses catalogue with programme details, admission requirements, and fee structures. An online inquiry form streamlines the application process, reducing the administrative burden on staff while giving prospective students a clear pathway.\n\nThe design is professional and welcoming — reflecting the institute\'s commitment to quality healthcare training and its role as a trusted educational institution.',
    tags: ['Education', 'Admissions', 'Courses'],
  },
  {
    id: 'emmy-outreaches',
    title: 'EMMY OUTREACHES',
    client: 'Emmy Outreaches',
    duration: '2 Weeks',
    category: 'NGO websites',
    liveUrl: '#',
    mockupBg: 'from-sky-900/60 to-blue-950',
    accentColor: '#38bdf8',
    description:
      'An NGO website empowering youth in rural Uganda, with donation capabilities, event listings, and programme information.',
    fullDescription:
      'Emmy Outreaches focuses on empowering youth in Uganda through education and skill development. The website tells their story compellingly, lists upcoming community events, presents their ongoing programmes, and provides a clear pathway for donors and volunteers to get involved.\n\nThe content strategy prioritises emotional resonance — real stories, real impact numbers, and real calls to action — to turn passive readers into active supporters. The donation flow is simple and mobile-friendly, reducing drop-off from potential contributors.\n\nThe website now serves as the organisation\'s primary digital hub, connecting their community work with a broader network of supporters.',
    tags: ['NGO', 'Youth', 'Donations'],
  },
  {
    id: 'african-horizon-adventures',
    title: 'African Horizon Adventures',
    client: 'African Horizon',
    duration: '3 Weeks',
    category: 'Tour & Travel Websites',
    liveUrl: '#',
    mockupBg: 'from-yellow-900/60 to-amber-950',
    accentColor: '#fbbf24',
    description:
      'A vibrant tour and travel website for an East African safari company, featuring tour packages, booking forms, and immersive photography.',
    fullDescription:
      'African Horizon Adventures needed a website that would capture the spirit of East African travel and convert browsing visitors into bookings. The site features beautiful destination galleries, detailed tour package pages, customer reviews, and a booking inquiry system.\n\nEach tour package page is structured to answer the key questions a traveller has: what\'s included, what to expect, the best season to visit, and how to book. The photography-forward layout immerses visitors in the experience before they even arrive.\n\nMobile optimisation was essential for travellers researching on the go. The site loads quickly, displays images beautifully, and guides visitors smoothly from discovery to inquiry.',
    tags: ['Travel', 'Booking', 'Safari'],
  },
  {
    id: 'kinoni-sacco',
    title: 'Kinoni Sacco',
    client: 'Kinoni Sacco',
    duration: '2 Weeks',
    category: 'Sacco Bank websites',
    liveUrl: '#',
    mockupBg: 'from-violet-900/60 to-purple-950',
    accentColor: '#8b5cf6',
    description:
      'A financial cooperative website with a focus on member trust, transparency, and accessible information about savings and loan products.',
    fullDescription:
      'Kinoni Sacco needed a digital presence that would reassure existing members and attract new ones. The website presents their financial products, eligibility requirements, interest rates, and contact information in a clean, easy-to-navigate layout.\n\nA strong emphasis was placed on professionalism and trust signals — clear product descriptions, visible contact details, and a well-organised FAQ section that addresses common member concerns without requiring a branch visit.\n\nThe website has made Kinoni Sacco more accessible to members across the region, reducing inquiry calls and increasing qualified membership applications.',
    tags: ['Finance', 'SACCO', 'Responsive'],
  },
];

export const categories = [
  'All',
  'Construction Company Website',
  'Hotels/Hospitality websites',
  'NGO websites',
  'Personal Blog Website',
  'Sacco Bank websites',
  'School & Institution Websites',
  'Tech company websites',
  'Tour & Travel Websites',
];
