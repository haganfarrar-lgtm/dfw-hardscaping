export interface City {
  slug: string;
  name: string;
  county: string;
  distance: number;
  population: string;
  description: string;
  neighborhoods?: string[];
}

export const cities: City[] = [
  {
    slug: 'colleyville',
    name: 'Colleyville',
    county: 'Tarrant',
    distance: 0,
    population: '27,000+',
    description: 'Our home base and primary service area. Colleyville is known for its beautiful estates, large lots, and homeowners who take pride in their pristine outdoor living spaces.',
    neighborhoods: ['Montclair Parc', 'Pleasant Run', 'Lakewood Estates', 'Colleyville Heights', 'Leyton Grove', 'Somerset Manor']
  },
  {
    slug: 'grapevine',
    name: 'Grapevine',
    county: 'Tarrant',
    distance: 4,
    population: '54,000+',
    description: 'A historic neighbor to Colleyville with diverse landscaping needs, from charming historic homes to modern developments near the lake.',
    neighborhoods: ['Lakeside', 'Stone Bridge Oaks', 'Grapevine Lake Estates', 'Silver Lake Estates']
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant',
    distance: 5,
    population: '31,000+',
    description: 'A prestigious community neighboring Colleyville. We provide expert landscaping to match the high standards of Southlake estates and HOAs.',
    neighborhoods: ['Timarron', 'Shady Oaks', 'Coventry Manor', 'Estes Park', 'Southlake Town Square', 'Chapel Creek', 'Stratford Park', 'Lakewood Estates', 'Carillon']
  },
  {
    slug: 'keller',
    name: 'Keller',
    county: 'Tarrant',
    distance: 5,
    population: '50,000+',
    description: 'Just west of Colleyville, Keller features beautiful residential properties where we provide top-tier lawn care and landscape design.',
    neighborhoods: ['Hidden Lakes', 'Marshall Ridge', 'Woodland Hills', 'Bourland Oaks', 'The Reserve at Keller']
  },
  {
    slug: 'bedford',
    name: 'Bedford',
    county: 'Tarrant',
    distance: 3,
    population: '49,000+',
    description: 'Located immediately south of Colleyville, Bedford is a key part of our daily service routes for maintenance and installation.',
    neighborhoods: ['Bedford Heights', 'Stonegate', 'Meadowpark', 'Bedford Woods']
  },
  {
    slug: 'north-richland-hills',
    name: 'North Richland Hills',
    county: 'Tarrant',
    distance: 5,
    population: '72,000+',
    description: 'A convenient distance from our Colleyville headquarters, serving established neighborhoods with mature trees.',
    neighborhoods: ['Iron Horse', 'North Park', 'Smithfield', 'Boulevard Oaks']
  },
  {
    slug: 'hurst',
    name: 'Hurst',
    county: 'Tarrant',
    distance: 5,
    population: '39,000+',
    description: 'Part of the HEB area and a frequent destination for our landscaping crews providing quality service.',
    neighborhoods: ['Bellaire', 'Pipeline', 'Northeast Hurst', 'Cannon Park']
  },
  {
    slug: 'euless',
    name: 'Euless',
    county: 'Tarrant',
    distance: 6,
    population: '56,000+',
    description: 'Serving the Euless community with professional landscaping, hardscaping, and irrigation services.',
    neighborhoods: ['Bear Creek', 'Arbor Park', 'Villages of Bear Creek', 'Midway Park']
  },
  {
    slug: 'westlake',
    name: 'Westlake',
    county: 'Tarrant',
    distance: 8,
    population: '1,500+',
    description: 'Serving the exclusive estates of Westlake with premium, high-detail landscape management and design.',
    neighborhoods: ['Vaquero', 'Glenwyck Farms', 'Terra Bella', 'Stagecoach Hills']
  },
  {
    slug: 'trophy-club',
    name: 'Trophy Club',
    county: 'Denton',
    distance: 10,
    population: '13,000+',
    description: 'Just a short drive north, we serve Trophy Club residents who appreciate golf-course quality lawns and landscapes.',
    neighborhoods: ['Trophy Club Country Club', 'The Highlands', 'Trophy Wood', 'The Knolls']
  },
  {
    slug: 'roanoke',
    name: 'Roanoke',
    county: 'Denton',
    distance: 12,
    population: '10,000+',
    description: 'Providing expert landscaping to the "Unique Dining Capital of Texas" and its beautiful residential areas.',
    neighborhoods: ['Oak Street', 'Marshall Creek', 'Oak Pointe']
  },
  {
    slug: 'coppell',
    name: 'Coppell',
    county: 'Dallas',
    distance: 12,
    population: '42,000+',
    description: 'Serving Coppell homeowners with reliable, high-quality landscaping and outdoor living solutions.',
    neighborhoods: ['Riverchase', 'Northlake Woodlands', 'Coppell Greens', 'The Lakes']
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton',
    distance: 14,
    population: '79,000+',
    description: 'Extending our expert services to the beautiful properties of Flower Mound.',
    neighborhoods: ['Bridlewood', 'Tour 18', 'Wellington', 'Lakeside DFW', 'Canyon Falls']
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas',
    distance: 15,
    population: '256,000+',
    description: 'Serving select residential areas in Irving, particularly Las Colinas and Valley Ranch.',
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'Lake Carolyn', 'Hackberry Creek']
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas/Denton',
    distance: 18,
    population: '138,000+',
    description: 'Providing landscaping services to Carrollton residents who value curb appeal and quality work.',
    neighborhoods: ['Castle Hills', 'Indian Creek', 'The Trails', 'Prestonwood']
  },
  {
    slug: 'highland-village',
    name: 'Highland Village',
    county: 'Denton',
    distance: 18,
    population: '16,000+',
    description: 'Serving Highland Village with custom landscape design and installation services.',
    neighborhoods: ['The Shores', 'Highland Meadows', 'Lakewood Village', 'The Orchards']
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant',
    distance: 20,
    population: '935,000+',
    description: 'Serving select neighborhoods in Fort Worth with our premier landscaping services.',
    neighborhoods: ['Westover Hills', 'Rivercrest', 'Tanglewood', 'Mira Vista', 'Montserrat']
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant',
    distance: 20,
    population: '398,000+',
    description: 'Providing professional landscaping to residential clients in Arlington.',
    neighborhoods: ['Interlochen', 'Lake Arlington', 'Viridian', 'Rush Creek']
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin',
    distance: 25,
    population: '220,000+',
    description: 'Serving Frisco with high-end landscape design and outdoor living projects.',
    neighborhoods: ['Starwood', 'Newman Village', 'Richwoods', 'Phillips Creek Ranch', 'The Trails']
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin',
    distance: 28,
    population: '287,000+',
    description: 'Extending our services to Plano for major landscape renovations and installations.',
    neighborhoods: ['Willow Bend', 'Kings Ridge', 'Deerfield', 'Preston Hollow', 'Legacy']
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getAllCitySlugs = (): string[] => {
  return cities.map(city => city.slug);
};

export const getNearbyCities = (citySlug: string, limit: number = 6): City[] => {
  const currentCity = getCityBySlug(citySlug);
  if (!currentCity) return cities.slice(0, limit);
  
  return cities
    .filter(city => city.slug !== citySlug)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
};
