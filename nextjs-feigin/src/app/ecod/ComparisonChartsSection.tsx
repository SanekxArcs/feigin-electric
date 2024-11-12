

const ComparisonChartsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">Bez ECOD <span className="text-fgreen-600">vs</span> Z ECOD</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Charts Without ECOD */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-fred-600 text-xl font-semibold mb-4">Charakterystyka napięcia</h3>
          <img src="/images/without-ecod-voltage-chart.png" alt="Charakterystyka napięcia Bez ECOD" className="w-full rounded-md shadow-sm mb-4" />
          <h3 className="text-fred-600 text-xl font-semibold mb-4">Charakterystyka kW</h3>
          <img src="/images/without-ecod-kw-chart.png" alt="Charakterystyka kW Bez ECOD" className="w-full rounded-md shadow-sm" />
        </div>
        {/* Charts With ECOD */}
        <div className="bg-fgreen-50 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-fgreen-700 text-xl font-semibold mb-4">Charakterystyka napięcia</h3>
          <img src="/images/with-ecod-voltage-chart.png" alt="Charakterystyka napięcia Z ECOD" className="w-full rounded-md shadow-sm mb-4" />
          <h3 className="text-fgreen-700 text-xl font-semibold mb-4">Charakterystyka kW</h3>
          <img src="/images/with-ecod-kw-chart.png" alt="Charakterystyka kW Z ECOD" className="w-full rounded-md shadow-sm" />
        </div>
      </div>
    </section>
  );
};

export default ComparisonChartsSection;

/*
  This component is a responsive "Bez ECOD vs Z ECOD" section that visually compares the system performance with and without ECOD.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Displays four images of charts: two for without ECOD and two for with ECOD.
  - Charts are shown side by side to make the comparison easy to understand.
  - The color scheme (fred and fgreen) is used to differentiate between ECOD and non-ECOD conditions.
*/
