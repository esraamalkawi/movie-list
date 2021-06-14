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
  return (
    <div>
      <h2>Watched list </h2>
      <SearchBar setQuery={setQuery} />
      {movie}
    </div>
  );
};

export default WatchedList;
