'use client';

import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  dict: {
    searchPlaceholder: string;
    nav: {
      about: string;
      services: string;
      proyectos: string;
      historiasexito: string;
      blog: string;
      contact: string;
    };
  };
};


export default function Header( { dict }: HeaderProps) {
  return (
    <header className=" bg-white text-white shadow-lg">
      {/* Primera fila: logo centrado + buscador */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex justify-center md:justify-start w-full md:w-1/3 mb-3 md:mb-0">
          <Link href="/">
            <Image
              src="/img/LOGO.jpg" // reemplaza con la ruta de tu imagen
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="w-full md:w-2/3 flex justify-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 transition border border-gray-300"
          />
        </div>
      </div>

      {/* Segunda fila: navegación + botón */}
      <div  style={{ backgroundColor: '#91ACD6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between">
          <Link href="/about" className="hover:text-blue-200 transition">{dict.nav.about}</Link>
<Link href="/servicios" className="hover:text-blue-200 transition">{dict.nav.services}</Link>
<Link href="/proyectos" className="hover:text-blue-200 transition">{dict.nav.proyectos}</Link>
<Link href="/historiasexito" className="hover:text-blue-200 transition">{dict.nav.historiasexito}</Link>
<Link href="/blog" className="hover:text-blue-200 transition">{dict.nav.blog}</Link>

<Link
  href="/contacto"
  className="bg-white px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition"
  style={{ color: '#91ACD6' }}
>
  {dict.nav.contact}
</Link>
        </div>
      </div>
    </header>
  );
}
