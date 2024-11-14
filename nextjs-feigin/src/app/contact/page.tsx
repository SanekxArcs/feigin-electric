"use client";

import Image from "next/image";
import PageTopSection from "../components/PageTopSection";
import Link from "next/link";
import balkan from "../assets/contact/balkan.webp";
import europe from "../assets/contact/europe.webp";
import thailand from "../assets/contact/Thailand.webp";
import southEastAsia from "../assets/contact/South East Asia.webp";
import middleEast from "../assets/contact/middleEast.webp";
import ContactForm from "../components/ContactForm";

import { StaticImageData } from "next/image";

interface OfficeCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  officeName: string;
  officeTitleFirm: string;
  officeTrading?: string;
  officeMail?: string;
  officeWeb?: string;
}

const offices = [
  {
    title: "Europe",
    imageSrc: europe,
    imageAlt: "Map of Europe",
    officeDetails: {
      titleFirm: "Feigin Electric Sp z o.o. (Poland)",
      tradeLicense: "NIP: 9512603226",
      email: "office@feiginelectric.com",
      web: "https://feiginelectric.pl",
    },
  },
  {
    title: "Middle East",
    imageSrc: middleEast,
    imageAlt: "Map of Middle East",
    officeDetails: {
      titleFirm: "Ecnology Electronic Trading Ltd (Dubai)",
      tradeLicense: "Trade License: 1216211",
      email: "Vishnukrishna@ecnology.co",
      web: "https://ecnology.co",
    },
  },
  {
    title: "South East Asia (Exclude Thailand)",
    imageSrc: southEastAsia,
    imageAlt: "Map of South East Asia",
    officeDetails: {
      titleFirm: "Ecnology Electronic Trading Ltd (Singapore)",
      tradeLicense: "UEN: 202225166K",
      web: "https://coefficientalpha.com.sg",
    },
  },
  {
    title: "Balkan Countries",
    imageSrc: balkan,
    imageAlt: "Map of Balkan",
    officeDetails: {
      titleFirm: "B -TECH (Kosovo)",
      email: "vullnet.pylla@b-tech.al",
    },
  },
  {
    title: "Manufacturer",
    imageSrc: thailand,
    imageAlt: "Map of Thailand",
    officeDetails: {
      titleFirm: "Feigin Electric Co., Ltd (Thailand)",
      tradeLicense: "Tax ID: 0215557005844",
      email: "info@feiginelectric.com",
      web: "https://feiginelectric.com",
    },
  },
];

const OfficeCard: React.FC<OfficeCardProps> = ({
  imageSrc,
  imageAlt,
  officeName,
  officeTitleFirm,
  officeTrading,
  officeMail,
  officeWeb,
}) => (
  <div className="p-6 flex flex-col sm:flex-row items-center rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-fred-200 shadow-fred-100 hover:shadow-lg transition-all group">
    <Image
      src={imageSrc}
      alt={imageAlt}
      className="w-full h-64 sm:w-40 sm:h-40 mb-4 sm:mb-0 sm:mr-4 object-contain group-hover:fill-red-500 transition-colors duration-300"
      width={320}
      height={320}
    />
    <div>
      <h6 className="text-lg font-semibold mb-2">{officeName}</h6>
      <div className="text-sm text-gray-600">
        <p>{officeTitleFirm}</p>
        {officeTrading && <p>{officeTrading}</p>}
        {officeMail && (
          <p>
            Email:
            <a href={`mailto:${officeMail}`} className="text-blue-500">
              {officeMail}
            </a>
          </p>
        )}
        {officeWeb && (
          <p>
            Web:{" "}
            <Link href={officeWeb} className="text-blue-500">
              {officeWeb}
            </Link>
          </p>
        )}
      </div>
    </div>
  </div>
);

export default function Contact() {
  const plLang = {
    title: "Kontakt",
    description: "Skontaktuj się z nami.",
    salesOffices: "Nasze Biura Sprzedaży",
  };
  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      <ContactForm />

      <div className="md:container mx-auto py-12 px-4 md:px-8">
        <h5 className="text-2xl font-bold mb-8 text-center">
          <span className="relative inline-block text-fred-950">
            {plLang.salesOffices}
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fred-200 rounded-md z-10"></span>
          </span>
          
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className={` ${index === offices.length - 1 ? "md:col-span-2  md:grid md:place-content-center" : ""}`}
            >
              <OfficeCard
                imageSrc={office.imageSrc}
                imageAlt={office.imageAlt}
                officeName={office.title}
                officeTitleFirm={office.officeDetails.titleFirm}
                officeTrading={office.officeDetails.tradeLicense}
                officeMail={office.officeDetails.email}
                officeWeb={office.officeDetails.web}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
