import React from "react";
import Task from "../../../../model/Task";
import "./Tasks.scss";

const Tasks: React.FC<{ tasks: Task[] }> = (props) => {
  console.log(props.tasks);

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>
    </div>
  );
};

export default Tasks;
