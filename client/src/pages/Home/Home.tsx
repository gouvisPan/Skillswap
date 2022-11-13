import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PopularSkills from "./PopularSkills/PopularSkills";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <PopularSkills />
    </div>
  );
};

export default Home;
