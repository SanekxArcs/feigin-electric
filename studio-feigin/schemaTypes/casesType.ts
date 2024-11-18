import {defineField, defineType} from 'sanity'

export const casesType = defineType({
  name: 'cases',
  title: 'Cases',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageMain',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pdf',
      type: 'file',
      title: 'PDF',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
