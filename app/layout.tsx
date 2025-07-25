import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "HTL",
  description: "Consultoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <Header />
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
