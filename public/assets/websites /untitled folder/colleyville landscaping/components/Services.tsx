import Link from 'next/link';
import { ArrowRight, Palette, Flower2, TreeDeciduous, Sprout, Layers, Circle, Leaf, Maximize, LayoutGrid, Grid3x3, Square, Pentagon, RectangleHorizontal, Grid2x2, Building, Flame, Home, PanelTop, Droplets, ArrowDownToLine, TrendingDown, Lightbulb, ShieldCheck, CloudRain, Ruler, Wind, Sparkles } from 'lucide-react';
import { services, Service, getServicesByCategory } from '@/data/services';

interface ServicesProps {
  citySlug?: string;
  showAll?: boolean;
  limit?: number;
}

const iconMap: { [key: string]: React.ElementType } = {
  Palette, Flower2, TreeDeciduous, Sprout, Layers, Circle, Leaf, Maximize,
  LayoutGrid, Grid3x3, Square, Pentagon, RectangleHorizontal, Grid2x2,
  Building, Flame, Home, Fence: PanelTop, Droplets, ArrowDownToLine, TrendingDown,
  Lightbulb, ShieldCheck, CloudRain, Ruler, Wind, Sparkles
};

export default function Services({ citySlug = 'southlake', showAll = false, limit }: ServicesProps) {
  const categories = [
    { id: 'landscaping', name: 'Landscaping Services', description: 'Living elements that bring beauty and life to your property', color: 'forest' },
    { id: 'hardscaping', name: 'Hardscaping Services', description: 'Durable structures for outdoor living and entertainment', color: 'earth' },
    { id: 'specialty', name: 'Specialty Services', description: 'Specialized solutions for unique property needs', color: 'stone' },
    { id: 'maintenance', name: 'Maintenance Services', description: 'Keep your landscape looking its best year-round', color: 'forest' },
  ];

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
            Complete Landscaping & Outdoor Living Solutions
          </h2>
          <p className="text-lg text-stone-600">
            From landscape design to hardscape installation, we provide comprehensive outdoor services for residential and commercial properties throughout Southlake and the DFW metroplex.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {categories.map((category) => {
            const categoryServices = getServicesByCategory(category.id as Service['category']);
            const displayServices = limit 
              ? categoryServices.slice(0, limit) 
              : (showAll ? categoryServices : categoryServices.slice(0, 4));
            
            if (displayServices.length === 0) return null;
            
            return (
              <div key={category.id}>
                <div className="mb-8 text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-forest-900">{category.name}</h3>
                  <p className="text-stone-600 mt-2">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {displayServices.map((service, index) => {
                    const IconComponent = iconMap[service.icon] || Leaf;
                    
                    return (
                      <Link 
                        key={service.slug}
                        href={`/cities/${citySlug}/services/${service.slug}`}
                        className="group bg-stone-50 rounded-xl p-6 hover:bg-forest-50 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-forest-200 relative overflow-hidden"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Hover Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-forest-500/5 to-forest-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        
                        <div className="relative">
                          <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-200 group-hover:scale-110 transition-all duration-300">
                            <IconComponent className="w-7 h-7 text-forest-700" />
                          </div>
                          
                          <h4 className="font-display text-lg font-semibold text-forest-900 mb-2 group-hover:text-forest-700 transition-colors">
                            {service.name}
                          </h4>
                          
                          <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                            {service.shortDescription}
                          </p>
                          
                          <span className="text-forest-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More 
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        {!showAll && (
          <div className="text-center mt-16">
            <Link 
              href={`/cities/${citySlug}`}
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

