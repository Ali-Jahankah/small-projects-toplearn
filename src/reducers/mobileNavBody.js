export const MobileNavBody = (state = false, action) => {
  switch (action.type) {
    case "VISIBLE":
      return !state;
    default:
      return state;
  }
};
