import React from "react";

interface PageTopSectionProps {
  title: string;
  description: string;
}

const PageTopSection: React.FC<PageTopSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div
      className=" relative text-fgreen-950 bg-gradient-to-r from-fred-100 via-fgreen-100 to-fred-100
      bg-[length:200%_200%] bg-left bg-no-repeat animate-gradientShift"
    >

      <div className="container mx-auto px-6 py-16 text-center grid place-content-center">
        <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-xl mb-12">{description}</p>
      </div>
      <div className="absolute top-0 inset-x-0 h-12 pointer-events-none bg-gradient-to-b from-white z-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none bg-gradient-to-t from-white z-20"></div>
    </div>
  );
};

export default PageTopSection;
