import mShip from "./abstractions/mShip";
import Resource from "./Resource";
import Task from "./Task";
import User from "./User";

class Menteeship extends mShip {
  constructor(
    id: string,
    mentee: User,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    super(id, mentee, lName, lPoints, lCoverImg, progress);
  }
}

export default Menteeship;
