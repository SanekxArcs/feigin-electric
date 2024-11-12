import React from 'react';
import { Settings } from 'lucide-react';

const MaintenanceSection = () => {
  return (
    <section className="container  px-4 py-10 bg-fred-50 rounded-lg shadow-lg my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="relative inline-block text-fred-950">
              Konserwacja
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-fred-200 rounded-md"></span>
            </span>
          </h2>
          <p className="text-gray-700 mb-4 text-balance">
            Nie jest wymagana. Nasze urządzenie jest instalowane za istniejącymi
            urządzeniami pomiarowymi klientów i stanowi integralną część
            wewnętrznego obwodu elektrycznego konsumenta, podobnie jak te już
            zainstalowane. Nie wymaga dodatkowych pozwoleń na instalację ani
            dopuszczenia dostawców energii elektrycznej.
          </p>
          <p className="text-gray-700 mb-4 text-balance">
            Urządzenie działa na technologicznie pewnych, wydajnych zasadach z
            efektem wyjątkowej skuteczności. Cewka elektromagnetyczna działa
            jako przełącznik modyfikacji. Ogólnie rzecz biorąc, urządzenie
            składa się z niezawodnych komponentów, produkowanych pod szczególnym
            nadzorem we własnym zakładzie produkcyjnym. Szacowana żywotność
            urządzenia wynosi ponad 20 lat.
          </p>
        </div>
        {/* Icon Section */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Settings
              className="w-44 h-44 text-fred-600 mx-auto mb-4"
              strokeWidth={1}
            />
            <p className="text-fred-700 text-xl font-bold w-1/2 text-balance mx-auto">
              Bezproblemowa integracja dla trwałej efektywności
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;

/*
  This component is a responsive "Konserwacja" section that provides information about the maintenance requirements of the ECOD product.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - The content is split into two sections: descriptive text and a visual/icon section.
  - The color scheme (fred and fgreen) is used consistently to match the branding.
*/
