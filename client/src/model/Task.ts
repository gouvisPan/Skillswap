class Task {
  name: string;
  done: boolean;
  desc: string;
  minTime: number;
  maxTime: number;

  constructor(n: string, desc: string, min: number, max: number) {
    this.name = n;
    this.done = false;
    this.desc = desc;
    this.minTime = min;
    this.maxTime = max;
  }
}

export default Task;
