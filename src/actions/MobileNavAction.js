export const Visible = () => ({ type: "VISIBLE" });
export const NavPartsAction = (x) => {
  return async (dispatch) => {
    if (x === 1) {
      await dispatch({ type: "SHOW/HIDE/1" });
    }
    if (x === 2) {
      await dispatch({ type: "SHOW/HIDE/2" });
    }
    if (x === 3) {
      await dispatch({ type: "SHOW/HIDE/3" });
    }
  };
};
