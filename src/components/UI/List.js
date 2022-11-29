import classes from "./List.module.css";

const List = (props) => {
  return <div className={classes["list-block"]}>{props.children}</div>;
};

export default List;
