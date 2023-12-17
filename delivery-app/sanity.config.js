import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Delivery App',

  projectId: '8gi4so46',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
