import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { businessInfo, generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Landscaping Blog | Tips, Trends & Inspiration',
  description: 'Expert landscaping tips, design trends, and outdoor living inspiration for North Texas homeowners. Learn from the pros at Southlake Landscaping.',
  keywords: [
    'landscaping tips',
    'landscaping blog',
    'outdoor living ideas',
    'Texas landscaping',
    'lawn care tips',
    'hardscaping ideas',
    'garden design',
    'Southlake landscaping blog'
  ],
  path: '/blog',
});

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-forest-950 text-white py-20">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-forest-400 font-semibold uppercase tracking-wider text-sm">Our Blog</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Landscaping Tips & Inspiration
            </h1>
            <p className="text-xl text-stone-300">
              Expert advice, design trends, and helpful guides for North Texas homeowners. Stay informed with the latest from {businessInfo.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl p-8 lg:p-12 border border-forest-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
              <span className="bg-forest-700 text-white px-3 py-1 rounded-full font-medium">
                Featured
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="bg-forest-200 text-forest-800 px-2 py-0.5 rounded text-xs font-medium">
                {featuredPost.category}
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-forest-900 mb-4 group-hover:text-forest-700 transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-stone-600 text-lg mb-6 max-w-3xl">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <User size={14} />
                <span>{featuredPost.author}</span>
              </div>
              <span className="text-forest-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-forest-950 mb-12">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl p-6 border border-stone-200 hover:shadow-xl hover:border-forest-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-sm text-stone-500 mb-3">
                  <span className="bg-forest-50 text-forest-700 px-2 py-0.5 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-forest-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-forest-950 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Get Landscaping Tips in Your Inbox
            </h2>
            <p className="text-stone-300 mb-8">
              Subscribe to our newsletter for seasonal tips, project inspiration, and exclusive offers for Southlake area homeowners.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-forest-900 border border-forest-800 text-white placeholder-stone-400 focus:outline-none focus:border-forest-600"
              />
              <button 
                type="submit"
                className="btn-primary bg-white !text-forest-800 hover:!bg-stone-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}



