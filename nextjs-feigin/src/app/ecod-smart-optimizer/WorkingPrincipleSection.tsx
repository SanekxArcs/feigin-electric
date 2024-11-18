import React from "react";
import Image from "next/image";
import ChartVoltageCurrent from "../assets/ecod/ChartVoltageCurrent.webp";
import EfficiencyChart from "../assets/ecod/ecod-efficiency-chart.webp";

const WorkingPrincipleSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-lg shadow-lg mb-12">
        <div className="text-center mb-12">
          <h2 className="text-fred-600 text-3xl md:text-4xl font-bold mb-6">
            <span className="relative inline-block text-fgreen-950">
              <span className="text-fred-600 font-bold">EC</span>
              <span className="text-fgreen-700 font-bold">OD</span> Zasada
              Działania
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-200 rounded-md"></span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Opatentowana technologia{" "}
              <span className="text-fred-600 font-bold">EC</span>
              <span className="text-fgreen-700 font-bold">OD</span>
            </h3>
            <p className="text-gray-700 mb-4">
              Opatentowana technologia ECOD działa na zasadzie, w której
              elektroniczny kontroler reguluje kierunek prądu w cewce każdego
              transformatora (po jednym na fazę), kontrolując i równoważąc
              parametry sieci. Ma to na celu utrzymanie najwyższej wydajności
              przy minimalnych stratach mocy w sieci.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <Image
                src={ChartVoltageCurrent}
                alt="Wykres Prądowo-Napięciowy"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-left mb-12 flex flex-col justify-center items-center lg:items-start">
            <h3 className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              Sprawność
            </h3>
            <p className="text-gray-700">Na przykładzie klimatyzatorów:</p>
            <ul className="list-disc list-inside mt-4">
              <li>
                <span className="text-blue-600 font-bold">Seria 1</span> -
                sprawność
              </li>
              <li>
                <span className="text-fred-600 font-bold">Seria 2</span> - prąd
                (Amper)
              </li>
              <li>
                <span className="text-green-500 font-bold">Seria 3</span> -
                wentylator zewnętrzny
              </li>
              <li>
                <span className="text-green-700 font-bold">Seria 4</span> -
                wentylator wewnętrzny
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={EfficiencyChart}
              alt="Wykres sprawności ECOD Dla Silników Asynchronicznych"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
        <p className="text-gray-700 mt-6 text-center lg:text-left">
          Zgodnie ze schematem, możemy wyraźnie zauważyć, że sprawność
          klimatyzatora przy napięciu od 210 do 220 V wynosi blisko 100%.
          Oznacza to, że przy tym napięciu klimatyzator optymalnie wykorzystuje
          energię elektryczną, osiągając prawie 100% sprawności.
        </p>
      </section>
    </>
  );
};

export default WorkingPrincipleSection;

/*
  Changes made for better responsiveness and adaptiveness:
  - Adjusted padding (`px-4 sm:px-6 lg:px-8`) to enhance layout based on screen size.
  - Updated grid layout (`grid-cols-1 lg:grid-cols-2`) to better adapt content to different devices.
  - Modified text alignment (`text-center lg:text-left`) to improve readability on larger screens.
  - Added gap between grid elements for a cleaner look.
  - Ensured images scale properly with (`w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl`).
*/
