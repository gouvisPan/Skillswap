import Menteeship from "./Menteeship";
import Mentorship from "./Mentorship";
import Learning from "./Mentorship";
import Skill from "./Skill";

class User {
  id: string;
  email: string;
  password: string;
  name: string;
  sp: number;
  photo: string;
  myMentorships: Mentorship[];
  myMenteeships: Menteeship[];
  mySkills: Skill[];

  constructor(mName: string, mEmail: string, mPassword: string) {
    this.name = mName;
    this.email = mEmail;
    this.password = mPassword;
    this.id = new Date().toISOString();
    this.sp = 0;
    this.photo = "";
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
