
import PageTopSection from "../components/PageTopSection";
import ProductsSection from "../homecomponents/ProductsSection";
import OurPartners from "../homecomponents/OurClients";
import CallToActionSection from "../homecomponents/CallToActionSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Nasze Produkty | Feigin Electric',
  description: 'Odkryj nasze innowacyjne produkty, w tym ECOD Smart Optimizer oraz Feigin Electric Analizator Energii Online. Sprawdź jak możesz zwiększyć efektywność energetyczną i obniżyć koszty!',
  openGraph: {
    title: 'Nasze Produkty | Feigin Electric',
    description: 'Poznaj nasze nowoczesne produkty, które pozwolą Ci zoptymalizować zużycie energii i zwiększyć efektywność instalacji fotowoltaicznych. Zobacz ECOD Smart Optimizer i Analizator Energii Online.',
    url: 'https://feiginelectric.com/nasze-produkty',
    type: 'website',
    images: [
      {
        url: 'https://feiginelectric.com/images/ecod-smart-optimizer.jpg',
        width: 1200,
        height: 630,
        alt: 'ECOD Smart Optimizer - Zwiększ efektywność instalacji fotowoltaicznych',
      },
      {
        url: 'https://feiginelectric.com/images/feigin-analizator-energii.jpg',
        width: 1200,
        height: 630,
        alt: 'Feigin Electric Analizator Energii Online - Świadome korzystanie z energii',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasze Produkty | Feigin Electric',
    description: 'Poznaj nasze produkty, które pomagają obniżyć zużycie energii i zwiększyć efektywność. Sprawdź ECOD Smart Optimizer i Analizator Energii Online.',
    images: ['https://feiginelectric.com/images/ecod-smart-optimizer.jpg'],
  },
}

const plLang = {
  title: "Nasze Produkty",
  description: "Nasze produkty na rynku europejskim",
};

export default function ProductsPage() {
  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      <ProductsSection />
      <OurPartners />
      <CallToActionSection />
    </>
  );
}
