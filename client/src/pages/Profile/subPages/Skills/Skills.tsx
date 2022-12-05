import React, { useState } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import Skill from "../../../../model/Skill";
import SkillCard from "./SkillCard";
import SkillEditForm from "./SkillEditForm";
import "./Skills.scss";


const Skills = () => {
  const [displaySingle,setDisplaySingle] = useState(false);
  const user = useAppSelector(state => state.user.data);
  const [displayedSkill, setDisplayedSkill] = useState(user?.mySkills[0]);

  const cardClickHandler = (skill: Skill) => {
    setDisplaySingle(!displaySingle);
    setDisplayedSkill(skill);  
  }


  const singleSkillJSX = <SkillEditForm skill={displayedSkill!}/>

  const allSKillsJSX = <div className="skills-container">
                          {user?.mySkills.map((skill) => (
                            <SkillCard skill={skill} onClick= {cardClickHandler} key={skill.name}/>
                          ))}
                          {/* <SkillCard skill={{ name: "X", sp: 0, desc: "",experience: {info : "Native Speaker", years: 25} } onClick = ()} /> */}
                        </div>


  const content = displaySingle ? singleSkillJSX : allSKillsJSX

  return (content);
};

export default Skills;
