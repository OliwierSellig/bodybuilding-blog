import { defineField } from 'sanity';

const title = 'Blog - Artykuły';
const icon = () => '🗞️';

export default defineField({
  name: 'BlogPost_Collection',
  type: 'document',
  icon,
  title,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Krótki opis',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'markdown',
      title: 'Pełen Artykuł',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
});
