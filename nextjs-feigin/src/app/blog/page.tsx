import Link from "next/link";
import { type SanityDocument } from "next-sanity";
  import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client";
import { Image } from "next-sanity/image";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, mainImage, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);



  const builder = imageUrlBuilder(client);

  function urlFor(asset: any) {
    return builder.image(asset);
  }
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="grid gap-4 grid-cols-2">
        {posts.map((post) => (
          <li
            className="hover:underline hover:scale-105 transition-all bg-white rounded-xl grid gap-4 p-5 text-black"
            key={post._id}
          ><Link href={`/${post.slug.current}`}>
            <Image
              src={urlFor(post.mainImage.asset).url()}
              alt={post.title}
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
            
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}