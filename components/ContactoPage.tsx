'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactoProps {
  dict: {
    title: string;
    description: string;
    form: {
      name: string;
      phone: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      submit: string;
    };
    locations: {
      name: string;
      address: string;
      phone: string;
      email: string;
    }[];
  };
}

export default function ContactPage({ dict }: ContactoProps) {

  return (
    <main className="w-full">
      {/* Hero con imagen de fondo */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/images/contacto-bg.jpg"
          alt="Fondo contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold">{dict.title}</h1>
        </div>
      </section>

      {/* Formulario y datos */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Formulario */}
          <form className="md:col-span-2 space-y-4">
            <p className="text-lg text-gray-700 mb-6">{dict.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder={dict.form.name} required className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              <input type="text" placeholder={dict.form.phone} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              <input type="email" placeholder={dict.form.email} required className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              <input type="text" placeholder={dict.form.company} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
            </div>

            <input type="text" placeholder={dict.form.subject} required className="border border-gray-300 rounded-md px-4 py-2 w-full" />

            <textarea placeholder={dict.form.message} required rows={4} className="border border-gray-300 rounded-md px-4 py-2 w-full"></textarea>

            <button type="submit" className="bg-blue-300 text-[#3a4b66] font-medium px-6 py-2 rounded-md hover:bg-blue-400 transition">
              {dict.form.submit}
            </button>
          </form>

          {/* Información de contacto */}
<div className="space-y-10 text-gray-800">
  {dict.locations.map((location, i) => (
    <div key={i} className="space-y-2">
      <h3 className="text-lg font-semibold">{location.name}</h3>

      <p className="flex items-start gap-2">
        <MapPin className="w-5 h-5 text-blue-400" />
        {location.address}
      </p>

      <p className="flex items-center gap-2">
        <Phone className="w-5 h-5 text-blue-400" />
        <a href={`tel:${location.phone}`} className="hover:underline">
          {location.phone}
        </a>
      </p>

      <p className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-blue-400" />
        <a href={`mailto:${location.email}`} className="hover:underline">
          {location.email}
        </a>
      </p>
    </div>
  ))}
</div>

        </div>
      </section>
    </main>
  );
}
