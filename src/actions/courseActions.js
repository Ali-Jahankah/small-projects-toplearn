import { course, courses } from "../services/useService";
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
  }
}
