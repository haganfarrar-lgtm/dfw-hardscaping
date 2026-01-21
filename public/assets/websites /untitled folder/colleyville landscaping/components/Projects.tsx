'use client';

import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Modern Patio Design',
    location: 'Southlake, TX',
    category: 'Hardscaping',
    description: 'Custom paver patio with outdoor kitchen and fire pit',
    image: '/images/services/pavers/Unknown.jpeg',
  },
  {
    title: 'Complete Landscape Renovation',
    location: 'Keller, TX',
    category: 'Landscaping',
    description: 'Full property transformation with new plantings and irrigation',
    image: '/images/services/landscape-design/images.jpeg',
  },
  {
    title: 'Outdoor Living Space',
    location: 'Colleyville, TX',
    category: 'Custom Design',
    description: 'Pergola with integrated lighting and stone fireplace',
    image: '/images/services/hardscaping/Unknown.jpeg',
  },
  {
    title: 'Stone Pathway Installation',
    location: 'Westlake, TX',
    category: 'Hardscaping',
    description: 'Natural flagstone pathway with landscape lighting',
    image: '/images/services/flagstone/Unknown.jpeg',
  },
  {
    title: 'Custom Fire Pit Area',
    location: 'Trophy Club, TX',
    category: 'Outdoor Living',
    description: 'Stone fire pit with built-in seating and paver patio',
    image: '/images/services/hardscaping/Unknown-1.jpeg',
  },
  {
    title: 'Front Yard Transformation',
    location: 'Colleyville, TX',
    category: 'Landscaping',
    description: 'Curb appeal upgrade with new beds, sod, and lighting',
    image: '/images/services/sod-installation/Unknown.jpeg',
  },
];

const categories = ['All', 'Landscaping', 'Hardscaping', 'Custom Design', 'Outdoor Living'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding bg-stone-100" id="projects">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-stone-600">
            See how we've transformed outdoor spaces across Southlake and the surrounding DFW communities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-forest-700 text-white shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-forest-50 hover:text-forest-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-forest-300 text-sm font-medium mb-1">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-stone-300 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center gap-1 text-stone-400 text-sm">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
              </div>
              
              {/* Default Content */}
              <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-forest-600 text-sm font-medium">{project.category}</span>
                  <div className="flex items-center gap-1 text-stone-400 text-sm">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}



