'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type ContadorProyectosProps = {
  dict: {
    title: string;
    description: string;
    datos: {
      valor: number;
      label: string;
    }[];
  };
};

export default function ContadorProyectos({ dict }: ContadorProyectosProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className="bg-[#2f4381] py-20 text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Título y descripción */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{dict.title}</h2>
        <p className="text-lg text-white/90">{dict.description}</p>
      </div>

      {/* Contadores */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center z-10 relative">
        {dict.datos.map((item, i) => (
          <div key={i}>
            <div className="text-5xl font-semibold mb-2">
              {inView ? <CountUp end={item.valor} duration={2} /> : '0'}
            </div>
            <div className="text-lg">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L1440 320"
            stroke="#5c6fa8"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
}
