import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const baseUrl = context.site ? new URL(import.meta.env.BASE_URL || '/', context.site).toString() : '';

  return rss({
    title: "arpeggio's",
    description: "Thoughts, notes, and findings",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${baseUrl}posts/${post.slug}/`,
    })),
  });
}
