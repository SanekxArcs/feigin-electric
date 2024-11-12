import { Sparkles, PlugZap, Network, Bolt, TrendingUp, Loader2 } from 'lucide-react';

const SectionTwo = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-fred-600 mb-4">Sześć najczęstszych problemów z jakością energii elektrycznej</h2>
        <p className="text-lg text-gray-700">Poznaj najczęstsze problemy, które mogą wpływać na jakość energii elektrycznej oraz ich przyczyny.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-fred-50 p-6 rounded-lg shadow-lg hover:bg-fred-100 transition">
          <div className="flex items-center justify-center w-16 h-16 bg-fred-100 rounded-full mb-4">
            <Sparkles className="text-fred-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-fred-700 mb-2">Moc bierna</h3>
          <p className="text-gray-600">Kąt fazowy między przebiegami prądu i napięcia w systemie prądu przemiennego. Służy do wytwarzania pola magnetycznego w silnikach, powodując niekorzystny współczynnik mocy.</p>
        </div>

        <div className="bg-fgreen-50 p-6 rounded-lg shadow-lg hover:bg-fgreen-100 transition">
          <div className="flex items-center justify-center w-16 h-16 bg-fgreen-100 rounded-full mb-4">
            <PlugZap className="text-fgreen-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-fgreen-700 mb-2">Harmoniczne</h3>
          <p className="text-gray-600">Wielokrotności częstotliwości zasilania, np. piąta harmoniczna wynosiłaby 250 Hz, gdy częstotliwość zasilania to 50 Hz. Powodowane przez obciążenia elektroniczne.</p>
        </div>

        <div className="bg-fred-50 p-6 rounded-lg shadow-lg hover:bg-fred-100 transition">
          <div className="flex items-center justify-center w-16 h-16 bg-fred-100 rounded-full mb-4">
            <Network className="text-fred-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-fred-700 mb-2">Niezrównoważenie sieci</h3>
          <p className="text-gray-600">Różnice w napięciu między liniami. Powodowane przez jednofazowe obciążenia, obciążenia faza-faza i niezrównoważone obciążenia trójfazowe.</p>
        </div>

        <div className="bg-fgreen-50 p-6 rounded-lg shadow-lg hover:bg-fgreen-100 transition">
          <div className="flex items-center justify-center w-16 h-16 bg-fgreen-100 rounded-full mb-4">
            <Bolt className="text-fgreen-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-fgreen-700 mb-2">Przepięcia</h3>
          <p className="text-gray-600">Nagła zmiana przebiegu sinusoidalnego, występująca zarówno w przebiegach napięcia, jak i prądu. Powodowane przez urządzenia przełączające oraz uruchamianie urządzeń o dużej mocy.</p>
        </div>

        <div className="bg-fred-50 p-6 rounded-lg shadow-lg hover:bg-fred-100 transition">
          <div className="flex items-center justify-center w-16 h-16 bg-fred-100 rounded-full mb-4">
            <TrendingUp className="text-fred-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-fred-700 mb-2">Wariacje napięcia</h3>
          <p className="text-gray-600">Obejmuje spadki, przepięcia, wzrosty i przerwy napięcia. Napięcie linii jest wyższe lub niższe od nominalnego przez krótki okres.</p>
        </div>

        <div className="bg-fgreen-50 p-6 rounded-lg shadow-lg hover:bg-fgreen-100 transition">
          <div className="flex items-center justify-center w-16 h-16 bg-fgreen-100 rounded-full mb-4">
            <Loader2 className="text-fgreen-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-fgreen-700 mb-2">Migotanie</h3>
          <p className="text-gray-600">Losowe lub powtarzające się zmiany napięcia. Powodowane przez młyny, piece łukowe (EAF), sprzęt spawalniczy i niszczarki.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
