export const personNameReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_PERSON_NAME":
      return action.payload;
    case "CLEAR_PERSON":
      return action.payload;
    default:
      return state;
  }
};
export const personLastnameReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_PERSON_LASTNAME":
      return action.payload;
    case "CLEAR_PERSON":
      return action.payload;
    default:
      return state;
  }
};
export const personAgeReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_PERSON_AGE":
      return action.payload;
    case "CLEAR_PERSON":
      return action.payload;
    default:
      return state;
  }
};
export const personGenderReducer = (state = "noneValue", action) => {
  switch (action.type) {
    case "SET_PERSON_GENDER":
      return action.payload;
    case "CLEAR_PERSON":
      return (state = "noneValue");
    default:
      return state;
  }
};
export const getPersonId = (state = null, action) => {
  switch (action.type) {
    case "SET_ID":
      return (state = action.payload);
    default:
      return state;
  }
};
export const newPerson = (state = {}, action) => {
  switch (action.type) {
    case "NEW_PERSON":
      return action.payload;
    default:
      return state;
  }
};

