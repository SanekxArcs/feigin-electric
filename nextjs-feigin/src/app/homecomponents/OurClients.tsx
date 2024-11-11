// ScrollingLogos.tsx
import React from "react";
import path from "path";
import fs from "fs";
import Image from "next/image";

const plLang = {
  title: "Współpracujemy z najlepszymi partnerami"
}


const OurPartners = () => {  
  const logosDir = path.join(process.cwd(), "public", "logos");
  const files = fs.readdirSync(logosDir);
  const logos = files.map((file) => `/logos/${file}`);
  return (
    <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-4xl  font-bold">
            <span className="relative inline-block text-fgreen-950">
              {plLang.title}
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-100 rounded-md -z-20"></span>
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-10">
          {logos.map((icon, index) => (
            <Image
              src={icon}
              key={index}
              alt="logo"
              width={200}
              height={200}
              className="flex justify-center items-center p-2 border border-solid border-gray-200 shadow-sm h-24 object-contain rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
