import { useState } from "react";
import classes from "./NewTask.module.css";

const NewTask = (props) => {
  const [taskText, setTaskText] = useState({});

  const newTaskHandler = (event) => {
    const task = {
      id: Math.floor(Math.random() * 1000),
      text: event.target.value,
    };

    setTaskText(task);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(taskText).length === 0) {
      return;
    }

    props.addNewTask(taskText);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>To do list</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <label htmlFor="text" className={classes.label}>
          Title:
        </label>
        <input id="text" className={classes.input} onChange={newTaskHandler} />
        <button className={classes.btn}>Add task</button>
      </form>
    </header>
  );
};

export default NewTask;
