import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { CounterReducer } from "./CounterReducer";
import { MobileNavBody } from "./mobileNavBody";
import { peopleReducer } from "./people";
import {
  getPersonId,
  personAgeReducer,
  personGenderReducer,
  personLastnameReducer,
  personNameReducer,
  newPerson,
} from "./person";
import { setName, setLastame, setAge, setGender } from "./editPerson.js";
import { showEdit } from "./showPerson";

const reducer = combineReducers({
  counter: CounterReducer,
  login: LoginReducer,
  menu: MobileNavBody,
  people: peopleReducer,
  personName: personNameReducer,
  personAge: personAgeReducer,
  personLastname: personLastnameReducer,
  personGender: personGenderReducer,
  showEdit,
  id: getPersonId,
  newPerson,
  name: setName,
  lastname: setLastame,
  age: setAge,
  gender: setGender,
});
export default reducer;
