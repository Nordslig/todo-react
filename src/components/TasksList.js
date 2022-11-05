import { useState } from "react";
import List from "./UI/List";

const tasks = [
  { id: Math.random(), text: "Zrobić pranie" },
  { id: Math.random(), text: "Pokodować" },
  { id: Math.random(), text: "Zrobić coś pożytecznego" },
];

const TasksList = () => {
  const [actualTasks, setActualTasks] = useState([tasks]);

  const doneTaskHandler = (event, taskId) => {
    // console.log(tasks);
    // const removedTask = tasks.findIndex((task) => task.id === taskId);
    // console.log(removedTask);
    // const changedTasks = tasks.slice(removedTask, 1);
    // console.log(changedTasks);
    // return tasks;
    const removedTask = tasks.findIndex((task) => task.id === taskId);
    tasks.splice(removedTask, 1);
    console.log(tasks);
    setActualTasks(tasks);
  };

  const list = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.text}
        <button onClick={(event) => doneTaskHandler(event, task.id)}>
          Done
        </button>
      </li>
    );
  });

  return (
    <List>
      <ul>{list}</ul>
    </List>
  );
};

export default TasksList;
