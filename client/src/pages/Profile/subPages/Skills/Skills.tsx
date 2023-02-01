import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import Skill from "../../../../model/Skill";
import SkillCard from "./SkillCard";
import SkillEditForm from "./SkillEditForm";
import "./Skills.scss";
import { RiAddLine } from "react-icons/ri";
import { uiActions } from "../../../../store/reducers/ui-slice";

const Skills = () => {
  const displaySingle = useAppSelector((state) => state.ui.isSkillEditing);
  const skills = useAppSelector((state) => state.skill.skills);
  const dispatch = useAppDispatch();
  const [displayedSkill, setDisplayedSkill] = useState<Skill>();

  const cardClickHandler = (skill: Skill) => {
    dispatch(uiActions.onSkillEdit());
    setDisplayedSkill(skill);
  };

  const addClickHandler = () => {
    dispatch(uiActions.onSkillEdit());
    setDisplayedSkill(undefined);
  };

  const singleSkillJSX = <SkillEditForm skill={displayedSkill} />;

  const allSKillsJSX = (
    <div className="skills-container">
      {skills &&
        skills.map((skill) => (
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
