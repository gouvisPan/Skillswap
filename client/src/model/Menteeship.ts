import mShip from "./abstractions/mShip";
import Resource from "./Resource";
import Task from "./Task";
import User from "./User";

class Menteeship extends mShip {
  mentee: User;

  constructor(
    id: string,
    mentee: User,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    super(id, lName, lPoints, lCoverImg, progress);
    this.mentee = mentee;
  }
}

export default Menteeship;
