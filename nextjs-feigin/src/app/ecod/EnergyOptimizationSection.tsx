import { DollarSign, Settings } from 'lucide-react';

export default function EnergyOptimizationSection() {
  return (
    <section className="container px-4 py-12 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-fred-600 text-3xl md:text-4xl font-bold">
          Dlaczego optymalizacja energii jest ważna?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="bg-fgreen-50 rounded-lg p-6 shadow-md">
            <h3 className="text-fgreen-700 text-2xl font-semibold mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-fgreen-600" />
              Korzyści Finansowe
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-fred-800">Obniżenie Wydatków</li>
              <li className="text-fred-800">Wydajność Fotowoltaiki</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-fgreen-50 rounded-lg p-6 shadow-md">
            <h3 className="text-fgreen-700 text-2xl font-semibold mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-fgreen-600" />
              Korzyści Techniczne
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-fred-800">Efektywność Energetyczna</li>
              <li className="text-fred-800">Długowieczność Sprzętu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 lg:mt-20">
        <p className="text-lg md:text-xl font-semibold text-fred-900">
          RÓWNOWAŻNE KORZYŚCI FINANSOWE I TECHNICZNYCH OPTYMALIZACJI ENERGII
        </p>
      </div>
    </section>
  );
}
