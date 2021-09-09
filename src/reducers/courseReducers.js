export const courses = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return { ...action.payload };
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
