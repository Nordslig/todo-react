import { useState } from "react";
import List from "../UI/List";

import classes from "./TasksList.module.css";

const tasks = [
  { id: Math.random(), text: "Zrobić pranie" },
  { id: Math.random(), text: "Pokodować" },
  { id: Math.random(), text: "Zrobić coś pożytecznego, test test test" },
  { id: Math.random(), text: "Poczytać książkę" },
];

const TasksList = (props) => {
  const [actualTasks, setActualTasks] = useState(tasks);

  const doneTaskHandler = (taskId) => {
    const newList = [...actualTasks];
    const removedTaskIndex = newList.findIndex((task) => task.id === taskId);
    const removedTask = newList.find((task) => task.id === taskId);
    newList.splice(removedTaskIndex, 1);
    setActualTasks(newList);

    props.onDoneTask(removedTask);
  };

  return (
    <List>
      <h2 className="title">Tasks:</h2>
      <ul className={classes.list}>
        {actualTasks.map((task) => {
          return (
            <li key={task.id} className={classes.task}>
              <p className={classes.title}>{task.text}</p>
              <button
                onClick={() => doneTaskHandler(task.id)}
                className={classes.button}
              >
                Done
              </button>
            </li>
          );
        })}
      </ul>
    </List>
  );
};

export default TasksList;
