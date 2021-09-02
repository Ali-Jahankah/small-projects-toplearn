export const nameAction = (name) => ({ type: "SET_NAME", payload: name });
export const lastnameAction = (lastname) => ({
  type: "SET_LASTNAME",
  payload: lastname,
});
export const ageAction = (age) => ({ type: "SET_AGE", payload: age });
export const genderAction = (gender) => ({
  type: "SET_GENDER",
  payload: gender,
});

export const changeName = (e) => {
  return async (dispatch) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : await dispatch({ type: "SET_NAME", payload: e.target.value });
  };
};
export const changeLastname = (e) => {
  return async (dispatch) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : await dispatch({
          type: "SET_LASTNAME",
          payload: e.target.value,
        });
  };
};

export const changeGender = (e) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_GENDER", payload: e.target.value });
  };
};
export const changeAge = (e) => {
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
      await dispatch({ type: "SET_AGE", payload: e.target.value });
    }
  };
};
