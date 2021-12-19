import {
  course,
  courses,
  deleteCourse,
  newCourse,
  updateCourse,
} from "../services/useService";
export const getCourses = () => {
  return async (dispatch) => {
    const { data } = await courses();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};
export const getCourse = (courseId) => {
  return async (dispatch) => {
    try {
      const { data } = await course(courseId);
      await dispatch({ type: "GET", payload: data.course });
    } catch (e) {
      if (e.response.status === 500) await dispatch({ type: "ERROR" });
    }
  };
};
export const errorAction = () => {
  return async (dispatch) => {
    await dispatch({ type: "FALSE" });
  };
};
export const newGameAction = (newGame) => {
  return async (dispatch, getState) => {
    const { data, status } = await newCourse(newGame);

    if (status && status === 201) {
      alert("New game has successfully added! ");
    }
    await dispatch({
      type: "ADD_GAME",
      payload: [...getState().courses, data.course],
    });
  };
};
export const editGameAction = (courseId, newGame) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const updatedCourses = [...courses];
    const courseIndex = updatedCourses.findIndex(
      (course) => course._id === courseId
    );
    let course = updatedCourses[courseIndex];
    course = { ...Object.fromEntries(newGame) };
    updatedCourses[courseIndex] = course;
    try {
      const { data, status } = await updateCourse(newGame, courseId);
      status === 200 && alert("Edit was successful!");
      dispatch({ type: "UPDATE_GAME", payload: [...updatedCourses] });
    } catch (ex) {
      dispatch({ type: "UPDATE_GAME", payload: [...courses] });
      console.log(ex);
    }
  };
};
export const deleteGameAction = (courseId) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const filteredCourses = courses.filter((course) => course._id !== courseId);
    try {
      await dispatch({ type: "DELETE_GAME", payload: [...filteredCourses] });
      const { status } = await deleteCourse(courseId);
      status === 200 && alert("Game was deleted successfuly!");
    } catch (ex) {
      await dispatch({ type: "DELETE_GAME", payload: [...courses] });
      console.log(ex);
    }
  };
};
