import { useDispatch } from "react-redux";
import { addMovie, deleteMovie, switchList } from "../store/actions";

const MovieItem2 = (props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (props.movie.watched) {
      dispatch(addMovie(props.movie));
    }
    dispatch(deleteMovie(props.movie));
  };

  const handleSwitch = () => {
    const itemId = props.movie;

    if (props.movie.watched) {
      dispatch(switchList(itemId.id));
    }
    dispatch(addMovie(props.movie));
  };

  return (
    <div>
      <p>{props.movie.watched ? props.movie.name : ""}</p>
      <span>
        {props.movie.watched ? (
          <button onClick={handleSwitch}>{"watched"}</button>
        ) : (
          ""
        )}
      </span>

      <span>
        {props.movie.watched ? (
          <button onClick={handleDelete}>{"Delete"}</button>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default MovieItem2;
