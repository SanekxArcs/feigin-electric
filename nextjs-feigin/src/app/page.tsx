import React from "react";
import HeroSection from "./homecomponents/HeroSection";
import OurPartners from "./homecomponents/OurClients";
import ProductsSection from "./homecomponents/ProductsSection";
import CaseSection from "./homecomponents/CaseSection";
import MissionGoalSection from "./homecomponents/MissionGoalSection";
import CallToActionSection from "./homecomponents/CallToActionSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurPartners />
      <ProductsSection />
      <CaseSection/>
      <MissionGoalSection/>
      <CallToActionSection />
    </>
  );
};

export default Home;
