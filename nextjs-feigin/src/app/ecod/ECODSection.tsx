import React from "react";
import {
  Bolt,
  Shield,
  Globe,
  Zap,
  Waves,
  BarChart,
  TrendingUp,
  Sliders,
  Activity,
  DollarSign,
  Sun,
  Settings,
  Repeat,
} from "lucide-react";

const ECODSection = () => {
  return (
    <>
      <section className="bg-fred-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-fred-700 mb-8">
            Dlaczego ECOD?
          </h2>
          <p className="text-lg md:text-xl text-fred-600 mb-12">
            System ECOD koncentruje się na optymalizacji zużycia energii, nie
            tylko w celu oszczędności finansowych, ale także w celu ochrony
            urządzeń i zmniejszenia wpływu na środowisko.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Bolt className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Optymalizacja Napięcia
              </h3>
              <p className="text-fgreen-600">
                Większość urządzeń elektrycznych działa w szerokim zakresie
                napięć, jednak sieci często dostarczają wyższe napięcie, co
                prowadzi do nieefektywności i wyższych kosztów.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Shield className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Ochrona Urządzeń
              </h3>
              <p className="text-fgreen-600">
                ECOD utrzymuje parametry sieci na optymalnym poziomie,
                wydłużając żywotność urządzeń oraz zapewniając ich lepszą
                ochronę.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Globe className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Ochrona Środowiska
              </h3>
              <p className="text-fgreen-600">
                Rozwiązanie ECOD niweluje problem nadmiernego napięcia, oferując
                inteligentne sposoby zmniejszające marnotrawienie energii i
                redukujące emisję CO2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-fgreen-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-fgreen-700 mb-8">
            Sześć najczęstszych problemów z jakością energii elektrycznej
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Zap className="text-fred-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fred-700 mb-2">
                Moc bierna
              </h3>
              <p className="text-fred-600">
                Kąt fazowy między przebiegami prądu i napięcia w systemie prądu
                przemiennego. Służy do wytwarzania pola magnetycznego w
                silnikach, powodując niekorzystny współczynnik mocy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Waves className="text-fred-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fred-700 mb-2">
                Harmoniczne
              </h3>
              <p className="text-fred-600">
                Wielokrotności częstotliwości zasilania, np. piąta harmoniczna
                wynosiłaby 250 Hz, gdy częstotliwość zasilania to 50 Hz.
                Powodowane przez obciążenia elektroniczne, takie jak napędy o
                zmiennej prędkości i systemy UPS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <BarChart className="text-fred-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fred-700 mb-2">
                Niezrównoważenie sieci
              </h3>
              <p className="text-fred-600">
                Różnice w napięciu między liniami. Powodowane przez jednofazowe
                obciążenia, obciążenia faza-faza i niezrównoważone obciążenia
                trójfazowe, takie jak sprzęt spawalniczy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <TrendingUp className="text-fred-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fred-700 mb-2">
                Przepięcia
              </h3>
              <p className="text-fred-600">
                Nagła zmiana przebiegu sinusoidalnego, która występuje zarówno w
                przebiegach napięcia, jak i prądu. Powodowane przez urządzenia
                przełączające oraz uruchamianie i zatrzymywanie urządzeń o dużej
                mocy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Sliders className="text-fred-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fred-700 mb-2">
                Wariacje napięcia
              </h3>
              <p className="text-fred-600">
                Obejmuje spadki, przepięcia, wzrosty i przerwy napięcia.
                Napięcie linii jest wyższe lub niższe od nominalnego przez
                krótki okres. Powodowane przez usterki sieci, przełączanie
                obciążeń pojemnościowych i nadmierne obciążenia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Activity className="text-fred-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fred-700 mb-2">
                Migotanie
              </h3>
              <p className="text-fred-600">
                Losowe lub powtarzające się zmiany napięcia. Powodowane przez
                młyny, piece łukowe (EAF), sprzęt spawalniczy i niszczarki.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fred-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-fred-700 mb-8">
            Dlaczego optymalizacja energii jest ważna?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Globe className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Wpływ na Środowisko
              </h3>
              <p className="text-fgreen-600">
                Optymalizacja energii przyczynia się do zmniejszenia emisji CO2
                i marnotrawienia energii, co pozytywnie wpływa na środowisko
                naturalne.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <DollarSign className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Korzyści Finansowe
              </h3>
              <p className="text-fgreen-600">
                Obniżenie wydatków na energię elektryczną dzięki optymalizacji
                zużycia energii oraz większa wydajność instalacji
                fotowoltaicznych.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Sun className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Wydajność Fotowoltaiki
              </h3>
              <p className="text-fgreen-600">
                Optymalizacja energii pozwala na zwiększenie wydajności systemów
                fotowoltaicznych poprzez dostosowanie parametrów sieci do
                optymalnych wartości.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Settings className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Efektywność Energetyczna
              </h3>
              <p className="text-fgreen-600">
                Utrzymanie optymalnych parametrów sieci energetycznej pozwala na
                zwiększenie efektywności energetycznej oraz zmniejszenie strat
                energii.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Shield className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Długowieczność Sprzętu
              </h3>
              <p className="text-fgreen-600">
                Optymalizacja energii przyczynia się do wydłużenia żywotności
                urządzeń, dzięki utrzymaniu stabilnych parametrów zasilania.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Repeat className="text-fgreen-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">
                Równoważne Korzyści
              </h3>
              <p className="text-fgreen-600">
                Optymalizacja energii przynosi zarówno korzyści finansowe, jak i
                techniczne, poprawiając efektywność energetyczną oraz
                zmniejszając koszty operacyjne.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ECODSection;
