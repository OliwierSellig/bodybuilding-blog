import { ImgDataQuery } from '../image';
import BlogPostItem from './BlogPostItem';
export default BlogPostItem;
export type { BlogPostItemTypes } from './BlogPostItem.types';

export const BlogPostItem_Query = `
    title,
    description,
    "slug": slug.current,
    image {
    ${ImgDataQuery}
  },
`;
