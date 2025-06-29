
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WarningPopup from "./components/WarningPopup";
import Head from "next/head";
import { SanityLive } from "@/sanity/live";
import { ViewTransitions } from "next-view-transitions";
import {Toaster} from "@/components/ui/toaster"

const interFont = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  fallback: ["Helvetica", "sans-serif"],
});
const interItalic = localFont({
  src: "./fonts/InterVariable-Italic.woff2",
  variable: "--font-inter-italic",
  weight: "100 900",
  fallback: [ "Helvetica", "sans-serif"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  fallback: ["Inter", "Helvetica", "sans-serif"],
});


export const metadata: Metadata = {
  title:
    "Feigin Electric | Obniż rachunki za prąd dzięki inteligentnej technologii",
  description:
    "Feigin Electric umożliwia firmom oszczędność na rachunkach za prąd dzięki zaawansowanej technologii energetycznej. Odkryj inteligentne i opłacalne rozwiązania już dziś!",
  keywords:
    "Energia elektryczna, oszczędność energii, technologia energetyczna, inteligentny optymalizator, bezprzewodowy miernik energii, efektywność energetyczna, redukcja kosztów, obniżenie emisji CO2, rozwiązania zrównoważone, energia odnawialna, optymalizacja napięcia, monitoring energii, jakość energii, ochrona sprzętu elektrycznego, rozwiązania dla przemysłu, oszczędność dla firm, zielona technologia, zarządzanie energią, inteligentne systemy energetyczne",
  openGraph: {
    type: "website",
    url: "https://feiginelectric.pl",
    title:
      "Feigin Electric | Obniż rachunki za prąd dzięki inteligentnej technologii",
    description:
      "Feigin Electric umożliwia firmom oszczędność na rachunkach za prąd dzięki zaawansowanej technologii energetycznej. Odkryj inteligentne i opłacalne rozwiązania już dziś!",
    images: [
      {
        url: "/nextjs-feigin/public/FeiginElectricWebTitle.webp",
        width: 600,
        height: 400,
        alt: "Feigin Electric | Obniż rachunki za prąd dzięki inteligentnej technologii",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="pl">
        <Head>
          <meta name="apple-mobile-web-app-title" content="FeiginElectric" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className={`${interFont.variable} ${interItalic.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <WarningPopup />
          <Header />
          <main className="flex-grow">
            {children} <Toaster />
          </main>

          <Footer />
          <ScrollToTopButton />
        </body>
      </html>
    </ViewTransitions>
  );
}
