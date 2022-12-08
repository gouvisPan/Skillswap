import React from "react";
import Menteeship from "../../../model/Menteeship";
import { useAppSelector } from "../../../hooks/hooks";
import { useParams } from "react-router-dom";
import Messages from "../../MyMentorshipsRoute/SpecificMentoring/Messages/Messages";
import Tasks from "../../MyMentorshipsRoute/SpecificMentoring/Tasks/Tasks";
import Resources from "../../MyMentorshipsRoute/SpecificMentoring/Resources/Resources";

const SpecificMenteeship: React.FC = () => {
  const myMenteeships: Menteeship[] = useAppSelector(
    (state) => state.user.data!.myMenteeships
  );
  let { teachingId } = useParams();

  const activeMenteeship = myMenteeships.find((m) => m.id === teachingId);
 

  let mountedJsx = < />;

  switch (mountedPage) {
    case 0:
      mountedJsx = <Messages/>;
      break;
    case 1:
      mountedJsx = <Tasks tasks={activeMetorship!.tasks} />;
      break;
    case 2:
      mountedJsx = <Resources resources={activeMetorship!.resources} />;
  }
  return <div>{activeMenteeship?.name}</div>;
};

export default SpecificMenteeship;
