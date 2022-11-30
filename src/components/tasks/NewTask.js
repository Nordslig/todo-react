import classes from "./NewTask.module.css";

const NewTask = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>To do list</h1>
      <form className={classes.form}>
        <label htmlFor="text" className={classes.label}>
          Title:
        </label>
        <input id="text" className={classes.input} />
        <button className={classes.btn}>Add task</button>
      </form>
    </header>
  );
};

export default NewTask;
