import React from "react";
import HeroSection from "../../components/Header/HeroSection/HeroSection";
import PopularSkills from "./PopularSkills/PopularSkills";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <PopularSkills />
    </div>
  );
};

export default Home;
