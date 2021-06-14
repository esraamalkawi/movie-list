// import moviesData from "../movies";
// import { ADD_MOVIE, DELETE_MOVIE, SWITCH_LIST } from "./actions";

// const initialState = {
//   movies: moviesData,
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MOVIE:
//       action.payload.movie.id = state.movies[state.movies.length - 1].id + 1;
//       return {
//         ...state,
//         movies: [...state.movies, action.payload.movie],
//       };

//     case DELETE_MOVIE:
//       const movieToKeep = state.movies.filter(
//         (movie) => movie.id !== action.payload.movie.id
//       );
//       return {
//         ...state,
//         movies: movieToKeep,
//       };

//     case SWITCH_LIST:
//       const movieToSwitch = state.movies.filter(
//         (movie) => movie.watched == action.payload.movie.watched
//       );

//       //   const movieToList = state.movies.filter(
//       //     (movie) => movie.id === action.payload.movie.id
//       //   );

//       return {
//         ...state,
//         movies: movieToSwitch,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;

import moviesData from "../movies";
import { ADD_MOVIE, DELETE_MOVIE, SWITCH_LIST } from "./actions";

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
        (movie) => movie.id !== action.payload.movie
      );

      //   const movieToList = state.movies.filter(
      //     (movie) => movie.id === action.payload.movie.id
      //   );

      return {
        ...state,
        movies: movieToSwitch,
      };

    default:
      return state;
  }
};

export default reducer;
