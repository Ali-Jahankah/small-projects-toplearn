export const user = (state = {}, action) => {
  switch (action.payload) {
    case "SET_USER":
      return { ...action.payload };
    case "CLEAR_USER":
      return { ...action.payload };
    default:
      return state;
  }
};
