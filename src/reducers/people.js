export const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return [...action.payload];
    case "REMOVE_PEOPLE":
      return [...action.payload];
    case "UPDATE_PEOPLE":
      return [...action.payload];
    default:
      return state;
  }
};
