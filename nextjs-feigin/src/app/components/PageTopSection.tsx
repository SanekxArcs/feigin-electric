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
      className="text-fgreen-950 bg-gradient-to-r from-fred-50 via-fgreen-50 to-fred-50
      bg-[length:200%_200%] bg-left bg-no-repeat animate-gradientShift"
    >
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-xl mb-12">{description}</p>
      </div>
    </div>
  );
};

export default PageTopSection;
