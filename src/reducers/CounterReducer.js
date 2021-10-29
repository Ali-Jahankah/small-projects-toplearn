export const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ACTION_INCREASE":
      return state + 1;
    case "ACTION_DECREASE":
      return state - 1;
    default:
      return state;
  }
};
