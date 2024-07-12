import { sanityFetch } from '@/utils/sanity.fetch';
import { BlogPostPageTypes, BlogPostQueryTypes } from './page.types';
import { ImgDataQuery } from '@/components/ui/image';
import BlogPageHero from '@/components/_Blog/BlogPageHero';
import BlogPageContent from '@/components/_Blog/BlogPageContent';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { removeMarkdown } from '@/utils/remove-markdown';

const BlogPost_Query = `
    title,
    "slug": slug.current,
    description,
    content,
    _createdAt,
    image {
      ${ImgDataQuery}
    }
`;

const query = async (slug: string): Promise<BlogPostQueryTypes> => {
  return await sanityFetch({
    query: `
        *[_type == "BlogPost_Collection" && $slug == slug.current][0] {
        ${BlogPost_Query}
      }
        `,
    qParams: { slug },
    tags: ['BlogPost_Collection'],
  });
};

export default async function page({ params: { slug } }: BlogPostPageTypes) {
  const { title, description, content, _createdAt, image } = await query(slug);
  return (
    <>
      <Breadcrumbs
        data={[
          { name: 'Blog', path: '/blog' },
          { name: removeMarkdown(title), path: slug },
        ]}
      />
      <BlogPageHero title={title} description={description} createdAt={_createdAt} image={image} />
      <BlogPageContent content={content} />
    </>
  );
}
