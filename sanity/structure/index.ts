import {StructureResolver} from 'sanity/structure'
import {createSingleton} from '../utils/createSingleton'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Zawartość')
    .items([createSingleton(S, 'Index_Page'), createSingleton(S, 'Blog_Page')])
