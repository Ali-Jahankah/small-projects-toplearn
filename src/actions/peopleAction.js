import uuid from "react-uuid";
import { clearPerson } from "./personAction";
import { setShowEdit } from "./showPerson";

export const peopleValidation = () => {
  return async (dispatch, getState) => {
    const myArray = [
      getState().personName,
      getState().personAge,
      getState().personGender,
      getState().personLastname,
    ];
    let mySelect = document.getElementById("mySelect");

    let mySwitch = true;
    let date = new Date();
    let time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    myArray.map((input) => {
      if (!input || input === "noneValue") {
        mySwitch = false;
      }
      return true;
    });
    if (mySwitch === false) {
      alert("Please fill the fields");
      return;
    }

    let newPerson = {
      age: parseInt(getState().personAge),
      name: getState().personName,
      lastname: getState().personLastname,
      gender: getState().personGender,
      id: uuid(),
      time: time,
      myclass: "",
    };

    await dispatch(addPeople(newPerson));
    mySelect.selectedIndex = 0;
  };
};
const addPeople = (newPerson) => {
  return async (dispatch, getState) => {
    const people = [...getState().people];

    if (newPerson.name !== "" && newPerson.name !== " ") {
      people.push(newPerson);
      await dispatch({ type: "ADD_PEOPLE", payload: people });
      await dispatch(clearPerson());
    }
  };
};
export const deletePeople = (mykey) => {
  return async (dispatch, getState) => {
    if (getState.showEdit === true) {
      await dispatch(setShowEdit());
    }
    let myPeople = [...getState.people];
    let newPeople = myPeople.filter((person) => {
      return person.id !== mykey;
    });
    await dispatch({ type: "DELETE_PERSON", payload: newPeople });
  };
};
export const updatePerson = (id) => {
  return async (dispatch, getState) => {
    const people = [...getState().people];
    const personIndex = people.findIndex((p) => p.id === id);
    const newPerson = people[personIndex];
    newPerson.name = getState().name;
    newPerson.lastname = getState().lastname;
    newPerson.age = getState().age;
    newPerson.gender = getState().gender;
    newPerson.id = getState().id;
    console.log(newPerson);
    const newPeople = [...people];
    newPeople[personIndex] = newPerson;
    await dispatch({ type: "UPDATE_PEOPLE", payload: newPeople });
    await dispatch(setShowEdit());
  };
};
