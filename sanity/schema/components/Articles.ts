import { defineField } from 'sanity';
import { removeMarkdown } from '../../utils/removeMarkdown';

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
      initialValue: 'Świeże Wpisy i Aktualne Porady',
    }),
    defineField({
      name: 'subtitle',
      type: 'markdown',
      title: 'Podtytuł',
      validation: Rule => Rule.required(),
      initialValue:
        'Sprawdź nasze najnowsze artykuły pełne aktualnych porad, zaawansowanych technik treningowych i nowinek ze świata kulturystyki. Bądź na bieżąco z najświeższymi trendami i informacjami.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      icon: icon(),
    },
    prepare({ title, subtitle, icon }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        icon,
      };
    },
  },
});
