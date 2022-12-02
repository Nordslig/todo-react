import { Fragment, useState } from "react";
import "./App.css";
import DoneTasks from "./components/tasks/DoneTasks";
import FailedTasks from "./components/tasks/FailedTasks";
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
  const [failedTasks, setFailedTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const newDoneTaskHandler = (list, task) => {
    setTasks(list);
    setDoneTasks((prevState) => [...prevState, task]);
  };

  const newFailedTaskHandler = (list, task) => {
    setTasks(list);
    setFailedTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="body">
      <NewTask addNewTask={addTaskHandler} />
      <div className="sections">
        <TasksList
          list={tasks}
          onDoneTask={newDoneTaskHandler}
          onRemoveTask={newFailedTaskHandler}
        />
        <DoneTasks list={doneTasks} />
        <FailedTasks list={failedTasks} />
      </div>
    </div>
  );
}

export default App;
