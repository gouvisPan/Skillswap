import { Model, fk, oneToOne, many } from "redux-orm";
import ValidatingModel from "redux-orm";

export class User extends Model {}
User.modelName = "User";

export class Mentorship extends Model {}
Mentorship.modelName = "Mentorship";
Mentorship.fields = {
  user: many("User", "mentorships"),
  resources: fk("Resource", "mentorships"),
};

export class Resource extends Model {}
Resource.modelName = "Resource";
