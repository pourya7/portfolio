import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const posts = await getCollection('blog');

    // Newest first
    const sorted = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );

    return rss({
        // Feed metadata – mirrors what Google / dev.to / Medium expect
        title: "Pourya Dashtegoli Pour's Blog",
        description:
            'Articles on product engineering, AI, and full-stack development by Pourya Dashtegoli Pour — Senior Product Engineer, AI Engineer, and Full-Stack developer with 10+ years of experience.',
        site: context.site!,

        // One <item> per post
        items: sorted.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            // Absolute canonical URL – this is what dev.to / Medium will store
            // as the canonical link when they import from this feed.
            link: `/blog/${post.id}`,
            // Custom <source:canonical> element recognised by some importers
            customData: `<atom:link rel="canonical" href="${context.site}blog/${post.id}" />`,
        })),

        // Declare the Atom namespace so the custom element above is valid XML
        xmlns: {
            atom: 'http://www.w3.org/2005/Atom',
        },

        // Self-referencing Atom link (best practice for feed validators)
        customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    });
}
