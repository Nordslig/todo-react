import List from "../UI/List";

const DoneTasks = (props) => {
  return (
    <List>
      <h2 className="list-name">Done Tasks:</h2>
      {props.list.length === 0 && (
        <p className="empty-list">No completed tasks!</p>
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

export default DoneTasks;
