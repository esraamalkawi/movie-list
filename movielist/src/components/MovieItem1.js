import { useDispatch } from "react-redux";
import { deleteMovie } from "../store/actions";
import { useSelector } from "react-redux";

const MovieItem = (props) => {
  // const selMovies = useSelector((state) => state.movies);
  // selMovies.find((movie) => movie.id === selMovies[selMovies.length - 1].id);

  // const filtered = movies.filter((movie) => movie.watched === false);
  // let cont = filtered.length;
  // console.log(cont);
  // const [counter, setCounter] = useState(cont);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMovie(props.movie));
    //setCounter(counter - 1);
  };

  const selMovies = useSelector((state) => state.movies);
  selMovies.find((movie) => movie.id === selMovies[selMovies.length - 1].id);

  return (
    <div>
      <p>{props.movie.watched ? "" : props.movie.name}</p>
      <span>{props.movie.watched ? "" : <button>{"unwatched"}</button>}</span>
      <span>
        {props.movie.watched ? (
          ""
        ) : (
          <button onClick={handleDelete}>{"Delete"}</button>
        )}
      </span>
    </div>
  );
};

export default MovieItem;
