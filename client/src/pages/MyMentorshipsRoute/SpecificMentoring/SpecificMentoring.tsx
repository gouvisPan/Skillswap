import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import "./SpecificMentoring.scss";
import { useState } from "react";
import arrow from "../../../assets/images/doodly-arrow.png";
import Messages from "./Messages/Messages";
import Tasks from "./Tasks/Tasks";
import Resources from "./Resources/Resources";
import Mentorship from "../../../model/Mentorship";

const SpecificMentoring = () => {
  const [mountedPage, setMountedPage] = useState(0);
  const myMentorships: Mentorship[] = useAppSelector(
    (state) => state.user.myMentorships
  );
  
  let { learningId } = useParams();
  const activeMetorship = myMentorships.find((m) => m.id === learningId);
  const [progress, setProgress] = useState(activeMetorship!.progress);

  let mountedJsx = <Messages />;

  switch (mountedPage) {
    case 0:
      mountedJsx = <Messages />;
      break;
    case 1:
      mountedJsx = <Tasks tasks={activeMetorship!.tasks} />;
      break;
    case 2:
      mountedJsx = <Resources resources={activeMetorship!.resources} />;
  }

  return (
    <div className="specific-mentoring-container c">
      <div className="bg" style={{ left: `${progress - 100}%` }}></div>
      <h4>
        Your navigation bar shows your progress! <img src={arrow} alt="arrow" />
      </h4>
      <div className="specific-mentoring-container__header">
        <div className="specific-mentoring-container__header--mentor">
          <div className="specific-mentoring-container__header--mentor__inline">
            <h3>{activeMetorship?.name}</h3>
            <span>by</span>
          </div>
          <h3>{activeMetorship?.mentor.name}</h3>
        </div>
        <ul>
          <li
            onClick={() => {
              setMountedPage(0);
            }}
          >
            Messeges
          </li>
          <li
            onClick={() => {
              setMountedPage(1);
            }}
          >
            Tasks
          </li>
          <li
            onClick={() => {
              setMountedPage(2);
            }}
          >
            Resources
          </li>
        </ul>
      </div>
      <div className="specific-mentoring-container__content">{mountedJsx}</div>
    </div>
  );
};

export default SpecificMentoring;
