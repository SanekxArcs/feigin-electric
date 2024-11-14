
import React from "react";
import path from "path";
import fs from "fs";
import Image from "next/image";

const plLang = {
  title: "Nasi partnerzy",
};

const OurPartners = () => {
  const logosDir = path.join(process.cwd(), "public", "logos");
  const files = fs.readdirSync(logosDir);
  const logos = files.map((file) => `/logos/${file}`);
  return (
      <section className="py-24">
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-20 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="relative inline-block text-fgreen-950">
                {plLang.title}
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-20"></span>
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-x-8">
            {logos.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-36"
              >
                <Image
                  src={icon}
                  alt="logo"
                  width={150}
                  height={150}
                  className="p-2 border border-solid border-gray-200 shadow-sm h-24 object-contain rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default OurPartners;
