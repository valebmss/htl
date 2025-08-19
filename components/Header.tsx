'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type HeaderProps = {
  dict: {
    searchPlaceholder: string;
    nav: {
      inicio: string;
      about: string;
      services: string;
      proyectos: string;
      historiasexito: string;
      blog: string;
      contact: string;
    };
  };
};

export default function Header({ dict }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLang = pathname.split('/')[1] === 'en' ? 'en' : 'es';
  const otherLang = currentLang === 'en' ? 'es' : 'en';

  const switchLanguage = () => {
    const segments = pathname.split('/');
    segments[1] = otherLang;
    router.push(segments.join('/'));
  };

  useEffect(() => {
    setMenuOpen(false); // cerrar menú al cambiar de ruta
  }, [pathname]);

  return (
    <header className="bg-white text-white shadow-md sticky top-0 z-50">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href={`/${currentLang}`}>
            <Image
              src="/img/LOGO.jpg"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <h2 className=' font-bold text-3xl text-[#3a4b66] '>HTL</h2>

          {/* Hamburguesa visible solo en móvil */}
          <button
            className="md:hidden text-blue-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Buscador y selector de idioma */}
        <div className="hidden md:flex flex-grow justify-center">
          <input
            type="text"
            placeholder={dict.searchPlaceholder}
            className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 transition border border-gray-300"
          />
        </div>

        <div className="hidden md:flex justify-end">
          <button
            onClick={switchLanguage}
            className="relative inline-flex items-center px-1 py-1 bg-white border border-gray-300 rounded-full w-20 h-8 transition-all duration-300"
          >
            <span
              className={`absolute left-1 text-sm font-medium transition-transform duration-300 ${
                currentLang === 'es' ? 'text-[#91ACD6]' : 'text-gray-400'
              }`}
            >
              ES
            </span>
            <span
              className={`absolute right-1 text-sm font-medium transition-transform duration-300 ${
                currentLang === 'en' ? 'text-[#91ACD6]' : 'text-gray-400'
              }`}
            >
              EN
            </span>
            <span
              className={`absolute bg-[#91ACD6] w-6 h-6 rounded-full transform transition-transform duration-300 ${
                currentLang === 'es' ? 'translate-x-0' : 'translate-x-12'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Navegación */}
{/* Navegación */}
<div
  style={{ backgroundColor: '#91ACD6' }}
  className={`md:block transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}
>
  <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row md:items-center text-white">
    {/* Enlaces de navegación */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center flex-wrap">
      <Link href={`/${currentLang}`} className="hover:text-blue-200 transition">{dict.nav.inicio}</Link>
      <Link href={`/${currentLang}/nosotros`} className="hover:text-blue-200 transition">{dict.nav.about}</Link>
      <Link href={`/${currentLang}/servicios`} className="hover:text-blue-200 transition">{dict.nav.services}</Link>
      <Link href={`/${currentLang}/proyectos`} className="hover:text-blue-200 transition">{dict.nav.proyectos}</Link>
      <Link href={`/${currentLang}/blog`} className="hover:text-blue-200 transition">{dict.nav.historiasexito}</Link>
      <Link href={`/${currentLang}/contacto`} className="hover:text-blue-200 transition">{dict.nav.contact}</Link>
    </div>

    {/* Botón de contacto a la derecha */}
    <div className="mt-4 md:mt-0 md:ml-auto">
      <Link
        href={`/${currentLang}/contacto`}
        className="bg-white px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition text-[#91ACD6]"
      >
        {dict.nav.contact}
      </Link>
    </div>
  </div>

  {/* Buscador y selector de idioma en móvil */}
  <div className="md:hidden px-4 pb-4 space-y-4">
    <input
      type="text"
      placeholder={dict.searchPlaceholder}
      className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 transition border border-gray-300"
    />
    <div className="flex justify-center">
      <button
        onClick={switchLanguage}
        className="relative inline-flex items-center px-1 py-1 bg-white border border-gray-300 rounded-full w-20 h-8 transition-all duration-300"
      >
        <span
          className={`absolute left-1 text-sm font-medium transition-transform duration-300 ${currentLang === 'es' ? 'text-[#91ACD6]' : 'text-gray-400'}`}
        >
          ES
        </span>
        <span
          className={`absolute right-1 text-sm font-medium transition-transform duration-300 ${currentLang === 'en' ? 'text-[#91ACD6]' : 'text-gray-400'}`}
        >
          EN
        </span>
        <span
          className={`absolute bg-[#91ACD6] w-6 h-6 rounded-full transform transition-transform duration-300 ${currentLang === 'es' ? 'translate-x-0' : 'translate-x-12'}`}
        />
      </button>
    </div>
  </div>


      </div>
    </header>
  );
}
