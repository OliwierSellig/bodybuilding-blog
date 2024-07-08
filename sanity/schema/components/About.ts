import {defineField} from 'sanity'

const title = 'O Blogu'
const icon = () => '🌍'

export default defineField({
  name: 'About',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      icon: icon(),
    },
  },
})
