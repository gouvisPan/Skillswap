import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import "./SpecificShip.scss";
import { useState } from "react";
import Messages from "./Messages/Messages";
import Tasks from "./Tasks/Tasks";
import Resources from "./Resources/Resources";
import mShip from "../../model/abstractions/mShip";

const SpecificShip: React.FC<{ mentorship: Boolean }> = (props) => {
  const [mountedPage, setMountedPage] = useState(0);
  const myShips: mShip[] = useAppSelector((state) =>
    props.mentorship
      ? state.user.data!.myMentorships
      : state.user.data!.myMenteeships
  );
  let { mentId } = useParams();
  const activeShip = myShips.find((m) => m.id === mentId);
  const [progress, setProgress] = useState(activeShip!.progress);

  let mountedJsx = <Messages mentorship={props.mentorship} />;

  switch (mountedPage) {
    case 0:
      mountedJsx = <Messages mentorship={props.mentorship} />;
      break;
    case 1:
      mountedJsx = (
        <Tasks tasks={activeShip!.tasks} mentorship={props.mentorship} />
      );
      break;
    case 2:
      mountedJsx = (
        <Resources
          resources={activeShip!.resources}
          mentorship={props.mentorship}
        />
      );
  }

  return (
    <div className="specific-ship-container c">
      <div className="specific-ship-container__header">
        <div className="specific-ship-container__header--mentor">
          <div className="specific-ship-container__header--mentor__inline">
            <h3>{activeShip?.name}</h3>
            <span>{props.mentorship ? "by" : "on"}</span>
          </div>

          <h3>{activeShip?.ment.name}</h3>
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
      <div className="specific-ship-container__content">{mountedJsx}</div>
    </div>
  );
};

export default SpecificShip;
