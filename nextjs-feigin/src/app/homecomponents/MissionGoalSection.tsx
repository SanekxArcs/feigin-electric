import { History, PlugZap, Receipt } from "lucide-react";

const plLang = {
  mission: {
    title: "Nasza Misja",
    description:
      "Misją Feigin Electric jest tworzenie innowacyjnych rozwiązań technologicznych, które przyczyniają się do zrównoważonego rozwoju i redukcji śladu węglowego. Chcemy wspierać firmy w efektywnym zarządzaniu energią, redukując koszty oraz wpływ na środowisko. Wierzymy, że mądre wykorzystanie energii to klucz do lepszego jutra. Feigin Electric dąży do tego, by stać się liderem w dziedzinie inteligentnego zarządzania energią, inspirując innych do działania na rzecz naszej planety.",
  },
  goal: {
    title: "Nasze Cele",
    goals: [
      "Zwiększenie świadomości klientów na temat efektywnego zarządzania energią i korzyści wynikających z zastosowania naszych urządzeń.",
      "Zapewnienie wysokiej jakości urządzeń, które skutecznie zmniejszają zużycie energii elektrycznej.",
      "Budowa rozpoznawalnej marki na rynku europejskim i zdobycie zaufania klientów poprzez doskonałą obsługę i widoczne rezultaty użytkowania naszych produktów.",
      "Redukcja globalnego zużycia energii poprzez szerokie wdrożenie naszych rozwiązań na skalę międzynarodową.",
      "Rozszerzenie działalności na nowe segmenty rynku, w tym przemysł i sektory publiczne.",
      "Nawiązanie współpracy z instytucjami wspierającymi działania na rzecz ochrony środowiska i efektywności energetycznej.",
      "Promowanie zielonego stylu życia wśród klientów.",
    ],
  },
};

const MissionGoalSection = () => {
  return (
    <>
      <section className="py-10 md:py-20 relative overflow-hidden container mx-auto px-6 text-center grid place-content-center">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block text-fgreen-950">
            {plLang.mission.title}
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-10"></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-center text-balance md:w-2/3 mx-auto">
          {plLang.mission.description}
        </p>
      </section>
      <section className="py-10 md:py-20 relative overflow-hidden container mx-auto px-6 text-center grid place-content-center">
        <h3 className="text-3xl font-semibold mb-12 text-fred-600">
          <span className="relative inline-block text-fgreen-950">
            {plLang.goal.title}
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-10"></span>
          </span>
        </h3>
        <ul className="mb-6 space-y-4 text-lg leading-relaxed list-inside text-left">
          {plLang.goal.goals.map((goal, index) => (
            <li key={index} className="flex items-start relative pl-6">
              <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-fgreen-600 rounded-full"></span>
              <p className="text-balance">{goal}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MissionGoalSection;
