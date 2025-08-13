'use client';

import { BriefcaseIcon, Cog6ToothIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type ServiciosSectionProps = {
  dict: {
    title: string;
    description: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
};

const iconMap = [BriefcaseIcon, Cog6ToothIcon, BookOpenIcon];

export default function ServiciosSection({ dict }: ServiciosSectionProps) {
  return (
    <section className="bg-[#e7edf6] py-20 px-6 md:px-12">
      {/* Encabezado */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3a4b66] mb-4">
          {dict.title}
        </h2>
        <p className="text-[#3a4b66] text-lg">{dict.description}</p>
      </motion.div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dict.items.map((item, i) => {
          const Icon = iconMap[i] || BriefcaseIcon;
          return (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center px-6 py-10 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-4 mb-6 bg-[#dbeafe] rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-[#3a4b66]" />
              </div>
              <h3 className="text-xl font-semibold text-[#3a4b66] mb-2">{item.title}</h3>
              <p className="text-[#4b5563]">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
