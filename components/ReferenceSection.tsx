'use client';

import Image from 'next/image';

type ReferencesProps = {
  dict: {
    referencesTitle: string;
    referencesSubtitle: string;
    logos: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };
};

export default function ReferencesSection({ dict }: ReferencesProps) {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3a4b66] mb-4">
          {dict.referencesTitle}
        </h2>
        <p className="text-gray-600 mb-10">{dict.referencesSubtitle}</p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {dict.logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
