import Image from "next/image";
import CharakterystykaNapicia from "../assets/ecod/Charakterystyka napicia.webp";
import CharakterystykaNapiciaECOD from "../assets/ecod/Charakterystyka napie Ecodcia.webp";
import CharakterystykakW from "../assets/ecod/Charakterystyka kW.webp";
import CharakterystykakWECOD from "../assets/ecod/Charakterystyka kW ECOD.webp";


const ComparisonChartsSection = () => {
  return (
    <section className="container mx-auto py-12 lg:py-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-12">
          <span className="relative inline-block text-fgreen-950">
            Bez <span className="text-fred-600 font-bold">EC</span>
            <span className="text-fgreen-700 font-bold">OD</span> VS Z
            <span className="text-fred-600 font-bold pl-2">EC</span>
            <span className="text-fgreen-700 font-bold">OD</span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Charts Without ECOD */}
        <div className="bg-fred-50 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-fred-600 text-xl font-semibold mb-4">
            Charakterystyka napięcia
          </h3>

          <Image
            src={CharakterystykaNapicia}
            alt="Charakterystyka napięcia Bez ECOD"
            width={670}
            height={350}
            className="w-full rounded-md shadow-sm mb-4"
          />

          <h3 className="text-fred-600 text-xl font-semibold mb-4">
            Charakterystyka kW
          </h3>
          <Image
            src={CharakterystykakW}
            alt="Charakterystyka napięcia Bez ECOD"
            width={670}
            height={350}
            className="w-full rounded-md shadow-sm mb-4"
          />
        </div>
        {/* Charts With ECOD */}
        <div className="bg-fgreen-50 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-fgreen-700 text-xl font-semibold mb-4">
            Charakterystyka napięcia
          </h3>
          <Image
            src={CharakterystykaNapiciaECOD}
            alt="Charakterystyka napięcia Bez ECOD"
            width={670}
            height={350}
            className="w-full rounded-md shadow-sm mb-4"
          />
          <h3 className="text-fgreen-700 text-xl font-semibold mb-4">
            Charakterystyka kW
          </h3>
          <Image
            src={CharakterystykakWECOD}
            alt="Charakterystyka napięcia Bez ECOD"
            width={670}
            height={350}
            className="w-full rounded-md shadow-sm mb-4"
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonChartsSection;

/*
  This component is a responsive "Bez ECOD vs Z ECOD" section that visually compares the system performance with and without ECOD.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Displays four images of charts: two for without ECOD and two for with ECOD.
  - Charts are shown side by side to make the comparison easy to understand.
  - The color scheme (fred and fgreen) is used to differentiate between ECOD and non-ECOD conditions.
*/
