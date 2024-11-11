import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CasesImage from '../assets/DALL·E 2024-11-11 11.51.53 - An SVG-style illustration of energy efficiency and optimization in a modern business setting. The image should feature digital dashboards with charts,.webp';
import { stat } from 'fs';

const plLang = {
  title: "Realne Wyniki, Realny Wpływ",
  description:
    "Dowiedz się, jak pomogliśmy firmom takim jak Twoja osiągnąć znaczne oszczędności energii, przedłużyć żywotność urządzeń i zmniejszyć ślad węglowy. Zapoznaj się z naszymi sukcesami, aby zobaczyć nasze rozwiązania w działaniu.",
  button: "Zobacz Studia Przypadków",
  quote: {
    text: "Rozwiązania Fegin Electric zmniejszyły nasze koszty energii o 12%, i nie moglibyśmy być szczęśliwsi!",
    author: "— Jane Doe, CEO of GreenTech Industries",
  },
  statistics: {
    savings: {
      title: "Średnie Oszczędności Energii",
        value: "6-14%",
    },
    implementations: {
        title: "Pomyślne Implementacje na Świecie",
        value: "100+",
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
          {/* Image on the left */}
          <div className="md:w-1/2 mb-8 md:mb-0 grid place-content-end">
            <Image
              src={CasesImage}
              alt="Case Studies"
              className="w-96 h-auto rounded-lg shadow-md  object-cover"
            />
          </div>

          {/* Text Content on the right */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-left mb-12">
              <span className="relative inline-block text-fgreen-950">
                {plLang.title}
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-200 rounded-md z-10"></span>
              </span>
            </h2>
            <p className="mb-8">
             {plLang.description}
            </p>
            <blockquote className="italic text-lg mb-8 bg-white p-4 rounded-lg shadow-sm">
              {plLang.quote.text}
              <span className="block mt-2 font-bold">
                {plLang.quote.author}
              </span>
            </blockquote>

            <Link href="/cases">
              <Button className="bg-fgreen-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 hover:ring-1 ring-offset-2 ring-fgreen-700">
                {plLang.button} <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-fgreen-600">{plLang.statistics.savings.value}</h3>
            <p>{plLang.statistics.savings.title}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-fgreen-600">{plLang.statistics.implementations.value}</h3>
            <p>{plLang.statistics.implementations.title}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-fgreen-600">{plLang.statistics.experience.value}</h3>
            <p>{plLang.statistics.experience.title}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 h-12 pointer-events-none bg-gradient-to-b from-white z-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none bg-gradient-to-t from-white z-20"></div>
    </section>
  );
}

export default CaseSection
