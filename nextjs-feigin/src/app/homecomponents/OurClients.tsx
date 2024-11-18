
import React from "react";
import path from "path";
import fs from "fs";
import Image from "next/image";
import HighlightedText from "../components/HighlightedText";

const plLang = {
  title: "Nasi partnerzy",
};

const OurPartners = () => {
  const logosDir = path.join(process.cwd(), "public", "logos");
  const files = fs.readdirSync(logosDir);
  const logos = files.map((file) => `/logos/${file}`);
  
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            <HighlightedText title={plLang.title} />
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
          {logos.map((icon, index) => (
            <div key={index} className="flex justify-center items-center hover:scale-110 transition-all group">
              <Image
                src={icon}
                alt="logo"
                width={150}
                height={150}
                className="p-2 border border-solid border-gray-200 shadow-sm h-24 object-contain rounded-2xl group-hover:shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
