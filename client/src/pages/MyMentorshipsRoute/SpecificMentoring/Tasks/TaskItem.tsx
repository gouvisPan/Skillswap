import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
import React, { useState } from "react";
import Task from "../../../../model/Task";
import "./Tasks.scss";

const TaskItem: React.FC<{ task: Task }> = (props) => {
  const [isDue, setIsDue] = useState(!props.task.done);

  const taskCSS = isDue ? "task" : "task done";

  return (
    <div className={taskCSS}>
      <h3>{props.task.name}</h3>
      {isDue && <p>{props.task.desc}</p>}
      {!isDue && <del>{props.task.desc}</del>}

      <span>
        {props.task.minTime} to {props.task.maxTime}h to complete.
      </span>
    </div>
  );
};

export default TaskItem;
