import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // desde sanity.config.ts
  dataset: 'production',
  apiVersion: '2023-08-01',
  useCdn: true,
});
