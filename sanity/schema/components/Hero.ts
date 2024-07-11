import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/removeMarkdown';

const title = 'Sekcja Hero';
const icon = () => '🙌';

export default defineField({
  name: 'Hero',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      initialValue: 'Zaawansowana Kulturystyka: Twoje Źródło Inspiracji i Wiedzy',
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Tekst pod nagłówkiem',
      validation: Rule => Rule.required(),
      initialValue:
        'Odkryj zaawansowane techniki treningowe, sprawdzone strategie dietetyczne i motywacyjne porady, które pomogą Ci osiągnąć szczytowe wyniki w kulturystyce. Gotowy na przekroczenie własnych granic?',
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
