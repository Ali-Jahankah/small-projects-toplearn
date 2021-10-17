import { createContext } from "react";

export const Context = createContext({
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  lastname: "",
  setLastname: () => {},
  fullname: "",
  setFullname: () => {},
  password: "",
  setPassword: () => {},
  loading: false,
  setLoading: () => {},
  validator: null,
  handleLogin: () => {},
  formSubmit: () => {},
  loginValidator: null,
});
