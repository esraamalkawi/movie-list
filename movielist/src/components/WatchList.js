import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem1";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";

const WatchList = () => {
  const [query, setQuery] = useState("");
  const [add, setAdd] = useState("");
  //
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  //
  const movies = useSelector((state) => state.movies);
  const movie = movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  const filtered = movies.filter((movie) => movie.watched === false);
  let cont = filtered.length;
  console.log(cont);
  const [counter, setCounter] = useState(cont);

  const handleChange = (event) => {
    setAdd({ ...movie, [event.target.name]: event.target.value });
  };

  const resetInput = () => {
    setAdd({
      name: "",
    });
    // setCounter(cont);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(add));
    setCounter(counter + 1);
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
            Add a Movie{" "}
          </button>
        </form>
      </div>
      <div>
        <h2>Watch list ({counter}) </h2>
        <span className="dd">
          <SearchBar setQuery={setQuery} />
        </span>
        <br />
        <br />
        {movie}
      </div>
    </div>
  );
};

export default WatchList;
