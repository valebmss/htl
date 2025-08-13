'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';

type Phone = { country: string; number: string; href: string };
type NavLink = { href: string; label: string };
type FooterDict = {
  referencesTitle?: string;
  referencesSubtitle?: string;
  logos?: { src: string; alt: string; width: number; height: number }[];
  helpTitle: string;
  helpDescription: string;
  callUsTitle: string;
  callUsNumbers?: Phone[];
  emailTitle: string;
  email: string;
  followUsTitle: string;
  linkedinUrl: string;
  copyright: string;
  navLinks?: NavLink[];
};

type Props =
  | { dict: FooterDict }                       // dict plano
  | { dict: { footer: FooterDict } };          // dict.footer

export default function Footer(props: Props) {
  // Normaliza: toma dict.footer si existe; si no, usa dict plano
  const d = (props as any).dict.footer ?? (props as any).dict as FooterDict;

  return (
    <div>
      <footer className="bg-[#5e7292] text-white text-sm">
        {/* Top section */}
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10">
          {/* Contacto */}
          <div>
            <h4 className="text-base font-semibold mb-2">{d.helpTitle}</h4>
            <p className="mb-1">{d.helpDescription}</p>
          </div>

          {/* Teléfonos */}
          <div>
            <h4 className="text-base font-semibold mb-2">{d.callUsTitle}</h4>
            {(d.callUsNumbers ?? []).length > 0 ? (
              d.callUsNumbers!.map((tel: Phone, i: number) => (
              <p key={i}>
                {tel.country}:{' '}
                <a href={tel.href} className="hover:underline">
                {tel.number}
                </a>
              </p>
              ))
            ) : (
              <p className="opacity-70">—</p>
            )}
          </div>

          {/* Email */}
          <div>
            <h4 className="text-base font-semibold mb-2">{d.emailTitle}</h4>
            <a href={`mailto:${d.email}`} className="hover:underline">
              {d.email}
            </a>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-base font-semibold mb-2">{d.followUsTitle}</h4>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={d.linkedinUrl}
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
            {d.copyright} <span className="ml-2">🇪🇸</span>
          </div>

          <div className="flex items-center space-x-4">
            {(d.navLinks ?? []).length > 0 ? (
              d.navLinks!.map((link: NavLink, i: number) => (
              <a key={i} href={link.href} className="hover:underline">
                {link.label}
              </a>
              ))
            ) : (
              <span className="opacity-70">—</span>
            )}
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
