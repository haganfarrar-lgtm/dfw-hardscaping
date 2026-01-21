import Link from 'next/link';
import { Phone, Mail, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { businessInfo } from '@/lib/seo';
import { cities } from '@/data/cities';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-forest-800 to-forest-700">
        <div className="container-custom py-12 px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-forest-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your landscaping project. We serve Colleyville and surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary bg-white !text-forest-800 hover:!bg-stone-100">
              Get Your Free Quote
            </Link>
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="btn-outline !border-white !text-white hover:!bg-white hover:!text-forest-800"
            >
              <Phone size={18} className="inline mr-2" />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/logo/colleyville-icon.png"
                alt=""
                className="h-12 w-auto object-contain"
              />
              <span className="font-display font-bold text-2xl text-white">
                Colleyville Landscaping
              </span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Premier landscaping and hardscaping services in Colleyville, Texas and surrounding communities. Quality craftsmanship, attention to detail, and customer satisfaction guaranteed.
            </p>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-stone-400 text-sm ml-2">5.0 Rating</span>
            </div>
            <div className="flex gap-3">
              <a 
                href={businessInfo.social.facebook} 
                className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={businessInfo.social.instagram} 
                className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/cities/colleyville/services/${service.slug}`}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Service Areas</h4>
            <ul className="space-y-3">
              {cities.slice(0, 10).map((city) => (
                <li key={city.slug}>
                  <Link 
                    href={`/cities/${city.slug}`}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {city.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-forest-400" />
                  </div>
                  <span>{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${businessInfo.email}`} 
                  className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-forest-400" />
                  </div>
                  <span className="break-all">{businessInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <div className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-forest-400" />
                </div>
                <div className="text-sm">
                  <p>{businessInfo.hours.weekday}</p>
                  <p>{businessInfo.hours.saturday}</p>
                  <p>{businessInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800">
        <div className="container-custom py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved. | Licensed & Insured
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



