// components/About.jsx

import Image from "next/image";
import PageTopSection from "../components/PageTopSection";

const plLang = {
  title: "O nas",
  description:
    "Dowiedz się więcej o nas. Nasza wizja, misja, sukces i wiele innych rzeczy, które mogą Ci się podobać.",
  ourStory: {
    title: "Nasza historia",
    content: {
      first:
        "Leo Feigin, uznany profesjonalista w dziedzinie technologii jądrowej i lotniczej, pełniący wysokie stanowiska w sektorze elektryczności jądrowej i lotniczej, wyłożył podstawy naszej technologii, która po raz pierwszy została opracowana i opisana w 1995 roku.",
      second:
        "Utworzenie laboratorium do testowania i analizy komponentów było kolejnym logicznym krokiem w opracowaniu urządzenia optymalizacyjnego, które, dzięki szeregowi ulepszeń i aktualizacji modeli, zaowocowało dzisiejszą opatentowaną technologią i linią modeli ECOD.",
      third:
        "Dziś Grupa Feigin Electric działa w wielu krajach na całym świecie: UE, Bliski Wschód, Azja Południowo-Wschodnia i Australia, z bazą produkcyjną w klastrze przemysłowym Rayong w Tajlandii. Nadal rozwijamy naszą sieć sprzedaży na nowe rynki (Wielka Brytania, USA).",
      fourth:
        "Rozpoznając, że osiągnięcie doskonałości wymaga niezachwianej poświęconej pracy, Feigin Electric podjął się nieustającego dążenia do doskonałości. Ustanowienie kompleksowych strategii zaangażowania klientów było kolejnym logicznym krokiem w ulepszaniu naszych usług, które, dzięki serii innowacyjnych rozwiązań, zaowocowało bezprecedensowym podejściem zorientowanym na klienta, które definiuje naszą firmę dzisiaj.",
      fifth:
        "Nasi klienci to fabryki, linie produkcyjne, hotele, stacje benzynowe, hrabstwa, sieci restauracji fast food i dystrybutorzy energii o nazwach takich jak: Burger King, KFC, McDonald's, The Pizza Company, Lion Group, Chester's Grill, Pizza Hut, Sturgeon Farm Hua Hin Thailand, Domino's Pizza i BreadTalk, że wymienię tylko kilka.",
    },
  },
};

interface AboutCardProps {
  content: string;
  borderColor: string;
}

const AboutCard = ({ content, borderColor }: AboutCardProps) => (
  <div
    className={`bg-white rounded-lg shadow-lg p-4 md:p-6 border-t-4 hover:border-t-2 hover:border-b-2 transition-all ${borderColor}`}
  >
    <p className="text-gray-600 text-balance">{content}</p>
  </div>
);

const About = () => {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <PageTopSection
        title="About Us"
        description="Read more about us. Our vision, mission, success, and many other things you might love."
      />
      {/* Our Story Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 my-10 md:my-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-6 text-fred-800">
              Our Story
            </h2>
            <h3 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 text-gray-800">
              Running a successful business
            </h3>
            <h3 className="text-3xl md:text-5xl mb-4 md:mb-6 text-fred-800 italic">
              since 2014
            </h3>
            <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-600 text-balance">
              Leo Feigin, a renowned core technology professional having held
              senior positions in the nuclear and aerospace electricity sector,
              laid out the basics for our technology which was first worked out
              and described in 1995.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 grid place-content-center">
            <Image
              src="https://feiginelectric.com/wp-content/themes/ecnology/images/store-front-singapore.jpg"
              alt="Our Company"
              width={600}
              height={400}
              className="rounded-lg shadow-lg h-96 w-auto transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutCard
            content="Establishing a laboratory for component testing and analysis was the next logical step in developing an optimization device which, through a number of improvements and model updates, resulted in today's patented technology and ECOD model line."
            borderColor="border-fgreen-500"
          />
          <AboutCard
            content="Today, Feigin Electric Group of companies operates in many countries around the world: EU, Middle East, Southeast Asia, and Australia, with a production base in the Rayong industrial cluster in Thailand. We continue to enhance our sales network to new markets (UK, USA)."
            borderColor="border-fgreen-500"
          />
          <AboutCard
            content="Recognizing that achieving excellence requires unwavering dedication, Feigin Electric embarked on a relentless pursuit of perfection. Establishing comprehensive client engagement strategies was the next logical step in enhancing our services, which, through a series of innovative solutions, has culminated in the unparalleled client-centric approach that defines our company today."
            borderColor="border-fred-500"
          />
          <AboutCard
            content="Our customers include factories, production lines, hotels, petrol stations, counties, fast-food restaurant chains, and power distributors with names such as: Burger King, KFC, McDonald's, The Pizza Company, Lion Group, Chester's Grill, Pizza Hut, Sturgeon Farm Hua Hin Thailand, Domino's Pizza, and BreadTalk, just to name a few."
            borderColor="border-fred-500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
