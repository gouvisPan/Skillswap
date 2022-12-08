import Resource from "../Resource";
import Task from "../Task";
import User from "../User";

abstract class mShip {
  ment: User;
  id: string;
  name: string;
  swapPoints: number;
  coverImg: string;
  tasks: Task[];
  resources: Resource[];
  progress: number;

  constructor(
    ID: string,
    ment: User,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    this.ment = ment;
    this.name = lName;
    this.swapPoints = lPoints;
    this.coverImg = lCoverImg;
    this.id = ID;
    this.tasks = [];
    this.resources = [];
    this.progress = progress;
  }
}

export default mShip;
