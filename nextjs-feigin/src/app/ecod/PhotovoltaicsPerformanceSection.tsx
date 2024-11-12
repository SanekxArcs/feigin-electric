import React from 'react';

const PhotovoltaicsPerformanceSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fgreen-600 text-3xl font-bold mb-4">Działanie z Fotowoltaiką</h2>
        <p className="text-gray-700">
          Udało się wyeliminować wyłączanie fotowoltaiki, co pozwoliło na zwiększenie produkcji energii z paneli słonecznych.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dane kW średnio na dzień</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-fgreen-100">
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">Date</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">19.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">20.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">21.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">22.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">23.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">24.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">25.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">26.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">27.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">28.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">29.01</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">30.01</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800 font-semibold">Average kW/day</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-0.02</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-28.11</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-35.5</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-3.88</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-21.42</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700">11.88</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-16.59</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700">-23.9</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700">-23.2</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700">-15.88</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-27.67</td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600">-34.82</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 mt-4">
          Znak minus oznacza, że energia z paneli słonecznych jest przesyłana do sieci.
        </p>
      </div>
    </section>
  );
};

export default PhotovoltaicsPerformanceSection;

/*
  This component is a responsive "Działanie z Fotowoltaiką" section that provides daily average energy production data.
  - Uses Tailwind CSS for styling and adaptive layout, ensuring responsiveness across different screen sizes.
  - The data is presented in a table format with visual differentiation using the provided color scheme (fred and fgreen).
  - The table is wrapped in an overflow container to handle smaller screens gracefully.
*/
