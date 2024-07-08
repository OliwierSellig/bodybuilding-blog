import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schema'
import {structure} from './structure'
import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdown} from './components/CustomMarkdown'

export default defineConfig({
  name: 'default',
  title: 'bodybuilding-blog',

  projectId: '6g6jdzlt',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), markdownSchema({input: CustomMarkdown})],

  schema: {
    types: schemaTypes,
  },
})
