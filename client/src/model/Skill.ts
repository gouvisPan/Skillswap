class Skill {
  name: string;
  sp: number;
  desc: string;
  experience: {
    info: string,
    years: number
  }

  constructor(n: string, sp: number, desc: string, exp: {info: string, years:number}) {
    this.name = n;
    this.sp = sp;
    this.desc=desc;
    this.experience = exp;
  }
}

export default Skill;
