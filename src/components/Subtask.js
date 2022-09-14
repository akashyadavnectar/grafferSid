import React from "react";
import Item from "./Item";

const Subtask = ({ subtask, subIndex, task, taskIndex, tasks, setTasks }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Item
            subIndex={subIndex}
            subtask={subtask}
            taskIndex={taskIndex}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            whatList={1}
            value={subtask.subtaskTitle}
            isDone={subtask.isDone}
          />
        </div>
      </div>
    </div>
  );
};

export default Subtask;
