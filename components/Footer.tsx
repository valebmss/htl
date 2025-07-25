'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#5e7292] text-white text-sm">
      {/* Top section */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10">
        {/* Contacto */}
        <div>
          <h4 className="text-base font-semibold mb-2">¿Cómo podemos ayudar?</h4>
          <p className="mb-1">Contáctanos en cualquier momento</p>
        </div>

        {/* Teléfonos */}
        <div>
          <h4 className="text-base font-semibold mb-2">Llámanos</h4>
          <p>Perú: <a href="tel:+5117390828" className="hover:underline">+5117390828</a></p>
          <p>Colombia: <a href="tel:+573017911197" className="hover:underline">+573017911197</a></p>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-base font-semibold mb-2">Envíenos un mensaje</h4>
          <a href="mailto:atencionalcliente@htl-cs.com" className="hover:underline">
            atencionalcliente@htl-cs.com
          </a>
        </div>

        {/* Redes */}
        <div>
          <h4 className="text-base font-semibold mb-2">Siguenos</h4>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a1c4f4]">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#4d5e78] py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-200 text-xs relative">
        <div>
          Copyright © {new Date().getFullYear()} Nombre de la empresa
          <span className="ml-2">🇪🇸</span>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#inicio" className="hover:underline">Inicio</a>
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#proyectos" className="hover:underline">Proyectos</a>
          <a href="#historias" className="hover:underline">Historias de éxito</a>
          <a href="#nosotros" className="hover:underline">Sobre nosotros</a>
        </div>

        <a href="#top" className="absolute right-4 bottom-4 bg-[#91ACD6] p-1.5 rounded-full hover:bg-[#7a97c4] transition">
          <ChevronUpIcon className="w-4 h-4 text-white" />
        </a>
      </div>
    </footer>
  );
}
