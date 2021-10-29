export const setUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "SET", payload: user });
  };
};
export const clearUser = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_USER", payload: {} });
  };
};
