import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const WorkingPrincipleSectionTwo = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-2">Jak działają stabilizatory vs Jak działa ECOD</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traditional Stabilizers Section */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-fred-600 text-2xl font-semibold mb-4">Jak działają stabilizatory</h3>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-xl mb-2">238V</p>
            <ArrowRight className="w-12 h-12 text-gray-500 mb-2" />
            <p className="text-gray-700 font-semibold mb-4">STRATA ENERGII ≈ 4%</p>
            <p className="text-gray-700 text-xl">226V</p>
          </div>
          <p className="text-gray-600 mt-4">110kVA Waga ~300kg</p>
        </div>
        {/* ECOD Section */}
        <div className="bg-fgreen-50 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-fgreen-700 text-2xl font-semibold mb-4">Jak działa ECOD</h3>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-xl mb-2">238V</p>
            <Zap className="w-12 h-12 text-fgreen-600 mb-2" />
            <p className="text-gray-700 font-semibold mb-4">STRATA ENERGII 0.3%</p>
            <div className="flex gap-4">
              <p className="text-gray-700 text-xl">+12V</p>
              <p className="text-gray-700 text-xl">-12V</p>
            </div>
            <p className="text-gray-700 text-xl mt-2">226V</p>
          </div>
          <p className="text-gray-600 mt-4">110kVA Waga 125kg</p>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrincipleSectionTwo;

/*
  This component is a responsive "Jak działają stabilizatory vs Jak działa ECOD" section that visually compares the working principles of traditional voltage stabilizers and the ECOD system.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Two side-by-side panels display a clear comparison, including voltage values and energy loss details.
  - Icons are used to represent the direction of energy and energy loss for better visual engagement.
*/
