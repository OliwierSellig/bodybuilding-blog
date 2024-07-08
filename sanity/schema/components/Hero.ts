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
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'markdown',
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
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      media: 'img',
    },
  },
  initialValue: {
    heading: 'Zaawansowana Kulturystyka: Twoje Źródło Inspiracji i Wiedzy',
    subheading:
      'Odkryj zaawansowane techniki treningowe, sprawdzone strategie dietetyczne i motywacyjne porady, które pomogą Ci osiągnąć szczytowe wyniki w kulturystyce. Gotowy na przekroczenie własnych granic?',
  },
})
