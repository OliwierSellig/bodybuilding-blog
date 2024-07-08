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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      icon: icon(),
    },
  },
  initialValue: {
    title: 'Poznaj Zespół Ekspertów i Pasjonatów Kulturystyki',
    subtitle:
      'Poznaj naszą misję i zespół pasjonatów kulturystyki, którzy dzielą się swoją wiedzą i doświadczeniem, aby pomóc Ci osiągnąć maksymalne wyniki w Twojej sportowej podróży.',
  },
})
