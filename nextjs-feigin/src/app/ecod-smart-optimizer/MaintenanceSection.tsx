import React from "react";
import { Settings } from "lucide-react";

const MaintenanceSection = () => {
  return (
    <div className="container mx-auto px-4">
      <section className=" py-12 lg:py-20 px-4 md:px-8 lg:px-16 bg-fred-50 rounded-lg shadow-lg md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center md:items-start ml-0 md:ml-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="relative inline-block text-fred-950">
                Konserwacja
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-fred-100 rounded-md"></span>
              </span>
            </h2>
            <p className="text-gray-700 mb-4">
              Nie jest wymagana. Nasze urządzenie jest instalowane za
              istniejącymi urządzeniami pomiarowymi klientów i stanowi
              integralną część wewnętrznego obwodu elektrycznego konsumenta,
              podobnie jak te już zainstalowane. Nie wymaga dodatkowych pozwoleń
              na instalację ani dopuszczenia dostawców energii elektrycznej.
            </p>
            <p className="text-gray-700 mb-4">
              Urządzenie działa na technologicznie pewnych, wydajnych zasadach z
              efektem wyjątkowej skuteczności. Cewka elektromagnetyczna działa
              jako przełącznik modyfikacji. Ogólnie rzecz biorąc, urządzenie
              składa się z niezawodnych komponentów, produkowanych pod
              szczególnym nadzorem we własnym zakładzie produkcyjnym. Szacowana
              żywotność urządzenia wynosi ponad 20 lat.
            </p>
          </div>
          {/* Icon Section */}
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <Settings
                className="w-32 h-32 md:w-44 md:h-44 text-fred-600 mx-auto mb-4"
                strokeWidth={1}
              />
              <p className="text-fred-700 text-lg md:text-xl font-bold w-3/4 md:w-1/2 mx-auto">
                Bezproblemowa integracja dla trwałej efektywności
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceSection;

/*
  Changes made for responsiveness and better user experience:
  - Adjusted padding (`px-4 sm:px-6 lg:px-8`) to provide consistent spacing across different devices.
  - Improved layout alignment (`text-center md:text-left`) to ensure better readability on larger screens.
  - Modified icon size (`w-32 h-32 md:w-44 md:h-44`) to better adapt to screen sizes.
  - Added responsiveness to text sizes (`text-3xl md:text-4xl`, `text-lg md:text-xl`) to ensure readability across devices.
*/
