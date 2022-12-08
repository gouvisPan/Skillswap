import mShip from "./abstractions/mShip";
import Resource from "./Resource";
import Task from "./Task";
import User from "./User";

class Mentorship extends mShip {
  mentor: User;

  constructor(
    id: string,
    mentor: User,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    super(id, lName, lPoints, lCoverImg, progress);
    this.mentor = mentor;
  }
}

export default Mentorship;
