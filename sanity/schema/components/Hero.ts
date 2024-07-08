import {defineField} from 'sanity'

const title = 'Sekcja Hero'
const icon = () => '🙌'

export default defineField({
  name: 'HeroSection',
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
      title: 'Tekst pod nagłówkiem',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
