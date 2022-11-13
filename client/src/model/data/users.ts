import User from "../User";
import Learning from "../Learning";
import webDev from "../../assets/web-dev-l.svg";
import chinese from "../../assets/chinese.svg";
import Task from "../Task";

const l1 = new Learning("Web dev", 1.3, webDev, "Tom Hardy");
const t1 = new Task(
  "Learn Basic HTML",
  "I suggest to try a UDEMY course first and then to challenge your knowlege by vreating a basic project",
  4,
  8
);

l1.tasks.push(t1);

const l2 = new Learning("Chinese", 1.4, chinese, "Black Rindis");
const l3 = new Learning("English", 1, "", "Jason Statham");
const l4 = new Learning("Ux/Ui", 1.1, "", "Adam Flang");
const l5 = new Learning("Personal Development", 1, "", "Jason Adams");
const l6 = new Learning("Ux/Ui", 1.1, "", "Adam Flang");

const user1 = new User("Jonathan");

user1.addLearning(l1);
user1.addLearning(l2);
user1.addLearning(l3);
user1.addLearning(l4);
user1.addLearning(l5);
user1.addLearning(l6);

export const dummyUser = user1;
