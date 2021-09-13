import { course, courses } from "../services/useService";

export const getCourses = () => {
  return async (dispatch) => {
    const { data } = await courses();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};
export const getCourse = (courseId) => {
  return async (dispatch) => {
    const { data } = await course(courseId);
    await dispatch({ type: "GET", payload: data.course });
  };
};
