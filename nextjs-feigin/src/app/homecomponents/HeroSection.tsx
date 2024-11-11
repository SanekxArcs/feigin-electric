// HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import backgroundSvg from "../assets/blob-scene-haikei (1).svg";
import FeiginElectricLogo from "../assets/FeiginElectricLogo.svg";

const plLang = {
  title: "Technologia Oszczędzania Energii",
  description:
    "Najbardziej natychmiastowy i praktyczny sposób na obniżenie emisji węgla i przyspieszenie rewolucji ekologicznej to po prostu zużywanie mniej energii.",
  button: "Zobacz nasze produkty",
}
const enLang = {
  title: "Energy Saving Technology",
  description:
    "The immediate and most practical way to lower carbon emissions and drive the ecological revolution ahead is to simply use less energy.",
  button: "View Our Products",
}

const HeroSection = () => {
  return (
    <section className="hero-section bg-fred-50 relative">
      <div className="absolute inset-0">
        <Image
          src={backgroundSvg}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-6 flex flex-col items-center justify-center h-screen relative z-10">
        <Image
          src={FeiginElectricLogo}
          alt="Feigin Electric"
          className="h-64 w-auto"
        />
        <div className="flex flex-col items-end">
          <h1 className="text-5xl font-bold text-right text-fgreen-800 mb-6">
            {plLang.title}
          </h1>
          <p className="text-lg text-right mb-8 w-1/2">
            {plLang.description}
          </p>
          <Link href="/products">
            <Button className="bg-fred-400 py-6 ring-fred-400 px-12 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 ring-1 ring-offset-2 hover:ring-fred-600 hover:ring-2">
              {plLang.button} <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-white z-20"></div>
    </section>
  );
};

export default HeroSection;
