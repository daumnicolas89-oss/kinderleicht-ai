import { type SchemaTypeDefinition } from 'sanity'
import { werkzeug } from './werkzeug'
import download from './download'
import { lexikon } from './lexikon'
import { prompt } from './prompt'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [werkzeug, download, lexikon, prompt],
}
