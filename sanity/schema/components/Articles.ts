import { defineField } from 'sanity';

const title = 'Najnowsze Artykuły';
const icon = () => '📚';

export default defineField({
  name: 'LatestBlogEntries',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Podtytuł',
      validation: Rule => Rule.required(),
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
    title: 'Świeże Wpisy i Aktualne Porady',
    subtitle:
      'Sprawdź nasze najnowsze artykuły pełne aktualnych porad, zaawansowanych technik treningowych i nowinek ze świata kulturystyki. Bądź na bieżąco z najświeższymi trendami i informacjami.',
  },
});
