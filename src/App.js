import { Fragment } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <Fragment>
      <NewTask />
      <TasksList />
    </Fragment>
  );
}

export default App;
