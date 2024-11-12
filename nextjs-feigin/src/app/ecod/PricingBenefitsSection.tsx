import React from 'react';
import { DollarSign, TrendingUp, Shield, Lightbulb, Sun, Cloud, Wind } from 'lucide-react';

const PricingBenefitsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-2">Ocena Cenowa</h2>
        <p className="text-gray-600 text-lg">Zwrot 1-3 lata</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center text-center">
          <DollarSign className="w-12 h-12 text-fgreen-600 mb-2" />
          <p className="text-gray-700 font-semibold">Inwestuj</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Lightbulb className="w-12 h-12 text-yellow-500 mb-2" />
          <p className="text-gray-700 font-semibold">Redukcja Zużycia Energii</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TrendingUp className="w-12 h-12 text-purple-500 mb-2" />
          <p className="text-gray-700 font-semibold">Zyskaj Za Darmo</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Sun className="w-12 h-12 text-orange-500 mb-2" />
          <p className="text-gray-700 font-semibold">Wydłużenie Żywotności Sprzętu</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Shield className="w-12 h-12 text-blue-500 mb-2" />
          <p className="text-gray-700 font-semibold">Ochrona Sprzętu</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Wind className="w-12 h-12 text-green-500 mb-2" />
          <p className="text-gray-700 font-semibold">Redukcja Emisji CO2</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Cloud className="w-12 h-12 text-fgreen-700 mb-2" />
          <p className="text-gray-700 font-semibold">Wzrost Produkcji z Fotowoltaiki</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TrendingUp className="w-12 h-12 text-fgreen-800 mb-2" />
          <p className="text-gray-700 font-semibold">Zwiększenie Efektywności</p>
        </div>
      </div>
    </section>
  );
};

export default PricingBenefitsSection;

/*
  This component is a responsive "Ocena Cenowa" section that outlines the financial and environmental benefits of the ECOD system.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Includes icons from Lucide React to visually represent each benefit, making the information more engaging.
  - The color scheme (fred and fgreen) and distinct icons help users easily understand the timeline and benefits.
*/
