import Resource from "../Resource";
import Task from "../Task";

abstract class mShip {
  id: string;
  name: string;
  pointsPerHour: number;
  coverImg: string;
  tasks: Task[];
  resources: Resource[];
  progress: number;

  constructor(
    lName: string,
    lPoints: number,
    lCoverImg: string,
    progress: number
  ) {
    this.name = lName;
    this.pointsPerHour = lPoints;
    this.coverImg = lCoverImg;
    this.id = lName.toString();
    this.tasks = [];
    this.resources = [];
    this.progress = progress;
  }
}

export default mShip;
