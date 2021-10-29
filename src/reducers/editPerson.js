export const setName = (state = "", action) => {
    switch (action.type) {
      case "SET_NAME":
        return (state = action.payload);
      default:
        return state;
    }
  };
  export const setLastame = (state = "", action) => {
    switch (action.type) {
      case "SET_LASTNAME":
        return (state = action.payload);
      default:
        return state;
    }
  };
  export const setAge = (state = "", action) => {
    switch (action.type) {
      case "SET_AGE":
        return (state = action.payload);
      default:
        return state;
    }
  };
  export const setGender = (state = "noneValue", action) => {
    switch (action.type) {
      case "SET_GENDER":
        return (state = action.payload);
      default:
        return state;
    }
};
