import React from "react";
import Hero from "@/components/Hero";
import EnergyProyectSection from "@/components/EnergyProyectSection";
import ServiciosSection from "@/components/ServiciosSection";
import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';
import ContadorProyectos from "./ContadorProyectos";
import ReferencesSection from "./ReferenceSection";
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

const query = groq`
  *[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    excerpt
  }
`;


export default async function HomeClient({ dict }: { dict: any }) {
const posts: { title: string; slug: { current: string }; excerpt: string }[] = await client.fetch(query);

  return (
    <div>
      <main className="relative">
        <Hero dict={dict} />
      </main>
      <section>
        <EnergyProyectSection dict={dict} />
      </section>
      <section>
        <ServiciosSection dict={dict} />
      </section>
      <section>
        <ContadorProyectos dict={dict} />
      </section>

    </div>
  );
}
