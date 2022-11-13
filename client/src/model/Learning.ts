import Task from "./Task";

class Learning {
  name: string;
  pointsPerHour: number;
  id: string;
  coverImg: string;
  mentor: string;
  tasks: Task[];

  constructor(
    lName: string,
    lPoints: number,
    lCoverImg: string,
    mentor: string
  ) {
    this.name = lName;
    this.pointsPerHour = lPoints;
    this.coverImg = lCoverImg;
    this.id = lName.toString();
    this.mentor = mentor;
    this.tasks = [];
  }
}

export default Learning;
