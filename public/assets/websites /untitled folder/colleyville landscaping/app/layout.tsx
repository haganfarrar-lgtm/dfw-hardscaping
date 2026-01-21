import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { businessInfo, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, generateAggregateRatingSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | Premier Landscaping & Hardscaping in Colleyville, TX`,
    template: `%s | ${businessInfo.name}`
  },
  description: 'Professional landscaping, hardscaping, and outdoor living services in Colleyville, Texas. Expert landscape design, paver installation, irrigation, tree planting, mulch, sod, and more. Serving Colleyville, Southlake, Keller, Grapevine, and surrounding DFW areas. Call (214) 833-6805 for a free estimate!',
  keywords: 'landscaping Colleyville TX, hardscaping, landscape design, paver installation, outdoor living, irrigation, tree planting, mulch installation, sod installation, French drain, outdoor lighting, fencing, pergolas, retaining walls, Southlake landscaping, Keller landscaping, DFW landscaping, landscaping near me, best landscaper Colleyville',
  metadataBase: new URL('https://colleyvillelandscaping.com'),
  alternates: {
    canonical: 'https://colleyvillelandscaping.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colleyvillelandscaping.com',
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Premier Landscaping in Colleyville, TX`,
    description: 'Transform your outdoor space with expert landscaping and hardscaping services. 15+ years experience. 5-star rated. Free estimates. Serving Colleyville and surrounding DFW communities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colleyville Landscaping - Professional Landscaping Services in Colleyville, TX'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | Premier Landscaping in Colleyville, TX`,
    description: 'Transform your outdoor space with expert landscaping and hardscaping services. Free estimates!',
    images: ['/og-image.jpg'],
    creator: '@colleyvillelandscaping'
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
    'geo.placename': 'Colleyville',
    'geo.position': '32.8818;-97.1681',
    'ICBM': '32.8818, -97.1681',
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
        <meta name="theme-color" content="#0c4a6e" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Colleyville, Texas" />
        <meta name="geo.position" content="32.8818;-97.1681" />
        <meta name="ICBM" content="32.8818, -97.1681" />
        
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
