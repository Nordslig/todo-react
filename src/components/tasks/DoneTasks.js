import List from "../UI/List";
import classes from "./DoneTasks.module.css";

const DoneTasks = (props) => {
  return (
    <List>
      <h2 className="title">Done Tasks:</h2>
      {props.list.length === 0 && <p>No completed tasks!</p>}
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

export default DoneTasks;
