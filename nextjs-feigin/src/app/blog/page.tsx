
import {Link} from 'next-view-transitions';
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Image } from "next-sanity/image";
import PageTopSection from "../components/PageTopSection";
import { PortableText } from "@portabletext/react";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]{_id, title, mainImage, body, slug, publishedAt}|order(publishedAt desc)`;

const options = { next: { revalidate: 60 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const builder = imageUrlBuilder(client);

  interface Asset {
    _ref: string;
    _type: string;
  }

  interface Post {
    _id: string;
    title: string;
    mainImage: {
      asset: Asset;
    };
    body: any;
    slug: {
      current: string;
    };
    publishedAt: string;
  }

  function urlFor(asset: Asset) {
    return builder.image(asset);
  }

  const plLang = {
    title: "Blog",
    description:
      "Przeczytaj nasze najnowsze wpisy na blogu. Nasza wizja, misja, sukces i wiele innych, które mogą Ci się spodobać.",
  };

  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      <main className="container mx-auto min-h-screen p-4 md:p-8">
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post?.slug?.current}`}>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                  <Image
                    id="mainImage"
                    style={{ viewTransitionName: `image-${post.title}` }}
                    src={urlFor(post.mainImage.asset).url()}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover"
                  />
                  <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                    <time
                      dateTime={new Date(post.publishedAt).toISOString()}
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </time>

                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                      <PortableText value={post.body} />
                    </div>
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
