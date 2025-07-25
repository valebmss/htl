'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const datos = [
  { valor: 5, label: 'Países' },
  { valor: 28, label: 'Proyectos' },
  { valor: 28, label: 'Subestaciones' },
  { valor: 7, label: 'Centrales de generación' },
];

export default function ContadorProyectos() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-[#2f4381] py-20 text-white relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center z-10 relative">
        {datos.map((item, i) => (
          <div key={i}>
            <div className="text-5xl font-semibold mb-2">
              {inView ? <CountUp end={item.valor} duration={2} /> : '0'}
            </div>
            <div className="text-lg">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Líneas de fondo estilo SVG decorativo (opcional) */}
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
          {/* Agrega más líneas si deseas simular el diseño del fondo */}
        </svg>
      </div>
    </section>
  );
}
