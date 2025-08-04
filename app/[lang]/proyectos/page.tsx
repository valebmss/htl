'use client';

import Image from 'next/image';

type DictType = {
  heroTitle: string;
  heroDescription: string;
  heroButton: string;
  sections: {
    title: string;
    description: string[];
    image: string;
  }[];
};

// Example: Replace this with your actual dictionary fetching logic or import
const dict: DictType = {
  heroTitle: "Ejecución de Proyectos de Energía",
  heroDescription: "Nuestra experiencia nos permite dar soporte a sus necesidades en proyectos de energía en todas sus etapas: concepción del proyecto, etapa de oferta, planeación, ejecución y cierre.",
  heroButton: "Descubrir más",
  sections: [
    {
      title: "Estudio Inicial",
      description: ["Descripción 1", "Descripción 2"],
      image: "/images/section1.jpg",
    },
    {
      title: "Oferta",
      description: ["Descripción A", "Descripción B"],
      image: "/images/section2.jpg",
    },
    {
      title: "Ejecución",
      description: ["Descripción X", "Descripción Y"],
      image: "/images/section3.jpg",
    },
    {
      title: "Cierre",
      description: ["Descripción M", "Descripción N"],
      image: "/images/section4.jpg",
    },
  ],
};

export default function ProyectosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/img/projects.jpg"
          alt="Oficina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-20">
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-md max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#3a4b66] mb-4">
              {dict.heroTitle}
            </h1>
            <p className="text-gray-700 mb-6">{dict.heroDescription}</p>
            <button className="bg-blue-300 text-[#3a4b66] font-medium px-4 py-2 rounded-md hover:bg-blue-400 transition">
              {dict.heroButton}
            </button>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="bg-blue-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {dict.sections.map((section, i) => (
            <div key={i}>
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-[180px]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#3a4b66] mb-2">{section.title}</h3>
              <ul className="text-gray-800 text-sm space-y-1 list-disc list-inside">
                {section.description.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
