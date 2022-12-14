import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import Menteeship from "../../../model/Menteeship";
import Skill from "../../../model/Skill";
import AddMentorships from "./AddMentorships";
import MenteeItem from ".././MenteeItem/MenteeItem";
import "./MyMenteeships.scss";

const MyMenteeships = () => {
  const mySkills = useAppSelector((state) => state.user.data!.mySkills);
  const myMenteeships = useAppSelector(
    (state) => state.user.data!.myMenteeships
  );
  const [currentCategory, setCurrentCategory] = useState(
    mySkills ? mySkills[0].name : " "
  );
  const [isActive, setIsActive] = useState(true);

  const categoryClickHandler = (name: string) => {
    setCurrentCategory(name);
  };

  return (
    <div className="menteeships c">
      {!mySkills || mySkills.length === 0 ? (
        <AddMentorships />
      ) : (
        <Fragment>
          <div className="menteeships__categories">
            {mySkills.map((s: Skill, index: number) => (
              <span
                className={`${isActive ? "a" : " "}`}
                onClick={() => categoryClickHandler(s.name)}
              >
                {s.name}
              </span>
            ))}
          </div>
          <div className="menteeships__list">
            {myMenteeships
              .filter(
                (menteeship: Menteeship) => menteeship.name === currentCategory
              )
              .map((menteeship: Menteeship) => (
                <Link to={`${menteeship.id}`}>
                  <MenteeItem menteeship={menteeship} />
                </Link>
              ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MyMenteeships;
