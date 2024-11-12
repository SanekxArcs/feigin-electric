import React from "react";
import { BatteryCharging, TrendingUp, Zap } from "lucide-react";

const EcodSummaryPhotovoltaics = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          Podsumowanie działania ECOD z Fotowoltaika
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-around gap-8">
        {/* ECOD Implementation Block */}
        <div className="flex items-center lg:w-1/4 p-4 border-2 border-blue-500 rounded-lg shadow-md">
          <Zap className="w-10 h-10 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg text-blue-500 font-bold">Wdrożenie ECOD</h3>
          </div>
        </div>

        {/* Without ECOD Block */}
        <div className="flex flex-col items-center justify-center lg:w-1/4 p-6 bg-fred-50 rounded-lg shadow-md">
          <BatteryCharging className="w-12 h-12 text-fred-600 mb-4" />
          <p className="text-center text-fred-700 font-bold mb-2">
            Produkcja energii bez ECOD -13,38 kWh
          </p>
        </div>

        {/* With ECOD Block */}
        <div className="flex flex-col items-center justify-center lg:w-1/4 p-6 bg-fgreen-50 rounded-lg shadow-md">
          <BatteryCharging className="w-12 h-12 text-fgreen-700 mb-4" />
          <p className="text-center text-fgreen-700 font-bold mb-2">
            Produkcja energii z ECOD -25,09 kWh
          </p>
        </div>

        {/* Improvement Block */}
        <div className="flex flex-col items-center justify-center lg:w-1/4 p-6 bg-fgreen-100 rounded-lg shadow-md">
          <TrendingUp className="w-12 h-12 text-fgreen-600 mb-4" />
          <p className="text-center text-fgreen-900 font-bold">
            do 88% poprawa w produkcji energii
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcodSummaryPhotovoltaics;

/*
  This component is a responsive "Podsumowanie działania ECOD z Fotowoltaika" section that visually summarizes the energy efficiency results of using ECOD technology.
  - It includes four blocks that represent different stages/results, each visually distinct with icons and colors for better understanding.
  - Uses Tailwind CSS for adaptive styling, ensuring a consistent experience across different screen sizes.
  - The color scheme (fred and fgreen) is utilized for clear differentiation of information.
*/
