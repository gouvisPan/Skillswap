import mShip from "./abstractions/mShip";
import Resource from "./Resource";
import Task from "./Task";
import User from "./User";

class Menteeship extends mShip {
  mentee: User;

  constructor(
    mentee: User,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    super(lName, lPoints, lCoverImg, progress);
    this.mentee = mentee;
  }
}

export default Menteeship;
