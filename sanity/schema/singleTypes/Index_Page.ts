import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Index_Page',
  type: 'document',
  title: 'Strona główna',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'content',
      type: 'text',
      title: 'Komponenty podstrony',
      //   options: {collapsible: true},
    }),
  ],
})
