import {defineField} from 'sanity'

const title = 'Sekcja Features'
const icon = () => '✨'

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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Podtytuł',
      validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Nagłówek',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              type: 'markdown',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      icon: icon(),
    },
  },
  initialValue: {
    title: 'Dlaczego Warto Czytać Naszego Bloga?',
    subtitle:
      'Zobacz, jak nasz blog może wzbogacić Twoją wiedzę, poprawić wyniki treningowe i dostarczyć inspiracji na każdym etapie Twojej kulturystycznej podróży. ',
  },
})
