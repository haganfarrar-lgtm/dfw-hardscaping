import Link from 'next/link';
import { Phone, ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import { businessInfo } from '@/lib/seo';

interface HeroProps {
  title?: string;
  subtitle?: string;
  cityName?: string;
  serviceName?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  cityName = 'Southlake',
  serviceName,
  backgroundImage
}: HeroProps) {
  const defaultTitle = serviceName 
    ? `Professional ${serviceName} in ${cityName}, TX`
    : `Premier Landscaping & Hardscaping in ${cityName}, Texas`;
  
  const defaultSubtitle = serviceName
    ? `Expert ${serviceName.toLowerCase()} services tailored for ${cityName} properties. Quality craftsmanship, attention to detail, and lasting results guaranteed.`
    : `Transform your outdoor space with expert landscaping design, installation, and maintenance. Serving ${cityName} and surrounding communities with over 15 years of excellence.`;

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-forest-950/80" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700" />
      )}

      {/* Content */}
      <div className="container-custom relative z-10 px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-5 border border-white/20">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>Trusted by 500+ {cityName} Homeowners</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {title || defaultTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-stone-200 mb-6 leading-relaxed max-w-xl">
            {subtitle || defaultSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link 
              href="#contact" 
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Get Your Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone size={18} />
              {businessInfo.phone}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 text-stone-200 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="text-forest-300" size={16} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-forest-300" size={16} />
              <span>15+ Years</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-forest-300" size={16} />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}



