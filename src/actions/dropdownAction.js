export const dropdown1Action = () => {
  return async (dispatch) => {
    await dispatch({ type: "DROP1" });
  };
};
export const dropdown2Action = () => {
  return async (dispatch) => {
    await dispatch({ type: "DROP2" });
  };
};
export const dropdown3Action = () => {
  return async (dispatch) => {
    await dispatch({ type: "DROP3" });
  };
};
export const dashboardHamburAction = () => {
  return async (dispatch) => {
    await dispatch({ type: "TOGGLE" });
  };
};
