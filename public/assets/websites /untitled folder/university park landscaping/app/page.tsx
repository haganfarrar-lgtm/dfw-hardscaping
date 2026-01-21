import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, Leaf, Hammer, Droplets, Sun, Phone } from 'lucide-react';
import { cities } from '@/data/cities';
import { businessInfo, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Top-Rated Landscaping & Hardscaping in Colleyville, TX | Free Estimates',
  description: 'Premier landscaping services in Colleyville, TX. Expert hardscaping, landscape design, outdoor living, irrigation, and lawn care. Serving Colleyville, Southlake, Keller, Grapevine & DFW. Call (214) 833-6805.',
  keywords: 'landscaping Colleyville TX, hardscaping Colleyville, landscape design, paver patios, outdoor kitchens, irrigation repair, sod installation, retaining walls, Colleyville landscapers, Southlake landscaping, Keller landscaping',
};

const homeFaqs = [
  {
    question: 'What landscaping services do you offer in Colleyville?',
    answer: 'We offer comprehensive landscaping and hardscaping services in Colleyville, including custom landscape design, paver patio installation, retaining walls, outdoor kitchens, pergolas, sod installation, irrigation repair, drainage solutions, and seasonal cleanups.'
  },
  {
    question: 'Do you serve areas outside of Colleyville?',
    answer: 'Yes! While we are based in Colleyville, we proudly serve surrounding communities including Southlake, Keller, Grapevine, Trophy Club, Westlake, Roanoke, Flower Mound, Highland Village, and Coppell.'
  },
  {
    question: 'How much does a landscaping project cost?',
    answer: 'Project costs vary widely based on scope and materials. We provide free, detailed estimates for all projects. Small enhancements may start around $1,000, while complete outdoor living transformations can range from $10,000 to $100,000+.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Colleyville Landscaping is fully licensed and carries comprehensive liability insurance and workers\' compensation coverage to protect you and your property during every project.'
  },
  {
    question: 'Do you offer landscape maintenance?',
    answer: 'Yes, we offer seasonal maintenance services such as leaf cleanups, mulch installation, flower bed maintenance, and pruning to keep your Colleyville property looking its best year-round.'
  },
  {
    question: 'What is your warranty on hardscaping projects?',
    answer: 'We stand behind our craftsmanship. Our hardscaping installations, including patios and retaining walls, come with a 5-year workmanship warranty in addition to manufacturer warranties on materials.'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(homeFaqs))
        }}
      />

      {/* Hero Cover Photo Section */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[80vh]">
          <img
            src="/images/services/hardscaping/bob.jpg"
            alt="Luxury Hardscaping and Landscaping in Colleyville, TX"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className="container-custom">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Top-Rated Landscaping &<br />Hardscaping in Colleyville
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-6 max-w-2xl">
                Creating Beautiful Outdoor Living Spaces in Colleyville & Southlake for Over 15 Years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a href={`tel:${businessInfo.phone}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-900 inline-flex items-center gap-2">
                  <Phone size={18} />
                  {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
                Colleyville's Premier Landscaping Experts
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                We specialize in high-end residential landscaping and hardscaping. From custom stone patios to lush garden designs, our team delivers exceptional quality and service to Colleyville homeowners.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Licensed, insured, and locally owned in Colleyville',
                  'Custom 3D landscape designs available',
                  'Premium stone and plant materials',
                  'Transparent pricing with no hidden fees',
                  'Dedicated project manager for every job',
                  'Satisfaction guaranteed on all work'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="w-7 h-7 text-forest-700" />
                  </div>
                  <h3 className="font-display font-semibold text-forest-900 mb-2">Landscaping</h3>
                  <p className="text-stone-600 text-sm">Expert design, planting, sod installation, and garden makeovers.</p>
                </div>
                <div className="bg-earth-50 rounded-2xl p-6 border border-earth-100">
                  <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-4">
                    <Hammer className="w-7 h-7 text-earth-700" />
                  </div>
                  <h3 className="font-display font-semibold text-earth-900 mb-2">Hardscaping</h3>
                  <p className="text-stone-600 text-sm">Custom patios, walkways, retaining walls, and stonework.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="font-display font-semibold text-blue-900 mb-2">Irrigation</h3>
                  <p className="text-stone-600 text-sm">Sprinkler repair, installation, and drainage solutions.</p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <Sun className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="font-display font-semibold text-amber-900 mb-2">Outdoor Living</h3>
                  <p className="text-stone-600 text-sm">Pergolas, outdoor kitchens, fire pits, and lighting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services limit={4} />

      {/* Projects Section */}
      <Projects />

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Service Areas</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
              Proudly Serving Colleyville & DFW
            </h2>
            <p className="text-lg text-stone-600">
              We are your local landscaping professionals. Check out our service areas below.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group bg-stone-50 hover:bg-forest-50 rounded-xl p-4 border border-stone-100 hover:border-forest-200 transition-all duration-300 flex items-center gap-3"
              >
                <MapPin className="w-5 h-5 text-forest-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-forest-900 group-hover:text-forest-700 transition-colors">
                    {city.name}
                  </p>
                  <p className="text-xs text-stone-500">{city.county} County</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ faqs={homeFaqs} />

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}
