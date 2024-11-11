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
}) => {
  return (
    <div className="py-12 flex flex-row justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-52 h-52 mr-4"
        width={500}
        height={300}
      />
      <div>
        <h6 className="text-xl font-semibold">{officeName}</h6>
        <p
          className="mt-2 text-gray-700"
          dangerouslySetInnerHTML={{ __html: officeDetails }}
        />
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <>
      <PageTopSection title="Contact Us" description="Get in touch with us." />
      {/* Sales Offices */}
      <div className="container mx-auto">
        <div>
          <div className="mx-auto container px-4">
            <h5 className="text-2xl font-bold mb-8 text-center">
              Our Sales Offices
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center">
              {/* Office 1 */}
              <OfficeCard
                imageSrc="https://feiginelectric.com/wp-content/themes/ecnology/images/location-europe.png"
                imageAlt="Map of Europe"
                officeName="Europe"
                officeDetails={`Feigin Electric Sp z o.o. (Poland)<br />NIP: 9512603226<br />Email: office@feiginelectric.com<br />Web: feiginelectric.com`}
              />
              {/* Office 2 */}
              <OfficeCard
                imageSrc="https://feiginelectric.com/wp-content/themes/ecnology/images/location-middle-east.png"
                imageAlt="Map of Middle East"
                officeName="Middle East"
                officeDetails={`Ecnology Electronic Trading Ltd (Dubai)<br />Trade License: 1216211<br />Email: Vishnukrishna@ecnology.co<br />Web: ecnology.co`}
              />
              {/* Office 3 */}
              <OfficeCard
                imageSrc="https://feiginelectric.com/wp-content/themes/ecnology/images/location-south-east-asia.png"
                imageAlt="Map of South East Asia"
                officeName="South East Asia (Exclude Thailand)"
                officeDetails={`Coefficient Alpha Pte. Ltd (Singapore)<br />UEN: 202225166K<br />Web: coefficientalpha.com.sg`}
              />
              {/* Office 4 */}
              <OfficeCard
                imageSrc="https://feiginelectric.com/wp-content/themes/ecnology/images/location-balkan-map.png"
                imageAlt="Map of Balkan"
                officeName="Balkan Countries"
                officeDetails={`B -TECH (Kosovo)<br />Email: vullnet.pylla@b-tech.al`}
              />
              {/* Manufacturer */}
              <div className="py-12 flex flex-col items-center col-span-2 justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                <h5 className="text-xl font-semibold text-center">
                  Manufacturer
                </h5>
                <div>
                  <p className="mt-4 text-gray-700 ">
                    Feigin Electric Co., Ltd (Thailand)
                  </p>
                  <p className="text-gray-700">Tax ID: 0215557005844</p>
                  <p className="text-gray-700">BOI permission: 2564(2)2557</p>
                  <p className="text-gray-700">
                    Email:{" "}
                    <Link
                      href="mailto:info@feiginelectric.com"
                      className="text-blue-500"
                    >
                      info@feiginelectric.com
                    </Link>
                  </p>
                  <p className="text-gray-700">
                    Web:
                    <Link
                      className="text-blue-500"
                      href="https://feiginelectric.com"
                    >
                      feiginelectric.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 3 </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-fgreen-200 p-3 text-sm focus:ring-2 focus:ring-fgreen-600"
                    placeholder="Message"
                    rows={8}
                    id="message"
                  />
                </div>

                <div className="mt-4">
                  <Button
                    type="submit"
                    className="font-medium"
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
