import List from "../UI/List";

const FailedTasks = (props) => {
  return (
    <List>
      <h2 className="list-name">Failed Tasks</h2>
      {props.list.length === 0 && (
        <p className="empty-list">No failed tasks!</p>
      )}
      {props.list.length > 0 && (
        <ul className="list">
          {props.list.map((task) => {
            return (
              <li key={task.id} className="task">
                <p className="title">{task.text}</p>
              </li>
            );
          })}
        </ul>
      )}
    </List>
  );
};
export default FailedTasks;
