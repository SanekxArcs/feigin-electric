import React from "react";
import {
  Award,
  CheckCircle,
  ShieldCheck,
  FileText,
  ClipboardCheck,
} from "lucide-react";

const CertificatesSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          Certyfikaty i Zatwierdzenia
        </h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <ul className="list-disc list-outside space-y-4 text-gray-700 pl-5">
          {/* Certificate List */}
          <li className="flex items-start">
            <Award className="w-6 h-6 text-fred-600 mr-3" />
            <div>
              <span className="font-bold">
                MoIAT Certificates and Approvals
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">RoHS Certification in the UAE</span>
            </div>
          </li>
          <li className="flex items-start">
            <ShieldCheck className="w-6 h-6 text-fred-600 mr-3" />
            <div>
              <span className="font-bold">
                Trademark Certificates in Australia & Thailand
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <FileText className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">
                Test Reports from the PTEC laboratory Ministry of Science and
                Technology in Thailand
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <ClipboardCheck className="w-6 h-6 text-gray-500 mr-3" />
            <div>
              <span className="font-bold">Inne</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <img
          src="/images/certificate1.png"
          alt="Certificate 1"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-md"
        />
        <img
          src="/images/certificate2.png"
          alt="Certificate 2"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-md"
        />
        <img
          src="/images/certificate3.png"
          alt="Certificate 3"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-md"
        />
        <img
          src="/images/certificate4.png"
          alt="Certificate 4"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-md"
        />
        <img
          src="/images/certificate5.png"
          alt="Certificate 5"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-md"
        />
      </div>
    </section>
  );
};

export default CertificatesSection;

/*
  This component is a responsive "Certyfikaty i Zatwierdzenia" section that displays a list of certifications and related images.
  - Uses Tailwind CSS for adaptive and responsive styling.
  - Updated icons to better represent each type of certification, adding enhanced visual context.
  - Certification images are arranged in a flexible layout to adapt to different screen sizes.
  - Color scheme (fred and fgreen) is utilized to distinguish different certification categories.
*/
