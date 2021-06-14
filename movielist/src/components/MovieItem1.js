import { useDispatch } from "react-redux";
import { deleteMovie } from "../store/actions";
// import { useSelector } from "react-redux";
import { switchToWatchedList } from "../store/actions";

const MovieItem1 = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMovie(props.movie));
  };

  // const selMovies = useSelector((state) => state.movies)
  // selMovies.find((movie) => movie.id===selMovies[selMovies.length-1].id)
  const handleSwitch = () => {
    dispatch(switchToWatchedList(props.movie));
  };

  return (
    <div>
      <p>{props.movie.watched ? "" : props.movie.name}</p>
      <span>
        {props.movie.watched ? (
          ""
        ) : (
          <button onClick={handleSwitch} className="btn btn-success">
            {"watch"}
          </button>
        )}
      </span>
      <span>
        {props.movie.watched ? (
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

export default MovieItem1;
