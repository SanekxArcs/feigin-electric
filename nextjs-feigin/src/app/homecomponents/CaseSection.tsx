import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import CasesImage from "../assets/home/templateImage.webp";
import { TransitionLink } from "../components/utils/TransitionLink";
import HighlightedText from "../components/HighlightedText";

const plLang = {
  title: "Realne Wyniki, Realny Wpływ",
  description:
    "Dowiedz się, jak pomogliśmy firmom takim jak Twoja osiągnąć znaczne oszczędności energii, przedłużyć żywotność urządzeń i zmniejszyć ślad węglowy. Zapoznaj się z naszymi sukcesami, aby zobaczyć nasze rozwiązania w działaniu.",
  button: "Zobacz Wdrożenia",
  quote: {
    text: "Rozwiązania Fegin Electric zmniejszyły nasze koszty energii o 10%, i nie moglibyśmy być szczęśliwsi!",
    author:
      "— Haidil Mustafa Mohd Din, Maitenance Executive Dominos Pizza Singapore, Malaysia, Cambodia",
  },
  statistics: {
    savings: {
      title: "Średnie Oszczędności Energii",
      value: "6-14%",
    },
    implementations: {
      title: "Pomyślne Implementacje na Świecie",
      value: "1000+",
    },
    experience: {
      title: "Lata Doświadczenia w Branży",
      value: "10",
    },
  },
};
const CaseSection = () => {
  return (
    <section className="relative cases-section bg-fgreen-50 py-20">
      <div className=" container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-16">
          <div className="md:hidden text-center mb-6">
            <h2 className="text-4xl font-bold">
              <HighlightedText title={plLang.title} colorLine="bg-fgreen-200" />
            </h2>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 grid place-content-end">
            <Image
              src={CasesImage}
              alt="Case Studies"
              width={300}
              height={300}
              className="w-96 h-auto rounded-lg shadow-md  object-cover"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="hidden md:block text-4xl font-bold text-left mb-12">
              <HighlightedText title={plLang.title} colorLine="bg-fgreen-200" />
            </h2>
            <p className="mb-8 select-none">{plLang.description}</p>
            <blockquote className="italic text-lg mb-8 bg-white p-4 rounded-lg shadow-sm  select-none">
              {plLang.quote.text}
              <span className="block mt-2 font-bold text-base">
                {plLang.quote.author}
              </span>
            </blockquote>

            <TransitionLink href="/case-studies">
              <Button className="bg-fgreen-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 hover:ring-1 ring-offset-2 ring-fgreen-700">
                {plLang.button} <ChevronRight />
              </Button>
            </TransitionLink>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 text-center  select-none">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-fgreen-600">
              {plLang.statistics.savings.value}
            </h3>
            <p>{plLang.statistics.savings.title}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-fgreen-600">
              {plLang.statistics.implementations.value}
            </h3>
            <p>{plLang.statistics.implementations.title}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-fgreen-600">
              {plLang.statistics.experience.value}
            </h3>
            <p>{plLang.statistics.experience.title}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 h-12 pointer-events-none bg-gradient-to-b from-white z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none bg-gradient-to-t from-white z-10"></div>
    </section>
  );
};

export default CaseSection;
