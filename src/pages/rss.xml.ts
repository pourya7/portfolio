import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
    const posts = await getCollection('blog');

    // Newest first
    const sorted = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );

    // Base URL without trailing slash for consistent canonical hrefs
    const siteUrl = context.site!.toString().replace(/\/$/, '');

    return rss({
        // Feed metadata – mirrors what Google / dev.to / Medium expect
        title: "Pourya Dashtegoli Pour's Blog",
        description:
            'Articles on product engineering, AI, and full-stack development by Pourya Dashtegoli Pour — Senior Product Engineer, AI Engineer, and Full-Stack developer with 10+ years of experience.',
        site: context.site!,

        // One <item> per post
        items: sorted.map((post) => {
            const canonicalHref = `${siteUrl}/blog/${post.id}`;
            // Full HTML body – lets dev.to / Medium import the complete article
            const fullContent = sanitizeHtml(parser.render(post.body ?? ''));

            return {
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                // Absolute canonical URL – what dev.to / Medium stores as canonical
                link: canonicalHref,
                // Full article HTML for importers that support it
                content: fullContent,
                // Tags mapped to RSS <category> elements
                categories: post.data.tags,
                // Explicit canonical + updated date for feed-aware importers
                customData: [
                    `<atom:link rel="canonical" href="${canonicalHref}" />`,
                    post.data.updatedDate
                        ? `<atom:updated>${post.data.updatedDate.toISOString()}</atom:updated>`
                        : '',
                ]
                    .filter(Boolean)
                    .join(''),
            };
        }),

        // Declare the Atom namespace so the custom elements above are valid XML
        xmlns: {
            atom: 'http://www.w3.org/2005/Atom',
        },

        // Self-referencing Atom link (best practice for feed validators)
        customData: `<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />`,
    });
}
