import { useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "./Context.js";
import { decodeToken } from "../services/decodeToken";
import { setUser } from "../actions/userAction";
import { useDispatch } from "react-redux";
import { userLogin } from "../services/useService.js";
import { login } from "../actions/loginAction.js";
import { userRegister } from "../services/useService";
import validation from "simple-react-validator";
const UserContext = ({ children, history }) => {
  const [, forceUpdate] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const reset = () => {
    setEmail("");
    setPassword("");
    setName("");
    setLastname("");
    setFullname("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      if (loginValidator.current.allValid()) {
        setLoading(true);
        const { status, data } = await userLogin(user);
        if (status === 200) {
          localStorage.setItem("token", data.token);
          dispatch(setUser(decodeToken(data.token).payload.user));

          setLoading(false);
          dispatch(login());
          reset();
          history.replace("/Home");
        }
      } else {
        loginValidator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      setLoading(false);
      console.log(ex);
      alert("User not found!");
      reset();
    }
  };
  const validator = useRef(
    new validation({
      messages: {
        required: "Please fill this field",
      },
    })
  );
  const loginValidator = useRef(new validation());

  const formSubmit = async (e) => {
    e.preventDefault();
    const newPerson = {
      fullname: name + " " + lastname,
      email: email,
      password: password,
    };
    try {
      if (validator.current.allValid()) {
        setLoading(true);
        const { status } = await userRegister(newPerson);
        if (status === 201) {
          setLoading(false);
          reset();
          history.replace("/");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      alert("Problem");
      console.log(ex);
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        forceUpdate,
        loading,
        setLoading,
        name,
        setName,
        lastname,
        setLastname,
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        formSubmit,
        validator,
        loginValidator,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default withRouter(UserContext);
