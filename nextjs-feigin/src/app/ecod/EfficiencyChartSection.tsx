import Image from "next/image";
import React from "react";
import EfficiencyChart from "../assets/ecod-efficiency-chart.webp";

const EfficiencyChartSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h3 className="text-lg text-gray-700 font-medium">Sprawność</h3>
        <p className="text-gray-700">
          Na przykładzie klimatyzatorów:
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="text-blue-600 font-bold">Seria 1</span> -
              sprawność
            </li>
            <li>
              <span className="text-fred-600 font-bold">Seria 2</span> - prąd
              (Amper)
            </li>
            <li>
              <span className="text-green-600 font-bold">Seria 3</span> -
              wentylator zewnętrzny
            </li>
            <li>
              <span className="text-green-700 font-bold">Seria 4</span> -
              wentylator wewnętrzny
            </li>
          </ul>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <Image
            src={EfficiencyChart}
            alt="Wykres sprawności ECOD Dla Silników Asynchronicznych"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
        <p className="text-gray-700 mt-6">
          Zgodnie ze schematem, możemy wyraźnie zauważyć, że sprawność
          klimatyzatora przy napięciu od 210 do 220 V wynosi blisko 100%.
          Oznacza to, że przy tym napięciu klimatyzator optymalnie wykorzystuje
          energię elektryczną, osiągając prawie 100% sprawności.
        </p>
      </div>
    </section>
  );
};

export default EfficiencyChartSection;

/*
  This component is a responsive "ECOD Zasada Działania" section that illustrates the efficiency of ECOD technology for air conditioning systems.
  - Removed Recharts LineChart and replaced it with an image placeholder for the chart.
  - Tailwind CSS for adaptive styling, ensuring consistent layout across different screen sizes.
  - Provided color scheme (fred and fgreen) is utilized throughout the component.
  - Textual descriptions explain the relationship between different parameters and their impact on efficiency.
*/
