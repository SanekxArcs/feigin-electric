// pages/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { client } from "../sanity";
import { Card } from "@components/ui/card";
import { Typography } from "@components/ui/typography";

interface Post {
  _id: string;
  title: string;
  body: any;
  mainImage: { asset: { url: string } };
  publishedAt: string;
}

export default function Post({ post }: { post: Post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Card>
        <Typography variant="h1" className="mb-4">
          {post.title}
        </Typography>
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="rounded-lg mb-4"
        />
        <Typography variant="subtitle1" className="mb-4">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
      </Card>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`);
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  return { props: { post }, revalidate: 60 };
};
