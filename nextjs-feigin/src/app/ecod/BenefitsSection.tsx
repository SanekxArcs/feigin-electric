import React from "react";
import { Icon as LucideIcon } from "lucide-react";
import { BatteryCharging, Monitor, Shield, Sun, Wrench } from "lucide-react";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  iconColor: string;
  descriptions: string[];
};

const benefitsData: Benefit[] = [
  {
    icon: <BatteryCharging className="w-8 h-8" />,
    title: "Oszczędność energii",
    iconColor: "fgreen-700",
    descriptions: ["Redukcja o 6-14%", "Efektywność kosztowa"],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Fotowoltaika",
    iconColor: "yellow-500",
    descriptions: [
      "Wzrost wydajności instalacji nawet o 82%",
      "Brak przerw produkcji energii elektrycznej",
    ],
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Monitoring",
    iconColor: "blue-600",
    descriptions: ["Integracja z aplikacja", "Dane w czasie rzeczywistym"],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Wydłużona żywotność",
    iconColor: "gray-700",
    descriptions: ["Mniejsze zużycie", "Zwiększona niezawodność"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ochrona przed przepięciami",
    iconColor: "fred-600",
    descriptions: ["Bezpieczeństwo urządzeń", "Integralność systemy"],
  },
];

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  iconColor: string;
  descriptions: string[];
};

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  iconColor,
  descriptions,
}) => (
  <div
    className={` p-6 rounded-lg shadow-lg hover:bg-fgreen-100 transition-all group`}
  >
    <div
      className={`flex items-center justify-center w-16 h-16 bg-fgreen-50 group-hover:bg-white rounded-full mb-4`}
    >
      <div className={`text-${iconColor} group-hover:text-yellow-500 w-8 h-8`}>
        {icon}
      </div>
    </div>
    <h3 className={`text-xl font-semibold text-fgreen-700 mb-2`}>{title}</h3>
    {descriptions.map((desc, index) => (
      <p key={index} className="text-gray-600">
        {desc}
      </p>
    ))}
  </div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          <span className="relative inline-block text-fgreen-950">
            Główne zalety ECOD
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-200 rounded-md z-10"></span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
        {benefitsData.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

/*
  This component is a responsive "Główne zalety ECOD" section that showcases the benefits of ECOD.
  - Uses reusable `BenefitCard` component to avoid code duplication.
  - `benefitsData` array is used to dynamically render each benefit card.
  - Tailwind CSS is used for styling and layout adjustments.
*/
