'use client';

import Image from 'next/image';

type ReferencesProps = {
  dict: {
    referencesTitle: string;
    referencesSubtitle: string;
  };
};

export default function ReferencesSection({ dict }: ReferencesProps) {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3a4b66] mb-4">
          Nuestras referencias
        </h2>
        <p className="text-gray-600 mb-10">Tenemos buena compañía. Ellos han confiado en nosotros:</p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <Image src="/logos/riederlogo2.png" alt="Rieder" width={120} height={60} />
          <Image src="/logos/logo-isa.png" alt="ISA" width={100} height={50} />
          <Image src="/logos/siemens.png" alt="Siemens" width={140} height={60} />
          <Image src="/logos/logo-text-kallpa.png" alt="Kallpa" width={130} height={50} />
          <Image src="/logos/descarga.png" alt="Ande" width={100} height={50} />
        </div>
      </div>
    </section>
  );
}
