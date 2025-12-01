export const COMPANY = {
  name: "Constrong",
  tagline: "Proudly serving the construction industry in KW and surrounding area",
  description:
    "At Constrong, we have the expertise and experience to deliver a wide variety of concrete formwork projects. We specialize in footings, foundations, retaining walls and slabs.",
  founded: "2019",
  location: {
    city: "Kitchener",
    province: "ON",
    country: "Canada",
    full: "Kitchener, ON, Canada",
  },
  contact: {
    phone: "+1 519-222-0700",
    phoneRaw: "15192220700",
    email: "ryan.armstrong@constronginc.com",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100057175941535",
    instagram: "https://www.instagram.com/constrong2019/",
  },
};

export const SERVICES = [
  {
    id: "foundations",
    title: "Foundations",
    description:
      "We have the experience to do a wide variety of foundations with a focus on quality, precision and in a timely manner.",
    image: "/images/projects/foundations/foundations-01.webp",
  },
  {
    id: "footings",
    title: "Footings",
    description:
      "Footings are the lowest part of a building that sits directly on the ground. From simple strip footings to pad footings, we are capable of completing any task to get the project started.",
    image: "/images/projects/footings/footings-03.webp",
  },
  {
    id: "slabs",
    title: "Slabs",
    description:
      "From sidewalks to polished floors we pride ourselves on the quality and finish on our flatwork.",
    image: "/images/projects/slabs/slabs-11.webp",
  },
];

export const CAREERS = [
  {
    id: "labourers",
    title: "Labourers",
    description:
      "We are looking for experienced construction labourers to join our team.",
  },
  {
    id: "carpenters",
    title: "Carpenters",
    description:
      "We are looking for experienced carpenters to join our team.",
  },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export type ProjectCategory = "all" | "foundations" | "footings" | "slabs" | "walls";

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "foundations", label: "Foundations" },
  { id: "footings", label: "Footings" },
  { id: "slabs", label: "Slabs" },
  { id: "walls", label: "Walls" },
];

