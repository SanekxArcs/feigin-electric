import React from "react";
import { Eye, FileText, Settings, PlugZap } from "lucide-react";
import Image from "next/image";
import monitoring from "../assets/ecod/monitoringPl.webp";

const EcodMonitoringPlatform = () => {
  return (
    <section className="container mx-auto py-12 lg:py-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          <span className="relative inline-block text-fgreen-950">
            Platforma monitoringu internetowego dla systemu ECOD
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="bg-white lg:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row justify-center gap-8">
        <div className="lg:w-1/2 grid place-content-center">
          <ul className="list-disc list-outside space-y-4 text-gray-700 pl-5">
            {/* Live Monitoring */}
            <li className="flex items-start">
              <Eye className="w-12 h-12 text-fgreen-600 mr-3" />
              <div className="text-balance">
                <span className="font-bold">
                  Śledzenie zużycia energii na żywo:
                </span>
                Monitoruj swoje zużycie energii w czasie rzeczywistym, aż do
                poziomu każdego urządzenia lub sprzętu.
              </div>
            </li>
            {/* Detailed Reports */}
            <li className="flex items-start">
              <FileText className="w-12 h-12 text-fred-400 mr-3" />
              <div className="text-balance">
                <span className="font-bold">Szczegółowe raporty:</span> Uzyskaj
                dostęp do danych historycznych, aby zrozumieć trendy zużycia
                energii i wydajność na przestrzeni czasu.
              </div>
            </li>
            {/* Cost Savings Tips */}
            <li className="flex items-start">
              <PlugZap className="w-12 h-12 text-fgreen-600 mr-3" />
              <div className="text-balance">
                <span className="font-bold">
                  Wskazówki dotyczące oszczędności kosztów:
                </span>{" "}
                Sprawdź, ile energii oszczędzasz dzięki systemowi{" "}
                <span className="text-fred-600 font-bold">ECOD</span>, w tym
                rozbicia według urządzenia lub okresu.
              </div>
            </li>
            {/* Remote Control and Management */}
            <li className="flex items-start">
              <Settings className="w-12 h-12 text-fred-400 mr-3" />
              <div className="text-balance">
                <span className="font-bold">
                  Zdalne sterowanie i zarządzanie:
                </span>
                Monitoruj i dostosowuj ustawienia systemu zdalnie za pomocą
                platformy.
              </div>
            </li>
            {/* Compatibility with Energy Meters */}
            <li className="flex items-start">
              <PlugZap className="w-12 h-12 text-fgreen-600 mr-3" />
              <div className="text-balance">
                <span className="font-bold">
                  Kompatybilność z licznikami energii:
                </span>{" "}
                Platforma integruje się z licznikami energii, zapewniając
                dokładne odczyty zużycia energii i optymalizacji napięcia.
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 p-4 mx-auto">
          <Image
            src={monitoring}
            alt="Monitoring online"
            width={640}
            height={386}
            className="w-full rounded-md shadow-md ring-1 ring-fgreen-300 ring-offset-2"
          />
        </div>
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
  - Updated layout to ensure proper stacking for mobile (`flex-col md:flex-row`).
*/
