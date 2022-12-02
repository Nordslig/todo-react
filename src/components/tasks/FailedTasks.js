import List from "../UI/List";

import classes from "./FailedTasks.module.css";

const FailedTasks = (props) => {
  return (
    <List>
      <h2>Failed Tasks</h2>
      {props.list.length === 0 && <p>No failed tasks!</p>}
      <ul className={classes.list}>
        {props.list.map((task) => {
          return (
            <li key={task.id} className={classes.task}>
              <p className={classes.text}>{task.text}</p>
            </li>
          );
        })}
      </ul>
    </List>
  );
};
export default FailedTasks;
