export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const SWITCH_LIST = "SWITCH_LIST";
export const UNSWITCH = "UNSWITCH";

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: {
      movie: movie,
    },
  };
};

export const deleteMovie = (movie) => {
  return {
    type: DELETE_MOVIE,
    payload: {
      movie: movie,
    },
  };
};
export const switchToWatchedList = (movie) => {
  return {
    type: UNSWITCH,
    payload: {
      movie: movie,
    },
  };
};

export const switchList = (movie) => {
  return {
    type: SWITCH_LIST,
    payload: {
      movie: movie,
    },
  };
};
