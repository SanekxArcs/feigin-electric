"use client"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import backgroundSvg from "../assets/home/hero waves.svg";
import FeiginElectricLogo from "../assets/FeiginElectricLogo2.svg";
import { TransitionLink } from "../components/utils/TransitionLink";

const plLang = {
  title: "Technologia Oszczędzania Energii",
  description:
    "Zmniejszenie zużycia energii to natychmiastowy i praktyczny sposób na obniżenie emisji dwutlenku węgla i przyspieszenie rewolucji ekologicznej.",
  button: "Zobacz Produkty",
};

const HeroSection = () => {
  return (
    <section className="hero-section bg-fred-50 relative">
      <div className="absolute inset-0">
        <Image
          src={backgroundSvg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="animate-pulse"
        />
      </div>
      <div className="container mx-auto px-6 flex flex-col items-center justify-center h-[90vh] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={FeiginElectricLogo}
            alt="Feigin Electric"
            className="w-[80vw]  h-auto "
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3 pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-start text-fgreen-800 mb-4 md:mb-6 select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {plLang.title}
          </motion.h1>
          <motion.p
            className="text-base text-balance md:text-lg lg:text-xl text-start md:text-center mb-6 md:mb-8 select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {plLang.description}
          </motion.p>
          <TransitionLink href="/products">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button className="bg-fred-400 py-4 px-8 md:py-6 md:px-12 ring-fred-400 text-fred-900 font-semibold transition-all duration-300 hover:text-fred-50 rounded-full hover:bg-red-500 ring-1 ring-offset-2 hover:ring-fred-600 hover:ring-2">
                {plLang.button} <ChevronRight />
              </Button>
            </motion.div>
          </TransitionLink>
        </motion.div>
      </div>
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-b from-white z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-white z-10"></div>
    </section>
  );
};

export default HeroSection;
