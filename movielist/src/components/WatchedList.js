import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import MovieItem2 from "./MovieItem2";
import { useState } from "react";

const WatchedList = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);
  const movie = movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem2 movie={movie} key={movie.id} />);

  const filtered = movies.filter((movie) => movie.watched === true);
  let cont = filtered.length;
  console.log(cont);
  const [counter, setCounter] = useState(cont);

  return (
    <div>
      <h2>Watched list ({filtered.length})</h2>
      <SearchBar setQuery={setQuery} />
      <br />
      <br />
      {movie}
    </div>
  );
};

export default WatchedList;
