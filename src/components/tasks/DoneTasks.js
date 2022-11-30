import List from "../UI/List";
import classes from "./DoneTasks.module.css";

const DoneTasks = (props) => {
  return (
    <List>
      <h2 className="title">Done Tasks:</h2>
      {!props.tasksList && <p>No completed tasks!</p>}
      {props.tasksList && (
        <ul className={classes.list}>
          {props.tasksList.map((task) => {
            return (
              <li key={task.id} className={classes.task}>
                <p className={classes.text}>{task.text}</p>
              </li>
            );
          })}
        </ul>
      )}
    </List>
  );
};

export default DoneTasks;
