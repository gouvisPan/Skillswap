import User from "../User";
import Learning from "../Mentorship";
import webDev from "../../assets/web-dev-l.svg";
import chinese from "../../assets/chinese.svg";
import Task from "../Task";
import Resource from "../Resource";
import Mentorship from "../Mentorship";
import Menteeship from "../Menteeship";

const user1 = new User("Sandy");
const user2 = new User("Panagiotis");

const t1 = new Task(
  "Learn Basic HTML",
  "I suggest to try a UDEMY course first and then to challenge your knowlege by creating a basic project",
  4,
  8
);
const t2 = new Task(
  "Learn Basic CSS",
  "Youtube is more than enough for CSS! Try to style the basic HTML project you created",
  6,
  12
);

const t3 = new Task(
  "Learn Basic JavaScript",
  "I suggest to try a UDEMY course first becouse JS is complex and a structured learning expirience will" +
    "help you alot.",
  25,
  30
);

t1.setDone(true);

const r1 = new Resource("Google Doc", "https://www.random.com/balhblah?nana", [
  "HTML",
  "CSS",
]);
const r2 = new Resource(
  "Youtube Video",
  "https://www.random.com/balhblah?nana",
  ["Javascript"]
);
const r3 = new Resource(
  "StackOverflow Thread",
  "https://www.random.com/balhblah?nana",
  ["Javascript"]
);

const l1 = new Mentorship(user2, "Web dev", 1.3, webDev, 40);
const l2 = new Mentorship(user2, "Chinese", 1.4, chinese, 60);
const l3 = new Mentorship(user2, "English", 1, "", 50);
// const l4 = new Mentorship(user2,"Ux/Ui", 1.1, "",  20);
// const l5 = new Mentorship(user2,"Personal Development", 1, "", 0);
// const l6 = new Mentorship(user2,"Ux/Ui", 1.1, "", 0);

const m1 = new Menteeship(user2, "Solidworks", 1.5, "", 20);
const m2 = new Menteeship(user2, "Cooking", 1, "", 10);
const m3 = new Menteeship(user2, "AutoCAD", 1.2, "", 80);

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

export const dummyUser = user1;
