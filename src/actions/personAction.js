export const setPersonName = (e) => {
  return async (dispatch) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : await dispatch({ type: "SET_PERSON_NAME", payload: e.target.value });
  };
};
export const setPersonLastname = (e) => {
  return async (dispatch) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : await dispatch({
          type: "SET_PERSON_LASTNAME",
          payload: e.target.value,
        });
  };
};
export const setPersonAge = (e) => {
  return async (dispatch) => {
    if (isNaN(e.target.value)) {
      e.target.value = "";
    } else if (
      parseFloat(e.target.value) > parseInt(e.target.value) ||
      parseFloat(e.target.value) === 0 ||
      e.target.value > 100
    ) {
      e.target.value = "";
    } else if (e.target.value.length > 2) {
      e.target.value = "";
    } else {
      await dispatch({ type: "SET_PERSON_AGE", payload: e.target.value });
    }
  };
};
export const setPersonGender = (e) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_PERSON_GENDER", payload: e.target.value });
  };
};
export const clearPerson = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_PERSON", payload: "" });
  };
};
export const setId = (id) => ({ type: "SET_ID", payload: id });
export const newPerson = (newPerson) => ({
  type: "NEW_PERSON",
  payload: newPerson,
});
