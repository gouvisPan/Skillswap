import mShip from "./abstractions/mShip";
import Resource from "./Resource";
import Task from "./Task";
import User from "./User";

class Mentorship extends mShip {
  constructor(
    id: string,
    mentor: User,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    super(id, mentor, lName, lPoints, lCoverImg, progress);
  }
}

export default Mentorship;
