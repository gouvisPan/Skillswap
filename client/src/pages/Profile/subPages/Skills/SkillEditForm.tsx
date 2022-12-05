import React from 'react'
import Skill from '../../../../model/Skill'
import './SkillEditForm.scss';
import * as Yup from "yup";

interface skillEditProps{
    skill: Skill
}

const SkillEditForm: React.FC<skillEditProps> = (props) => {
    const validate = Yup.object({
        subject: Yup.string()
          .max(45, "Must be up to 45 characters")
          .required("Subject is required"),
        name: Yup.string()
          .max(25, "Must be up to 25 characters")
          .required("Name is required"),
       
      });

  return (
    <div className="single-skill">
        <div className="single-skill__content">
        <h3>Content</h3>
        
        <input placeholder={props.skill.name}></input>
        <input  placeholder={props.skill.desc}></input>
        </div>
        <div className="single-skill__experience">
        <h3>Experience</h3>
        <input placeholder={props.skill.experience.info}></input>
        <input  placeholder={props.skill.experience.years.toString()}></input> 
        </div>
  </div>  
  )
}

export default SkillEditForm