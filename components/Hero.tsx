'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/img/hero.jpeg',
  '/img/hero2.jpg',
  '/img/hero3.jpg',
]; // Asegúrate de que estén en /public/img/

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Imágenes del carrusel */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Hero ${index}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          priority={index === 0}
        />
      ))}

      {/* Overlay si quieres oscurecer */}

      {/* Texto fijo encima del carrusel */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <h1 className="text-white text-3xl sm:text-5xl font-bold text-center px-4">
          Somos su aliado estratégico en proyectos de energía
        </h1>
      </div>
    </section>
  );
}
