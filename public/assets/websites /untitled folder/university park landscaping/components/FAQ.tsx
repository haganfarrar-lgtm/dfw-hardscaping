'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  cityName?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Colleyville, Texas and surrounding communities including Southlake, Keller, Grapevine, Trophy Club, Westlake, Roanoke, Flower Mound, Highland Village, Coppell, and other cities within 50 miles of Colleyville. Contact us to confirm service in your area.'
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all landscaping and hardscaping projects. Our team will visit your property, discuss your vision, and provide a detailed quote. We believe in transparent pricing with no hidden fees.'
  },
  {
    question: 'How long does a typical landscaping project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple mulch and plant installation might take 1-2 days, while a complete landscape renovation could take 2-4 weeks. During your consultation, we\'ll provide a detailed timeline for your specific project.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive liability insurance and workers\' compensation coverage. This protects both our team and your property throughout every project.'
  },
  {
    question: 'What types of payment do you accept?',
    answer: 'We accept all major credit cards, checks, and cash. For larger projects, we offer flexible payment plans with a deposit to begin work and remaining balance upon completion. Financing options are also available for qualifying projects.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we stand behind our work. We offer warranties on both materials and labor. Plant installations come with a 1-year replacement guarantee when maintained according to our care instructions. Hardscape installations carry a 5-year warranty on workmanship.'
  },
  {
    question: 'What is the best time of year for landscaping in Texas?',
    answer: 'In North Texas, spring (March-May) and fall (September-November) are ideal for planting. Hardscaping can be done year-round. We recommend scheduling projects early in these seasons as our calendar fills quickly.'
  },
  {
    question: 'Do you provide maintenance services after installation?',
    answer: 'Yes, we offer ongoing maintenance programs to keep your landscape looking its best. Services include seasonal cleanups, mulch refresh, pruning, irrigation adjustments, and more. Ask about our maintenance packages.'
  }
];

export default function FAQ({ cityName = 'Southlake', faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-stone-50" id="faq">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-forest-600 font-semibold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-950 mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Have questions about our landscaping services in {cityName}? Find answers to common questions below, or contact us directly for personalized assistance.
            </p>
            
            <div className="bg-forest-50 rounded-xl p-6 border border-forest-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-900 mb-2">Still have questions?</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Can't find the answer you're looking for? Our team is here to help.
                  </p>
                  <Link 
                    href="#contact"
                    className="text-forest-700 font-medium hover:text-forest-600 transition-colors"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-forest-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-forest-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



