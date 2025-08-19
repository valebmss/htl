// components/ProyectosPage.tsx
'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants, easeOut } from 'framer-motion';

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

type ProyectosProps = {
  dict: DictType;
};

// Variants tipados y usando easings válidos
const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay }
  }
});

const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

export default function ProyectosPage({ dict }: ProyectosProps) {
  const reduce = useReducedMotion();

  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        <Image
          src="/img/projects.jpg"
          alt="Oficina"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-[#0b1b3a]/30 to-transparent" />

        {/* Burbujas decorativas */}
        {!reduce && (
          <>
            <motion.span
              aria-hidden
              className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-blue-300/30 blur-3xl"
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: easeOut }}
            />
            <motion.span
              aria-hidden
              className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl"
              animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: easeOut }}
            />
          </>
        )}

        {/* Contenido */}
        <div className="absolute inset-0 flex items-center justify-start p-6 md:p-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp(0)}
              className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl ring-1 ring-white/40"
            >
              <h1 className="text-3xl md:text-5xl font-semibold text-[#1f2d4d] mb-4 tracking-tight">
                {dict.heroTitle}
              </h1>
              <p className="text-slate-700 mb-6 leading-relaxed">
                {dict.heroDescription}
              </p>

              <motion.button
                variants={fadeUp(0.05)}
                whileHover={{ scale: reduce ? 1 : 1.03 }}
                whileTap={{ scale: reduce ? 1 : 0.98 }}
                onClick={() => window.location.href = '/contacto'}
                className="relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium
                           bg-gradient-to-r from-blue-400 to-sky-400 text-white shadow-md
                           hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {!reduce && (
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                    <motion.span
                      className="absolute -inset-y-1 -left-1 h-[200%] w-8 rotate-12 bg-white/30"
                      animate={{ x: ['-10%', '120%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: easeOut }}
                    />
                  </span>
                )}
                {dict.heroButton}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Secciones */}
      <section className="bg-blue-50/70 py-16 px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {dict.sections.map((section, i) => (
            <motion.article
              key={i}
              variants={fadeUp(i * 0.05)}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 overflow-hidden
                         hover:shadow-xl hover:ring-slate-300 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1f2d4d] mb-2">
                  {section.title}
                </h3>

                <ul className="space-y-1 text-sm text-slate-700">
                  {section.description.map((line, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-300" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent
                                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto mt-14">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </div>
      </section>
    </main>
  );
}
