import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { businessInfo, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, generateAggregateRatingSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | Premier Landscaping in University Park, TX`,
    template: `%s | ${businessInfo.name}`
  },
  description: 'Professional landscaping, hardscaping, and estate garden services in University Park, Texas. Expert landscape design, stonework, irrigation, and meticulous maintenance. Serving University Park, Highland Park, and Preston Hollow. Call (214) 919-3308.',
  keywords: 'landscaping University Park TX, hardscaping, landscape design, estate gardens, outdoor living, irrigation, tree planting, lawn maintenance, Highland Park landscaping, Preston Hollow landscaping, Park Cities landscaper, luxury landscaping Dallas',
  metadataBase: new URL('https://universityparklandscaping.com'),
  alternates: {
    canonical: 'https://universityparklandscaping.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://universityparklandscaping.com',
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Premier Landscaping in University Park, TX`,
    description: 'Transform your estate with expert landscaping and hardscaping services. 15+ years experience serving the Park Cities. 5-star rated. Free estimates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'University Park Landscaping - Professional Estate Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | Premier Landscaping in University Park, TX`,
    description: 'Transform your estate with expert landscaping and hardscaping services. Free estimates!',
    images: ['/og-image.jpg'],
    creator: '@universityparklandscaping'
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Landscaping Services',
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'University Park',
    'geo.position': '32.8551;-96.7976',
    'ICBM': '32.8551, -96.7976',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#771d1d" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="University Park, Texas" />
        <meta name="geo.position" content="32.8551;-96.7976" />
        <meta name="ICBM" content="32.8551, -96.7976" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema())
          }}
        />
        
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema())
          }}
        />
        
        {/* Aggregate Rating Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateAggregateRatingSchema())
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
