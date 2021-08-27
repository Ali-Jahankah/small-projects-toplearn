import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { CounterReducer } from "./CounterReducer";
import { MobileNavBody } from "./mobileNavBody";

const reducer = combineReducers({
  counter: CounterReducer,
  login: LoginReducer,
  menu: MobileNavBody,
});
export default reducer;
