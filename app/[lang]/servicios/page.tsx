'use client';

import Image from 'next/image';

const servicios = [
  {
    title: 'Consultorías',
    image: '/img/servicios/s1.jpg',
    items: [
      'Cálculo de protecciones eléctricas',
      'Cálculo de carga y cortocircuito',
      'Estudios de coordinación y flujo',
      'Conexión de centrales generadoras',
      'Planeación de sistemas eléctricos',
      'Estudios de arco eléctrico (ArcFlash)',
    ],
  },
  {
    title: 'Ingeniería secundaria',
    image: '/img/servicios/s2.jpg',
    items: [
      'Diagramas unifilares y lógicos',
      'Definición de tableros y señales',
      'Arquitectura de red y IEDs',
      'Diseño de interconexiones',
      'Listados para sistema de control',
    ],
  },
  {
    title: 'Configuración de equipos',
    image: '/img/servicios/s3.jpg',
    items: [
      'Relés de protección',
      'Reguladores de tensión',
      'Unidades de bahía, IVO boxes',
      'Integración con Siemens, ABB, SEL',
    ],
  },
  {
    title: 'Pruebas en fábrica',
    image: '/img/servicios/s4.jpg',
    items: [
      'Protocolos de prueba PRE-FAT y FAT',
      'Pruebas funcionales de relés',
      'Simulación de señales de IEDs',
      'Sincronización de tiempo',
    ],
  },
  {
    title: 'Puesta en servicio y comisionamiento',
    image: '/img/servicios/s5.jpg',
    items: [
      'Ensayos OCC y archivos',
      'Verificación de cableados y baterías',
      'Pruebas de TC’s y TT’s',
      'Mediciones de campo',
    ],
  },
  {
    title: 'Alquiler de equipos',
    image: '/img/servicios/s6.jpg',
    items: [
      'CPC100, CMC356, Tangente Delta',
      'Inyección primaria y secundaria',
      'Medidores de potencia y GPS',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-[#f1f4fa] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3a4b66]">Nuestros Servicios</h1>
        <p className="mt-4 text-lg text-[#3a4b66]">
          Ofrecemos soluciones integrales para cada etapa de tu proyecto eléctrico.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {servicios.map((servicio, i) => (
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
