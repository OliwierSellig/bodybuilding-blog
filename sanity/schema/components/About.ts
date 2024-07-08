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
})
