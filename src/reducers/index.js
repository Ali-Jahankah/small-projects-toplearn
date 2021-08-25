import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { CounterReducer } from "./CounterReducer";
const reducer = combineReducers({
  counter: CounterReducer,
  login: LoginReducer,
});
export default reducer;
