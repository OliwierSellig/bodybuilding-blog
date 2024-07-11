import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'Blog_Page',
  type: 'document',
  title: 'Blog',
  icon: () => '📝',
  fields: [
    defineField({
      name: 'title',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    }),
  ],
});
