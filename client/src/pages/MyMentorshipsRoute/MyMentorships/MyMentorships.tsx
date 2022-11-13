import "./MyMentorships.scss";
import Learning from "../../../model/Learning";
import MentorshipCard from "../MentorshipCard/MentorshipCard";
import { useAppSelector } from "../../../hooks/hooks";
import { Link } from "react-router-dom";

const MyLearning = () => {
  const myLearnings = useAppSelector((state) => state.user.myLearnings);

  return (
    <div className="page my-learning-container">
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
    </div>
  );
};

export default MyLearning;
