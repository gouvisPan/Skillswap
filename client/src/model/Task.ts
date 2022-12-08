class Task {
  id: string;
  name: string;
  done: boolean;
  desc: string;
  minTime: number;
  maxTime: number;

  constructor(id: string, n: string, desc: string, min: number, max: number) {
    this.id = id;
    this.name = n;
    this.done = false;
    this.desc = desc;
    this.minTime = min;
    this.maxTime = max;
  }

  setDone = (d: boolean) => {
    this.done = d;
  };
}

export default Task;
