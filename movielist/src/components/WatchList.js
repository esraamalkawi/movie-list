import { useSelector } from "react-redux";
import TaskItem from "./MovieItem1";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";

const UnFinishedList = () => {
  const [query, setQuery] = useState("");
  const [add, setAdd] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const task = tasks
    .filter((task) => task.name.toLowerCase().includes(query.toLowerCase()))
    .map((task) => <TaskItem task={task} key={task.id} />);

  // const filtered = movies.filter((movie) => movie.watched === false);

  const handleChange = (event) => {
    setAdd({ ...task, [event.target.name]: event.target.value });
  };

  const resetInput = () => {
    setAdd({
      name: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(add));
    resetInput();
  };

  return (
    <div>
      <div>
        {/* <p>{filtered.length}</p> */}
        <form onSubmit={handleSubmit}>
          <input
            className="addn"
            type="text"
            onChange={handleChange}
            name="name"
            value={add.name}
          />

          <button type="submit" className="btn btn-outline-dark">
            Add a Task{" "}
          </button>
        </form>
      </div>
      <div> unfinished {task}</div>
    </div>
  );
};

export default UnFinishedList;
