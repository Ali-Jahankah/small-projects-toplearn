import { createContext } from "react";
const MyContext = createContext({
  handleNameChange: () => {},
  handleLastnameChange: () => {},
  handleGenderChange: () => {},
  handleAgeChange: () => {},
});
export default MyContext;
