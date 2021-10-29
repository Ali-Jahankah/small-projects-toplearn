export const courses = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return [...action.payload];
    default:
      return state;
  }
};
export const course = (state = {}, action) => {
  switch (action.type) {
    case "GET":
      return { ...action.payload };
    default:
      return state;
  }
};
export const errorHandler = (state = false, action) => {
  switch (action.type) {
    case "ERROR":
      return !state;
    case "FALSE":
      return (state = false);
    default:
      return state;
  }
};
