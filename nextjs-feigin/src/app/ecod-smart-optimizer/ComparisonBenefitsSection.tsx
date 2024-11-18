import React from 'react';

const ComparisonBenefitsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 my-20">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          <span className="relative inline-block text-fgreen-950">
            Korzyści w porównaniu do konkurencji
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center">
        {/* Traditional Voltage Optimizers */}
        <div className="bg-fred-50 p-6 rounded-lg shadow-md flex flex-col gap-2 justify-center items-center">
          <h3 className="text-fred-600 text-2xl font-semibold mb-4">
            Tradycyjne Optymalizatory Napięcia:
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-balance">
            <li>
              Działają na zasadzie podstawowej regulacji napięcia za pomocą
              transformatorów o określonych pojemnościach.
            </li>
            <li>Duże i ciężkie z powodu rozmiarów i wagi transformatorów.</li>
            <li>Większe rozmiary i waga prowadzą do wyższych strat.</li>
            <li>
              Skupiają się na optymalizacji napięcia, ale nie są tak efektywne w
              minimalizowaniu strat energii.
            </li>
            <li>Ograniczona elastyczność montażu z powodu dużych rozmiarów.</li>
            <li>
              Potencjalne oszczędności energii około 4%, ale są one niestale i
              często wykorzystywane wewnętrznie.
            </li>
          </ul>
        </div>
        {/* ECOD Smart Optimizer */}
        <div className="bg-fgreen-50 p-6 rounded-lg shadow-md  flex flex-col gap-2 justify-center items-center">
          <h3 className="text-fgreen-700 text-2xl font-semibold mb-4">
            <span className="text-fred-600 font-bold">EC</span>
            <span className="text-fgreen-700 font-bold">OD</span> Smart
            Optimizer:
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-balance">
            <li>
              Wykorzystuje unikalną opatentowaną technologię, regulując kierunek
              prądu w uzwojeniach transformatora.
            </li>
            <li>
              Jest ponad trzy razy mniejszy i lżejszy niż tradycyjne
              optymalizatory.
            </li>
            <li>
              Znacząco redukuje straty (ponad sześciokrotnie), co zwiększa
              efektywność.
            </li>
            <li>
              Optymalizuje energię (kWh), moc szczytową (kW) i moc bierną (kVAr)
              dla kompleksowego zarządzania energią.
            </li>
            <li>
              Zajmuje mniej miejsca, co ułatwia integrację w różnych
              środowiskach.
            </li>
            <li>
              Zwiększa żywotność sprzętu i zapewnia stałe oszczędności 6-14% na
              wybranych obciążeniach.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonBenefitsSection;

/*
  This component is a responsive "Korzyści w porównaniu do konkurencji" section that compares traditional voltage optimizers with the ECOD Smart Optimizer.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Information is presented in two columns for side-by-side comparison.
  - The color scheme (fred and fgreen) is utilized to highlight differences between traditional and ECOD solutions.
*/
