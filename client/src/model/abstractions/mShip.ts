import Resource from "../Resource";
import Task from "../Task";

abstract class mShip {
  id: string;
  name: string;
  swapPoints: number;
  coverImg: string;
  tasks: Task[];
  resources: Resource[];
  progress: number;

  constructor(
    ID: string,
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
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
