"use client";

import Image from "next/image";
import PageTopSection from "../components/PageTopSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface OfficeCardProps {
  imageSrc: string;
  imageAlt: string;
  officeName: string;
  officeDetails: string;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  imageSrc,
  imageAlt,
  officeName,
  officeDetails,
}) => (
  <div className="p-8 flex flex-row items-center rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all">
    <Image
      src={imageSrc}
      alt={imageAlt}
      className="w-40 h-40 mr-4 object-cover"
      width={160}
      height={160}
    />
    <div>
      <h6 className="text-lg font-semibold mb-2">{officeName}</h6>
      <p
        className="text-sm text-gray-600"
        dangerouslySetInnerHTML={{ __html: officeDetails }}
      />
    </div>
  </div>
);

export default function Contact() {
  const offices = [
    {
      title: "Europe",
      imageSrc:
        "https://feiginelectric.com/wp-content/themes/ecnology/images/location-europe.png",
      imageAlt: "Map of Europe",
      officeDetails: `Feigin Electric Sp z o.o. (Poland)<br />NIP: 9512603226<br />Email: office@feiginelectric.com<br />Web: feiginelectric.com`,
    },
    {
      title: "Middle East",
      imageSrc:
        "https://feiginelectric.com/wp-content/themes/ecnology/images/location-middle-east.png",
      imageAlt: "Map of Middle East",
      officeDetails: `Ecnology Electronic Trading Ltd (Dubai)<br />Trade License: 1216211<br />Email: Vishnukrishna@ecnology.co<br />Web: ecnology.co`,
    },
    {
      title: "South East Asia (Exclude Thailand)",
      imageSrc:
        "https://feiginelectric.com/wp-content/themes/ecnology/images/location-south-east-asia.png",
      imageAlt: "Map of South East Asia",
      officeDetails: `Coefficient Alpha Pte. Ltd (Singapore)<br />UEN: 202225166K<br />Web: coefficientalpha.com.sg`,
    },
    {
      title: "Balkan Countries",
      imageSrc:
        "https://feiginelectric.com/wp-content/themes/ecnology/images/location-balkan-map.png",
      imageAlt: "Map of Balkan",
      officeDetails: `B -TECH (Kosovo)<br />Email: vullnet.pylla@b-tech.al`,
    },
  ];

  return (
    <>
      <PageTopSection title="Contact Us" description="Get in touch with us." />
      {/* Sales Offices */}
      <div className="container mx-auto py-12 px-4 md:px-8">
        <h5 className="text-2xl font-bold mb-8 text-center">
          Our Sales Offices
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <OfficeCard
              key={index}
              imageSrc={office.imageSrc}
              imageAlt={office.imageAlt}
              officeName={office.title}
              officeDetails={office.officeDetails}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center rounded-xl border border-gray-200 bg-white shadow-md p-8">
          <h5 className="text-lg font-semibold mb-4 text-center">
            Manufacturer
          </h5>
          <p className="text-sm text-gray-600 mb-1">
            Feigin Electric Co., Ltd (Thailand)
          </p>
          <p className="text-sm text-gray-600 mb-1">Tax ID: 0215557005844</p>
          <p className="text-sm text-gray-600 mb-1">
            BOI permission: 2564(2)2557
          </p>
          <p className="text-sm text-gray-600 mb-1">
            Email:{" "}
            <Link
              href="mailto:info@feiginelectric.com"
              className="text-blue-500"
            >
              info@feiginelectric.com
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Web:{" "}
            <Link href="https://feiginelectric.com" className="text-blue-500">
              feiginelectric.com
            </Link>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:gap-x-16 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>
              <div className="mt-8">
                <a
                  href="tel:01514754450"
                  className="text-2xl font-bold text-pink-600 block"
                >
                  0151 475 4450
                </a>
                <address className="mt-2 not-italic text-sm">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg lg:col-span-3 lg:p-8">
              <form action="#" className="space-y-4">
                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
                <div>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={6}
                    id="message"
                  />
                </div>
                <div className="mt-4">
                  <Button
                    type="submit"
                    className="w-full md:w-auto font-medium"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
