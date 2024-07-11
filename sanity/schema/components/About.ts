import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/removeMarkdown';

const title = 'O Blogu';
const icon = () => '🌍';

export default defineField({
  name: 'About',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      initialValue: 'Poznaj Zespół Ekspertów i Pasjonatów Kulturystyki',
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Podtytuł',
      validation: Rule => Rule.required(),
      initialValue:
        'Poznaj naszą misję i zespół pasjonatów kulturystyki, którzy dzielą się swoją wiedzą i doświadczeniem, aby pomóc Ci osiągnąć maksymalne wyniki w Twojej sportowej podróży.',
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'img',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media,
      };
    },
  },
});
