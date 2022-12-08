import User from "../User";
import Learning from "../Mentorship";
import webDev from "../../assets/web-dev-l.svg";
import chinese from "../../assets/chinese.svg";
import Task from "../Task";
import Resource from "../Resource";
import Mentorship from "../Mentorship";
import Menteeship from "../Menteeship";
import Skill from "../../model/Skill";
const user1 = new User("Sandy", "sandy@gmail.com", "sandy");
const user2 = new User("Panagiotis", "panagiotis@gmail.com", "panagiotis");
const user3 = new User("Jonathan Nab", "panagiotis@gmail.com", "panagiotis");
const user4 = new User("Lara Croft", "panagiotis@gmail.com", "panagiotis");

const t1 = new Task(
  "1",
  "Learn Basic HTML",
  "I suggest to try a UDEMY course first and then to challenge your knowledge by creating a basic project",
  4,
  8
);
const t2 = new Task(
  "2",
  "Learn Basic CSS",
  "Youtube is more than enough for CSS! Try to style the basic HTML project you created",
  6,
  12
);

const t3 = new Task(
  "3",
  "Learn Basic JavaScript",
  "I suggest to try a UDEMY course first becouse JS is complex and a structured learning expirience will" +
    "help you alot.",
  25,
  30
);

const r1 = new Resource(
  "1",
  "Google Doc",
  "https://www.random.com/balhblah?nana",
  ["HTML", "CSS"]
);
const r2 = new Resource(
  "2",
  "Youtube Video",
  "https://www.random.com/balhblah?nana",
  ["Javascript"]
);
const r3 = new Resource(
  "3",
  "StackOverflow Thread",
  "https://www.random.com/balhblah?nana",
  ["Javascript"]
);

const skills = [
  new Skill(
    "Web Development",
    1.3,
    "I'll mentor you throughout your web development journey!! I will  teach you" +
      "the current hot stack with tools like React Nodejs and Express as well as the basics of CSS and HTML.",
    { info: "Working experience", years: 5 }
  ),
  new Skill("English", 1.1, "", { info: "Native Speaker", years: 25 }),
  new Skill("UX / UI", 1.1, "", { info: "Native Speaker", years: 25 }),
];
user1.mySkills = skills;
const l1 = new Mentorship("1", user2, "Web dev", 1.3, webDev, 40);
const l2 = new Mentorship("2", user2, "Chinese", 1.4, chinese, 60);
const l3 = new Mentorship("3", user2, "English", 1, "", 50);
// const l4 = new Mentorship(user2,"Ux/Ui", 1.1, "",  20);
// const l5 = new Mentorship(user2,"Personal Development", 1, "", 0);
// const l6 = new Mentorship(user2,"Ux/Ui", 1.1, "", 0);

const m1 = new Menteeship("1", user2, "Web Development", 1.5, "", 20);
const m2 = new Menteeship("2", user1, "Web Development", 1.5, "", 28);
const m3 = new Menteeship("3", user3, "Web Development", 1.5, "", 50);
const m4 = new Menteeship("4", user4, "Web Development", 1.5, "", 0);
const m5 = new Menteeship("5", user1, "English", 1, "", 10);
const m6 = new Menteeship("6", user3, "UX / UI", 1.2, "", 80);
const m7 = new Menteeship("7", user4, "Web Development", 1.3, "", 80);

l1.tasks.push(t1);
l1.tasks.push(t2);
l1.tasks.push(t3);
l1.resources.push(r1, r2, r3);

m1.tasks.push(t1);
m1.tasks.push(t2);
m1.tasks.push(t3);

user1.addMentorship(l1);
user1.addMentorship(l2);
user1.addMentorship(l3);
// user1.addMentorship(l4);
// user1.addMentorship(l5);
// user1.addMentorship(l6);

user1.addMenteeship(m1);
user1.addMenteeship(m2);
user1.addMenteeship(m3);
user1.addMenteeship(m4);
user1.addMenteeship(m5);
user1.addMenteeship(m6);
user1.addMenteeship(m7);

export const dummyUser1 = user1;
export const dummyUser2 = user2;
