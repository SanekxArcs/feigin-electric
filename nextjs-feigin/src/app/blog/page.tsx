import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Image } from "next-sanity/image";
import PageTopSection from "../components/PageTopSection";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, mainImage, body, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const builder = imageUrlBuilder(client);

  function urlFor(asset: any) {
    return builder.image(asset);
  }
  return (
    <>
      <PageTopSection
        title="Blog"
        description="Read our latest blog posts. Our vision, mission, success and many other you might love."
      />
      <main className="container mx-auto min-h-screen p-4 md:p-8">
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/${post.slug.current}`}>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                  <Image
                    src={urlFor(post.mainImage.asset).url()}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover"
                  />
                  <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </time>

                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    {post.body.block ? (
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                        {post.body.block}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
