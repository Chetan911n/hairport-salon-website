import type { MetadataRoute } from 'next';
import { seo, serviceCategories } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/branches',
    '/testimonials',
    '/book',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms',
  ];

  const serviceRoutes = serviceCategories.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${seo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
