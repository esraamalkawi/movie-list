import { useDispatch } from "react-redux";
import { deleteTask } from "../store/actions";
// import { useSelector } from "react-redux";
import { switchToFinishedList } from "../store/actions";

const TaskItem1 = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(props.task));
  };

  // const selMovies = useSelector((state) => state.movies)
  // selMovies.find((movie) => movie.id===selMovies[selMovies.length-1].id)
  const handleSwitch = () => {
    dispatch(switchToFinishedList(props.task));
  };

  return (
    <div>
      <p>{props.task.atatus ? "" : props.task.name}</p>
      <span>
        {props.task.status ? (
          ""
        ) : (
          <button onClick={handleSwitch} className="btn btn-success">
            {"done"}
          </button>
        )}
      </span>
      <span>
        {props.task.status ? (
          ""
        ) : (
          <button onClick={handleDelete} className="btn btn-danger">
            {"Delete"}
          </button>
        )}
      </span>
    </div>
  );
};

export default TaskItem1;
