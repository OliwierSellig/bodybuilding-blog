import { DOMAIN } from '@/global/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${DOMAIN}/sitemap.xml` };
}
