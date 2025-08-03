import { sanityClient } from './sanity';

export const getAllPosts = async () => {
  return await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      body
    }
  `);
};

export const getPostBySlug = async (slug: string) => {
  return await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      body
    }`,
    { slug }
  );
};
