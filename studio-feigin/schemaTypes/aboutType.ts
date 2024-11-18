import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'This is the title of the page. like: "O nas"',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'This is the description of the page. Like "Dowiedz się więcej o nas. Nasza wizja, misja, sukces i wiele innych rzeczy, które mogą Ci się podobać.',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ourStory',
      type: 'object',
      title: 'Our Story',
      fields: [
        defineField({
          name: 'title',
          description: 'First words with underline. Like: "Nasza historia"',
          type: 'string',
          title: 'Title',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title2',
          description: 'Big middle text like: "Prowadzenie udanego biznesu"',
          type: 'string',
          title: 'Title 2',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title3',
          description: 'Small italic text like: "od 2014 roku"',
          type: 'string',
          title: 'Title 3',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          description:
            'This is the description history of the page. Like "Lev Feigin, wiodący specjalista ds. technologii energetycznych, który zajmował wysokie stanowiska w sektorze energetyki jądrowej i lotniczej, opracował podstawy naszej technologii, które po raz pierwszy zostały opisane w 1995 roku."',
          type: 'text',
          title: 'Description',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'content',
          type: 'object',
          title: 'Content',
          fields: [
            defineField({
              name: 'First',
              description: 'First paragraph',
              type: 'text',
              title: 'First',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'Second',
              description: 'Second paragraph',
              type: 'text',
              title: 'Second',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'Third',
              description: 'Third paragraph',
              type: 'text',
              title: 'Third',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'Fourth',
              description: 'Fourth paragraph',
              type: 'text',
              title: 'Fourth',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
