import React from "react";
import Subtask from "./Subtask";
import Input from "./Input";
import Item from "./Item";

const Task = ({ task, taskIndex, tasks, setTasks }) => {
  const subtaskList = task.subtask.map((e, i) => (
    <Subtask
      key={e.id}
      subIndex={i}
      subtask={e}
      task={task}
      taskIndex={taskIndex}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  const numberOfDone = task.subtask.filter((e) => e.isDone).length;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <br />
          <h4>Tasks : </h4>
          <Item
            taskIndex={taskIndex}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            whatList={2}
            value={task.taskTitle}
            isDone={task.isDone}
          />
          <h5 className="mt-3">Sub Tasks : </h5>
          <span>
            {numberOfDone} of {task.subtask.length} completed
          </span>
          {subtaskList}
          <Input
            placeholder={"Add subtask..."}
            whatList={1}
            task={task}
            taskIndex={taskIndex}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
