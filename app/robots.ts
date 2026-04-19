import type { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://gofamintpsogba.org.ng/sitemap.xml',
    host: 'https://gofamintpsogba.org.ng',
  };
}
