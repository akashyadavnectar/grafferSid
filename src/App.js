import React, { useEffect, useState } from "react";
import Task from "./components/Task";
import Input from "./components/Input";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map((e, i) => (
    <Task
      key={Math.random() * 1000}
      task={e}
      taskIndex={i}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  useEffect(() => {
    console.log(tasks);
  }, [tasks, setTasks]);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div
          className="row"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightgray",
          }}
        >
          <div className="col-md-6" style={{ padding: "30px" }}>
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                borderRadius: "7px",
              }}
            >
              Todo App
            </h1>
            <p style={{ textAlign: "center" }}>
              Note: Just Type the Task and hit Enter
            </p>
            <Input
              placeholder="What to do?"
              whatList={2}
              tasks={tasks}
              setTasks={setTasks}
            />
            {taskList}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
