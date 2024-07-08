import {defineType} from 'sanity'
import About from '../schema/components/About'
import Articles from '../schema/components/Articles'
import Features from '../schema/components/Features'
import Hero from '../schema/components/Hero'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [About, Articles, Features, Hero],
})
