export const MobileNavBody = (state = false, action) => {
  switch (action.type) {
    case "VISIBLE":
      return !state;
    default:
      return state;
  }
};
export const NavParts1 = (state = false, action) => {
  switch (action.type) {
    case "SHOW/HIDE/1":
      return !state;
    default:
      return state;
  }
};
export const NavParts2 = (state = false, action) => {
  switch (action.type) {
    case "SHOW/HIDE/2":
      return !state;
    default:
      return state;
  }
};
export const NavParts3 = (state = false, action) => {
  switch (action.type) {
    case "SHOW/HIDE/3":
      return !state;
    default:
      return state;
  }
};
