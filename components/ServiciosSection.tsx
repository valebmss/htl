'use client';

import { BriefcaseIcon, Cog6ToothIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const servicios = [
  {
    icon: BriefcaseIcon,
    title: 'Nuestros servicios',
    desc: 'Conoce nuestro portafolio de servicios.',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Soporte en proyectos',
    desc: 'Encuentra el apoyo apropiado para tu proyecto.',
  },
  {
    icon: BookOpenIcon,
    title: 'Historias de éxito',
    desc: 'Conoce historias de proyectos en los que nuestro aporte hizo la diferencia.',
  },
];

export default function ServiciosSection() {
  return (
    <section className="bg-[#e7edf6] py-20 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3a4b66] mb-4">
          Lo que ofrecemos
        </h2>
        <p className="text-[#3a4b66] text-lg">
          Servicios diseñados para acompañarte en cada etapa del camino.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {servicios.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center px-6 py-10 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="p-4 mb-6 bg-[#dbeafe] rounded-full flex items-center justify-center">
              <item.icon className="w-8 h-8 text-[#3a4b66]" />
            </div>
            <h3 className="text-xl font-semibold text-[#3a4b66] mb-2">{item.title}</h3>
            <p className="text-[#4b5563]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
