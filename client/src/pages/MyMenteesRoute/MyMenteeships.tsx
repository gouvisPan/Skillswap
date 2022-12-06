import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import Menteeship from "../../model/Menteeship";
import Skill from "../../model/Skill";
import AddMentorships from "./AddMentorships";
import MenteeItem from "./MenteeItem/MenteeItem";
import "./MyMenteeships.scss";

const MyMenteeships = () => {
  const mySkills = useAppSelector((state) => state.user.data!.mySkills);
  const myMenteeships = useAppSelector(
    (state) => state.user.data!.myMenteeships
  );
  const [currentCategory, setCurrentCategory] = useState(mySkills[0].name);

  const categoryClickHandler = (name: string) => {
    setCurrentCategory(name)
  }

  return (
    <div className="menteeships c">
      {mySkills.length === 0 ? 
        <AddMentorships/>
      : (
        <Fragment>
          <div className="menteeships__categories">
            {mySkills.map((s: Skill) => (
              <span onClick = {() => categoryClickHandler(s.name)}>{s.name}</span>
            ))}
          </div>
          <div className="menteeships__list">
            {myMenteeships
          .filter(
            (menteeship: Menteeship) => menteeship.name === currentCategory
          )
          .map((menteeship: Menteeship) => (
            <MenteeItem menteeship={menteeship} />
          ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MyMenteeships;
