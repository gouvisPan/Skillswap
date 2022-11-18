import Menteeship from "./Menteeship";
import Mentorship from "./Mentorship";
import Learning from "./Mentorship";
import Skill from "./Skill";

class User {
  id: string;
  name: string;
  sp: number;
  myMentorships: Mentorship[];
  myMenteeships: Menteeship[];
  mySkills: Skill[];

  constructor(mName: string) {
    this.name = mName;
    this.id = new Date().toISOString();
    this.sp = 0;
    this.myMentorships = [];
    this.myMenteeships = [];
    this.mySkills = [];
  }

  addMentorship(m: Mentorship) {
    this.myMentorships.push(m);
  }
  addMenteeship(m: Menteeship) {
    this.myMenteeships.push(m);
  }
}

export default User;
