import classes from "./ClearUpTasks.module.css";

const ClearUpTasks = (props) => {
  const clearUpHandler = () => {
    const { setTasks, setDoneTasks, setFailedTasks } = props.clearAllLists;

    setTasks("");
    setDoneTasks("");
    setFailedTasks("");
  };

  return (
    <button className={classes.button} onClick={clearUpHandler}>
      Clear up all tasks!
    </button>
  );
};

export default ClearUpTasks;
