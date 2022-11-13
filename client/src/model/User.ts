import Learning from "./Learning";
import Skill from "./Skill";

class User {
  id: string;
  name: string;
  sp: number;
  myLearnings: Learning[];
  mySkills: Skill[];

  constructor(mName: string) {
    this.name = mName;
    this.id = new Date().toISOString();
    this.sp = 0;
    this.myLearnings = [];
    this.mySkills = [];
  }

  addLearning(l: Learning) {
    this.myLearnings.push(l);
  }
}

export default User;
