import { courses } from "../services/useService";

export const getCourses = () => {
  return async (dispatch) => {
    const { data } = await courses();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};
