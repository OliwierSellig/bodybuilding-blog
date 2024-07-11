import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/removeMarkdown';

const title = 'Sekcja Features';
const icon = () => '✨';

export default defineField({
  name: 'Features',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      initialValue: 'Dlaczego Warto Czytać Naszego Bloga?',
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Podtytuł',
      validation: Rule => Rule.required(),
      initialValue:
        'Zobacz, jak nasz blog może wzbogacić Twoją wiedzę, poprawić wyniki treningowe i dostarczyć inspiracji na każdym etapie Twojej kulturystycznej podróży. ',
    }),
    defineField({
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'img',
              type: 'image',
              title: 'Obrazek',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'title',
              type: 'string',
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
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'img',
            },
          },
        },
      ],

      title: 'Lista',
      validation: Rule => Rule.required().max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      icon: icon(),
    },
    prepare({ title, subtitle, icon }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        icon,
      };
    },
  },
});
