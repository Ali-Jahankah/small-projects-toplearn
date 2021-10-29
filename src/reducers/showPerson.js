export const showEdit = (state = false, action) => {
  switch (action.type) {
    case "HIDE":
      return !state;
    default:
      return state;
  }
};
