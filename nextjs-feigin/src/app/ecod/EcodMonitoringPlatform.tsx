import React from 'react';
import { Eye, FileText, Settings, PlugZap } from 'lucide-react';

const EcodMonitoringPlatform = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">Platforma monitoringu internetowego dla systemu ECOD</h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <ul className="list-disc list-outside space-y-4 text-gray-700 pl-5">
          {/* Live Monitoring */}
          <li className="flex items-start">
            <Eye className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">Śledzenie zużycia energii na żywo:</span> Monitoruj swoje zużycie energii w czasie rzeczywistym, aż do poziomu każdego urządzenia lub sprzętu.
            </div>
          </li>
          {/* Detailed Reports */}
          <li className="flex items-start">
            <FileText className="w-6 h-6 text-fred-500 mr-3" />
            <div>
              <span className="font-bold">Szczegółowe raporty:</span> Uzyskaj dostęp do danych historycznych, aby zrozumieć trendy zużycia energii i wydajność na przestrzeni czasu.
            </div>
          </li>
          {/* Cost Savings Tips */}
          <li className="flex items-start">
            <PlugZap className="w-6 h-6 text-fgreen-700 mr-3" />
            <div>
              <span className="font-bold">Wskazówki dotyczące oszczędności kosztów:</span> Sprawdź, ile energii oszczędzasz dzięki systemowi <span className="text-fred-600 font-bold">ECOD</span>, w tym rozbicia według urządzenia lub okresu.
            </div>
          </li>
          {/* Remote Control and Management */}
          <li className="flex items-start">
            <Settings className="w-6 h-6 text-fred-600 mr-3" />
            <div>
              <span className="font-bold">Zdalne sterowanie i zarządzanie:</span> Monitoruj i dostosowuj ustawienia systemu zdalnie za pomocą platformy.
            </div>
          </li>
          {/* Compatibility with Energy Meters */}
          <li className="flex items-start">
            <PlugZap className="w-6 h-6 text-fgreen-800 mr-3" />
            <div>
              <span className="font-bold">Kompatybilność z licznikami energii:</span> Platforma integruje się z licznikami energii, zapewniając dokładne odczyty zużycia energii i optymalizacji napięcia.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EcodMonitoringPlatform;

/*
  This component is a responsive "Platforma monitoringu internetowego dla systemu ECOD" section that describes the features of the monitoring platform for ECOD.
  - Uses Tailwind CSS for styling to ensure the component is adaptive and responsive across different devices.
  - Icons from Lucide React are used to represent each feature, providing a clear visual aid.
  - The color scheme (fred and fgreen) is used consistently to highlight different aspects of the platform.
*/