export const PROJECTS: { id: number; image: string; alt: string; category: ProjectCategory }[] = [
  // Foundations
  { id: 1, image: "/images/projects/foundations/foundations-01.webp", alt: "Commercial foundation with columns", category: "foundations" },
  { id: 2, image: "/images/projects/foundations/foundations-02.webp", alt: "Foundation formwork at sunset", category: "foundations" },
  { id: 3, image: "/images/projects/foundations/foundations-03.webp", alt: "Multi-column foundation pour", category: "foundations" },
  { id: 4, image: "/images/projects/foundations/foundations-04.webp", alt: "Foundation with column reinforcement", category: "foundations" },
  { id: 5, image: "/images/projects/foundations/foundations-05.webp", alt: "Foundation pour with excavator", category: "foundations" },
  { id: 6, image: "/images/projects/foundations/foundations-06.webp", alt: "Commercial foundation with pump truck", category: "foundations" },
  { id: 7, image: "/images/projects/foundations/foundations-07.webp", alt: "Foundation pour on construction site", category: "foundations" },
  { id: 8, image: "/images/projects/foundations/foundations-08.webp", alt: "Foundation formwork preparation", category: "foundations" },
  { id: 9, image: "/images/projects/foundations/foundations-09.webp", alt: "Foundation with heavy reinforcement", category: "foundations" },
  { id: 10, image: "/images/projects/foundations/foundations-10.webp", alt: "Winter foundation work", category: "foundations" },
  { id: 11, image: "/images/projects/foundations/foundations-11.webp", alt: "Foundation walls with rebar", category: "foundations" },
  { id: 12, image: "/images/projects/foundations/foundations-12.webp", alt: "Foundation wall formwork setup", category: "foundations" },

  // Footings
  { id: 13, image: "/images/projects/footings/footings-01.webp", alt: "Residential footing formwork", category: "footings" },
  { id: 14, image: "/images/projects/footings/footings-02.webp", alt: "Basement footing with plumbing", category: "footings" },
  { id: 15, image: "/images/projects/footings/footings-03.webp", alt: "Multiple pad footings preparation", category: "footings" },
  { id: 16, image: "/images/projects/footings/footings-04.webp", alt: "Foundation pour with crew", category: "footings" },
  { id: 17, image: "/images/projects/footings/footings-05.webp", alt: "Footing with dense rebar grid", category: "footings" },
  { id: 18, image: "/images/projects/footings/footings-06.webp", alt: "Precast concrete forms in shop", category: "footings" },
  { id: 19, image: "/images/projects/footings/footings-07.webp", alt: "Retaining wall footing", category: "footings" },
  { id: 20, image: "/images/projects/footings/footings-08.webp", alt: "Trench footing excavation", category: "footings" },

  // Slabs
  { id: 21, image: "/images/projects/slabs/slabs-01.webp", alt: "Large industrial slab rebar", category: "slabs" },
  { id: 22, image: "/images/projects/slabs/slabs-02.webp", alt: "Commercial slab with conveyor pour", category: "slabs" },
  { id: 23, image: "/images/projects/slabs/slabs-03.webp", alt: "Industrial slab preparation", category: "slabs" },
  { id: 24, image: "/images/projects/slabs/slabs-04.webp", alt: "Fresh concrete slab pour", category: "slabs" },
  { id: 25, image: "/images/projects/slabs/slabs-05.webp", alt: "Construction site with equipment", category: "slabs" },
  { id: 26, image: "/images/projects/slabs/slabs-06.webp", alt: "Winter slab pour", category: "slabs" },
  { id: 27, image: "/images/projects/slabs/slabs-07.webp", alt: "Fresh poured slab with forms", category: "slabs" },
  { id: 28, image: "/images/projects/slabs/slabs-08.webp", alt: "Slab rebar installation", category: "slabs" },
  { id: 29, image: "/images/projects/slabs/slabs-09.webp", alt: "Slab with column sleeves", category: "slabs" },
  { id: 30, image: "/images/projects/slabs/slabs-10.webp", alt: "Large slab pour with crew", category: "slabs" },
  { id: 31, image: "/images/projects/slabs/slabs-11.webp", alt: "Slab finishing with pump truck", category: "slabs" },
  { id: 32, image: "/images/projects/slabs/slabs-12.webp", alt: "Worker finishing concrete slab", category: "slabs" },
  { id: 33, image: "/images/projects/slabs/slabs-13.webp", alt: "Hydrant pad pour", category: "slabs" },

  // Walls
  { id: 34, image: "/images/projects/walls/walls-01.webp", alt: "Large wall pour with pump truck", category: "walls" },
  { id: 35, image: "/images/projects/walls/walls-02.webp", alt: "Agricultural wall construction", category: "walls" },
  { id: 36, image: "/images/projects/walls/walls-03.webp", alt: "Wall pour with crew working", category: "walls" },
  { id: 37, image: "/images/projects/walls/walls-04.webp", alt: "Completed wall at sunset", category: "walls" },
  { id: 38, image: "/images/projects/walls/walls-05.webp", alt: "Tall column formwork with crane", category: "walls" },
  { id: 39, image: "/images/projects/walls/walls-06.webp", alt: "Winter footing pour", category: "walls" },
  { id: 40, image: "/images/projects/walls/walls-07.webp", alt: "Pump truck pouring foundation", category: "walls" },
  { id: 41, image: "/images/projects/walls/walls-08.webp", alt: "PERI wall formwork system", category: "walls" },
  { id: 42, image: "/images/projects/walls/walls-09.webp", alt: "Retaining wall forms with rebar", category: "walls" },
  { id: 43, image: "/images/projects/walls/walls-10.webp", alt: "Retaining wall formwork", category: "walls" },
  { id: 44, image: "/images/projects/walls/walls-11.webp", alt: "Wall reinforcement detail", category: "walls" },
  { id: 45, image: "/images/projects/walls/walls-12.webp", alt: "Wall formwork at commercial site", category: "walls" },
  { id: 46, image: "/images/projects/walls/walls-13.webp", alt: "Poured wall section", category: "walls" },
  { id: 47, image: "/images/projects/walls/walls-14.webp", alt: "Pump truck wall pour", category: "walls" },
  { id: 48, image: "/images/projects/walls/walls-15.webp", alt: "Retaining wall with telehandler", category: "walls" },
];
