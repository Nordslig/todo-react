import { Fragment, useState } from "react";
import "./App.css";
import DoneTasks from "./components/tasks/DoneTasks";
import NewTask from "./components/tasks/NewTask";
import TasksList from "./components/tasks/TasksList";

const tasksList = [
  { id: Math.floor(Math.random() * 1000), text: "Zrobić pranie" },
  { id: Math.floor(Math.random() * 1000), text: "Pokodować" },
  {
    id: Math.floor(Math.random() * 1000),
    text: "Zrobić coś pożytecznego, test test test",
  },
  { id: Math.floor(Math.random() * 1000), text: "Poczytać książkę" },
];

function App() {
  const [tasks, setTasks] = useState(tasksList);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const newDoneTaskHandler = (list, task) => {
    setTasks(list);
    setDoneTasks((prevState) => [...prevState, task]);
  };

  return (
    <Fragment>
      <NewTask addNewTask={addTaskHandler} />
      <div className="sections">
        <TasksList list={tasks} onDoneTask={newDoneTaskHandler} />
        <DoneTasks list={doneTasks} />
      </div>
    </Fragment>
  );
}

export default App;
