import { useDispatch } from "react-redux";
import { deleteTask, switchToFinishedList } from "../store/actions";

const TaskItem2 = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(props.task));
  };

  const handleSwitch = () => {
    dispatch(switchToFinishedList(props.task.status));
  };

  return (
    <div>
      <p>{props.task.status ? props.task.name : ""}</p>
      <span>
        {props.task.status ? (
          <button onClick={handleSwitch} className="btn btn-dark">
            {"not done"}
          </button>
        ) : (
          ""
        )}
      </span>

      <span>
        {props.task.status ? (
          <button onClick={handleDelete} className="btn btn-danger">
            {"Delete"}
          </button>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default TaskItem2;
