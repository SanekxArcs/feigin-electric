import React from 'react';

const ProductLineSection = () => {
  return (
    <section className="container  mx-auto py-12 lg:py-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          <span className="relative inline-block text-fgreen-950">
            Linia produktów <span className="text-fred-600 font-bold">EC</span>
            <span className="text-fgreen-700 font-bold">OD</span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="overflow-x-auto rounded-md ring-fgreen-600 ring-1 ring-offset-2">
        <table className="min-w-full bg-white ">
          <thead>
            <tr className="bg-fgreen-100">
              <th className="py-3 px-4 border-b border-gray-300 md:text-left text-gray-800 font-semibold min-w-32 text-center">
                Typ
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-left text-gray-800 font-semibold">
                Nominalny prąd na fazę (A)
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-left text-gray-800 font-semibold">
                Moc obciążenia (kVA)
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-left text-gray-800 font-semibold">
                Wymiary (WGS, mm)
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-left text-gray-800 font-semibold">
                Waga (kg)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-35-50
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                50
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                35
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                200*200*600
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                45
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-55-80
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                80
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                55
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                250*250*650
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                55
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-65-100
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                100
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                65
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                250*250*650
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                59
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-85-130
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                133
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                85
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                350*300*700
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                109
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-110-160
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                166
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                110
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                350*300*700
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                119
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-135-200
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                208
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                135
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                350*350*700
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                139
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-165-250
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                250
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                165
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                350*350*750
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                149
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-215-300
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                320
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                220
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                350*350*750
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                159
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                ECOD-ML-285-400
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                415
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                285
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                380*350*855
              </td>
              <td className="py-3 px-4 border-b border-gray-300 text-gray-700">
                169
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductLineSection;

/*
  This component is a responsive "Linia produktów ECOD" section that displays product specifications in a tabular format.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Table layout adjusts for different screen sizes, ensuring a good user experience on both small and large devices.
  - The color scheme (fred and fgreen) is used for headings and table headers to ensure consistency with the overall design.
*/
