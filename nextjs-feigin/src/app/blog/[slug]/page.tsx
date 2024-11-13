
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const EVENT_QUERY = defineQuery(`*[
    _type == "post" &&
    slug.current == $slug
  ][0]{
  ...,
  title,
  slug,
  publishedAt,
  mainImage,
  images,
  body,
  tags
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data: event } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });
  if (!event) {
    notFound();
  }
  const { title, slug, publishedAt, mainImage, images, body, tags } = event;

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/">← Back to events</Link>
      </div>
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            {title ? (
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 capitalize">
                {title.replace("-", " ")}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
