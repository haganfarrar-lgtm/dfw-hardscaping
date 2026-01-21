import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, Phone } from 'lucide-react';
import { cities, getCityBySlug, getNearbyCities, getAllCitySlugs } from '@/data/cities';
import { services } from '@/data/services';
import { businessInfo, generateMetadata as genMeta, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface CityPageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return genMeta({
    title: `Landscaping & Hardscaping Services in ${city.name}, TX`,
    description: `Professional landscaping, hardscaping, and outdoor living services in ${city.name}, Texas. Expert landscape design, paver installation, irrigation, tree planting, and more. Free estimates from ${businessInfo.name}.`,
    keywords: [
      `landscaping ${city.name} TX`,
      `hardscaping ${city.name}`,
      `landscape design ${city.name}`,
      `paver installation ${city.name}`,
      `irrigation ${city.name}`,
      `lawn care ${city.name}`,
      `${city.name} landscaper`,
      `outdoor living ${city.name}`
    ],
    path: `/cities/${city.slug}`,
  });
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    notFound();
  }

  const nearbyCities = getNearbyCities(city.slug, 6);

  const cityFaqs = [
    {
      question: `What landscaping services do you offer in ${city.name}?`,
      answer: `We offer comprehensive landscaping services in ${city.name} including landscape design, planting, sod installation, mulch, river rock, irrigation systems, hardscaping (pavers, concrete, flagstone), outdoor lighting, fencing, drainage solutions, French drains, pergolas, outdoor fireplaces, and ongoing maintenance. We serve all neighborhoods in ${city.name} and surrounding areas.`
    },
    {
      question: `How much does landscaping cost in ${city.name}, TX?`,
      answer: `Landscaping costs in ${city.name} vary based on the scope of work. A basic mulch and plant installation might start around $500-$1,500, while comprehensive landscape renovations can range from $5,000-$25,000+. Hardscape projects like patios typically range from $3,000-$15,000+. We provide free, detailed estimates for ${city.name} properties.`
    },
    {
      question: `Are you licensed to work in ${city.name}?`,
      answer: `Yes, ${businessInfo.name} is fully licensed and insured to perform landscaping and hardscaping work in ${city.name}, ${city.county} County, and throughout the DFW metroplex. We carry comprehensive liability insurance and workers' compensation coverage.`
    },
    {
      question: `How long have you been serving ${city.name}?`,
      answer: `We've been proudly serving ${city.name} and the surrounding DFW area for over 15 years. Many of our team members are local residents who understand the unique landscaping challenges and opportunities in ${city.county} County.`
    },
    {
      question: `Do you offer free estimates in ${city.name}?`,
      answer: `Absolutely! We provide free, no-obligation estimates for all ${city.name} residents. Our team will visit your property, discuss your vision, and provide a detailed quote with transparent pricing. Contact us to schedule your consultation.`
    },
    {
      question: `What areas near ${city.name} do you also serve?`,
      answer: `In addition to ${city.name}, we serve ${nearbyCities.map(c => c.name).join(', ')}, and other communities within 50 miles of Colleyville. Our central location allows us to efficiently serve the entire DFW metroplex.`
    }
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(city.name))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/cities/colleyville' },
            { name: city.name, url: `/cities/${city.slug}` }
          ]))
        }}
      />

      {/* Hero Section */}
      <Hero 
        cityName={city.name}
        title={`Professional Landscaping & Hardscaping in ${city.name}, TX`}
        subtitle={`Transform your ${city.name} property with expert landscaping services. From custom design to professional installation, we bring your outdoor vision to life. Serving ${city.name} and ${city.county} County.`}
      />

      {/* City Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">
                {city.name} Landscaping
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
                Expert Landscaping Services for {city.name} Properties
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                {city.description}
              </p>
              <p className="text-stone-600 mb-8">
                Whether you need a complete landscape renovation, new patio installation, irrigation system, or ongoing maintenance, our experienced team delivers exceptional results for {city.name} homeowners. We understand the local climate, soil conditions, and HOA requirements to ensure your project succeeds.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Custom landscape design',
                  'Paver patios & walkways',
                  'Irrigation installation',
                  'Outdoor lighting',
                  'Tree & shrub planting',
                  'Drainage solutions'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Free Estimate
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="font-display text-xl font-semibold text-forest-900 mb-6">
                {city.name} Service Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Service Area</span>
                  <span className="font-medium text-forest-900">{city.name}, TX</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">County</span>
                  <span className="font-medium text-forest-900">{city.county} County</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Population</span>
                  <span className="font-medium text-forest-900">{city.population}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Distance from Colleyville</span>
                  <span className="font-medium text-forest-900">{city.distance} miles</span>
                </div>
                <div className="flex justify-between py-3 border-b border-stone-200">
                  <span className="text-stone-600">Response Time</span>
                  <span className="font-medium text-forest-900">Within 24 hours</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-stone-600">Free Estimates</span>
                  <span className="font-medium text-forest-600">Yes ✓</span>
                </div>
              </div>

              {city.neighborhoods && city.neighborhoods.length > 0 && (
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <h4 className="font-medium text-forest-900 mb-3">{city.name} Neighborhoods We Serve:</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.map((neighborhood) => (
                      <span 
                        key={neighborhood}
                        className="bg-forest-50 text-forest-700 px-3 py-1 rounded-full text-sm"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services citySlug={city.slug} showAll={true} />

      {/* Nearby Cities Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Nearby Service Areas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-950 mt-3 mb-6">
              Also Serving Communities Near {city.name}
            </h2>
            <p className="text-lg text-stone-600">
              We provide landscaping services throughout the DFW metroplex. Select a city below to learn more about our services in your area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/cities/${nearbyCity.slug}`}
                className="group bg-white hover:bg-forest-50 rounded-xl p-5 border border-stone-200 hover:border-forest-200 transition-all duration-300 text-center"
              >
                <MapPin className="w-6 h-6 text-forest-600 mx-auto mb-2" />
                <p className="font-medium text-forest-900 group-hover:text-forest-700 transition-colors">
                  {nearbyCity.name}
                </p>
                <p className="text-xs text-stone-500 mt-1">{nearbyCity.distance} mi away</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection 
        cityName={city.name}
        title={`Ready to Transform Your ${city.name} Property?`}
        subtitle={`Get a free consultation and estimate for your ${city.name} landscaping project. Our team is ready to bring your outdoor vision to life.`}
      />

      {/* FAQ */}
      <FAQ cityName={city.name} faqs={cityFaqs} />

      {/* Contact Form */}
      <ContactForm cityName={city.name} />
    </>
  );
}



