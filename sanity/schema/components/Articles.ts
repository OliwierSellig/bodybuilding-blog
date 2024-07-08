import {defineField} from 'sanity'

const title = 'Najnowsze Artykuły'
const icon = () => '📚'

export default defineField({
  name: 'Articles',
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
