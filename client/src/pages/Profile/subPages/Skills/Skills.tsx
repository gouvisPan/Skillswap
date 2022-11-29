import React, { useState } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import SkillCard from "./SkillCard";
import "./Skills.scss";


const Skills = () => {
  const [displaySingle,setDisplaySingle] = useState(false);
  const [chosenSkill , setChosenSkill] = useState()
  const user = useAppSelector(state => state.user.data);

  const singleSkillJSX = <div className="single-skill">

  </div>

  const allSKillsJSX = <div className="skills-container">
                          {user?.mySkills.map((skill) => (
                            <SkillCard skill={skill} />
                          ))}
                          <SkillCard skill={{ name: "X", sp: 0, desc: "",experience: {info : "Native Speaker", years: 25} }} />
                        </div>


  const content = displaySingle ? singleSkillJSX : allSKillsJSX

  return (
    content
  );
};

export default Skills;
