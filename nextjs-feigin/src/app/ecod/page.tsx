import {
  LineChart,
  Lightbulb,
  Wrench ,
  Shield,
  Leaf,
  Sun,
  Gauge,
  Settings,
  FileArchive ,
  Bolt
} from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PageTopSection from "../components/PageTopSection";
import ECODSection from "../ecod/ECODSection";
import SectionTwo from "../ecod/SectionTwo";
import BenefitsSection from "./BenefitsSection";
import EnergyOptimizationSection from "./EnergyOptimizationSection";
import WorkingPrincipleSection from "./WorkingPrincipleSection";
import EfficiencyChartSection from "./EfficiencyChartSection";
import PhotovoltaicsPerformanceSection from "./PhotovoltaicsPerformanceSection";
import EcodSummaryPhotovoltaics from "./EcodSummaryPhotovoltaics";
import EcodMonitoringPlatform from "./EcodMonitoringPlatform";
import CertificatesSection from "./CertificatesSection";
import ProductLineSection from "./ProductLineSection";
import MaintenanceSection from "./MaintenanceSection";
import ComparisonBenefitsSection from "./ComparisonBenefitsSection";
import PricingBenefitsSection from "./PricingBenefitsSection";
import WorkingPrincipleSectionTwo from "./WorkingPrincipleSectiontwo";
import ComparisonChartsSection from "./ComparisonChartsSection";
import ProductBenefitsSection from "./ProductBenefitsSection";

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
      <EfficiencyChartSection/>
      <PhotovoltaicsPerformanceSection/>
      <EcodSummaryPhotovoltaics/>
      <EcodMonitoringPlatform/>
      <CertificatesSection/>
      <ProductLineSection/>
      <MaintenanceSection/>
      <ComparisonBenefitsSection/>
      <PricingBenefitsSection/>
      <WorkingPrincipleSectionTwo/>
      <ComparisonChartsSection/>
      <ProductBenefitsSection/>


      <div className="container mx-auto">
        {/* Hero Section */}
        

        {/* Product Overview */}
        <section className="product-overview bg-white py-10">
          <Card className="text-center">
            <CardHeader>
              <h2 className="text-2xl font-semibold">
                Revolutionary Energy Optimization
              </h2>
            </CardHeader>
            <CardContent>
              <p className="mt-2">
                The Ecod Smart Optimizer reduces energy consumption by
                maintaining the voltage at the optimal level, saving{" "}
                <span className="font-semibold">6-14%</span> on electricity
                bills.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Product Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center">
              <div className="text-wrapper">
                <h2 className="text-xl font-semibold">
                  Saves 6-14% on <br /> Energy Bills
                </h2>
                <p className="mt-2">
                  Cut down your electricity costs by 6-14%. The Ecod Smart
                  Optimizer helps you maintain optimal voltage levels, ensuring
                  efficient energy use without compromising performance.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="https://feiginelectric.com/wp-content/themes/ecnology/images/ecod/ecod-product.png"
                  alt="ECOD Energy Optimizer"
                  className="w-full"
                  width={500} // specify width
                  height={300} // specify height
                />
              </div>
            </div>

            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <LineChart className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">Return on Investment in 1-3 Years</span>
              </li>
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">Reduce Energy Consumption</span>
              </li>
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Wrench className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">Gain Extended Equipment Lifespan</span>
              </li>
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">Protect Equipment</span>
              </li>
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">
                  Reduce CO<sub>2</sub> Emissions
                </span>
              </li>
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">
                  Integrate Solar Panels with the Grid
                </span>
              </li>
              <li className="flex items-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Gauge className="h-6 w-6 text-green-600" />
                </div>
                <span className="ml-4">Gain Increased Efficiency</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
