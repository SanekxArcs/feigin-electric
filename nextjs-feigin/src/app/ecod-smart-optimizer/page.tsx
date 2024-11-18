
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

export default function Ecod() {

  const plLang = {
    title: "ECOD Smart Optimizer",
    description: "Optymalizuj swoją energię. Wydłuż żywotność. Oszczędzaj koszty.",
  }
  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
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
    </>
  );
}
