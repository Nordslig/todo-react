import { useState } from "react";
import List from "./UI/List";

const tasks = [
  { id: Math.random(), text: "Zrobić pranie" },
  { id: Math.random(), text: "Pokodować" },
  { id: Math.random(), text: "Zrobić coś pożytecznego" },
];

const TasksList = () => {
  const [actualTasks, setActualTasks] = useState(tasks);

  const doneTaskHandler = (taskId) => {
    const tempTasks = [...actualTasks];
    const doneTask = tempTasks.findIndex((task) => task.id === taskId);
    tempTasks.splice(doneTask, 1);

    setActualTasks(tempTasks);
  };

  const list = actualTasks.map((task) => (
    <li key={task.id}>
      {task.text}
      <button type="button" onClick={() => doneTaskHandler(task.id)}>
        Done
      </button>
    </li>
  ));

  return (
    <List>
      <ul>{list}</ul>
    </List>
  );
};

export default TasksList;
