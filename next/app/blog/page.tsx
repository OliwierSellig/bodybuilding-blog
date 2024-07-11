import BlogList from '@/components/_Blog/BlogList';
import { sanityFetch } from '@/utils/sanity.fetch';

const query = async (): Promise<{ title: string; subtitle: string }> => {
  return await sanityFetch({
    query: `
      *[_type == "Blog_Page"][0]{
      title,
      subtitle
      }
    `,
    tags: ['Blog_Page'],
  });
};

export default async function page() {
  const { title, subtitle } = await query();
  return <BlogList title={title} subtitle={subtitle} />;
}
