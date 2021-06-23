import axios from "axios";

export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const FINISHED_TASK = "FINISHED_TASK";
export const FETCH_TASKS = "FETCH_TASKS";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const switchToFinishedList = (status, taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/tasks/${taskId}`,
        status
      );
      dispatch({
        type: FINISHED_TASK,
        payload: { status, taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      dispatch({
        type: CREATE_TASK,
        payload: { newTask },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export const switchToWatchedList = (movie) => {

//   return {
//     type: UNSWITCH,
//     payload: {
//       movie: movie,
//     },
//   };
// };

export const switchList = (status, taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/tasks/${taskId}`,
        status
      );
      dispatch({
        type: FINISHED_TASK,
        payload: { status, taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return {
  //   type: SWITCH_LIST,
  //   payload: {
  //     movie: movie,
  //   },
  // };
};
