import {
  PlugZap,
  Network,
  TrendingUp,
  Settings,
  BarChart,
  Lightbulb,
  Zap,
  Loader2,
} from "lucide-react";
import PageTopSection from "../components/PageTopSection";
import HighlightedText from "../components/HighlightedText";
import Image from "next/image";
import feiginelectricAnalizator1 from "../assets/analizator/front.webp";
import feiginelectricAnalizator2 from "../assets/analizator/left.webp";
import OurPartners from "../homecomponents/OurClients";
import CallToActionSection from "../homecomponents/CallToActionSection";

const AnalizatorEnergiiOnlinePage = () => {
  const plLang = {
    title: "Feigin Electric FE-PM-300",
    description: " Analizator Energii Online - Świadomie korzystaj z prądu",
    section1: {
      title: "Ogólne",
      description:
        "Bezprzewodowy licznik pomiarowy ADW300 jest głównie używany do pomiaru trójfazowej energii czynnej w sieciach niskiego napięcia. Produkt wyróżnia się zaletami takimi jak kompaktowy rozmiar, wysoka precyzja oraz bogate funkcje. W zależności od różnych wymagań dostępne są liczne funkcje komunikacyjne, takie jak komunikacja RS485, LoRa, NB, 4G, WiFi, a także nowy tryb próbkowania prądu za pomocą zewnętrznego przekładnika. Może być elastycznie instalowany w rozdzielnicy, aby osiągnąć podlicznikowe pomiary energii elektrycznej, nadzór eksploatacyjny i konserwacyjny lub spełnić wymagania dotyczące monitorowania mocy dla różnych regionów i różnych obciążeń.",
    },
    section2: {
      title: "Feigin Electric FE-PM-300",
      description: "",
    },
    section3: {
      title: "Funkcje i Charakterystyka",
      description:
        "Oferujemy szczegółowe systemy monitorowania i alarmowania, które śledzą zużycie energii elektrycznej w czasie rzeczywistym, uwzględniając indywidualne obciążenia, zachowania i profile kosztów. To umożliwia lepszą kontrolę nad konsumentami i wykorzystaniem energii.",
      cards: [
        {
          card: "Komunikacja",
          description:
            "RS485 (Modbus-RTU), Podczerwień, Transmisja bezprzewodowa 470MHz, GPRS, NB-IOT",
        },
        {
          card: "Wyświetlacz",
          description: "Wyświetlacz LCD",
        },
        {
          card: "Napięcie i Prąd Znamionowy",
          description: "AC 3×220/380V, 3×380V, 3×57.7/100V, 3×100V, 3×1(6)A",
        },
        {
          card: "Dokładność",
          description: "Moc czynna: Klasa 0.5S, Moc bierna: Klasa 2",
        },
        {
          card: "Częstotliwość",
          description: "Zakres: 50~60Hz",
        },
        {
          card: "Wyjście impulsowe",
          description: "Stała: 6400imp/kWh",
        },
        {
          card: "Instalacja",
          description: "Szyna DIN 35mm",
        },
        {
          card: "Wymiary (D×S×W)",
          description: "82×87.8×71.5 mm",
        },
        {
          card: "Zużycie",
          description: "<2VA",
        },
        {
          card: "Bezprzewodowe",
          description: "4G, WiFi, LoRa, LoRaWAN",
        },
        {
          card: "Prąd Rozruchowy",
          description: "2‰In",
        },
      ],
    },
    section4: {
      title: "Korzyści z wykorzystania naszej technologii",
      items: [
        "Wdrożenie rozwiązania optymalizacyjnego dostosowanego specjalnie do potrzeb Twojej firmy.",
        "Automatyczny pomiar i zbieranie danych energetycznych w czasie rzeczywistym.",
        "Stałe identyfikowanie i wykorzystywanie potencjałów oszczędności.",
        "Przeprowadzanie analizy zużycia energii dla poszczególnych urządzeń przy użyciu jednego urządzenia pomiarowego.",
        "Dostęp do szczegółowej analizy kosztów i zużycia energii (w kWh).",
        "Profilowa, wielowarstwowa optymalizacja, w tym wykrywanie faz.",
        "Niezależny od urządzenia dostęp do danych i kontrola za pośrednictwem aplikacji web i mobilnych Watt Analytics.",
      ],
      conclusion:
        "To kompleksowe rozwiązanie pomaga optymalizować zużycie energii, obniżać koszty i poprawiać efektywność.",
    },
    section5: {
      title: "Indywidualne kontrolowanie odbiorników energii elektrycznej",
      description1:
        "Dzięki naszej technologii możesz podążać konsekwentną ścieżką w kierunku rozwiązania dostosowanego do indywidualnego kontrolowania odbiorników energii elektrycznej w Twojej firmie.",
      description2: "Obejmuje to:",
      items: [
        "Niezbędne urządzenia pomiarowe i instalację.",
        "Rejestrowanie i analizę danych o zużyciu energii elektrycznej.",
        "Wyprowadzenie propozycji optymalizacji na podstawie rzeczywistych danych.",
        "Automatyczną kontrolę Twoich odbiorników energii elektrycznej.",
      ],
      conclusion:
        "Jesteśmy tutaj, aby wesprzeć Cię we wdrażaniu tych rozwiązań i realizacji znaczącego potencjału oszczędności.",
    },
    section6: {
      title: "Kluczowe cechy techniczne",
      specs: [
        { parameter: "Model", value: "ADW300W" },
        { parameter: "Typ", value: "Licznik energii 3-fazowy" },
        {
          parameter: "Kompatybilność",
          value: "Systemy fotowoltaiczne i magazyny energii Kstar",
        },
        {
          parameter: "Interfejs komunikacyjny",
          value: "RS-485, Modbus-RTU, 4G, WLAN",
        },
        {
          parameter: "Pomiar prądu",
          value:
            "Półpośredni z przekładnikami o prądzie wtórnym 40mA (ESCT-TA16 120A/40mA)",
        },
        { parameter: "Stopień ochrony", value: "IP65" },
        { parameter: "Zasilanie", value: "13-36 V DC" },
        { parameter: "Wymiary", value: "120 x 80 x 60 mm" },
        { parameter: "Waga", value: "1.5 kg" },
        { parameter: "Gwarancja", value: "5 lat" },
      ],
    },
    section7: {
      title: "Dodatkowe dane techniczne",
      tableData: [
        {
          parameter: "Napięcie wejściowe nominalne",
          value: "3×220/380V, 3×380V, 3×57.7/100V, 3×100V",
        },
        { parameter: "Częstotliwość", value: "50Hz-60Hz" },
        {
          parameter: "Zużycie",
          value: "<10VA lub 2W (faza A), <0.5VA (faza B, faza C)",
        },
        { parameter: "Maksymalny prąd wejściowy", value: "6A" },
        { parameter: "Prąd rozruchowy", value: "0.002A" },
        { parameter: "Dokładność", value: "Klasa 0.5S" },
        { parameter: "Dokładność temperatury", value: "±2℃" },
        {
          parameter: "Impuls",
          value: "Szerokość: 80±20ms, Stała: 6400imp/kWh",
        },
      ],
    },
  };

  const section5Cards = [
    {
      icon: Settings,
      title: "Niezbędne urządzenia pomiarowe i instalację.",
    },
    {
      icon: BarChart,
      title: "Rejestrowanie i analizę danych o zużyciu energii elektrycznej.",
    },
    {
      icon: Lightbulb,
      title:
        "Wyprowadzenie propozycji optymalizacji na podstawie rzeczywistych danych.",
    },
    {
      icon: Zap,
      title: "Automatyczną kontrolę Twoich odbiorników energii elektrycznej.",
    },
  ];

  const features = [
    {
      icon: PlugZap,
      title: "Monitorowanie i Alarmowanie",
      description:
        "Oferujemy szczegółowe systemy monitorowania i alarmowania, które śledzą zużycie energii elektrycznej w czasie rzeczywistym, uwzględniając indywidualne obciążenia, zachowania i profile kosztów. To umożliwia lepszą kontrolę nad konsumentami i wykorzystaniem energii.",
    },
    {
      icon: Network,
      title: "Zarządzanie Złożonością",
      description:
        "Zarządzamy złożonościami wynikającymi z różnych źródeł energii, wzorców zużycia i zmiennego popytu. To pomaga zapewnić efektywne wykorzystanie energii elektrycznej, niezależnie od różnorodności źródeł energii.",
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja i Redukcja Kosztów",
      description:
        "Nasze systemy optymalizują zużycie energii elektrycznej w celu redukcji kosztów, dostosowując wzorce użytkowania do lepszego dopasowania do popytu i dostępności energii.",
    },
    {
      icon: Loader2,
      title: "Predykcyjne Utrzymanie Ruchu",
      description:
        "Poprzez monitorowanie systemów zasilanych energią elektryczną, wykorzystujemy techniki predykcyjnego utrzymania ruchu do przewidywania potencjalnych problemów i unikania awarii, zwiększając efektywność i redukując przestoje.",
    },
  ];

  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      <div className="container mx-auto px-4 py-8 font-sans">
        {/* Sekcja 1 */}
        <section className="py-12">
          <h2 className="text-5xl font-bold mb-4 text-center py-6">
            <HighlightedText title={plLang.section1.title} />
          </h2>
          <p className="text-lg text-gray-700 text-balance text-center">
            {plLang.section1.description}
          </p>
        </section>

        {/* Sekcja 2 */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-4 text-center py-6">
            <HighlightedText
              title={plLang.section2.title}
              colorLine="bg-fred-100"
              colorText="text-fred-950"
            />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-fred-50 p-6 rounded-lg shadow-lg hover:bg-fred-100 transition-all group"
              >
                <div className="flex items-center justify-center w-16 h-16 transition-all bg-fred-100 group-hover:bg-white rounded-full mb-4">
                  <feature.icon className="text-fred-900 transition-all group-hover:text-yellow-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-fgreen-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sekcja 3 */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-4 text-center py-6">
            <HighlightedText title={plLang.section3.title} />
          </h2>
          <div className="flex flex-col-reverse xl:flex-row items-center">
            <div className="lx:w-1/2 w-full">
              <ul className="list-none text-lg text-gray-700 grid gap-3 grid-cols-1 xl:grid-cols-2">
                {plLang.section3.cards.map((card, index) => (
                  <li
                    key={index}
                    className="p-4 md:p-6 rounded-md shadow-md bg-fgreen-50 hover:bg-fgreen-100 transition-all xl:last:col-span-full"
                  >
                    <h3 className="text-xl font-semibold text-fgreen-900">
                      {card.card}
                    </h3>
                    <p>{card.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image section on the right side */}
            <div className="relative my-14 xl:w-1/2 w-full xl:pl-12 mt-8 xl:mt-0 flex justify-center group px-4">
              <Image
                src={feiginelectricAnalizator1}
                alt="Obrazek produktu"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg group-hover:scale-105 transition-all"
              />
              <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="bg-fgreen-50 rounded-full w-56 h-56 xxs:w-72 xxs:h-72 md:w-96 md:h-96 animate-pulse group-hover:scale-125 transition-all"></div>
                <div className="bg-fgreen-100 rounded-full w-40 h-40 xxs:w-56 xxs:h-56 md:w-72 md:h-72 absolute animate-pulse group-hover:scale-110 transition-all"></div>
                <div className="bg-fgreen-200 rounded-full w-32 h-32 xxs:w-40 xxs:h-40 md:w-56 md:h-56 absolute animate-pulse group-hover:scale-105 transition-all"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja 4 */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-4 text-center py-6">
            <HighlightedText
              title={plLang.section4.title}
              colorLine="bg-fred-100"
              colorText="text-fred-950"
            />
          </h2>
          <div className="flex flex-col gap-10 lg:flex-row items-center bg-fred-50 rounded-md shadow-md p-6 sm:p-10 md:p-12 lg:p-16">
            <div className="relative w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex justify-center group">
              <Image
                src={feiginelectricAnalizator2}
                alt="Obrazek produktu"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg z-10 group-hover:scale-105 transition-all"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-fred-100 rounded-full w-40 h-40 xxs:w-56 xxs:h-56 md:w-72 md:h-72 animate-pulse group-hover:scale-125 transition-all"></div>
                <div className="bg-fred-200 rounded-full w-32 h-32 xxs:w-48 xxs:h-48 md:w-56 md:h-56 absolute animate-pulse group-hover:scale-110 transition-all"></div>
                <div className="bg-fred-300 rounded-full w-24 h-24 xxs:w-40 xxs:h-40 md:w-48 md:h-48 absolute animate-pulse group-hover:scale-105 transition-all"></div>
              </div>
            </div>
            <ul className="list-disc list-outside text-lg text-gray-700 max-w-3xl mx-auto p-5">
              {plLang.section4.items.map((item, index) => (
                <li key={index} className="mb-2 text-balance">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg m-8 text-gray-500 text-center">
            {plLang.section4.conclusion}
          </p>
        </section>

        {/* Sekcja 5 */}
        <section className="py-12 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center py-6">
            <HighlightedText
              title={plLang.section5.title}
              colorLine="bg-fred-100"
              colorText="text-fred-950"
            />
          </h2>
          <p className="text-base sm:text-lg font-bold text-gray-500 text-center mb-6 max-w-3xl mx-auto">
            {plLang.section5.description1}
          </p>
          <p className="text-lg sm:text-2xl text-gray-900 text-center mb-6 max-w-3xl mx-auto">
            {plLang.section5.description2}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {section5Cards.map((card, index) => (
              <div
                key={index}
                className="bg-fred-50 flex flex-col md:flex-fow gap-5 items-center justify-start p-6 rounded-lg shadow-lg hover:bg-fred-100 transition-all group"
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 transition-all bg-fred-100 group-hover:bg-white rounded-full mb-4">
                  <card.icon className="text-fred-900 transition-all group-hover:text-yellow-500 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl text-center md:text-left font-semibold text-fgreen-950">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-700 text-center my-8 max-w-2xl mx-auto">
            {plLang.section5.conclusion}
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-4 text-center py-6">
            <HighlightedText title={plLang.section7.title} />
          </h2>
          <div className="overflow-x-auto rounded-md ring-fgreen-600 ring-1 ring-offset-2">
            <table className="w-full text-lg text-gray-700">
              <thead>
                <tr className="bg-fgreen-100">
                  <th className="py-3 px-4 border-b border-gray-300 md:text-left text-gray-800 font-semibold min-w-32 text-center">
                    Parametr
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300 md:text-left text-gray-800 font-semibold min-w-32 text-center">
                    Wartość
                  </th>
                </tr>
              </thead>
              <tbody>
                {plLang.section7.tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 px-4 border-b border-gray-300 text-gray-700 text-center md:text-left">
                      {row.parameter}
                    </td>
                    <td className="py-3 px-4 border-l border-b border-gray-300 text-gray-700 text-center md:text-left">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <OurPartners />
      <CallToActionSection />
    </>
  );
};

export default AnalizatorEnergiiOnlinePage;
