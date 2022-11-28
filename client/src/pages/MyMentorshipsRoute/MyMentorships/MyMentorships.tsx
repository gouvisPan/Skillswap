import "./MyMentorships.scss";
import Learning from "../../../model/Mentorship";
import MentorshipCard from "../MentorshipCard/MentorshipCard";
import { useAppSelector } from "../../../hooks/hooks";
import { Link } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Fragment } from "react";

const MyLearning = () => {
  const myLearnings = useAppSelector((state) => state.user.data!.myMentorships);

  const content =
    myLearnings.length === 0 ? (
      <Fragment>
        <div className="my-learning-container__no-mentors">
          <h1>Pick a Mentor!</h1>
          <p>
            It looks like you dont have any mentorships yet. Click{" "}
            <Link to="/home">here</Link> to search for the skills of your
            preference and start your mentee journey!
          </p>
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <h1>My Mentors</h1>
        <div className="my-learning-container__cards">
          {myLearnings.map((learning: Learning) => {
            return (
              <Link
                to={`${learning.id}`}
                className="my-learning-container__cards--clean-a"
              >
                <MentorshipCard learning={learning} />
              </Link>
            );
          })}
        </div>
      </Fragment>
    );

  return <div className="page my-learning-container">{content}</div>;
};

export default MyLearning;
