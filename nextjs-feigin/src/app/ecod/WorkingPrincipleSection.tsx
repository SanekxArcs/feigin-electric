import React from 'react';
import { Bolt, TrendingUp } from 'lucide-react';

const WorkingPrincipleSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">ECOD Zasada Działania</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Description Section */}
        <div className="bg-fgreen-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-fgreen-800 mb-4">
            Opatentowana technologia ECOD
          </h3>
          <p className="text-gray-700 mb-4">
            Opatentowana technologia ECOD działa na zasadzie, w której elektroniczny kontroler reguluje kierunek prądu w cewce każdego transformatora (po jednym na fazę), kontrolując i równoważąc parametry sieci. Ma to na celu utrzymanie najwyższej wydajności przy minimalnych stratach mocy w sieci.
          </p>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-xl font-semibold text-fred-600 mb-4">
            Wykres Prądowo-Napięciowy
          </h3>
          <div className="flex items-center justify-center">
            <img
              src="/images/ecod_chart.png"
              alt="Wykres Prądowo-Napięciowy"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
          <div className="flex items-center mt-4">
            <Bolt className="text-fred-600 w-8 h-8 mr-3" />
            <span className="text-gray-700 font-medium">
              With Load but without use of ECOD Smart Optimizer
            </span>
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="text-fgreen-600 w-8 h-8 mr-3" />
            <span className="text-gray-700 font-medium">
              With Load with use of ECOD Smart Optimizer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrincipleSection;

/*
  This component is a responsive "ECOD Zasada Działania" section that showcases the working principle of ECOD technology.
  - Uses Tailwind CSS for styling, adapting the layout to different screen sizes.
  - Includes an informative text section alongside a visual representation (chart).
  - Icons (Bolt, TrendingUp) are used to differentiate various scenarios visually.
  - The colors used are consistent with the provided palettes (fred and fgreen).
*/
