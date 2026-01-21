import { Metadata } from 'next';

export const businessInfo = {
  name: 'University Park Landscaping',
  phone: '(214) 919-3308',
  email: 'info@universityparklandscaping.com',
  address: {
    street: 'Example Street', // Placeholder until provided
    city: 'University Park',
    state: 'TX',
    zip: '75205',
    full: 'University Park, TX 75205'
  },
  hours: {
    weekday: 'Open 7 Days a Week: 7:00 AM - 8:00 PM',
    saturday: '',
    sunday: ''
  },
  social: {
    facebook: 'https://facebook.com/universityparklandscaping',
    instagram: 'https://instagram.com/universityparklandscaping',
    google: 'https://g.page/universityparklandscaping'
  },
  serviceArea: 'University Park, Highland Park, Preston Hollow, Dallas, and surrounding Park Cities communities',
  tagline: 'Elegant Landscaping for University Park Estates',
  description: 'Premier landscaping and hardscaping services in University Park, Texas. Specializing in estate garden design, stonework, and meticulous lawn maintenance for the Park Cities.',
  yearsInBusiness: 15,
  projectsCompleted: 1000,
  foundingYear: 2009,
  rating: {
    value: 5.0,
    count: 142
  }
};

// Organization Schema
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://universityparklandscaping.com/#organization',
  name: businessInfo.name,
  url: 'https://universityparklandscaping.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://universityparklandscaping.com/logo/university-park-logo.png',
    width: 400,
    height: 400
  },
  image: 'https://universityparklandscaping.com/og-image.jpg',
  description: businessInfo.description,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  foundingDate: businessInfo.foundingYear.toString(),
  areaServed: {
    '@type': 'State',
    name: 'Texas',
    containsPlace: [
      { '@type': 'City', name: 'University Park' },
      { '@type': 'City', name: 'Highland Park' },
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Preston Hollow' }
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
  '@id': 'https://universityparklandscaping.com/#website',
  url: 'https://universityparklandscaping.com',
  name: businessInfo.name,
  description: businessInfo.description,
  publisher: {
    '@id': 'https://universityparklandscaping.com/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://universityparklandscaping.com/search?q={search_term_string}'
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
    image: 'https://universityparklandscaping.com/logo/university-park-logo.png'
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
  const url = `https://universityparklandscaping.com${path}`;
  
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
    '@id': 'https://universityparklandscaping.com/#localbusiness',
    name: businessInfo.name,
    image: [
      'https://universityparklandscaping.com/logo/university-park-logo.png',
      'https://universityparklandscaping.com/og-image.jpg'
    ],
    url: 'https://universityparklandscaping.com',
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
      latitude: 32.8551,
      longitude: -96.7976
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
    priceRange: '$$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    currenciesAccepted: 'USD',
    areaServed: [
      { '@type': 'City', name: 'University Park', '@id': 'https://en.wikipedia.org/wiki/University_Park,_Texas' },
      { '@type': 'City', name: 'Highland Park' },
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Preston Hollow' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estate Landscape Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardscaping & Stonework' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden Maintenance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal Color' } }
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
      name: city || 'University Park',
      '@id': `https://en.wikipedia.org/wiki/${city || 'University_Park'},_Texas`
    },
    description: service.description,
    url: `https://universityparklandscaping.com/cities/${city?.toLowerCase().replace(/ /g, '-') || 'university-park'}/services/${service.slug}`
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
      item: `https://universityparklandscaping.com${item.url}`
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
