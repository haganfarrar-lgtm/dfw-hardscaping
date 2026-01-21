import { Metadata } from 'next';
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
  title: 'Premier Landscaping & Hardscaping Services in Grapevine, TX',
  description: 'Transform your outdoor space with Grapevine Landscaping. Expert landscape design, hardscaping, irrigation, and more. Serving Grapevine, Southlake, Keller, Colleyville & surrounding DFW areas. Free estimates!',
  keywords: 'landscaping Grapevine TX, hardscaping, landscape design, paver installation, outdoor living, irrigation, tree planting, mulch, sod, French drain, outdoor lighting, Southlake landscaping, Keller landscaping',
};

const homeFaqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Grapevine, Texas and surrounding communities including Southlake, Keller, Colleyville, Trophy Club, Westlake, Roanoke, Flower Mound, Highland Village, Coppell, and other cities within 50 miles of Grapevine.'
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all landscaping and hardscaping projects. Our team will visit your property, discuss your vision, and provide a detailed quote with transparent pricing.'
  },
  {
    question: 'How long does a typical landscaping project take?',
    answer: 'Project timelines vary based on scope. A simple installation might take 1-2 days, while a complete landscape renovation could take 2-4 weeks. We provide detailed timelines during your consultation.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive liability insurance and workers\' compensation coverage to protect both our team and your property.'
  },
  {
    question: 'What types of services do you offer?',
    answer: 'We offer comprehensive landscaping services including landscape design, planting, sod installation, mulch, irrigation, hardscaping (pavers, concrete, flagstone), outdoor living spaces, fencing, drainage solutions, and maintenance.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we stand behind our work with warranties on both materials and labor. Plant installations come with a 1-year replacement guarantee, and hardscape installations carry a 5-year workmanship warranty.'
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
            src="/images/services/landscape-design/landscape1.jpg"
            alt="Grapevine Landscaping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className="container-custom">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Professional Landscaping<br />Services in Grapevine
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-6 max-w-2xl">
                15+ Years of Excellence · Trusted by Grapevine Homeowners
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
                Grapevine's Trusted Landscaping Experts
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                With over 15 years of experience serving the DFW metroplex, we've built our reputation on quality craftsmanship, attention to detail, and exceptional customer service. We treat every property as if it were our own.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Licensed, insured, and locally owned',
                  'Custom designs tailored to your property',
                  'Premium materials and expert installation',
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
                Get Started Today
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
                  <p className="text-stone-600 text-sm">Custom designs, planting, sod, mulch, and complete landscape transformations.</p>
                </div>
                <div className="bg-earth-50 rounded-2xl p-6 border border-earth-100">
                  <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-4">
                    <Hammer className="w-7 h-7 text-earth-700" />
                  </div>
                  <h3 className="font-display font-semibold text-earth-900 mb-2">Hardscaping</h3>
                  <p className="text-stone-600 text-sm">Patios, walkways, retaining walls, outdoor kitchens, and fireplaces.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="font-display font-semibold text-blue-900 mb-2">Irrigation</h3>
                  <p className="text-stone-600 text-sm">Smart irrigation systems, repairs, and water-efficient solutions.</p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <Sun className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="font-display font-semibold text-amber-900 mb-2">Outdoor Living</h3>
                  <p className="text-stone-600 text-sm">Pergolas, lighting, fire features, and complete outdoor spaces.</p>
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
              Proudly Serving the DFW Metroplex
            </h2>
            <p className="text-lg text-stone-600">
              Based in Grapevine, we provide professional landscaping services to communities throughout the Dallas-Fort Worth area. Find your city below.
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



