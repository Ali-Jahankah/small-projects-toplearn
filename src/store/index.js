import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import thunk from "redux-thunk";
import { getCourses } from "../actions/courseActions";
export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);
store.dispatch(getCourses());
store.subscribe(() => {
  console.log(store.getState());
});
