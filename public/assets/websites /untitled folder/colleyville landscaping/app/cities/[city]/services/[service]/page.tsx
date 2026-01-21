import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import ServiceGallery from '@/components/ServiceGallery';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, MapPin, Star, Clock, Shield, Award } from 'lucide-react';
import { cities, getCityBySlug, getNearbyCities, getAllCitySlugs } from '@/data/cities';
import { services, getServiceBySlug, getAllServiceSlugs, getServicesByCategory } from '@/data/services';
import { businessInfo, generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';

interface ServicePageProps {
  params: { city: string; service: string };
}

export async function generateStaticParams() {
  const citySlugs = getAllCitySlugs();
  const serviceSlugs = getAllServiceSlugs();
  
  const params: { city: string; service: string }[] = [];
  
  citySlugs.forEach((city) => {
    serviceSlugs.forEach((service) => {
      params.push({ city, service });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!city || !service) return {};

  return genMeta({
    title: `${service.name} in ${city.name}, TX`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Texas. ${service.shortDescription} Expert installation, quality materials, and satisfaction guaranteed. Free estimates from ${businessInfo.name}.`,
    keywords: [
      `${service.name.toLowerCase()} ${city.name} TX`,
      `${service.name.toLowerCase()} near me`,
      `${city.name} ${service.name.toLowerCase()} services`,
      `professional ${service.name.toLowerCase()}`,
      `${service.name.toLowerCase()} contractor ${city.name}`,
      `best ${service.name.toLowerCase()} ${city.name}`
    ],
    path: `/cities/${city.slug}/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!city || !service) {
    notFound();
  }

  const relatedServices = getServicesByCategory(service.category)
    .filter(s => s.slug !== service.slug)
    .slice(0, 4);
  
  const nearbyCities = getNearbyCities(city.slug, 4);

  const serviceFaqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${service.name} costs in ${city.name} vary based on the scope of your project, materials selected, and property conditions. We provide free, detailed estimates so you know exactly what to expect. Contact us for a personalized quote for your ${city.name} property.`
    },
    {
      question: `How long does ${service.name.toLowerCase()} installation take?`,
      answer: `The timeline for ${service.name.toLowerCase()} depends on project complexity and size. Simple projects may take 1-2 days, while larger installations could require 1-2 weeks. We'll provide a detailed timeline during your free consultation.`
    },
    {
      question: `Do you offer warranties on ${service.name.toLowerCase()}?`,
      answer: `Yes! We stand behind all our work with comprehensive warranties. ${service.name} installations come with our quality guarantee on both materials and workmanship. Specific warranty terms will be detailed in your project proposal.`
    },
    {
      question: `What sets your ${service.name.toLowerCase()} services apart?`,
      answer: `We combine 15+ years of experience with premium materials, expert craftsmanship, and exceptional customer service. Our ${city.name} clients appreciate our attention to detail, transparent communication, and commitment to exceeding expectations.`
    },
    {
      question: `Do you handle the entire ${service.name.toLowerCase()} project?`,
      answer: `Yes, we provide turnkey ${service.name.toLowerCase()} services. From initial design and planning through installation and cleanup, our team handles every aspect of your project. You'll have a dedicated project manager as your single point of contact.`
    },
    {
      question: `Can you combine ${service.name.toLowerCase()} with other services?`,
      answer: `Absolutely! Many ${city.name} homeowners combine ${service.name.toLowerCase()} with complementary services for a complete outdoor transformation. We'll help you create a cohesive plan that maximizes value and aesthetics.`
    }
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service, city.name))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: city.name, url: `/cities/${city.slug}` },
            { name: service.name, url: `/cities/${city.slug}/services/${service.slug}` }
          ]))
        }}
      />

      {/* Hero Section */}
      <Hero
        cityName={city.name}
        serviceName={service.name}
        title={`Professional ${service.name} in ${city.name}, TX`}
        subtitle={`${service.shortDescription} Expert ${service.name.toLowerCase()} services for ${city.name} residential and commercial properties. Free estimates available.`}
        backgroundImage={service.heroImage}
      />

      {/* Featured Photos Section */}
      <section className="py-12 bg-stone-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {service.images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image}
                  alt={`${service.name} example ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)} Service
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
                {service.name} Services in {city.name}
              </h2>
              
              <div className="prose prose-lg max-w-none text-stone-600 mb-8">
                <p>{service.description}</p>
                <p>
                  At {businessInfo.name}, we bring over 15 years of experience to every {service.name.toLowerCase()} project in {city.name}. 
                  Our team understands the unique requirements of {city.county} County properties and delivers results that exceed expectations.
                </p>
                <p>
                  Whether you're looking to enhance your curb appeal, create an outdoor living space, or solve a specific 
                  landscaping challenge, our {service.name.toLowerCase()} services are designed to meet your needs and budget.
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-forest-900 mb-6">
                  Our {service.name} Services Include:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 bg-forest-50 rounded-lg p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-forest-900 mb-6">
                  Benefits of Professional {service.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm"
                    >
                      <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="w-5 h-5 text-forest-700" />
                      </div>
                      <p className="font-medium text-forest-900">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="font-display text-2xl font-bold text-forest-900 mb-6">
                  Our {service.name} Process
                </h3>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Free Consultation', description: `We visit your ${city.name} property to understand your needs, discuss options, and provide a detailed estimate.` },
                    { step: '2', title: 'Custom Design', description: `Our team creates a customized ${service.name.toLowerCase()} plan tailored to your property and preferences.` },
                    { step: '3', title: 'Professional Installation', description: 'Our experienced crew completes your project with quality materials and expert craftsmanship.' },
                    { step: '4', title: 'Final Walkthrough', description: 'We review the completed work with you to ensure your complete satisfaction.' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-forest-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-900 mb-1">{item.title}</h4>
                        <p className="text-stone-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-forest-900 mb-6">
                  Our {service.name} Work
                </h3>
                <ServiceGallery images={service.images} serviceName={service.name} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-forest-950 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Get a Free Quote
                </h3>
                <p className="text-stone-300 text-sm mb-6">
                  Ready to start your {service.name.toLowerCase()} project in {city.name}? Contact us today for a free estimate.
                </p>
                
                <div className="space-y-4 mb-6">
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center gap-3 text-white hover:text-forest-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">{businessInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-stone-300">
                    <MapPin className="w-5 h-5" />
                    <span>{city.name}, TX</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Clock className="w-5 h-5" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>

                <Link 
                  href="#contact"
                  className="btn-primary w-full flex items-center justify-center gap-2 bg-white !text-forest-800 hover:!bg-stone-100"
                >
                  Request Quote
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h4 className="font-display font-semibold text-forest-900 mb-4">Why Choose Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-forest-600" />
                    <span className="text-stone-700 text-sm">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-forest-600" />
                    <span className="text-stone-700 text-sm">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-forest-600" />
                    <span className="text-stone-700 text-sm">5-Star Rated Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-forest-600" />
                    <span className="text-stone-700 text-sm">Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-stone-200">
                  <h4 className="font-display font-semibold text-forest-900 mb-4">Related Services</h4>
                  <div className="space-y-3">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService.slug}
                        href={`/cities/${city.slug}/services/${relatedService.slug}`}
                        className="block p-3 bg-stone-50 rounded-lg hover:bg-forest-50 transition-colors group"
                      >
                        <p className="font-medium text-forest-900 group-hover:text-forest-700 transition-colors">
                          {relatedService.name}
                        </p>
                        <p className="text-sm text-stone-500 line-clamp-1">
                          {relatedService.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Service in Other Cities */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200">
                <h4 className="font-display font-semibold text-forest-900 mb-4">
                  {service.name} in Other Cities
                </h4>
                <div className="space-y-2">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      href={`/cities/${nearbyCity.slug}/services/${service.slug}`}
                      className="flex items-center gap-2 p-2 text-stone-600 hover:text-forest-700 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{service.name} in {nearbyCity.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        cityName={city.name}
        title={`Ready for Professional ${service.name}?`}
        subtitle={`Get a free estimate for ${service.name.toLowerCase()} services at your ${city.name} property. Quality workmanship and satisfaction guaranteed.`}
      />

      {/* FAQ Section */}
      <FAQ cityName={city.name} faqs={serviceFaqs} />

      {/* Contact Form */}
      <ContactForm cityName={city.name} serviceName={service.name} />
    </>
  );
}



