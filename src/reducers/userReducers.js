export const user = (state = {}, action) => {
  switch (action.type) {
    case "SET":
      return { ...action.payload };
    case "CLEAR_USER":
      return { ...action.payload };
    default:
      return state;
  }
};
