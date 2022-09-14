import React, { useState } from "react";

const Item = ({
  subIndex,
  taskIndex,

  whatList,

  value,
  isDone,
  tasks,
  setTasks,
}) => {
  const [inputText, setInputText] = useState(value);

  const handleDel = () => {
    const tasksCopy = [...tasks];
    tasksCopy[taskIndex].subtask.splice(subIndex, 1);
    setTasks(tasksCopy);
  };

  const editInput = (e) => {
    const newInputVal = e.target.value;
    setInputText(newInputVal);
  };

  const changeDoneStatus = () => {
    const tasksCopy = [...tasks];
    let statusCopy = false;
    if (whatList === 1) {
      //update subtask
      statusCopy = tasksCopy[taskIndex].subtask[subIndex].isDone;
      tasksCopy[taskIndex].subtask[subIndex].isDone = !statusCopy;
    } else {
      //updaet task
      statusCopy = tasksCopy[taskIndex].isDone;
      tasksCopy[taskIndex].isDone = !statusCopy;
    }

    setTasks(tasksCopy);
  };

  const update = (e) => {
    if (e.keyCode === 13) {
      const tasksCopy = [...tasks];
      if (whatList === 1) {
        //update subtask
        tasksCopy[taskIndex].subtask[subIndex].subtaskTitle = inputText;
      } else {
        //update task
        tasksCopy[taskIndex].taskTitle = inputText;
      }

      setTasks(tasksCopy);
    }
  };

  const style = { textDecorationLine: isDone ? "line-through" : "none" };

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-2 mt-3">
            <input
              type="checkbox"
              checked={isDone}
              onChange={changeDoneStatus}
            />
            </div>
          <div className="col-md-6 mt-3">
            <input
              style={style}
              value={inputText}
              onChange={editInput}
              onKeyDown={update}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
