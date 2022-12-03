import { useEffect, useState } from "react";
import List from "../UI/List";

import classes from "./TasksList.module.css";

const TasksList = (props) => {
  const [actualTasks, setActualTasks] = useState([]);

  const { list, onDoneTask, onRemoveTask } = props;

  useEffect(() => {
    setActualTasks(list);
  }, [list]);

  const doneTaskHandler = (taskId) => {
    const newList = [...actualTasks];
    const removedTaskIndex = newList.findIndex((task) => task.id === taskId);
    const removedTask = newList.find((task) => task.id === taskId);
    newList.splice(removedTaskIndex, 1);
    setActualTasks(newList);

    onDoneTask(newList, removedTask);
  };

  const failedTaskHandler = (taskId) => {
    const newList = [...actualTasks];
    const removedTaskIndex = newList.findIndex((task) => task.id === taskId);
    const removedTask = newList.find((task) => task.id === taskId);
    newList.splice(removedTaskIndex, 1);
    setActualTasks(newList);

    onRemoveTask(newList, removedTask);
  };

  return (
    <List>
      <h2 className="list-name">Tasks:</h2>
      {actualTasks.length === 0 && (
        <p className="empty-list">No tasks to do!</p>
      )}
      {actualTasks.length > 0 && (
        <ul className="list">
          {actualTasks.map((task) => {
            return (
              <li key={task.id} className="task">
                <p className="title">{task.text}</p>
                <button
                  onClick={() => doneTaskHandler(task.id)}
                  className={`${classes.button} ${classes.done}`}
                >
                  Done
                </button>
                <button
                  onClick={() => failedTaskHandler(task.id)}
                  className={`${classes.button} ${classes.failed}`}
                >
                  Failed
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </List>
  );
};

export default TasksList;
