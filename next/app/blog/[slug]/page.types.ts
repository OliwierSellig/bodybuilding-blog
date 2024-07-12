import { ImgDataTypes } from '@/components/ui/image';

export type BlogPostPageTypes = {
  params: {
    slug: string;
  };
};

export type BlogPostQueryTypes = {
  title: string;
  description: string;
  content: string;
  image: ImgDataTypes;
  slug: string;
  _createdAt: string;
};
