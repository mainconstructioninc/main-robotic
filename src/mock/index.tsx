import {
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  LucideIcon,
  Building2,
  Factory,
  Home,
  Heart,
  GraduationCap,
  Hotel,
  Building,
  Server,
  Utensils,
  Square,
  Sun,
  Wind,
  Bath,
  Layers,
  Droplet,
} from "lucide-react";

export interface HeroData {
  tagline: string;
  subtitle: string;
  backgroundImage: string;
}

export interface ServiceBullet {
  name: string;
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  bullet?: ServiceBullet[];
}

export interface ProjectData {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface AboutStat {
  value: string;
  label: string;
  description: string;
}

export interface AboutData {
  mission: string;
  values: AboutValue[];
  teamImage: string;
  certifications: string[];
  stats: AboutStat[];
}

export interface ContactData {
  address: string;
  phone: string;
  email: string;
  hours: string;
  website: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

export interface FeatureData {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// Data

export const heroData: HeroData = {
  tagline: "Building the Future with Robotic Precision",
  subtitle:
    "Leading innovation in construction and infrastructure development through advanced robotics and modern engineering solutions.",
  backgroundImage:
    "https://images.unsplash.com/photo-1572061971745-063e9cc83afc",
};

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Commercial Development",
    description:
      "Transform your commercial vision into reality with our advanced robotic construction solutions.",
    icon: Building2,
    bullet: [
      { name: "Advanced robotic automation" },
      { name: "Quality assurance and testing" },
      { name: "Sustainable construction practices" },
    ],
  },
  {
    id: 2,
    title: "Real Estate Investment Firms",
    description:
      "Strategic development and construction services tailored for real estate portfolios.",
    icon: TrendingUp,
    bullet: [
      { name: "Portfolio-focused construction strategy" },
      { name: "Cost-efficient development planning" },
      { name: "High-value asset optimization" },
    ],
  },
  {
    id: 3,
    title: "Industrial Infrastructure",
    description:
      "Heavy-duty industrial construction with precision robotics and expert engineering.",
    icon: Factory,
    bullet: [
      { name: "Large-scale facility development" },
      { name: "Industrial-grade structural engineering" },
      { name: "Automation integration" },
    ],
  },
  {
    id: 4,
    title: "Luxury Residential",
    description:
      "Bespoke luxury homes built with innovative technology and meticulous craftsmanship.",
    icon: Home,
    bullet: [
      { name: "Premium architectural customization" },
      { name: "Smart home technology integration" },
      { name: "High-end material sourcing" },
    ],
  },
  {
    id: 5,
    title: "Healthcare Facilities",
    description:
      "State-of-the-art medical facilities designed for optimal patient care and efficiency.",
    icon: Heart,
    bullet: [
      { name: "Medical-grade construction standards" },
      { name: "Sterile and safe facility planning" },
      { name: "Patient-centric design" },
    ],
  },
  {
    id: 6,
    title: "Educational Institutions",
    description:
      "Modern learning environments that inspire innovation and academic excellence.",
    icon: GraduationCap,
    bullet: [
      { name: "Campus planning and development" },
      { name: "Learning-conducive space design" },
      { name: "Durable and safe construction materials" },
    ],
  },
  {
    id: 7,
    title: "Hospitality Industry",
    description:
      "Premium hotels and resorts crafted for exceptional guest experiences.",
    icon: Hotel,
    bullet: [
      { name: "Luxury accommodation planning" },
      { name: "Resort and recreational design" },
      { name: "Brand experience-focused interiors" },
    ],
  },
  {
    id: 8,
    title: "Multifamily",
    description:
      "Contemporary multifamily complexes with sustainable and smart living solutions.",
    icon: Building,
    bullet: [
      { name: "Community-oriented residential planning" },
      { name: "Energy-efficient utilities" },
      { name: "Modern living space optimization" },
    ],
  },
  {
    id: 9,
    title: "Technology & Data Centers",
    description:
      "Advanced infrastructure for mission-critical technology operations.",
    icon: Server,
    bullet: [
      { name: "High-security infrastructure" },
      { name: "Cooling and power redundancy systems" },
      { name: "Scalable server room design" },
    ],
  },
  {
    id: 10,
    title: "Restaurant Franchises",
    description:
      "Efficient restaurant construction with rapid deployment and quality assurance.",
    icon: Utensils,
    bullet: [
      { name: "Brand-consistent interior & layout" },
      { name: "Compliance with food facility standards" },
      { name: "Fast-track build deployment" },
    ],
  },
  {
    id: 11,
    title: "Plumbing",
    description:
      "Expert plumbing systems with robotic precision and sustainable solutions.",
    icon: Droplet,
    bullet: [
      { name: "Residential & commercial plumbing" },
      { name: "Leak detection & repairs" },
      { name: "Eco-friendly water systems" },
    ],
  },
  {
    id: 12,
    title: "Flooring",
    description:
      "Premium flooring installations with advanced materials and techniques.",
    icon: Square,
    bullet: [
      { name: "Tile, hardwood, laminate & vinyl" },
      { name: "Precision leveling & finish" },
      { name: "Durable material sourcing" },
    ],
  },
  {
    id: 13,
    title: "Solar Roofing",
    description:
      "Sustainable energy solutions integrated with cutting-edge roofing technology.",
    icon: Sun,
    bullet: [
      { name: "Solar panel installation" },
      { name: "Energy efficiency planning" },
      { name: "Long-term sustainability support" },
    ],
  },
  {
    id: 14,
    title: "HVAC",
    description:
      "Smart climate control systems for optimal comfort and energy efficiency.",
    icon: Wind,
    bullet: [
      { name: "Heating and cooling system installation" },
      { name: "Smart thermostat integration" },
      { name: "Energy-efficient airflow design" },
    ],
  },
  {
    id: 15,
    title: "Kitchen & Bath",
    description:
      "Luxury kitchen and bathroom installations with modern design excellence.",
    icon: Bath,
    bullet: [
      { name: "Custom cabinetry and countertops" },
      { name: "Premium fixtures & fittings" },
      { name: "Luxury interior aesthetic design" },
    ],
  },
  {
    id: 16,
    title: "Foundations",
    description:
      "Robust foundation systems engineered with precision robotics and expertise.",
    icon: Layers,
    bullet: [
      { name: "Site preparation and excavation" },
      { name: "Structural reinforcement engineering" },
      { name: "Long-term durability assurance" },
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Metropolitan Tower",
    location: "New York, NY",
    description:
      "42-story luxury residential tower featuring state-of-the-art amenities and sustainable design.",
    image: "https://images.unsplash.com/photo-1519662978799-2f05096d3636",
    category: "Residential",
  },
  {
    id: 2,
    title: "Tech Hub Campus",
    location: "San Francisco, CA",
    description:
      "Modern corporate campus with innovative workspace design and advanced infrastructure.",
    image: "https://images.unsplash.com/photo-1574848296471-28f79a036f79",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Riverside Bridge",
    location: "Portland, OR",
    description:
      "Architectural landmark bridge spanning 2,400 feet with pedestrian and vehicle access.",
    image: "https://images.unsplash.com/photo-1691149210746-c6bbb40f4bf6",
    category: "Infrastructure",
  },
  {
    id: 4,
    title: "Grand Hotel Plaza",
    location: "Miami, FL",
    description:
      "Luxury hotel featuring 300 rooms, conference facilities, and premium dining experiences.",
    image: "https://images.unsplash.com/photo-1758448511533-e1502259fff6",
    category: "Hospitality",
  },
  {
    id: 5,
    title: "Skyline Residences",
    location: "Chicago, IL",
    description:
      "35-story mixed-use development combining residential units with retail spaces.",
    image: "https://images.unsplash.com/photo-1565363887715-8884629e09ee",
    category: "Residential",
  },
  {
    id: 6,
    title: "Innovation Center",
    location: "Austin, TX",
    description:
      "Research and development facility with cutting-edge laboratory and office spaces.",
    image: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30",
    category: "Commercial",
  },
  {
    id: 7,
    title: "Waterfront Towers",
    location: "Seattle, WA",
    description:
      "Twin luxury towers offering panoramic water views and premium finishes throughout.",
    image: "https://images.unsplash.com/photo-1610526662524-bd113e746fdb",
    category: "Residential",
  },
  {
    id: 8,
    title: "Modern Art Museum",
    location: "Los Angeles, CA",
    description:
      "Contemporary museum space with innovative architecture and sustainable building practices.",
    image: "https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg",
    category: "Cultural",
  },
  {
    id: 9,
    title: "Business District Hub",
    location: "Boston, MA",
    description:
      "Class-A office building in prime downtown location with LEED Gold certification.",
    image: "https://images.unsplash.com/photo-1597047084993-bf337e09ede0",
    category: "Commercial",
  },
  {
    id: 10,
    title: "Healthcare Complex",
    location: "Denver, CO",
    description:
      "State-of-the-art medical facility with advanced equipment and patient-centered design.",
    image: "https://images.unsplash.com/photo-1672508013582-035e75fb76ec",
    category: "Healthcare",
  },
  {
    id: 11,
    title: "University Science Building",
    location: "Philadelphia, PA",
    description:
      "Modern academic facility with laboratories, classrooms, and collaborative learning spaces.",
    image: "https://images.unsplash.com/photo-1758800601404-79c97c91a7cc",
    category: "Education",
  },
  {
    id: 12,
    title: "Industrial Park Development",
    location: "Houston, TX",
    description:
      "Large-scale industrial complex with warehousing and manufacturing facilities.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    category: "Industrial",
  },
];

export const aboutData: AboutData = {
  mission:
    "To revolutionize the construction industry through robotic precision, innovative engineering, and unwavering commitment to quality. We build infrastructure that shapes communities and stands the test of time.",
  values: [
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technology and robotics to deliver superior construction solutions.",
    },
    {
      title: "Quality",
      description:
        "Uncompromising standards in every project, from foundation to finishing touches.",
    },
    {
      title: "Sustainability",
      description:
        "Building responsibly with environmental stewardship and long-term impact in mind.",
    },
    {
      title: "Safety",
      description:
        "Prioritizing the wellbeing of our team and communities in every decision we make.",
    },
  ],
  teamImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
  certifications: [
    "ISO 9001:2015 Certified",
    "LEED Accredited Professional",
    "OSHA Safety Excellence Award",
    "National Construction Excellence Award 2023",
    "Green Building Certification",
  ],

