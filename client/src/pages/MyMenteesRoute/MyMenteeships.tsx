import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import Menteeship from "../../model/Menteeship";
import Skill from "../../model/Skill";
import MenteeItem from "./MenteeItem/MenteeItem";
import "./MyMenteeships.scss";

const MyMenteeships = () => {
  const mySkills = useAppSelector((state) => state.user.mySkills);
  const myMenteeships = useAppSelector((state) => state.user.myMenteeships);
  const [currentCategory, setCurrentCategory] = useState(mySkills[0]);

  return (
    <div className="menteeships c">
      {mySkills.length === 0 ? (
        <div className="menteeships__no-skills">
          <h1>Add some skills to let other people find you!</h1>
          <p>
            It looks like you have not added any skills yet. Click{" "}
            <Link to="/profile">here</Link> to add some and start your Mentoring
            journey!
          </p>
        </div>
      ) : (
        <Fragment>
          <div className="menteeships__categories">
            {mySkills.map((s: Skill) => (
              <span>{s.name}</span>
            ))}
          </div>
          <div className="menteeships__list">
            {/* {myMenteeships
          .filter(
            (menteeship: Menteeship) => menteeship.name === currentCategory
          )
          .map((menteeship: Menteeship) => (
            // <MenteeItem menteeship={menteeship} />
          ))} */}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MyMenteeships;
