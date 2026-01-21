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
    slug: 'university-park',
    name: 'University Park',
    county: 'Dallas',
    distance: 0,
    population: '25,000+',
    description: 'Our home base and primary service area. University Park is renowned for its beautiful parks, prestigious SMU campus, and elegant residential estates requiring meticulous care.',
    neighborhoods: ['Volk Estates', 'Windsor Place', 'Snider Plaza', 'Caruth Hills']
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    county: 'Dallas',
    distance: 1,
    population: '9,000+',
    description: 'An exclusive community known for its luxury homes, beautiful creeks, and high standards for landscape architecture.',
    neighborhoods: ['Old Highland Park', 'Armstrong', 'Hackberry Creek', 'Mount Vernon']
  },
  {
    slug: 'preston-hollow',
    name: 'Preston Hollow',
    county: 'Dallas',
    distance: 3,
    population: '15,000+',
    description: 'A prestigious neighborhood featuring sprawling estates and mature trees, perfect for custom landscape designs.',
    neighborhoods: ['Preston Hollow North', 'Estate Area', 'Mayflower Estates', 'Sunnybrook Estates']
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas',
    distance: 5,
    population: '1.3M+',
    description: 'Serving select luxury neighborhoods within Dallas proper, bringing estate-quality landscaping to the city.',
    neighborhoods: ['Bluffview', 'Lakewood', 'M Streets', 'Turtle Creek']
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas/Collin',
    distance: 8,
    population: '120,000+',
    description: 'A vibrant community just north of the Park Cities with diverse residential landscaping needs.',
    neighborhoods: ['Canyon Creek', 'Prairie Creek', 'The Reservation']
  },
  {
    slug: 'addison',
    name: 'Addison',
    county: 'Dallas',
    distance: 10,
    population: '16,000+',
    description: 'A modern urban center where we provide sophisticated landscape solutions for homes and businesses.',
    neighborhoods: ['Vitruvian Park', 'Midway Meadows', 'Les Lacs']
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin',
    distance: 15,
    population: '287,000+',
    description: 'Serving the beautiful neighborhoods of West Plano with high-end landscape installation and care.',
    neighborhoods: ['Willow Bend', 'Kings Ridge', 'Deerfield', 'Lakeside']
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getAllCitySlugs = (): string[] => {
  return cities.map(city => city.slug);
};

export const getNearbyCities = (citySlug: string, limit: number = 4): City[] => {
  const currentCity = getCityBySlug(citySlug);
  if (!currentCity) return cities.slice(0, limit);
  
  return cities
    .filter(city => city.slug !== citySlug)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
};
