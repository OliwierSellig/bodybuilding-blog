import {defineType} from 'sanity'
import About from '../schema/components/About'
import Features from '../schema/components/Features'
import Hero from '../schema/components/Hero'
import LatestBlogEntries from '../schema/components/Articles.js'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [About, LatestBlogEntries, Features, Hero],
})
