import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.scss";

const DUMMY_SKILLS = [
  { name: "Web Development", sp: 1.3 },
  { name: "English", sp: 1 },
  { name: "Chinese", sp: 1.8 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {DUMMY_SKILLS.map((skill) => (
        <SkillCard skill={skill} />
      ))}
      <SkillCard skill={{ name: "X", sp: 0 }} />
    </div>
  );
};

export default Skills;
