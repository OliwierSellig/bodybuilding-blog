import { DOMAIN } from '@/global/constants';
import { sanityFetch } from '@/utils/sanity.fetch';
import { MetadataRoute } from 'next';

const staticRoutes = ['/', '/about', '/blog'];
const staitcPages: MetadataRoute.Sitemap = staticRoutes.map(route => ({ url: `${DOMAIN}${route}` }));

const query = async (): Promise<{ slug: string }[]> => {
  return await sanityFetch({
    query: `
    *[_type == "BlogPost_Collection"]{
      "slug": slug.current,
      }
    `,
    tags: [],
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPostsSlugs = await query();
  const blogPages: MetadataRoute.Sitemap = blogPostsSlugs.map(({ slug }) => ({ url: `${DOMAIN}/${slug}` }));

  return [...staitcPages, ...blogPages];
}
