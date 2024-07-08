import {defineField} from 'sanity'

const title = 'Sekcja Features'
const icon = () => '✨'

export default defineField({
  name: 'Featres',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
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
              title: 'Ikonka',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'heading',
              type: 'text',
              title: 'Nagłówek',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'paragraph',
              type: 'text',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
            }),
          ],
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
})
