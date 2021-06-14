import moviesData from "../movies";
import { ADD_MOVIE, DELETE_MOVIE, SWITCH_LIST, UNSWITCH } from "./actions";

const initialState = {
  movies: moviesData,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      action.payload.movie.id = state.movies[state.movies.length - 1].id + 1;
      return {
        ...state,
        movies: [...state.movies, action.payload.movie],
      };

    case DELETE_MOVIE:
      const movieToKeep = state.movies.filter(
        (movie) => movie.id !== action.payload.movie.id
      );
      return {
        ...state,
        movies: movieToKeep,
      };

    case SWITCH_LIST:
      const movieToSwitch = state.movies.filter(
        (movie) => movie.id === action.payload.movie.id
      );

      movieToSwitch[movieToSwitch.length - 1].watched = false;
      //   const movieToList = state.movies.filter(
      //     (movie) => movie.id === action.payload.movie.id
      //   );

      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.watch === action.payload.movie.watched
            ? action.payload.movie
            : movie
        ),
      };
    case UNSWITCH:
      const movieToWatchedList = state.movies.filter(
        (movie) => movie.id === action.payload.movie.id
      );
      movieToWatchedList[movieToWatchedList.length - 1].watched = true;
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.watch === action.payload.movie.watched
            ? action.payload.movie
            : movie
        ),
      };
    default:
      return state;
  }
};

export default reducer;
