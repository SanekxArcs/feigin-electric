
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import backgroundSvg from "../assets/home/hero waves.svg";
import FeiginElectricLogo from "../assets/FeiginElectricLogo.svg";
import { TransitionLink } from "../components/utils/TransitionLink";

const plLang = {
  title: "Technologia Oszczędzania Energii",
  description:
    "Zmniejszenie zużycia energii to natychmiastowy i praktyczny sposób na obniżenie emisji dwutlenku węgla i przyspieszenie rewolucji ekologicznej.",
  button: "Zobacz Produkty",
};
const HeroSection = () => {
  return (
    <section className="hero-section bg-fred-50 relative">
      <div className="absolute inset-0">
        <Image
          src={backgroundSvg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=" animate-pulse"
        />
      </div>
      <div className="container mx-auto px-6 flex flex-col items-center justify-center h-[90vh] relative z-10">
        
        <Image
          src={FeiginElectricLogo}
          alt="Feigin Electric"
          className="h-32 w-auto md:h-48 lg:h-64"
        />
        <div className="flex flex-col items-end w-full  md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-right text-fgreen-800 mb-4 md:mb-6 select-none">
            {plLang.title}
          </h1>
          <p className="text-base text-balance md:text-lg lg:text-xl text-right mb-6 md:mb-8 select-none">
            {plLang.description}
          </p>
          <TransitionLink href="/products">
            <Button className="bg-fred-400 py-4 px-8 md:py-6 md:px-12 ring-fred-400 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 ring-1 ring-offset-2 hover:ring-fred-600 hover:ring-2">
              {plLang.button} <ChevronRight />
            </Button>
          </TransitionLink>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-b from-white z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-white z-10"></div>
    </section>
  );
};

export default HeroSection;
