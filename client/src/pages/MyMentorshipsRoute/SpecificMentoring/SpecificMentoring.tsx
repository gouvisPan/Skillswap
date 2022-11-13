import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import Learning from "../../../model/Learning";
import "./SpecificMentoring.scss";
import { useState } from "react";
import arrow from "../../../assets/images/doodly-arrow.png";
import Messages from "./Messages/Messages";
import Tasks from "./Tasks/Tasks";
import Resources from "./Resources/Resources";

const SpecificMentoring = () => {
  const [progress, setProgress] = useState(40);
  const [mountedPage, setMountedPage] = useState(0);
  const myMentorships: Learning[] = useAppSelector(
    (state) => state.user.myLearnings
  );

  let { learningId } = useParams();
  const activeMetorship = myMentorships.find((m) => m.id === learningId);

  let mountedJsx = <Messages />;

  switch (mountedPage) {
    case 0:
      mountedJsx = <Messages />;
      break;
    case 1:
      mountedJsx = <Messages />;
      break;
    case 2:
      mountedJsx = <Resources />;
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
          <h3>{activeMetorship?.mentor}</h3>
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
