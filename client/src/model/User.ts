import Menteeship from "./Menteeship";
import Mentorship from "./Mentorship";
import Skill from "./Skill";

class User {
  id: string;
  email: string;
  password: string;
  name: string;
  sp: number;
  photo: string;
  slogan: string;
  bio: string;
  mentorships: Mentorship[];
  myMenteeships: Menteeship[];
  mySkills: Skill[];

  constructor(mName: string, mEmail: string, mPassword: string) {
    this.name = mName;
    this.email = mEmail;
    this.password = mPassword;
    this.id = new Date().toISOString();
    this.sp = 0;
    this.photo = "";
    this.mentorships = [];
    this.myMenteeships = [];
    this.mySkills = [];
    this.slogan = "";
    this.bio = "";
  }

  addMentorship(m: Mentorship) {
    this.mentorships.push(m);
  }
  addMenteeship(m: Menteeship) {
    this.myMenteeships.push(m);
  }
}

export default User;
