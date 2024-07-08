import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schema'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'bodybuilding-blog',

  projectId: '6g6jdzlt',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
