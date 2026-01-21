'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Southlake, TX',
    rating: 5,
    text: 'Absolutely transformed our backyard! The team was professional, punctual, and the paver patio they installed exceeded our expectations. Our neighbors can\'t stop complimenting our new outdoor space. Worth every penny!',
    project: 'Paver Patio Installation',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Michael Thompson',
    location: 'Keller, TX',
    rating: 5,
    text: 'We hired them for a complete landscape renovation. From the initial design to the final walkthrough, everything was handled professionally. The results are stunning and our property value has definitely increased.',
    project: 'Complete Landscape Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    name: 'Jennifer Rodriguez',
    location: 'Colleyville, TX',
    rating: 5,
    text: 'Best landscaping company in the area! They installed our irrigation system and it works flawlessly. Great communication throughout the project and fair pricing. Highly recommend to anyone in the DFW area!',
    project: 'Irrigation Installation',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    name: 'David Chen',
    location: 'Trophy Club, TX',
    rating: 5,
    text: 'The outdoor fireplace they built for us is the centerpiece of our backyard. Quality workmanship and attention to detail. We use it year-round and it\'s become our favorite gathering spot for family and friends.',
    project: 'Outdoor Fireplace',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    name: 'Amanda Foster',
    location: 'Colleyville, TX',
    rating: 5,
    text: 'Professional from start to finish. They helped us design a low-maintenance landscape that looks beautiful year-round. The team was respectful of our property and cleaned up thoroughly each day. A+ service!',
    project: 'Landscape Design & Installation',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
  },
  {
    name: 'Robert Williams',
    location: 'Westlake, TX',
    rating: 5,
    text: 'We\'ve used Southlake Landscaping for multiple projects over the years. Consistent quality, reliable service, and they stand behind their work. Wouldn\'t trust anyone else with our property.',
    project: 'Ongoing Maintenance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-forest-950 text-white relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} 
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-400 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-stone-300">
            Don't just take our word for it. Here's what homeowners throughout the DFW area have to say about our landscaping services.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-forest-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-forest-800 relative">
            <Quote className="absolute top-8 left-8 text-forest-700 w-16 h-16 md:w-24 md:h-24 opacity-50" />
            
            <div className="relative">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed italic">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-forest-600"
                />
                <div>
                  <p className="font-semibold text-white text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-forest-400">{testimonials[activeIndex].location}</p>
                  <p className="text-stone-500 text-sm mt-1">{testimonials[activeIndex].project}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-forest-800">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-forest-800 hover:bg-forest-700 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex-1 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-forest-400 w-8' : 'bg-forest-700 hover:bg-forest-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-forest-800 hover:bg-forest-700 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-forest-800">
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-bold text-forest-400">500+</p>
            <p className="text-stone-400 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-bold text-forest-400">15+</p>
            <p className="text-stone-400 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-bold text-forest-400">1000+</p>
            <p className="text-stone-400 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-bold text-forest-400">5.0</p>
            <p className="text-stone-400 mt-2">Star Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}



