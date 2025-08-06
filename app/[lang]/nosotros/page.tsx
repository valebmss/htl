'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const dict = {
  hero: {
    title: "Somos su aliado estratégico en proyectos de energía",
    subtitle: "Podemos apoyarlo en todas las etapas de un proyecto de energía.",
    button: "Descubrir más",
  },
  mission: {
    title: "Nuestra Misión",
    subtitle: "Descripción de la misión.",
  },
  values: {
    title: "Dedicamos toda nuestra capacidad técnica, experiencia y cumplimiento para que nuestros clientes logren sus objetivos con la más alta eficiencia y calidads",
    subtitle: "",
  },
  team: {
    title: "Nuestro Equipo",
    members: [
      {
        name: "Horacio Trujillo Loli",
        role: "CEO",
        description: "Fundador y su solvencia técnica y conocimiento y excelente gestión interpersonal generan grandes sinergias para lograr los más complejos retos de los proyectos. Horacio es la fuerza motriz detrás de la empresa. Le encanta mantenerse ocupado y conocer nuevas tecnologías para aportar innovación a sus soluciones. ",
        image: "/img/colaboradores/Horacio.jpg",
      },
            {
        name: "Leyla Becerra",
        role: "Consultora Senior",
        description: "A Leyla le encanta la innovación y los desafíos. Con su experiencia de varios años como gerente de automatización de subestaciones y centrales de generación, ha adquirido una gran trayectoria que respalda al equipo de trabajo y  asesora de forma muy profesional para que nuestros clientes siempre se lleven la mejor solución.",
        image: "/img/colaboradores/leyla.jpg",
      },
            {
        name: "Ruben Dario Arias",
        role: "Consultor Senior",
        description: "Ingeniero eléctrico con amplia experiencia en el sector de generación de energía eléctrica en plantas térmicas, hidráulicas y de biomasa. Orientado a incrementar la eficiencia de procesos, uso racional de la energía, monitoreo y diseño de procedimientos operacionales y de seguridad. Habilidad en la implementación de programas de capacitación técnica, trabajo en equipo y resultados. ",
        image: "/img/colaboradores/Ruben.jpeg",
      },
            {
        name: "Andrés Felipe Juradoi",
        role: "Ingeniero Campo",
        description: "Ingeniero eléctrico que se ha desempeñado en pruebas y puesta en servicio de sistemas de potencia.  Andrés ha participado en numerosos proyectos en varios países de suramérica. Le encanta leer y aprender idiomas.",
        image: "/img/colaboradores/Felipe.png",
      },
    ],
  },
};

export default function NosotrosPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
    <section className="bg-[#f1f4fa] py-16 px-6 md:px-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        
         <h1 className="text-3xl md:text-5xl text-[#3a4b66] font-semibold mb-4">
            {dict.hero.title}
          </h1>
          <p className="text-gray-600 mb-6">{dict.hero.subtitle}</p>
 <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#91ACD6] hover:bg-[#7d9ac5] text-white font-medium px-6 py-2 rounded transition"
          >
            {dict.hero.button}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/img/integral.jpg"
            alt="Equipo"
            width={400}
            height={300}
            className="rounded-full"
          />
        </motion.div>
        </div>
      </section>

      {/* Misión */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-200 px-6 md:px-12 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            {dict.mission.title}
          </h2>
          <p className="text-white text-lg">{dict.mission.subtitle}</p>
        </div>
      </motion.section>

      {/* Valores */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white px-6 md:px-12 py-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#3a4b66] mb-4">
            {dict.values.title}
          </h2>
          <p className="text-gray-700">{dict.values.subtitle}</p>
        </div>
      </motion.section>

      {/* Equipo */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 px-6 md:px-12 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#3a4b66] text-center mb-12">
            {dict.team.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {dict.team.members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm italic text-gray-500">{member.role}</p>
                  <p className="text-gray-700 text-sm mt-2">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </main>
  );
}
