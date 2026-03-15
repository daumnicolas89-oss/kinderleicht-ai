import { type SchemaTypeDefinition } from 'sanity'
import { werkzeug } from './werkzeug'
import download from './download'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [werkzeug, download],
}
