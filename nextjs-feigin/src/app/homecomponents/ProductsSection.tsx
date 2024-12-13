// ProductsSection.tsx
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ECODSmartOptimizerBlackRight from "../assets/ECOD.webp";

import Acrel from "../assets/home/wireless-electricity-monitor.webp";
import { TransitionLink } from "../components/utils/TransitionLink";
import HighlightedText from "../components/HighlightedText";

const plLang = {
  title: "Nasze Produkty",
  products: {
    Ecod: {
      title: {
        first: "EC",
        second: "OD",
        third: "Smart Optimizer",
      },
      description: "Pracuj efektywnie obniżając koszty",
      features: [
        "Obniża zużycie prądu 6-14%",
        "Zwrot z inwestycji 12 - 24 miesiące",
        "Utrzymuje optymalne poziom napięcia",
        "Wydłuża żywotność urządzeń",
        "Chroni przed przepięciami",
        "Zwiększa efektywność instalacji fotowoltaicznych nawet o 52%",
        "Zmniejsza emisję CO2",
        "Pracuje bezobsługowo",
        "Doskonale integruje się z każdą instalacją",
        "10 lat gwarancji!",
      ],
      button: "Zobacz ECOD Smart Optimizer",
    },
    Acrel: {
      title: {
        first: "Feigin",
        second: "Electric",
        third: "Analizator Energii Online",
      },
      description: "Świadomie korzystaj z prądu",
      features: [
        "Śledź parametry Twojego prądu z każdego miejsca na świecie",
        "Wykrywaj awarie, zaburzenia pracy, przypadkowo włączone urządzenia",
        "Dostep online do pełnych wyników pomiarów na żywo",
        "Dostęp online do pełnych, historycznych wyników pomiarów ",
        "Szeroki zakres pomiaru: 3-fazowe napięcie, natężenie, moc bierna, moc czynna, harmoniczne, itp.",
      ],
      button: "Zobacz Wireless Energy Meter",
    },
  },
};

const ProductsSection = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <HighlightedText
              title={plLang.title}
              colorLine="bg-fred-100"
              colorText="text-fred-950"
            />
          </h2>
        </div>

        {/* Ecod Smart Optimizer */}
        <div className="product-item flex flex-col md:flex-row items-center mb-16 md:mb-32">
          <div className="relative md:w-1/2 w-full flex justify-center items-center">
            <Image
              src={ECODSmartOptimizerBlackRight}
              alt="Feigin Electric ECOD Smart Optimizer"
              quality={99}
              placeholder="empty"
              className="h-64 w-full md:w-auto object-contain"
            />
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="bg-fred-100 rounded-full w-72 h-72 md:w-96 md:h-96 animate-pulse anim"></div>
              <div className="bg-fred-200 rounded-full w-56 h-56 md:w-72 md:h-72 absolute animate-pulse"></div>
              <div className="bg-fred-300 rounded-full w-40 h-40 md:w-56 md:h-56 absolute animate-pulse"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-12 mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-bold mb-4 select-none">
              <span className="text-fred-600">
                {plLang.products.Ecod.title.first}
              </span>
              <span className="text-fgreen-700">
                {plLang.products.Ecod.title.second}
              </span>
              <br /> {plLang.products.Ecod.title.third}
            </h3>
            <p className="mb-4 text-lg md:text-xl font-medium text-gray-800 select-none">
              {plLang.products.Ecod.description}
            </p>
            <ul className="list-disc pl-5 mb-6 text-left space-y-2 text-sm md:text-base select-none">
              {plLang.products.Ecod.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <TransitionLink href="/ecod-smart-optimizer">
              <Button className="bg-red-200 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 hover:ring-1 ring-offset-2 ring-red-600 px-4 py-2 md:px-6 md:py-3">
                {plLang.products.Ecod.button}
                <ChevronRight />
              </Button>
            </TransitionLink>
          </div>
        </div>

        {/* ACREl */}
        <div className="product-item flex flex-col-reverse md:flex-row items-center my-10 md:my-20">
          <div className="md:w-1/2 w-full md:pl-12 mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-bold mb-4 select-none">
              <span className="text-fred-600">
                {plLang.products.Acrel.title.first}
              </span>
              <span className="text-fgreen-700">
                {plLang.products.Acrel.title.second}
              </span>
              <br /> {plLang.products.Acrel.title.third}
            </h3>
            <p className="mb-4 text-lg md:text-xl font-medium select-none">
              {plLang.products.Acrel.description}
            </p>
            <ul className="list-disc  text-left pl-5 mb-6 space-y-2 text-sm md:text-base  select-none">
              {plLang.products.Acrel.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <TransitionLink href="/feigin-analizator-energii-online">
              <Button className="bg-red-200 px-4 py-2 md:px-6 md:py-3 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 hover:ring-1 ring-offset-2 ring-red-600">
                {plLang.products.Acrel.button} <ChevronRight />
              </Button>
            </TransitionLink>
          </div>
          <div className="relative md:w-1/2 w-full mt-6 md:mt-0 flex justify-center">
            <Image
              src={Acrel}
              alt="Feigin Electric"
              className="h-72 md:h-96 w-full md:w-auto object-contain"
            />
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="bg-fred-100 rounded-full w-72 h-72 md:w-96 md:h-96 animate-pulse"></div>
              <div className="bg-fred-200 rounded-full w-56 h-56 md:w-72 md:h-72 absolute animate-pulse"></div>
              <div className="bg-fred-300 rounded-full w-40 h-40 md:w-56 md:h-56 absolute animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
