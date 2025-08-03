import { getPostBySlug } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

type Props = {
  params: { lang: "es" | "en"; slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 prose">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={post.body} />
    </article>
  );
}
