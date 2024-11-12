import React from 'react';
import {
  Monitor,
  DollarSign,
  Clock,
  TrendingUp,
  Package,
  Sun,
  CheckCircle,
  Wrench,
  BarChart,
  Scale,
} from "lucide-react";

const benefitsData = [
  { icon: Monitor, color: "text-blue-400", label: "Monitoring" },
  { icon: Package, color: "text-purple-400", label: "Rozmiar i waga" },
  { icon: CheckCircle, color: "text-pink-400", label: "Gwarancja" },
  {
    icon: Sun,
    color: "text-purple-500",
    label: "Wsparcie instalacji fotowoltaicznych",
  },
  { icon: Wrench, color: "text-red-400", label: "Łatwa instalacja" },
  { icon: DollarSign, color: "text-fgreen-500", label: "Oszczędności energii" },
  { icon: Clock, color: "text-sky-400", label: "Długowieczność urządzeń" },
  {
    icon: TrendingUp,
    color: "text-fgreen-600",
    label: "Szybki zwrot z inwestycji",
  },
  { icon: Scale, color: "text-yellow-400", label: "Skalowalność" },
  { icon: BarChart, color: "text-orange-400", label: "Kompatybilność" },
];

const ProductBenefitsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          
          <span className="relative inline-block text-fgreen-950">
            Wszystkie korzyści produktu
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 w-1/2 mx-auto">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-40"
          >
            <benefit.icon className={`w-16 h-16 ${benefit.color} mb-2`} />
            <p className="text-gray-700 font-semibold">{benefit.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductBenefitsSection;

/*
  This component is a responsive "Wszystkie korzyści produktu" section that displays the various benefits of the ECOD product.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Icons from Lucide React are used to visually represent each benefit, making the section more engaging.
  - The layout wraps flexibly to ensure optimal viewing on both smaller and larger screens.
  - The color scheme is consistent with the brand colors, ensuring visual cohesion.
*/
