'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
type EnergyProjectProps = {
  dict: {
    EnergyProyectSection: {

      title: string;
      summary: string;
      description: string;
      button: string;

    };
  };
};

export default function EnergyProjectSection({ dict }: EnergyProjectProps) {
  return (
    <section className="bg-[#f1f4fa] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto animado */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#3a4b66] mb-4">
            {dict.EnergyProyectSection.title}
          
          </h2>
          <p className="text-[#3a4b66] text-lg mb-2">
            {dict.EnergyProyectSection.summary}
          </p>
          <p className="text-[#3a4b66] text-base mb-6 leading-relaxed">
            {dict.EnergyProyectSection.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#91ACD6] hover:bg-[#7d9ac5] text-white font-medium px-6 py-2 rounded transition"
          >
            {dict.EnergyProyectSection.button}
          </motion.button>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-[60%_40%_60%_40%/60%_40%_60%_40%] shadow-lg">
            <Image
              src="/img/integral.jpg"
              alt="Persona trabajando en proyecto técnico"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
