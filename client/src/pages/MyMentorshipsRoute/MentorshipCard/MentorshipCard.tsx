import React from "react";
import Learning from "../../../model/Learning";
import "./MentorshipCard.scss";
import progress from "../../../assets/images/in-progress-icon.png";
const LessonCard: React.FC<{ learning: Learning }> = (props) => {
  const learning: Learning = props.learning;

  return (
    <div className="lesson-card">
      <img src={progress} className="lesson-card__badge"></img>
      <img src={learning.coverImg} className="lesson-card__bg"></img>
      <h5>{learning.mentor}</h5>
      <p>{learning.name}</p>
    </div>
  );
};

export default LessonCard;
