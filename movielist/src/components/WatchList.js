import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem1";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";

const WatchList = () => {
  const [query, setQuery] = useState("");
  const [add, setAdd] = useState("");

  const dispatch = useDispatch();

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(add));
    setCounter(counter + 1);
    //console.log(counter);
    resetInput();
  };
  console.log(counter);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your moive name"
            onChange={handleChange}
            name="name"
            value={add.name}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
      <div>
        <h2>Watch list {counter}</h2>
        <SearchBar setQuery={setQuery} />
        {movie}
      </div>
    </div>
  );
};

export default WatchList;
