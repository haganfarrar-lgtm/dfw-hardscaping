import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { businessInfo, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, generateAggregateRatingSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | Premier Landscaping & Hardscaping in Grapevine, TX`,
    template: `%s | ${businessInfo.name}`
  },
  description: 'Professional landscaping, hardscaping, and outdoor living services in Grapevine, Texas. Expert landscape design, paver installation, irrigation, tree planting, mulch, sod, and more. Serving Grapevine, Southlake, Keller, Colleyville, and surrounding DFW areas. Call (682) 397-8603 for a free estimate!',
  keywords: 'landscaping Grapevine TX, hardscaping, landscape design, paver installation, outdoor living, irrigation, tree planting, mulch installation, sod installation, French drain, outdoor lighting, fencing, pergolas, retaining walls, Southlake landscaping, Keller landscaping, DFW landscaping, landscaping near me, best landscaper Grapevine',
  metadataBase: new URL('https://grapevinelandscapingpros.com'),
  alternates: {
    canonical: 'https://grapevinelandscapingpros.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grapevinelandscapingpros.com',
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Premier Landscaping in Grapevine, TX`,
    description: 'Transform your outdoor space with expert landscaping and hardscaping services. 15+ years experience. 5-star rated. Free estimates. Serving Grapevine and surrounding DFW communities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grapevine Landscaping - Professional Landscaping Services in Grapevine, TX'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | Premier Landscaping in Grapevine, TX`,
    description: 'Transform your outdoor space with expert landscaping and hardscaping services. Free estimates!',
    images: ['/og-image.jpg'],
    creator: '@grapevinelandscaping'
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
    'geo.placename': 'Grapevine',
    'geo.position': '32.9342;-97.0781',
    'ICBM': '32.9342, -97.0781',
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
        <meta name="theme-color" content="#15803d" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Grapevine, Texas" />
        <meta name="geo.position" content="32.9342;-97.0781" />
        <meta name="ICBM" content="32.9342, -97.0781" />
        
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



