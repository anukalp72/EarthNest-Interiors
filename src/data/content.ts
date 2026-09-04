export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  tag: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  popular?: boolean;
  idealFor: string;
  timeline: string;
  highlights: string[];
  specs: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Modular Kitchen' | 'Bedroom' | 'Commercial' | 'Turnkey';
  location: string;
  area: string;
  duration: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  locality: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: "EarthNest Interiors",
  type: "Interior Design & Home Décor",
  location: "Boring Road, Patna, Bihar, India",
  fullAddress: "3rd Floor, Nest Complex, Boring Road, Near Chauraha, Patna, Bihar 800001",
  established: "2019",
  tagline: "Design Your Space. Live Your Story.",
  heroHeading: "Spaces That Feel Like Home.",
  heroSubheading: "Modern interior design solutions created around your lifestyle, personality, and space.",
  phone: "+91 98765 43210",
  email: "hello@earthnestinteriors.in",
  hoursWeekday: "Monday – Saturday: 10:00 AM – 7:00 PM",
  hoursSunday: "Sunday: Closed",
  experienceYears: 6,
  completedProjects: "380+",
  patnaNeighborhoods: ["Boring Road", "Bailey Road", "Patliputra Colony", "Kankarbagh", "Danapur", "Rajendra Nagar", "Anisabad", "Ashiana Nagar"]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "complete-home",
    title: "Complete Home Interior Design",
    tag: "Signature Service",
    shortDesc: "End-to-end bespoke home transformations from conceptual 3D floor plans to ready-to-move styling.",
    fullDesc: "Comprehensive interior solutions that harmoniously weave together foyer, living spaces, bedrooms, dining, and utility zones into an integrated narrative that celebrates your lifestyle.",
    features: [
      "Custom space planning & ergonomic zoning",
      "Bespoke joinery, wardrobes & custom cabinetry",
      "Harmonized color palettes & acoustic textures",
      "Complete site oversight & turnkey handover"
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen Design",
    tag: "High Utility",
    shortDesc: "Sleek, heat-and-moisture resistant ergonomic modular kitchens tailored for Indian culinary habits.",
    fullDesc: "High-performance modular kitchens pairing European hardware, soft-close mechanisms, quartz/granite worktops, and intelligently partitioned pantry pull-outs for effortless everyday cooking.",
    features: [
      "BWP Marine-grade plywood with anti-scratch laminates",
      "Corner carousels, tandem boxes & tall pantry units",
      "Chimney duct routing & seamless sink integration",
      "Task under-cabinet lighting & concealed sockets"
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "living-room",
    title: "Living Room Design",
    tag: "Social Sanctuary",
    shortDesc: "Contemporary conversation areas with statement TV units, bespoke seating, and ambient illumination.",
    fullDesc: "We design living rooms that balance grand visual statements with intimate warmth. Designed for family gatherings, festive celebrations, and quiet evenings alike.",
    features: [
      "Acoustic fluted panels, marble & veneer feature walls",
      "Concealed wiring & custom media consoles",
      "Custom-scaled sectional sofas & accent lounge chairs",
      "Architectural cove lighting & warm brass accents"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "bedroom-interiors",
    title: "Bedroom Interiors",
    tag: "Rest & Rejuvenation",
    shortDesc: "Tranquil master suites and guest sanctuaries prioritizing natural airflow, soothing tones, and smart storage.",
    fullDesc: "Escape the bustling city into peaceful, hotel-inspired bedroom suites. Tailored headboards, integrated reading lamps, sound-dampening textures, and clutter-free walk-in closets.",
    features: [
      "Floor-to-ceiling floor-slide wardrobes with lofts",
      "Upholstered headboards & floating bedside ledges",
      "Dedicated dressing nooks with vanity mirrors",
      "Warm circadian lighting & blackout curtain tracks"
    ],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "office-interior",
    title: "Office Interior Design",
    tag: "Productive Spaces",
    shortDesc: "Modern executive cabins, collaborative workspaces, and clinic/commercial interiors in Patna.",
    fullDesc: "Ergonomic workstations, sound-attenuated meeting pods, reception branding walls, and durable commercial finishes engineered to boost team focus and impress clients.",
    features: [
      "Ergonomic furniture layouts with cable management",
      "Acoustic ceiling baffles & glazed partition walls",
      "Client waiting lounges & corporate branding walls",
      "Energy-efficient commercial smart illumination"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "home-decor",
    title: "Home Décor & Styling",
    tag: "Curated Elegance",
    shortDesc: "Curated soft furnishings, indoor plants, artisanal wall sculptures, rugs, and bespoke accents.",
    fullDesc: "The final layer of character that breathes life into spaces. Our stylists select bespoke art pieces, handwoven dhurries, ceramic vessels, and lush foliage to personalize your home.",
    features: [
      "Textile curation (linen, velvets, sheer drapery)",
      "Curated original art, prints & statement mirrors",
      "Handcrafted pottery, table accents & sculptural books",
      "Biophilic plant selection suited for Patna climate"
    ],
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "lighting-ceiling",
    title: "Lighting & False Ceiling",
    tag: "Atmospheric Craft",
    shortDesc: "Layered mood illumination, architectural cove designs, and minimalist gypsum ceilings.",
    fullDesc: "Transform the mood of any room with multi-tiered lighting: ambient general light, purposeful task lights, and magnetic track spots highlighting prized architecture.",
    features: [
      "Seamless Saint-Gobain moisture-resistant gypsum",
      "Concealed LED strip profiles & indirect coves",
      "Magnetic track lights & dimmable warm spots",
      "Aesthetic shadow-gap ceiling perimeter detailing"
    ],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "3d-visualization",
    title: "3D Interior Visualization",
    tag: "Photorealistic Render",
    shortDesc: "Hyper-realistic 3D walkthroughs and material renders before a single hammer is struck.",
    fullDesc: "Experience your future residence in vivid photorealistic detail. Inspect how morning sunlight enters through balconies, review laminate textures, and finalize every finish risk-free.",
    features: [
      "Ultra-detailed 4K photorealistic 3D camera angles",
      "Virtual 360° walkthroughs of all rooms",
      "Accurate material, lighting & texture mapping",
      "Multiple color palette & finish iterations"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "turnkey-solutions",
    title: "Turnkey Interior Solutions",
    tag: "Zero-Stress Execution",
    shortDesc: "Complete end-to-end design, carpentry, civil works, electrical, painting, and handover.",
    fullDesc: "From raw brick structure or bare builder handover to a pristine, move-in ready sanctuary. We handle procurement, site supervisors, artisans, and timeline milestones on single-point accountability.",
    features: [
      "Single-point dedicated project engineer & manager",
      "Strict 45-day on-site delivery schedule",
      "Direct factory fabrication & branded raw materials",
      "Comprehensive 10-year structural & hardware warranty"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: "essential",
    name: "Essential Package",
    price: "₹1.5 Lakh",
    subtitle: "Smart, stylish interior essentials for compact homes & rentals",
    idealFor: "1 BHK / 2 BHK starter homes or rental upgrades",
    timeline: "25 – 30 Days Handover",
    highlights: [
      "Essential Modular Kitchen (Straight/L-Shape)",
      "Standard 2-Door Wardrobe in Master Bedroom",
      "Basic Living Room TV Unit & Cable Organizer",
      "Essential LED False Ceiling in Living Area",
      "Asian Paints Royale Primer & Emulsion Finish",
      "1 Year Service Warranty"
    ],
    specs: [
      "Commercial Ply (IS:303) with 0.8mm high-gloss laminates",
      "Standard soft-close hinges & telescopic channels",
      "Warm white LED strip lights with driver",
      "Basic 2D layout & material selection"
    ]
  },
  {
    id: "modern-home",
    name: "Modern Home Package",
    price: "₹3.5 Lakh",
    popular: true,
    subtitle: "Complete living & dual-bedroom setup with contemporary finishes",
    idealFor: "Standard 2 BHK & 3 BHK modern apartments",
    timeline: "35 – 45 Days Handover",
    highlights: [
      "Full Acrylic/Laminate Modular Kitchen with Tandem Drawers",
      "Sliding Wardrobes with Lofts in 2 Bedrooms",
      "Designer TV Unit with Fluted Louvers & LED Backlighting",
      "Full Living + Dining Designer False Ceiling with Coves",
      "Vanity Units with Mirrors in 2 Bathrooms",
      "Pooja Unit / Mandir with CNC Jali Carving",
      "5 Years Comprehensive Warranty"
    ],
    specs: [
      "BWP Marine Ply (IS:710) in Kitchen & Wet areas",
      "Hettich / Hafele soft-close hardware",
      "Profile LED lights with recessed magnetic track",
      "Full 3D Renders & dedicated site supervisor"
    ]
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "₹6 Lakh",
    subtitle: "High-end bespoke interiors with luxury materials & custom joinery",
    idealFor: "Spacious 3 BHK / 4 BHK residences & duplexes",
    timeline: "45 – 55 Days Handover",
    highlights: [
      "Luxury Island or Parallel Kitchen with Quartz Countertop",
      "Floor-to-Ceiling Lacquered Glass & Veneer Wardrobes",
      "Grand Italian Marble Texture / Charcoal Panel TV Wall",
      "Acoustic Dining Wall Paneling & Bar Counter",
      "Master Suite Bed with Tufted Velvet Bed Back & Side Tables",
      "Architectural False Ceiling across all rooms & corridors",
      "Smart Ambient Lighting with Dimmer Controls",
      "10 Years Material & Hardware Warranty"
    ],
    specs: [
      "Boiling Waterproof calibrated plywood + anti-bacterial liners",
      "Blum / Grass European fittings with Lifetime Warranty",
      "Seamless PU polish & anti-scratch acrylic finishes",
      "360° VR Walkthrough & weekly photo reports"
    ]
  },
  {
    id: "luxury",
    name: "Luxury Package",
    price: "₹10 Lakh",
    subtitle: "Architectural luxury, smart home automation & imported finishes",
    idealFor: "Villas, Penthouses & High-End Custom Bungalows",
    timeline: "60 – 75 Days Turnkey Handover",
    highlights: [
      "Complete Turnkey Architecture & Interior Execution",
      "Imported German/Italian fittings with motorized cabinets",
      "Home Automation (Smart App Lighting, Curtains & Climate)",
      "Walk-in Closet Suites with Sensor-lit Tinted Glass",
      "Full Home Soft Furnishing (Curtains, Rugs, Wallpaper & Art)",
      "Dedicated Senior Interior Architect & Daily Supervision",
      "Deep Clean & Move-in Champagne Welcome Handover",
      "Lifetime Structural Guarantee & Annual Maintenance"
    ],
    specs: [
      "Natural Wood Veneers, PU Matte Finish & Quartz/Onyx inlays",
      "Top-tier Blum Aventos lift systems & smart sensor lighting",
      "Zero formaldehyde eco-certified boards",
      "Full Turnkey Project Management & Post-Handover Concierge"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "The Earth & Olive Penthouse",
    category: "Turnkey",
    location: "Boring Road, Patna",
    area: "2,850 sq.ft",
    duration: "45 Days",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "A serene 4BHK penthouse designed with warm earth tones, fluted oak louvers, and expansive glass openings overlooking the Patna city skyline.",
    highlights: ["Concealed acoustic sliding doors", "Custom curved boucle sectional", "Custom bar counter with brass brass accents", "Bespoke Japandi dining table"]
  },
  {
    id: "project-2",
    title: "Minimalist Sage Modular Kitchen",
    category: "Modular Kitchen",
    location: "Bailey Road, Patna",
    area: "320 sq.ft",
    duration: "18 Days",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Designed for a doctor couple who love weekend cooking. Features sage green anti-fingerprint acrylic cabinets with Calacatta quartz countertops.",
    highlights: ["Blum servo-drive motorized lift-ups", "Built-in microwave & oven tower", "Concealed heavy-duty exhaust routing", "Under-cabinet continuous warm LED profiles"]
  },
  {
    id: "project-3",
    title: "The Monolith Modern Living",
    category: "Living Room",
    location: "Patliputra Colony, Patna",
    area: "540 sq.ft",
    duration: "22 Days",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "A statement living room featuring charcoal fluted panels, backlit floating media console, and floor-to-ceiling sheer linen drapery.",
    highlights: ["Custom charcoal acoustic paneling", "Floating Italian marble media slab", "Recessed magnetic trimless spotlights", "Custom-crafted 8-seater dining console"]
  },
  {
    id: "project-4",
    title: "Serenity Master Sanctuary",
    category: "Bedroom",
    location: "Kankarbagh, Patna",
    area: "380 sq.ft",
    duration: "20 Days",
    year: "2024",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "A warm neutral retreat prioritizing restorative sleep. Includes a walk-in wardrobe with bronze tinted glass and velvet-upholstered headboard.",
    highlights: ["Fluted walnut headboard with warm reading spotlights", "Walk-in wardrobe with automatic sensor lighting", "Hidden dressing mirror storage", "Zero-creak engineered bed frame"]
  },
  {
    id: "project-5",
    title: "Fintech Corporate Studio",
    category: "Commercial",
    location: "Fraser Road / Exhibition Rd, Patna",
    area: "1,900 sq.ft",
    duration: "35 Days",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "A collaborative 25-seat modern office with private partner cabins, phone booths, and biophilic indoor greenery installations.",
    highlights: ["Black matte glazed partitions", "Acoustic ceiling baffles in brand forest green", "Cable-managed birch plywood workbenches", "Executive conference room with smart AV"]
  },
  {
    id: "project-6",
    title: "Warm Minimal Duplex",
    category: "Turnkey",
    location: "Danapur, Patna",
    area: "3,200 sq.ft",
    duration: "50 Days",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A full turnkey residential project featuring double-height ceiling lighting, floating cantilevered wooden staircase, and 3 bedroom suites.",
    highlights: ["Double-height architectural chandelier", "Custom puja room with onyx backlighting", "Modular kitchen with breakfast bar", "Integrated smart touch-panel controls"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Alok Verma & Dr. Ritu Verma",
    locality: "Boring Road, Patna",
    projectType: "Complete 3BHK Turnkey Interior",
    rating: 5,
    comment: "Finding a design studio in Patna that delivers true modern minimalism without compromises was tough until we visited EarthNest on Boring Road. They respected our busy hospital schedules, provided photorealistic 3D views, and finished right on time in 45 days!",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-2",
    name: "Anand & Shweta Keshri",
    locality: "Patliputra Colony, Patna",
    projectType: "Modern Home Package (2.5 BHK)",
    rating: 5,
    comment: "The kitchen design is simply phenomenal! The soft-close drawers, spice pullouts, and lighting transformed the way my mother and wife cook every day. Transparent pricing from day one with no surprise hidden bills.",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-3",
    name: "Siddharth Sinha",
    locality: "Bailey Road, Patna",
    projectType: "Luxury Living Room & Bedroom",
    rating: 5,
    comment: "The team’s eye for earth colors, subtle wood grains, and lighting is unmatched in Bihar. Every guest who visits our flat compliments the TV wall and ceiling detailing. EarthNest truly made our house feel like home.",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Site Consultation",
    subtitle: "At Boring Road Studio or Your Site",
    desc: "We listen to your lifestyle, storage needs, and budget. Our senior designers conduct a laser measurement of your space in Patna."
  },
  {
    step: "02",
    title: "3D Visualization & Mood Board",
    subtitle: "See Before You Build",
    desc: "We present detailed 3D photorealistic walkthroughs, tactile material samples (veneer, laminates, fabrics), and a line-item quotation."
  },
  {
    step: "03",
    title: "Precision Factory Fabrication",
    subtitle: "Clean & Noise-Free Execution",
    desc: "Cabinetry and woodwork are fabricated using high-precision CNC machines, ensuring moisture protection, millimeter accuracy, and clean on-site assembly."
  },
  {
    step: "04",
    title: "Site Handover & 10-Yr Warranty",
    subtitle: "Move Into Your Dream Space",
    desc: "A dedicated quality audit is conducted followed by deep sanitization. We hand over the keys with certified warranties and lifetime design support."
  }
];

export const FAQS = [
  {
    q: "How does the pricing work for interior design projects?",
    a: "We offer transparent, fixed-scope packages starting from ₹1.5 Lakh for essential upgrades up to ₹10 Lakh+ for luxury turnkey estates. Every quotation contains clear brand specifications (e.g., Greenply, CenturyPly, Hettich, Hafele, Asian Paints Royale) with zero surprise markups."
  },
  {
    q: "Do you only take projects in Boring Road or all across Patna and Bihar?",
    a: "Our design studio is centrally located on Boring Road, Patna, but our project teams actively execute homes and offices across Bailey Road, Patliputra, Kankarbagh, Danapur, Rajendra Nagar, as well as nearby cities in Bihar including Muzaffarpur and Gaya."
  },
  {
    q: "How long does an average home interior take from start to finish?",
    a: "Our streamlined modular factory process allows us to complete standard 2BHK/3BHK interiors within 35 to 45 business days once 3D designs are locked, backed by our 45-day on-time delivery commitment."
  },
  {
    q: "Can I customize the packages or choose specific rooms only?",
    a: "Absolutely! While our packages offer great bundled value, you can commission us solely for Modular Kitchen, Living Room TV Lounges, or Bedroom Suites as needed."
  },
  {
    q: "What warranty and after-sales support do you provide?",
    a: "We provide up to a 10-year warranty against manufacturing defects on all marine-grade woodwork and European hardware, plus 1 year of complimentary on-site maintenance."
  }
];
