import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Blog_Page',
  type: 'document',
  title: 'Blog',
  icon: () => '📝',
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
