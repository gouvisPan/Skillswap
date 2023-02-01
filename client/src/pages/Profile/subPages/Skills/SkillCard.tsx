import React from "react";
import Skill from "../../../../model/Skill";
import "./Skills.scss";
import { GrFormAdd } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";

interface skillCardProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
}

const SkillCard: React.FC<skillCardProps> = (props) => {
  const cardCSS =
    props.skill.name === "X" && props.skill.sp === 0
      ? "add-card"
      : "skill-card";

  return (
    <div className={cardCSS}>
      <div
        className={`${cardCSS}__content`}
        onClick={() => props.onClick(props.skill)}
      >
        <h3>{props.skill.name}</h3>
        <h4>SP: {props.skill.sp}</h4>
        <GrFormAdd className={`${cardCSS}__add`} />
      </div>
      <AiFillCloseCircle className={`${cardCSS}__close-icon`} />
    </div>
  );
};

export default SkillCard;
