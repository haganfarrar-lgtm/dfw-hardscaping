import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog-posts';

const baseUrl = 'https://colleyvillelandscaping.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Service pages for each city
  const servicePages: MetadataRoute.Sitemap = [];
  cities.forEach((city) => {
    services.forEach((service) => {
      servicePages.push({
        url: `${baseUrl}/cities/${city.slug}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    });
  });

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...servicePages, ...blogPages];
}



