import { Fragment, useState } from "react";
import "./App.css";
import DoneTasks from "./components/tasks/DoneTasks";
import NewTask from "./components/tasks/NewTask";
import TasksList from "./components/tasks/TasksList";

function App() {
  const [doneTasks, setDoneTasks] = useState([]);

  const newDoneTask = (task) => {
    setDoneTasks((prevState) => [...prevState, task]);
  };

  return (
    <Fragment>
      <NewTask />
      <div className="sections">
        <TasksList onDoneTask={newDoneTask} />
        <DoneTasks tasksList={doneTasks} />
      </div>
    </Fragment>
  );
}

export default App;
