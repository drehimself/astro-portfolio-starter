import { type CollectionEntry } from 'astro:content'

export function sortPostsByDateDesc(
  postA: CollectionEntry<'posts'>,
  postB: CollectionEntry<'posts'>
) {
  return (
    new Date(postB.data.date).getTime() - new Date(postA.data.date).getTime()
  )
}
