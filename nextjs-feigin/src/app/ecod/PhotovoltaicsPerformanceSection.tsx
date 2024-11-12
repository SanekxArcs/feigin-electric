import React from 'react';

const PhotovoltaicsPerformanceSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fgreen-600 text-3xl font-bold mb-4">
          <span className="relative inline-block text-fgreen-950">
            Działanie z Fotowoltaiką
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-200 rounded-md"></span>
          </span>
        </h2>
        <p className="text-gray-700">
          Udało się wyeliminować wyłączanie fotowoltaiki, co pozwoliło na
          zwiększenie produkcji energii z paneli słonecznych.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
          Dane kW średnio na dzień
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead>
              <tr className="">
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  Date
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  19.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  20.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  21.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  22.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  23.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  24.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  25.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  26.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  27.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  28.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  29.01
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">
                  30.01
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800 font-semibold">
                  Average kW/day
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  -0.02
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  -28.11
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  -35.5
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  -3.88
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  -21.42
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  11.88
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fred-600 bg-yellow-100">
                  -16.59
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700 bg-fgreen-100">
                  -23.9
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700 bg-fgreen-100">
                  -23.2
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700 bg-fgreen-100">
                  -15.88
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700 bg-fgreen-100">
                  -27.67
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-fgreen-700 bg-fgreen-100">
                  -34.82
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-center mt-4">
          *Znak minus oznacza, że energia z paneli słonecznych jest przesyłana
          do sieci.
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
