import { Metadata } from 'next';

export const businessInfo = {
  name: 'Colleyville Landscaping',
  phone: '(214) 833-6805',
  email: 'info@colleyvillelandscaping.com',
  address: {
    street: '123 Main Street',
    city: 'Colleyville',
    state: 'TX',
    zip: '76034',
    full: '123 Main Street, Colleyville, TX 76034'
  },
  hours: {
    weekday: 'Open 7 Days a Week: 7:00 AM - 8:00 PM',
    saturday: '',
    sunday: ''
  },
  social: {
    facebook: 'https://facebook.com/colleyvillelandscaping',
    instagram: 'https://instagram.com/colleyvillelandscaping',
    google: 'https://g.page/colleyvillelandscaping'
  },
  serviceArea: 'Colleyville, Grapevine, Southlake, Keller, Trophy Club, Westlake, and surrounding DFW communities',
  tagline: 'Premier Landscaping & Hardscaping Services in Colleyville, TX',
  description: 'Professional landscaping, hardscaping, and outdoor living services in Colleyville, Texas and surrounding areas. Custom design, installation, and maintenance for residential and commercial properties.',
  yearsInBusiness: 15,
  projectsCompleted: 1000,
  foundingYear: 2009,
  rating: {
    value: 5.0,
    count: 127
  }
};

// Organization Schema
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://colleyvillelandscaping.com/#organization',
  name: businessInfo.name,
  url: 'https://colleyvillelandscaping.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://colleyvillelandscaping.com/logo/colleyville-logo.png',
    width: 400,
    height: 400
  },
  image: 'https://colleyvillelandscaping.com/og-image.jpg',
  description: businessInfo.description,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  foundingDate: businessInfo.foundingYear.toString(),
  areaServed: {
    '@type': 'State',
    name: 'Texas',
    containsPlace: [
      { '@type': 'City', name: 'Colleyville' },
      { '@type': 'City', name: 'Grapevine' },
      { '@type': 'City', name: 'Southlake' },
      { '@type': 'City', name: 'Keller' },
      { '@type': 'City', name: 'Trophy Club' },
      { '@type': 'City', name: 'Westlake' },
      { '@type': 'City', name: 'Roanoke' },
      { '@type': 'City', name: 'Flower Mound' }
    ]
  },
  sameAs: [
    businessInfo.social.facebook,
    businessInfo.social.instagram,
    businessInfo.social.google
  ]
});

// WebSite Schema with Search
export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://colleyvillelandscaping.com/#website',
  url: 'https://colleyvillelandscaping.com',
  name: businessInfo.name,
  description: businessInfo.description,
  publisher: {
    '@id': 'https://colleyvillelandscaping.com/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://colleyvillelandscaping.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  inLanguage: 'en-US'
});

// Aggregate Rating Schema
export const generateAggregateRatingSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    image: 'https://colleyvillelandscaping.com/logo/colleyville-logo.png'
  },
  ratingValue: businessInfo.rating.value.toString(),
  bestRating: '5',
  worstRating: '1',
  ratingCount: businessInfo.rating.count.toString()
});

export const generateMetadata = ({
  title,
  description,
  keywords,
  path = '',
  image = '/og-image.jpg'
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata => {
  const url = `https://colleyvillelandscaping.com${path}`;
  
  return {
    title: `${title} | ${businessInfo.name}`,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: businessInfo.name }],
    openGraph: {
      title: `${title} | ${businessInfo.name}`,
      description,
      url,
      siteName: businessInfo.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${businessInfo.name}`,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};

export const generateLocalBusinessSchema = (city?: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    '@id': 'https://colleyvillelandscaping.com/#localbusiness',
    name: businessInfo.name,
    image: [
      'https://colleyvillelandscaping.com/logo/colleyville-logo.png',
      'https://colleyvillelandscaping.com/og-image.jpg'
    ],
    url: 'https://colleyvillelandscaping.com',
    telephone: businessInfo.phone,
    email: businessInfo.email,
    description: businessInfo.description,
    slogan: businessInfo.tagline,
    foundingDate: businessInfo.foundingYear.toString(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: city || businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.8818,
      longitude: -97.1681
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '20:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessInfo.rating.value.toString(),
      reviewCount: businessInfo.rating.count.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      businessInfo.social.facebook,
      businessInfo.social.instagram,
      businessInfo.social.google
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    currenciesAccepted: 'USD',
    areaServed: [
      { '@type': 'City', name: 'Colleyville', '@id': 'https://en.wikipedia.org/wiki/Colleyville,_Texas' },
      { '@type': 'City', name: 'Grapevine' },
      { '@type': 'City', name: 'Southlake' },
      { '@type': 'City', name: 'Keller' },
      { '@type': 'City', name: 'Trophy Club' },
      { '@type': 'City', name: 'Westlake' },
      { '@type': 'City', name: 'Roanoke' },
      { '@type': 'City', name: 'Flower Mound' },
      { '@type': 'City', name: 'Coppell' },
      { '@type': 'City', name: 'Frisco' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscape Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardscaping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paver Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation Systems' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Planting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sod Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Lighting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'French Drain Installation' } }
      ]
    }
  };
};

export const generateServiceSchema = (service: { name: string; description: string; slug: string }, city?: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LandscapingBusiness',
      name: businessInfo.name,
      telephone: businessInfo.phone
    },
    areaServed: {
      '@type': 'City',
      name: city || 'Colleyville',
      '@id': `https://en.wikipedia.org/wiki/${city || 'Colleyville'},_Texas`
    },
    description: service.description,
    url: `https://colleyvillelandscaping.com/cities/${city?.toLowerCase().replace(/ /g, '-') || 'colleyville'}/services/${service.slug}`
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://colleyvillelandscaping.com${item.url}`
    }))
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};
