
import PageTopSection from "../components/PageTopSection";
import ECODSection from "../ecod/ECODSection";
import SectionTwo from "../ecod/SectionTwo";
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
    <PageTopSection
          title={plLang.title}
          description={plLang.description}
        />
      <ECODSection/>
      <SectionTwo/>
      <EnergyOptimizationSection/>
      <BenefitsSection/>
      <WorkingPrincipleSection/>
      <MaintenanceSection/>

      <PhotovoltaicsPerformanceSection/>
      <ComparisonBenefitsSection/>
      <EcodSummaryPhotovoltaics/>
      <ComparisonChartsSection/>
      <MaintenanceSection/>
      
      <EcodMonitoringPlatform/>
      <CertificatesSection/>
      <ProductLineSection/>
      
      <ProductBenefitsSection/>
      <OurPartners/>
      <CallToActionSection/>


    </>
  );
}
