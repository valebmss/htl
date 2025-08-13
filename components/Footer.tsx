'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';
import ReferencesSection from './ReferenceSection';

type FooterProps = {
  dict: {
    referencesTitle: string;
    referencesSubtitle: string;
    logos: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }[];
    helpTitle: string;
    helpDescription: string;
    callUsTitle: string;
    callUsNumbers: { country: string; number: string; href: string }[];
    emailTitle: string;
    email: string;
    followUsTitle: string;
    linkedinUrl: string;
    copyright: string;
    navLinks: { href: string; label: string }[];
  };
};

export default function Footer({ dict }: FooterProps) {
  return (
    <div>
      <ReferencesSection
        dict={{
          referencesTitle: dict.referencesTitle,
          referencesSubtitle: dict.referencesSubtitle,
          logos: dict.logos
        }}
      />

      <footer className="bg-[#5e7292] text-white text-sm">
        {/* Top section */}
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10">
          {/* Contacto */}
          <div>
            <h4 className="text-base font-semibold mb-2">{dict.helpTitle}</h4>
            <p className="mb-1">{dict.helpDescription}</p>
          </div>

          {/* Teléfonos */}
          <div>
            <h4 className="text-base font-semibold mb-2">{dict.callUsTitle}</h4>
            {dict.callUsNumbers.map((tel, i) => (
              <p key={i}>
                {tel.country}:{' '}
                <a href={tel.href} className="hover:underline">
                  {tel.number}
                </a>
              </p>
            ))}
          </div>

          {/* Email */}
          <div>
            <h4 className="text-base font-semibold mb-2">{dict.emailTitle}</h4>
            <a href={`mailto:${dict.email}`} className="hover:underline">
              {dict.email}
            </a>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-base font-semibold mb-2">{dict.followUsTitle}</h4>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={dict.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a1c4f4]"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="bg-[#4d5e78] py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-200 text-xs relative">
          <div>
            {dict.copyright} <span className="ml-2">🇪🇸</span>
          </div>

          <div className="flex items-center space-x-4">
            {dict.navLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#top"
            className="absolute right-4 bottom-4 bg-[#91ACD6] p-1.5 rounded-full hover:bg-[#7a97c4] transition"
          >
            <ChevronUpIcon className="w-4 h-4 text-white" />
          </a>
        </div>
      </footer>
    </div>
  );
}
