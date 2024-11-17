// components/About.jsx

import Image from "next/image";
import PageTopSection from "../components/PageTopSection";
import AboutPhoto from "../assets/about/store-front-singapore.webp";
import OurPartners from "../homecomponents/OurClients";
import CallToActionSection from "../homecomponents/CallToActionSection";
import { title } from "process";
import HighlightedText from "../components/HighlightedText";

const plLang = {
  title: "O nas",
  description:
    "Dowiedz się więcej o nas. Nasza wizja, misja, sukces i wiele innych rzeczy, które mogą Ci się podobać.",
  ourStory: {
    title: "Nasza historia",
    title2: "Prowadzenie udanego biznesu",
    title3: "od 2014 roku",
    content: {
      first:
        "Lev Feigin, wiodący specjalista ds. technologii energetycznych, który zajmował wysokie stanowiska w sektorze energetyki jądrowej i lotniczej, opracował podstawy naszej technologii, które po raz pierwszy zostały opisane w 1995 roku.",
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
      <PageTopSection title={plLang.title} description={plLang.description} />
      {/* Our Story Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16  md:my-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-6 text-fred-800">
              <HighlightedText title={plLang.ourStory.title} colorLine="bg-fred-100" colorText="text-fred-950" />
            </h2>
            <h3 className="text-3xl md:text-7xl font-light mb-4 md:mb-6 text-gray-800">
              {plLang.ourStory.title2}
            </h3>
            <h3 className="text-3xl md:text-5xl mb-4 md:mb-6 text-fred-800 italic">
              {plLang.ourStory.title3}
            </h3>
            <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-600 text-balance">
              {plLang.ourStory.content.first}
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 grid place-content-center">
            <Image
              src={AboutPhoto}
              alt="Our Company"
              width={288}
              height={324}
              className="rounded-lg shadow-lg h-96 w-auto transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutCard
            content={plLang.ourStory.content.second}
            borderColor="border-fgreen-500"
          />
          <AboutCard
            content={plLang.ourStory.content.third}
            borderColor="border-fgreen-500"
          />
          <AboutCard
            content={plLang.ourStory.content.fourth}
            borderColor="border-fred-500"
          />
          <AboutCard
            content={plLang.ourStory.content.fifth}
            borderColor="border-fred-500"
          />
        </div>
      </div>
      <OurPartners />
      <CallToActionSection />
    </div>
  );
};

export default About;
