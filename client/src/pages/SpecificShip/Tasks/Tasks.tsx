import React from "react";
import Task from "../../../model/Task";
import TaskItem from "./TaskItem";
import "./Tasks.scss";

interface TasksProps {
  tasks: Task[];
  mentorship: Boolean;
}
const Tasks: React.FC<TasksProps> = (props) => {
  console.log(props.tasks);

  return (
    <div className="tasks-container">
      {props.tasks.map((t) => (
        <TaskItem task={t} />
      ))}
    </div>
  );
};

export default Tasks;
