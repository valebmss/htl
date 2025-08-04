'use client';

import { createClient, groq } from 'next-sanity';
import Image from 'next/image';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

const query = groq`
  *[_type == "author" && slug.current == $slug][0]{
    name,
    image,
    bio
  }
`;

export default async function AuthorPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = await client.fetch(query, { slug: params.slug });
  const author = await client.fetch(query, { slug: params.slug });

  if (!author) return <div className="text-center py-20 text-gray-500">Autor no encontrado</div>;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">{author.name}</h1>
      {author.image?.asset?._ref && (
        <Image
          src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${author.image.asset._ref
            .replace('image-', '')
            .replace('-jpg', '.jpg')
            .replace('-png', '.png')}`}
          alt={author.name}
          width={100}
          height={100}
          className="rounded-full mx-auto mb-6"
        />
      )}
      <p className="text-gray-700 leading-relaxed">{author.bio}</p>
    </main>
  );
}
