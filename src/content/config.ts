import { z, defineCollection } from 'astro:content'
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  posts,
}
