import {
  Sparkles,
  PlugZap,
  Network,
  Bolt,
  TrendingUp,
  Loader2,
} from "lucide-react";

import { FC, ComponentType } from "react";

interface ProblemCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  textColor: string;
  iconColor: string;
}

const ProblemCard: FC<ProblemCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconBgColor,
  textColor,
  iconColor,
}) => (
  <div
    className={`bg-${bgColor} p-6 rounded-lg shadow-lg hover:bg-${bgColor.replace("50", "100")} transition-all group`}
  >
    <div
      className={`flex items-center justify-center w-16 h-16 bg-${iconBgColor} group-hover:bg-white rounded-full mb-4`}
    >
      <Icon
        className={`text-${iconColor} group-hover:text-yellow-500 w-8 h-8`}
      />
    </div>
    <h3 className={`text-xl font-semibold text-${textColor} mb-2`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const problems = [
  {
    icon: Sparkles,
    title: "Moc bierna",
    description:
      "Kąt fazowy między przepływem prądu i napięcia w systemie prądu przemiennego. Służy do wytwarzania pola magnetycznego w silnikach, powodując niekorzystny współczynnik mocy.",
    bgColor: "fred-50",
    iconBgColor: "fred-100",
    textColor: "fred-700",
    iconColor: "fred-600",
  },
  {
    icon: PlugZap,
    title: "Harmoniczne",
    description:
      "Wielokrotności częstotliwości zasilania, np. piąta harmoniczna wynosiłaby 250 Hz, gdy częstotliwość zasilania to 50 Hz. Powodowane przez obciążenia elektroniczne.",
    bgColor: "fgreen-50",
    iconBgColor: "fgreen-100",
    textColor: "fgreen-700",
    iconColor: "fgreen-600",
  },
  {
    icon: Network,
    title: "Niezrównoważenie sieci",
    description:
      "Różnice w napięciu między liniami. Powodowane przez jednofazowe obciążenia, obciążenia faza-faza i niezrównoważone obciążenia trójfazowe.",
    bgColor: "fred-50",
    iconBgColor: "fred-100",
    textColor: "fred-700",
    iconColor: "fred-600",
  },
  {
    icon: Bolt,
    title: "Przepięcia",
    description:
      "Nagła zmiana przebiegu sinusoidalnego, występująca zarówno w przebiegach napięcia, jak i prądu. Powodowane przez urządzenia przełączające oraz uruchamianie urządzeń o dużej mocy.",
    bgColor: "fgreen-50",
    iconBgColor: "fgreen-100",
    textColor: "fgreen-700",
    iconColor: "fgreen-600",
  },
  {
    icon: TrendingUp,
    title: "Wariacje napięcia",
    description:
      "Obejmuje spadki, przepięcia, wzrosty i przerwy napięcia. Napięcie linii jest wyższe lub niższe od nominalnego przez krótki okres.",
    bgColor: "fred-50",
    iconBgColor: "fred-100",
    textColor: "fred-700",
    iconColor: "fred-600",
  },
  {
    icon: Loader2,
    title: "Migotanie",
    description:
      "Losowe lub powtarzające się zmiany napięcia. Powodowane przez młyny, piece łukowe (EAF), sprzęt spawalniczy i niszczarki.",
    bgColor: "fgreen-50",
    iconBgColor: "fgreen-100",
    textColor: "fgreen-700",
    iconColor: "fgreen-600",
  },
];

const SectionTwo = () => {
  return (
    <section className="container mx-auto py-12 lg:py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          <span className="relative inline-block text-fred-950">
            Sześć najczęstszych problemów z jakością energii elektrycznej
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fred-200 rounded-md z-10"></span>
          </span>
        </h2>
        <p className="text-lg text-gray-700">
          Poznaj najczęstsze problemy, które mogą wpływać na jakość energii
          elektrycznej oraz ich przyczyny.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <ProblemCard key={index} {...problem} />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
