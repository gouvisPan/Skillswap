import React, { useState } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import Skill from "../../../../model/Skill";
import SkillCard from "./SkillCard";
import SkillEditForm from "./SkillEditForm";
import "./Skills.scss";
import { RiAddLine } from "react-icons/ri";

const Skills = () => {
  const [displaySingle, setDisplaySingle] = useState(false);
  const user = useAppSelector((state) => state.user.data);
  const [displayedSkill, setDisplayedSkill] = useState<Skill>();

  const cardClickHandler = (skill: Skill) => {
    setDisplaySingle(!displaySingle);
    setDisplayedSkill(skill);
  };

  const addClickHandler = () => {
    setDisplaySingle(!displaySingle);
    setDisplayedSkill(undefined);
  };

  const singleSkillJSX = <SkillEditForm skill={displayedSkill} />;

  const allSKillsJSX = (
    <div className="skills-container">
      {user!.mySkills &&
        user!.mySkills.map((skill) => (
          <SkillCard
            skill={skill}
            onClick={cardClickHandler}
            key={skill.name}
          />
        ))}
      <RiAddLine className="skills-container__add" onClick={addClickHandler} />
    </div>
  );

  const content = displaySingle ? singleSkillJSX : allSKillsJSX;

  return content;
};

export default Skills;
