import React from "react";
import { Bolt, Shield, Globe } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="text-fgreen-800 w-12 h-12 mb-4 mx-auto">{icon}</div>
      <h3 className="text-2xl font-semibold text-fgreen-700 mb-2">{title}</h3>
      <p className="text-fgreen-800">{description}</p>
    </div>
  );
};

const ECODSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="relative inline-block text-fgreen-950">
            Dlaczego ECOD?
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-fgreen-200 rounded-md"></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          System ECOD koncentruje się na optymalizacji zużycia energii, nie
          tylko w celu oszczędności finansowych, ale także w celu ochrony
          urządzeń i zmniejszenia wpływu na środowisko.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Bolt className="text-fgreen-900 w-12 h-12 mb-4 mx-auto" />}
            title="Optymalizacja Napięcia"
            description="Większość urządzeń elektrycznych działa w szerokim zakresie napięć, jednak sieci często dostarczają wyższe napięcie, co prowadzi do nieefektywności i wyższych kosztów."
          />
          <FeatureCard
            icon={<Shield className="text-fgreen-900 w-12 h-12 mb-4 mx-auto" />}
            title="Ochrona Urządzeń"
            description="System ECOD chroni urządzenia przed przepięciami i innymi zakłóceniami, co wydłuża ich żywotność i zmniejsza ryzyko awarii."
          />
          <FeatureCard
            icon={<Globe className="text-fgreen-900 w-12 h-12 mb-4 mx-auto" />}
            title="Zmniejszenie Wpływu na Środowisko"
            description="Optymalizacja zużycia energii prowadzi do zmniejszenia emisji CO2 i innych szkodliwych substancji, co ma pozytywny wpływ na środowisko."
          />
        </div>
      </div>
    </section>
  );
};

export default ECODSection;