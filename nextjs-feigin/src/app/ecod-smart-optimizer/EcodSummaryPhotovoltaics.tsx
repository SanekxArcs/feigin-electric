import React from "react";
import { BatteryCharging, ChevronsRight, TrendingUp, X, Zap } from "lucide-react";

const EcodSummaryPhotovoltaics = () => {
  return (
    <section className="hidden md:block container mx-auto py-12 lg:py-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-10">
          <span className="relative inline-block text-fred-950">
            Podsumowanie działania ECOD z Fotowoltaika
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fred-100 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className=" grid grid-cols-3 grid-rows-2 gap-8 mx-auto">
        {/* ECOD Implementation Block */}
        <div className=" relative flex flex-col justify-center items-center p-4 border-2 border-gray-500 rounded-lg shadow-md  row-start-1 col-start-1">
          <Zap className="w-10 h-10 text-gray-500 mr-4" />
          <div>
            <h3 className="text-lg text-gray-500 font-bold">
              Bez wdrozenia ECOD
            </h3>
          </div>
          <ChevronsRight className="-right-10  top-1/2 -translate-y-1/2 absolute w-20 h-20 text-gray-500 ml-auto" />
        </div>
        <div className=" relative flex flex-col justify-center items-center p-4 border-2 border-blue-500 rounded-lg shadow-md  row-start-2 col-start-1">
          <Zap className="w-10 h-10 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg text-blue-500 font-bold">Wdrożenie ECOD</h3>
          </div>
          <ChevronsRight className="-right-10  top-1/2 -translate-y-1/2 absolute w-20 h-20 text-blue-500 ml-auto" />
        </div>

        <div className="relative flex flex-col items-center justify-center border-2 border-fred-500 p-6 bg-fred-50 rounded-lg shadow-md row-start-1 col-start-2">
          <BatteryCharging className="w-12 h-12 text-fred-600 mb-4" />
          <p className="text-center text-fred-700 font-bold mb-2">
            Produkcja energii bez ECOD -13,38 kWh
          </p>
          <X className="-right-10  top-1/2 -translate-y-1/2 absolute w-20 h-20 text-fred-500 ml-auto" />
        </div>

        <div className="relative flex flex-col border-2 border-fgreen-500 items-center justify-center  p-6  rounded-lg shadow-md row-start-2 col-start-2">
          <BatteryCharging className="w-12 h-12 text-fgreen-700 mb-4" />
          <p className="text-center text-fgreen-700 font-bold mb-2">
            Produkcja energii z ECOD -25,09 kWh
          </p>
          <ChevronsRight className="-right-10  top-1/2 -translate-y-1/2 absolute w-20 h-20 text-fgreen-600 ml-auto" />
        </div>
        {/* Without ECOD Block */}
        {/* Improvement Block */}
        <div className="flex flex-col items-center justify-center border-2 border-fgreen-500  p-6 bg-fgreen-100 rounded-lg shadow-md row-start-2 col-start-3">
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
