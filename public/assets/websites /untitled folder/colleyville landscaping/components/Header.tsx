'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { businessInfo } from '@/lib/seo';
import { getServicesByCategory } from '@/data/services';
import { cities } from '@/data/cities';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);

  const serviceCategories = [
    { name: 'Landscaping', category: 'landscaping' as const },
    { name: 'Hardscaping', category: 'hardscaping' as const },
    { name: 'Specialty', category: 'specialty' as const },
    { name: 'Maintenance', category: 'maintenance' as const },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close dropdowns when clicking outside
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(event.target as Node)) {
        setCitiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setCitiesOpen(false);
    setIsOpen(false);
  };

  return (
    <header className="bg-[#f5f5f5] text-forest-900 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] py-2 px-4 hidden md:block border-b border-stone-200">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-forest-700">
            <span>Serving Colleyville & Surrounding DFW Areas</span>
            <span className="text-forest-300">|</span>
            <span>{businessInfo.hours.weekday}</span>
          </div>
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-2 hover:text-forest-600 transition-colors font-semibold text-forest-800"
          >
            <Phone size={16} className="text-forest-600" />
            {businessInfo.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group gap-3" onClick={closeAllDropdowns}>
            <img
              src="/logo/colleyville-icon.png"
              alt=""
              className="h-16 w-auto object-contain"
            />
            <span className="font-display font-bold text-2xl text-forest-900 group-hover:text-forest-700 transition-colors">
              Colleyville Landscaping
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-forest-800 hover:text-forest-600 transition-colors font-medium" onClick={closeAllDropdowns}>
              Home
            </Link>

            {/* Services Dropdown - Hover Based */}
            <div 
              className="relative" 
              onMouseEnter={() => {
                setServicesOpen(true);
                setCitiesOpen(false);
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-forest-800 flex items-center gap-1 hover:text-forest-600 transition-colors font-medium py-4"
                onClick={(e) => e.preventDefault()}
              >
                Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 z-50">
                  <div className="w-[700px] bg-white text-stone-900 shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-6 border border-stone-100 relative mt-2">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-stone-100"></div>
                    {serviceCategories.map((cat) => (
                      <div key={cat.category}>
                        <h3 className="font-display font-semibold text-forest-800 mb-3 pb-2 border-b border-forest-100">
                          {cat.name}
                        </h3>
                        <ul className="space-y-2">
                          {getServicesByCategory(cat.category).slice(0, 6).map((service) => (
                            <li key={service.slug}>
                              <Link 
                                href={`/cities/colleyville/services/${service.slug}`}
                                className="text-sm text-stone-600 hover:text-forest-600 transition-colors block py-1 hover:pl-1"
                                onClick={closeAllDropdowns}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cities Dropdown - Hover Based */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setCitiesOpen(true);
                setServicesOpen(false);
              }}
              onMouseLeave={() => setCitiesOpen(false)}
            >
              <button
                className="text-forest-800 flex items-center gap-1 hover:text-forest-600 transition-colors font-medium py-4"
                onClick={(e) => e.preventDefault()}
              >
                Service Areas <ChevronDown size={16} className={`transition-transform ${citiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {citiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 z-50">
                  <div className="w-[450px] bg-white text-stone-900 shadow-2xl rounded-xl p-6 border border-stone-100 relative mt-2">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-stone-100"></div>
                    <h3 className="font-display font-semibold text-forest-800 mb-3 pb-2 border-b border-forest-100">
                      Cities We Serve
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {cities.slice(0, 15).map((city) => (
                        <Link 
                          key={city.slug}
                          href={`/cities/${city.slug}`}
                          className="text-sm text-stone-600 hover:text-forest-600 transition-colors py-1"
                          onClick={closeAllDropdowns}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                    <Link 
                      href="/cities/colleyville" 
                      className="block mt-4 pt-4 border-t border-stone-200 text-forest-700 font-medium hover:text-forest-500 text-center"
                      onClick={closeAllDropdowns}
                    >
                      View All Service Areas →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-forest-800 hover:text-forest-600 transition-colors font-medium" onClick={closeAllDropdowns}>
              Blog
            </Link>

            <Link href="/#contact" className="btn-primary" onClick={closeAllDropdowns}>
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="p-2 bg-forest-700 rounded-full text-white"
            >
              <Phone size={20} />
            </a>
            <button
              className="p-2 text-forest-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-stone-200 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-forest-800 hover:text-forest-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div className="py-2">
                <button 
                  className="flex items-center justify-between w-full text-forest-800 font-medium mb-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="pl-4 space-y-4 mt-2 bg-stone-50 p-4 rounded-lg">
                    {serviceCategories.map((cat) => (
                      <div key={cat.category}>
                        <h4 className="font-semibold text-forest-700 text-sm mb-2 uppercase tracking-wider">{cat.name}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {getServicesByCategory(cat.category).slice(0, 4).map((service) => (
                            <Link
                              key={service.slug}
                              href={`/cities/colleyville/services/${service.slug}`}
                              className="text-sm text-stone-600 hover:text-forest-600 block py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Accordion */}
              <div className="py-2">
                <button 
                  className="flex items-center justify-between w-full text-forest-800 font-medium mb-2"
                  onClick={() => setCitiesOpen(!citiesOpen)}
                >
                  Service Areas
                  <ChevronDown size={16} className={`transition-transform ${citiesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {citiesOpen && (
                  <div className="pl-4 mt-2 bg-stone-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      {cities.slice(0, 10).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/cities/${city.slug}`}
                          className="text-sm text-stone-600 hover:text-forest-600 block py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/cities/colleyville"
                      className="block mt-3 pt-3 border-t border-stone-200 text-center text-sm text-forest-700 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Areas
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="text-forest-800 hover:text-forest-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="btn-primary text-center block"
                >
                  Call {businessInfo.phone}
                </a>
                <Link
                  href="/#contact"
                  className="btn-outline text-center block !text-forest-800 !border-forest-800 hover:!bg-forest-800 hover:!text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
