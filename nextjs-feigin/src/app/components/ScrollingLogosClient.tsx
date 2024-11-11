// ScrollingLogosClient.tsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface ScrollingLogosClientProps {
  logos: string[];
}

const ScrollingLogosClient: React.FC<ScrollingLogosClientProps> = ({
  logos,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start("animate");
  };

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const logosRow = (
    <div className="flex space-x-8 gap-20 drop-shadow-md ">
      {logos.map((logo, index) => (
        <motion.div className="" key={index} whileHover={{ scale: 1.01 }}>
          <Image
            src={logo}
            alt={`Logo ${index + 1}`}
            width={150}
            height={150}
            className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-red-600 overflow-hidden">
      <div
        className="relative flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate={controls}
          initial="animate"
        >
          {logosRow}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-red-600"></div>
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-red-600"></div>
      </div>
    </div>
  );
};

export default ScrollingLogosClient;
