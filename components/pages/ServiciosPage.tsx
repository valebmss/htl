// components/ServiciosPage.tsx
'use client';

import Image from 'next/image';

type Servicio = {
  title: string;
  image: string;
  items: string[];
};

type ServiciosProps = {
  dict: {
    title: string;
    subtitle: string;
    servicios: Servicio[];
  };
};

export default function ServiciosPage({ dict }: ServiciosProps) {
  return (
    <main className="bg-[#f1f4fa] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3a4b66]">{dict.title}</h1>
        <p className="mt-4 text-lg text-[#3a4b66]">{dict.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {dict.servicios.map((servicio, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
              <Image
                src={servicio.image}
                alt={servicio.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3a4b66] mb-4">
                {servicio.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {servicio.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}