// ScrollingLogos.tsx
import React from "react";
import path from "path";
import fs from "fs";
import ScrollingLogosClient from "./ScrollingLogosClient";
import separatorSvg from "../assets/layered-waves-haikei.svg";

const ScrollingLogos = () => {
  const logosDir = path.join(process.cwd(), "public", "logos");
  const files = fs.readdirSync(logosDir);
  const logos = files.map((file) => `/logos/${file}`);

  return (
    <>
      {/* Top Separator */}
      <section className="w-screen">
        <div className="w-full">
          <img src={separatorSvg} alt="" className="w-full" />
        </div>
      </section>

      {/* Scrolling Logos */}
      <ScrollingLogosClient logos={logos} />

      {/* Bottom Separator */}
      <section className="w-screen">
        <div className="w-full rotate-180">
          <img src={separatorSvg} alt="" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default ScrollingLogos;
