import { Link } from "next-view-transitions";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Image } from "next-sanity/image";
import PageTopSection from "../components/PageTopSection";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uznania | Feigin Electric",
  description:
    "Prezentujemy nasze nagrody, certyfikaty i referencje, które potwierdzają jakość oraz zaufanie, jakim darzą nas klienci i partnerzy biznesowi.",
  openGraph: {
    title: "Uznania | Feigin Electric",
    description:
      "Poznaj nagrody, certyfikaty i referencje Feigin Electric, które potwierdzają nasze zaangażowanie w jakość, innowacyjność i zrównoważony rozwój.",
    url: "https://feiginelectric.com/uznania",
    type: "website",
    images: [
      {
        url: "https://feiginelectric.com/images/awards-certificates.jpg",
        width: 1200,
        height: 630,
        alt: "Nagrody i certyfikaty Feigin Electric",
      },
      {
        url: "https://feiginelectric.com/images/business-partners.jpg",
        width: 1200,
        height: 630,
        alt: "Partnerzy biznesowi Feigin Electric",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uznania | Feigin Electric",
    description:
      "Odkryj nasze nagrody, certyfikaty i referencje, które świadczą o jakości i zaufaniu, jakim darzą nas klienci.",
    images: ["https://feiginelectric.com/images/awards-certificates.jpg"],
  },
};

const REKOGNITION_QUERY = `*[
  _type == "recognitions"
  && defined(slug.current)
]{_id, title, mainImage, body, slug, publishedAt}|order(publishedAt desc)`;

const options = { next: { revalidate: 60 } };

export default async function IndexPage() {
  const recognitions = await client.fetch<SanityDocument[]>(
    REKOGNITION_QUERY,
    {},
    options
  );

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
    title: "Uznania",
    description:
      "Prezentujemy nasze nagrody, certyfikaty i referencje, które potwierdzają jakość oraz zaufanie, jakim darzą nas klienci i partnerzy biznesowi.",
  };

  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      <main className="container mx-auto min-h-screen p-4 md:p-8">
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {recognitions.map((recognition) => (
            <li key={recognition._id}>
              <Link href={`/recognitions/${recognition?.slug?.current}`}>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                  <Image
                    id="mainImage"
                    style={{
                      viewTransitionName: `image-${recognition.title}`,
                    }}
                    src={urlFor(recognition.mainImage.asset).url()}
                    alt={recognition.title}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover"
                  />
                  <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                    <time
                      dateTime={new Date(recognition.publishedAt).toISOString()}
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      {new Date(recognition.publishedAt).toLocaleDateString()}
                    </time>

                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white line-clamp-2">
                      {recognition.title}
                    </h3>
                    <div className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500 dark:text-gray-400">
                      <PortableText value={recognition.body} />
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
