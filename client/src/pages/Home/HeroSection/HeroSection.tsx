import SearchBar from "./SearchBar/SearchBar";
import "./HeroSection.scss";
import heroSvg from "../../../assets/co-working.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-container__bg"></div>
      <div className="hero-container__search-area">
        <h1>Find a SkillSwap partner, with a simple search </h1>
        <SearchBar />
      </div>
      <img src={heroSvg} />
    </div>
  );
};

export default HeroSection;
