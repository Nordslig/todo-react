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
