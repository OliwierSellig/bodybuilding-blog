import { ImgDataQuery } from '@/components/ui/image';
import BlogList from './BlogList';
export default BlogList;
export type { BlogListTypes } from './BlogList.types';

export const BlogList_Query = `
  *[_type == "BlogPost_Collection"] | order(_createdAt desc) [0...3]{
    title,
    slug,
    description,
    image {
        ${ImgDataQuery}
    }
  }
`;
