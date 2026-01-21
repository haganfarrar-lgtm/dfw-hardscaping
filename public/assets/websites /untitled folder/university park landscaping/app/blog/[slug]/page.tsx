import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs, getRecentPosts } from '@/data/blog-posts';
import { businessInfo, generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return genMeta({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(4).filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              '@type': 'Organization',
              name: businessInfo.name
            },
            publisher: {
              '@type': 'Organization',
              name: businessInfo.name,
              logo: {
                '@type': 'ImageObject',
                url: '/logo.png'
              }
            },
            datePublished: post.date,
            dateModified: post.date
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]))
        }}
      />

      {/* Hero Section */}
      <section className="bg-forest-950 text-white pt-12 pb-20">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 mb-6">
              <span className="bg-forest-800 text-forest-300 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <User size={14} />
                {post.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-stone-300">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-forest-900 prose-p:text-stone-600 prose-a:text-forest-700 prose-strong:text-forest-900 prose-ul:text-stone-600 prose-li:text-stone-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag size={18} className="text-stone-400" />
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-4">
                  <span className="text-stone-600 flex items-center gap-2">
                    <Share2 size={18} />
                    Share:
                  </span>
                  <div className="flex gap-3">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://southlakelandscapingpros.com/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=https://southlakelandscapingpros.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=https://southlakelandscapingpros.com/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* About Author */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h3 className="font-display font-semibold text-forest-900 mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌳</span>
                  </div>
                  <div>
                    <p className="font-medium text-forest-900">{post.author}</p>
                    <p className="text-sm text-stone-500">Landscaping Experts</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600">
                  Our team shares insights from 15+ years of landscaping experience in the DFW metroplex.
                </p>
              </div>

              {/* Recent Posts */}
              {recentPosts.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-stone-200">
                  <h3 className="font-display font-semibold text-forest-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="block group p-3 rounded-lg hover:bg-stone-50 transition-colors"
                      >
                        <h4 className="font-medium text-forest-900 text-sm line-clamp-2 group-hover:text-forest-700 transition-colors">
                          {recentPost.title}
                        </h4>
                        <p className="text-xs text-stone-500 mt-1">
                          {new Date(recentPost.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-forest-950 text-white rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4">Need Landscaping Help?</h3>
                <p className="text-stone-300 text-sm mb-6">
                  Ready to put these tips into action? Contact us for a free consultation.
                </p>
                <Link 
                  href="/#contact"
                  className="btn-primary w-full flex items-center justify-center gap-2 bg-white !text-forest-800 hover:!bg-stone-100 text-sm"
                >
                  Get Free Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Posts */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-forest-950">
              More Articles
            </h2>
            <Link 
              href="/blog"
              className="text-forest-700 font-medium hover:text-forest-600 flex items-center gap-1"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg hover:border-forest-200 transition-all"
                >
                  <span className="text-xs text-forest-600 font-medium bg-forest-50 px-2 py-1 rounded">{relatedPost.category}</span>
                  <h3 className="font-display font-semibold text-forest-900 mt-3 group-hover:text-forest-700 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}



