// ProductsSection.tsx
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ECODSmartOptimizer from "../assets/WhatsApp Image 2023-11-14 at 19.35.55.png";
import Acrel from "../assets/wireless-electricity-monitor.webp";

const plLang = {
  title: "Nasze Produkty",
  products: {
    Ecod:{
      title: {
        first: "EC",
        second: "OD",
        third: "Smart Optimizer",
      },
      description: "Odblokuj efektywność energetyczną i obniż koszty",
      features: [
        "Osiąga oszczędności energii w wysokości 6-14%",
        "Utrzymuje optymalne poziomy napięcia",
        "Zwiększa żywotność urządzeń",
        "Chroni przed nadmiernym napięciem",
        "Zmniejsza emisję węgla",
        "Nie wymaga dodatkowej konserwacji",
        "Doskonale integruje się z istniejącymi systemami",
      ],
      button: "Zobacz ECOD Smart Optimizer",
    },
    Acrel: {
      title: {
        first: "Feigin",
        second: "Electric",
        third: "Wireless Energy Meter",
      },
      description: "Odblokuj efektywność energetyczną i obniż koszty",
      features: [
        "Pomiar: 3-fazowe napięcie, prąd, moc, współczynnik mocy, itp.",
        "Komunikacja: RS485, LoRa, 4G, WIFI, LoRaWan",
        "Maksymalny popyt",
        "Dokładność: Klasa 1.0",
      ],
      button: "Zobacz Feigin Electric Wireless Energy Meter",
    },

}
}

const ProductsSection = () => {
  return (
    <section className="products-section py-20">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-center">
            <span className="relative inline-block text-fgreen-950">
              {plLang.title}
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-10"></span>
            </span>
          </h2>
        </div>

        {/* Ecod Smart Optimizer */}
        <div className="product-item flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2">
            <Image
              src={ECODSmartOptimizer}
              alt="Feigin Electric"
              className="h-96 w-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h3 className="text-6xl font-bold mb-4">
              <span className="text-fred-600">
                {plLang.products.Ecod.title.first}
              </span>
              <span className="text-fgreen-700">
                {plLang.products.Ecod.title.second}
              </span>{" "}
              <br /> {plLang.products.Ecod.title.third}
            </h3>
            <p className="mb-4 text-xl font-medium">
              {plLang.products.Ecod.description}
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {plLang.products.Ecod.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link href="/ecod">
              <Button className="bg-red-400 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 hover:ring-1 ring-offset-2 ring-red-600">
                {plLang.products.Ecod.button} <ChevronRight />
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* ACREl */}
        <div className="product-item flex flex-col md:flex-row items-center my-12">
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h3 className="text-6xl font-bold mb-4">
              <span className="text-fred-600">
                {plLang.products.Acrel.title.first}
              </span>
              <span className="text-fgreen-700">{plLang.products.Acrel.title.second}</span>
              <br /> {plLang.products.Acrel.title.third}
            </h3>
            <p className="mb-4 text-xl font-medium">
              {plLang.products.Acrel.description}
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {plLang.products.Acrel.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link href="/acrel">
              <Button className="bg-red-400 px-6 py-3 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 hover:ring-1 ring-offset-2 ring-red-600">
                {plLang.products.Acrel.button} <ChevronRight />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image src={Acrel} alt="Feigin Electric" className="h-96 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