  stats: [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Across commercial, industrial, and healthcare programs",
    },
    {
      value: "25+",
      label: "Leadership Tenure",
      description: "Combined years guiding preconstruction through handover",
    },
    {
      value: "98%",
      label: "Client Confidence",
      description: "Reinforced by repeat engagements and documented closeouts",
    },
    {
      value: "Core Network",
      label: "Leadership & Delivery Network",
      description:
        "Directors supported by a vetted partner network—prequalified trades, commissioning specialists, and QA advisors aligned to our delivery playbook",
    },
  ],
  // stats: [
  //   { value: "500+", label: "Projects Delivered" },
  //   { value: "25", label: "Leadership Tenure" },
  //   { value: "98%", label: "Client Confidence" },
  //   { value: "1000+", label: "Leadership & Delivery Network" },
  // ],
};

export const contactData: ContactData = {
  address: "The Summit, 2150 S Central Expy STE 200, McKinney, TX 75070, United States",
  phone: "+1 (555) 123-4567",
  email: "support@mainco.io",
  hours: "Typical Response Time: 3–5 business days",
  website: "MainCo.io",
  mapCoordinates: { lat: 33.18263025597258, lng: -96.64178004624722 },
};

export const features: FeatureData[] = [
  {
    icon: Zap,
    title: "Advanced Robotics",
    desc: "Cutting-edge robotic technology ensuring precision and efficiency in every project.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "ISO certified processes and rigorous quality control at every construction phase.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "Backed by 500+ completions and 98% client satisfaction, we deliver with robotic layout, strict change control, and proactive coordination to meet milestones and pass third-party inspections.",
  },
  {
    icon: CheckCircle,
    title: "Sustainable Solutions",
    desc: "Environmentally conscious construction with LEED accreditation and green technologies.",
  },
];
