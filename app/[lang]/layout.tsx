import type { Metadata } from "next";
import React, { ReactNode } from "react";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/utils/getDictionary";

export const metadata: Metadata = {
  title: "HTL",
  description: "Consultoría",
};

type Props = {
  children: React.ReactNode;
  params: { lang: 'es' | 'en' };
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
    const resolvedParams = await params;
  const lang = Array.isArray(resolvedParams.lang)
    ? resolvedParams.lang[0]
    : resolvedParams.lang;

  const safeLang = lang === "es" || lang === "en" ? lang : "es";

  const dict = await getDictionary(safeLang);

  return (
    <html lang={safeLang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 font-sans" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <Header dict={dict.header} />
        {children}
        
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
