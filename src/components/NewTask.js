const NewTask = () => {
  return (
    <header>
      <h1>To do list</h1>
      <form>
        <label htmlFor="text">Name</label>
        <input id="text" />
        <button>Add task</button>
      </form>
    </header>
  );
};

export default NewTask;
