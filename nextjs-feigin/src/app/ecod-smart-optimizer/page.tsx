
import PageTopSection from "../components/PageTopSection";
import ECODSection from "./ECODSection";
import SectionTwo from "./SectionTwo";
import BenefitsSection from "./BenefitsSection";
import EnergyOptimizationSection from "./EnergyOptimizationSection";
import WorkingPrincipleSection from "./WorkingPrincipleSection";
import PhotovoltaicsPerformanceSection from "./PhotovoltaicsPerformanceSection";
import EcodSummaryPhotovoltaics from "./EcodSummaryPhotovoltaics";
import EcodMonitoringPlatform from "./EcodMonitoringPlatform";
import CertificatesSection from "./CertificatesSection";
import ProductLineSection from "./ProductLineSection";
import MaintenanceSection from "./MaintenanceSection";
import ComparisonBenefitsSection from "./ComparisonBenefitsSection";
import ComparisonChartsSection from "./ComparisonChartsSection";
import ProductBenefitsSection from "./ProductBenefitsSection";
import CallToActionSection from "../homecomponents/CallToActionSection";
import OurPartners from "../homecomponents/OurClients";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ECOD Smart Optimizer - Optymalizuj swoją energię, wydłuż żywotność, oszczędzaj koszty",
  description:
    "ECOD Smart Optimizer: Optymalizuj zużycie energii, wydłuż żywotność urządzeń, zmniejsz koszty i wpływ na środowisko. Sprawdź, dlaczego ECOD to najlepszy wybór.",
  openGraph: {
    title:
      "ECOD Smart Optimizer - Optymalizuj swoją energię, wydłuż żywotność, oszczędzaj koszty",
    description:
      "System ECOD koncentruje się na optymalizacji zużycia energii, aby oszczędzać koszty, chronić urządzenia i zmniejszać wpływ na środowisko.",
    url: "https://yourdomain.com/ecod-smart-optimizer",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/images/ecod-smart-optimizer.jpg",
        width: 1200,
        height: 630,
        alt: "ECOD Smart Optimizer - Optymalizacja energii",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOD Smart Optimizer - Optymalizuj swoją energię",
    description:
      "Zoptymalizuj zużycie energii, wydłuż żywotność urządzeń, i oszczędzaj koszty z systemem ECOD.",
    images: ["https://yourdomain.com/images/ecod-smart-optimizer.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/ecod-smart-optimizer",
  },
};

export default function Ecod() {

  const plLang = {
    title: "ECOD Smart Optimizer",
    description: "Optymalizuj swoją energię. Wydłuż żywotność. Oszczędzaj koszty.",
  }
  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      
      <div id="ecod">
        {/* Dlaczego ECOD? */}
        <ECODSection />
      {/* Sześć najczęstszych problemów z jakością energii elektrycznej */}
      <SectionTwo />
      {/* Dlaczego optymalizacja energii jest ważna? */}
      <EnergyOptimizationSection />
      {/* Główne zalety ECOD */}
      <BenefitsSection />
      {/* ECOD Zasada Działania */}
      <WorkingPrincipleSection />
      {/* Działanie z Fotowoltaiką */}
      <PhotovoltaicsPerformanceSection />
      {/* Bez ECOD VS ZECOD */}
      <ComparisonChartsSection />
      {/* Podsumowanie działania ECOD z Fotowoltaika */}
      <EcodSummaryPhotovoltaics />
      {/* Korzyści w porównaniu do konkurencji */}
      <ComparisonBenefitsSection />
      {/* Konserwacja */}
      <MaintenanceSection />
      {/* Platforma monitoringu internetowego dla systemu ECOD */}
      <EcodMonitoringPlatform />
      {/* Certyfikaty i Zatwierdzenia */}
      <CertificatesSection />
      {/* Linia produktów ECOD */}
      <ProductLineSection />
      {/* Wszystkie korzyści produktu */}
      <ProductBenefitsSection />
      {/* Nasi partnerzy */}
      <OurPartners />
      {/* Skontaktuj się z nami */}
      <CallToActionSection />
      </div>
      
    </>
  );
}
