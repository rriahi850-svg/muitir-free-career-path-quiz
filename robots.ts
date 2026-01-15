import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Block any API or admin routes
    },
    sitemap: 'https://studio-136847540-ec6d3.web.app/sitemap.xml',
  }
}