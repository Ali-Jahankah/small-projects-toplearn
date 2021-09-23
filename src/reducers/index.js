import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { CounterReducer } from "./CounterReducer";
import { MobileNavBody } from "./mobileNavBody";
import { peopleReducer } from "./people";
import { user } from "./userReducers";
import {
  getPersonId,
  personAgeReducer,
  personGenderReducer,
  personLastnameReducer,
  personNameReducer,
  newPerson,
} from "./person";
import { dropdown1, dropdown2, dropdown3 } from "./dropdown";
import { setName, setLastame, setAge, setGender } from "./editPerson.js";
import { showEdit } from "./showPerson";
import { courses, course, errorHandler } from "./courseReducers";

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
  dropdown1,
  dropdown2,
  dropdown3,
  courses,
  course,
  user,
  errors: errorHandler,
});
export default reducer;
