import React from "react";
import { Award } from "lucide-react";
import Image from "next/image";
import Certificate1 from "../assets/certificates/Certificate-of-Conformity-UAE-23-06-75579_E23-06-077725_NB0003-2.webp";
import Certificate2 from "../assets/certificates/Certificate-of-Conformity-UAE-23-06-75579_E23-06-077725_NB0003-2.webp";
import Certificate3 from "../assets/certificates/RoHS-Certificate-MJ-300523-042-_MR-188_-Gulftic-certification-ROHS-01.webp";
import Certificate4 from "../assets/certificates/RoHS-Certificate-MJ-300523-042-_MR-188_-Gulftic-certification-ROHS.webp";
import Certificate5 from "../assets/certificates/Certificate-of-Conformity-UAE-23-06-75579_E23-06-077725_NB0003.webp";

const CertificatesSection = () => {
  return (
    <section className="container mx-auto py-12 lg:py-20 px-4 ">
      <div className="text-center mb-8">
        <h2 className="text-fred-600 text-3xl font-bold mb-4">
          <span className="relative inline-block text-fgreen-950">
            Certyfikaty i Zatwierdzenia
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-200 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <ul className="list-disc list-outside space-y-4 text-gray-700 pl-5">
          {/* Certificate List */}
          <li className="flex items-start">
            <Award className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">
                MoIAT Certificates and Approvals
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">RoHS Certification in the UAE</span>
            </div>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">
                Trademark Certificates in Australia & Thailand
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-fgreen-600 mr-3" />
            <div>
              <span className="font-bold">
                Test Reports from the PTEC laboratory Ministry of Science and
                Technology in Thailand
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-gray-500 mr-3" />
            <div>
              <span className="font-bold">Inne</span>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex flex-row gap-4 justify-center flex-wrap ">
          <Image
            src={Certificate1}
            alt="Certificate 1"
            width={296}
            height={384}
            className="h-[25vh] w-auto shadow-md rounded-md"
          />
          <Image
            src={Certificate1}
            alt="Certificate 1"
            width={296}
            height={384}
            className="h-[25vh] w-auto shadow-md rounded-md"
          />
          <Image
            src={Certificate2}
            alt="Certificate 2"
            width={296}
            height={384}
            className="h-[25vh] w-auto shadow-md rounded-md"
          />
          <Image
            src={Certificate3}
            alt="Certificate 3"
            width={296}
            height={384}
            className="h-[25vh] w-auto shadow-md rounded-md"
          />
          <Image
            src={Certificate4}
            alt="Certificate 4"
            width={296}
            height={384}
            className="h-[25vh] w-auto shadow-md rounded-md"
          />
          <Image
            src={Certificate5}
            alt="Certificate 5"
            width={296}
            height={384}
            className="h-[25vh] w-auto shadow-md rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
