import {
  CREATE_TASK,
  DELETE_TASK,
  FINISHED_TASK,
  FETCH_TASKS,
} from "./actions";

const initialState = { tasks: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      const taskToKeep = state.tasks.filter(
        (task) => task.id !== action.payload.task.id
      );
      return {
        ...state,
        tasks: taskToKeep,
      };

    // case SWITCH_LIST:
    //   const movieToSwitch = state.movies.filter(
    //     (movie) => movie.id === action.payload.movie.id
    //   );

    //   movieToSwitch[movieToSwitch.length - 1].watched = false;

    //   return {
    //     ...state,
    //     movies: state.movies.map((movie) =>
    //       movie.watch === action.payload.movie.watched
    //         ? action.payload.movie
    //         : movie
    //     ),
    //   };
    case FINISHED_TASK:
      const taskToFinishedList = state.tasks.filter(
        (task) => task.id === action.payload.task.id
      );
      taskToFinishedList[taskToFinishedList.length - 1].status = true;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.status === action.payload.task.status
            ? action.payload.task
            : task
        ),
      };
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
