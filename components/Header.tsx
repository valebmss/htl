'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

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

  const currentLang = pathname.split('/')[1] === 'en' ? 'en' : 'es';
  const otherLang = currentLang === 'en' ? 'es' : 'en';

  const switchLanguage = () => {
    const segments = pathname.split('/');
    segments[1] = otherLang;
    router.push(segments.join('/'));
  };

  return (
    <header className="bg-white text-white shadow-lg">
      {/* Primera fila: logo centrado + buscador + switch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex justify-start w-full md:w-auto">
          <Link href={`/${currentLang}`}>
            <Image
              src="/img/LOGO.jpg"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex-grow flex justify-center">
          <input
            type="text"
            placeholder={dict.searchPlaceholder}
            className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 transition border border-gray-300"
          />
        </div>

        <div className="flex justify-end">
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

      {/* Segunda fila: navegación */}
      <div style={{ backgroundColor: '#91ACD6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-6 items-center justify-between text-white">
          <Link href={`/${currentLang}`} className="hover:text-blue-200 transition">{dict.nav.inicio}</Link>
          <Link href={`/${currentLang}/nosotros`} className="hover:text-blue-200 transition">{dict.nav.about}</Link>
          <Link href={`/${currentLang}/servicios`} className="hover:text-blue-200 transition">{dict.nav.services}</Link>
          <Link href={`/${currentLang}/proyectos`} className="hover:text-blue-200 transition">{dict.nav.proyectos}</Link>
          <Link href={`/${currentLang}/historiasexito`} className="hover:text-blue-200 transition">{dict.nav.historiasexito}</Link>
          <Link href={`/${currentLang}/blog`} className="hover:text-blue-200 transition">{dict.nav.blog}</Link>
          <Link
            href={`/${currentLang}/contacto`}
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
