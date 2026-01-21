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
    slug: 'grapevine',
    name: 'Grapevine',
    county: 'Tarrant',
    distance: 0,
    population: '54,000+',
    description: 'Our home base and primary service area. Grapevine is a historic city with charming character and diverse landscaping needs from historic homes to modern developments near Grapevine Lake.',
    neighborhoods: ['Lakeside', 'Stone Bridge Oaks', 'Grapevine Lake Estates', 'Silver Lake Estates']
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant',
    distance: 6,
    population: '31,000+',
    description: 'A prestigious community known for its beautiful homes, manicured lawns, and upscale communities. As local landscaping experts, we understand the unique needs of Southlake properties.',
    neighborhoods: ['Timarron', 'Shady Oaks', 'Coventry Manor', 'Estes Park', 'Southlake Town Square', 'Chapel Creek', 'Stratford Park', 'Lakewood Estates', 'Carillon']
  },
  {
    slug: 'keller',
    name: 'Keller',
    county: 'Tarrant',
    distance: 5,
    population: '50,000+',
    description: 'A thriving community just north of Southlake with beautiful residential properties and a strong demand for professional landscaping services.',
    neighborhoods: ['Hidden Lakes', 'Marshall Ridge', 'Woodland Hills', 'Bourland Oaks', 'The Reserve at Keller']
  },
  {
    slug: 'colleyville',
    name: 'Colleyville',
    county: 'Tarrant',
    distance: 4,
    population: '27,000+',
    description: 'An affluent city known for its large lots, mature trees, and homeowners who take pride in their outdoor spaces.',
    neighborhoods: ['Montclair Parc', 'Pleasant Run', 'Lakewood Estates', 'Colleyville Heights']
  },
  {
    slug: 'trophy-club',
    name: 'Trophy Club',
    county: 'Denton',
    distance: 7,
    population: '13,000+',
    description: 'A master-planned community with golf courses and residents who appreciate quality outdoor living spaces.',
    neighborhoods: ['Trophy Club Country Club', 'The Highlands', 'Trophy Wood', 'The Knolls']
  },
  {
    slug: 'westlake',
    name: 'Westlake',
    county: 'Tarrant',
    distance: 3,
    population: '1,500+',
    description: 'An exclusive community featuring some of the most stunning estates in the DFW metroplex with high-end landscaping requirements.',
    neighborhoods: ['Vaquero', 'Glenwyck Farms', 'Terra Bella', 'Stagecoach Hills']
  },
  {
    slug: 'roanoke',
    name: 'Roanoke',
    county: 'Denton',
    distance: 8,
    population: '10,000+',
    description: 'Known as the "Unique Dining Capital of Texas," Roanoke features beautiful homes requiring expert landscaping care.',
    neighborhoods: ['Oak Street', 'Marshall Creek', 'Oak Pointe']
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton',
    distance: 10,
    population: '79,000+',
    description: 'A family-friendly community with excellent schools and homeowners who invest in curb appeal and outdoor living.',
    neighborhoods: ['Bridlewood', 'Tour 18', 'Wellington', 'Lakeside DFW', 'Canyon Falls']
  },
  {
    slug: 'highland-village',
    name: 'Highland Village',
    county: 'Denton',
    distance: 12,
    population: '16,000+',
    description: 'A picturesque city near Lewisville Lake with a strong community focus on beautiful outdoor spaces.',
    neighborhoods: ['The Shores', 'Highland Meadows', 'Lakewood Village', 'The Orchards']
  },
  {
    slug: 'coppell',
    name: 'Coppell',
    county: 'Dallas',
    distance: 11,
    population: '42,000+',
    description: 'A well-established community with mature landscaping and homeowners who maintain high property standards.',
    neighborhoods: ['Riverchase', 'Northlake Woodlands', 'Coppell Greens', 'The Lakes']
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    county: 'Denton',
    distance: 14,
    population: '111,000+',
    description: 'A growing city with diverse neighborhoods and increasing demand for professional landscaping services.',
    neighborhoods: ['Castle Hills', 'Valley Vista', 'Hebron', 'Lake Vista']
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin',
    distance: 20,
    population: '220,000+',
    description: 'One of the fastest-growing cities in America with new developments seeking quality landscaping installation and design.',
    neighborhoods: ['Starwood', 'Newman Village', 'Richwoods', 'Phillips Creek Ranch', 'The Trails']
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin',
    distance: 22,
    population: '287,000+',
    description: 'A major city with established neighborhoods and a mix of residential and commercial landscaping needs.',
    neighborhoods: ['Willow Bend', 'Kings Ridge', 'Deerfield', 'Preston Hollow', 'Legacy']
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin',
    distance: 30,
    population: '199,000+',
    description: 'Named "Best Place to Live in America," McKinney features historic charm and modern developments.',
    neighborhoods: ['Adriatica', 'Stonebridge Ranch', 'Craig Ranch', 'Trinity Falls', 'Erwin Park']
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant',
    distance: 25,
    population: '935,000+',
    description: 'A major metropolitan area with diverse landscaping needs from urban properties to sprawling estates.',
    neighborhoods: ['Westover Hills', 'Rivercrest', 'Tanglewood', 'Mira Vista', 'Montserrat']
  },
  {
    slug: 'north-richland-hills',
    name: 'North Richland Hills',
    county: 'Tarrant',
    distance: 12,
    population: '72,000+',
    description: 'A well-established community with mature properties and residents who value professional lawn care.',
    neighborhoods: ['Iron Horse', 'North Park', 'Smithfield', 'Boulevard Oaks']
  },
  {
    slug: 'bedford',
    name: 'Bedford',
    county: 'Tarrant',
    distance: 10,
    population: '49,000+',
    description: 'A central Mid-Cities location with established neighborhoods and commercial properties.',
    neighborhoods: ['Bedford Heights', 'Stonegate', 'Meadowpark', 'Bedford Woods']
  },
  {
    slug: 'euless',
    name: 'Euless',
    county: 'Tarrant',
    distance: 11,
    population: '56,000+',
    description: 'A diverse community with a mix of residential and commercial landscaping opportunities.',
    neighborhoods: ['Bear Creek', 'Arbor Park', 'Villages of Bear Creek', 'Midway Park']
  },
  {
    slug: 'hurst',
    name: 'Hurst',
    county: 'Tarrant',
    distance: 12,
    population: '39,000+',
    description: 'Part of the HEB district with established homes and businesses needing quality landscaping.',
    neighborhoods: ['Bellaire', 'Pipeline', 'Northeast Hurst', 'Cannon Park']
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas',
    distance: 15,
    population: '256,000+',
    description: 'A major employment center with diverse residential and commercial landscaping needs.',
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'Lake Carolyn', 'Hackberry Creek']
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas/Denton',
    distance: 16,
    population: '138,000+',
    description: 'A well-established city with diverse landscaping requirements and strong community standards.',
    neighborhoods: ['Castle Hills', 'Indian Creek', 'The Trails', 'Prestonwood']
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin',
    distance: 28,
    population: '105,000+',
    description: 'A growing community with excellent schools and residents who invest in their outdoor spaces.',
    neighborhoods: ['Twin Creeks', 'Stacy Ridge', 'Montgomery Farm', 'The Estates']
  },
  {
    slug: 'denton',
    name: 'Denton',
    county: 'Denton',
    distance: 25,
    population: '148,000+',
    description: 'A vibrant college town with a mix of historic homes and new developments requiring professional landscaping.',
    neighborhoods: ['Robson Ranch', 'Lantana', 'Savannah', 'Rayzor Ranch']
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant',
    distance: 22,
    population: '398,000+',
    description: 'Home to major attractions and diverse residential areas requiring professional landscaping services.',
    neighborhoods: ['Interlochen', 'Lake Arlington', 'Viridian', 'Rush Creek']
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



