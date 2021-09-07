export const dropdown1 = (state = false, action) => {
  switch (action.type) {
    case "DROP1":
      return !state;
    default:
      return state;
  }
};
export const dropdown2 = (state = false, action) => {
  switch (action.type) {
    case "DROP2":
      return !state;
    default:
      return state;
  }
};
export const dropdown3 = (state = false, action) => {
  switch (action.type) {
    case "DROP3":
      return !state;
    default:
      return state;
  }
};
