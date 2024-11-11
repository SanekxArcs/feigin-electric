import { History, PlugZap, Receipt } from "lucide-react";

const plLang = {
  mission: {
    title: "Nasza Misja",
    description:
      "Naszą misją jest umożliwienie osobom prywatnym i firmom osiągnięcia znacznych oszczędności na kosztach energii elektrycznej, wykorzystując naszą",
    technology: "innowacyjną technologię",
    goal: ". Naszym celem jest umożliwienie oszczędności energii elektrycznej w wysokości 6-14%.",
  },
  goal: {
    title: "Nasz Cel",
    goals: {
      first: "6-14% oszczędności na rachunkach za energię elektryczną.",
      second: "Szybki zwrot z inwestycji.",
      third: "Zwiększenie niezawodności i efektywności źródła zasilania.",
    },
    goalsIco: {
      first: <PlugZap />,
      second: <History />,
      third: <Receipt />,
    },
  },
};

const MissionGoalSection = () => {
  return (
    <>
      <section className="py-20 relative overflow-hidden container mx-auto px-6 text-center grid place-content-center">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block text-fgreen-950">
            {plLang.mission.title}
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-10"></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-center text-balance md:w-2/3 mx-auto">
          {plLang.mission.description}
          <span className="font-bold text-fred-600 pl-1">
            {plLang.mission.technology}
          </span>
          {plLang.mission.goal}
        </p>
      </section>
      <section className="py-20 relative overflow-hidden container mx-auto px-6 text-center grid place-content-center">
        <h3 className="text-3xl font-semibold mb-12 text-fred-600">
          <span className="relative inline-block text-fgreen-950">
            {plLang.goal.title}
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-10"></span>
          </span>
        </h3>
        <ul className="list-none mb-6 space-y-6 text-lg leading-relaxed text-left">
          <li className="flex items-start">
            <div className="mr-4">
              <div className="w-10 h-10 bg-fgreen-700 text-white rounded-full flex items-center justify-center">
                {plLang.goal.goalsIco.first}
              </div>
            </div>
            <span className="flex-1">{plLang.goal.goals.first}</span>
          </li>
          <li className="flex items-start">
            <div className="mr-4">
              <div className="w-10 h-10 bg-fgreen-700 text-white rounded-full flex items-center justify-center">
                {plLang.goal.goalsIco.second}
              </div>
            </div>
            <span className="flex-1">{plLang.goal.goals.second}</span>
          </li>
          <li className="flex items-start">
            <div className="mr-4">
              <div className="w-10 h-10 bg-fgreen-700 text-white rounded-full flex items-center justify-center">
                {plLang.goal.goalsIco.third}
              </div>
            </div>
            <span className="flex-1">{plLang.goal.goals.third}</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MissionGoalSection;
