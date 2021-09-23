import React from "react";
import styles from "../css/regester.css";
import { useContext, useRef, useState } from "react";
import { EditContext } from "./EditContext";
import { userRegister } from "../services/useService";
import validation from "simple-react-validator";
import { withRouter, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Preloader from "./Preloader";
const Regester = ({ history }) => {
  const context = useContext(EditContext);
  const [, forceUpdate] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const validator = useRef(
    new validation({
      messages: {
        required: "Please fill this field",
      },
    })
  );
  const reset = () => {
    context.setName("");
    context.setEmail("");
    context.setLastname("");
    context.setFullname("");
    context.setPassword("");
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    const newPerson = {
      fullname: context.name + " " + context.lastname,
      email: context.email,
      password: context.password,
    };
    try {
      if (validator.current.allValid()) {
        setLoading(true);
        const { status, data } = await userRegister(newPerson);
        if (status === 201) {
          console.log(loading);
          console.log(data);
          setLoading(false);
          reset();
          history.replace("/");
          console.log(loading);
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

  const handleName = (e) => {
    console.log(context.name);
    context.setName(e.target.value);
    validator.current.showMessageFor("name");
  };
  const handleLastname = (e) => {
    context.setLastname(e.target.value);
    validator.current.showMessageFor("fullname");
  };
  const handleEmail = (e) => {
    context.setEmail(e.target.value);
    validator.current.showMessageFor("email");
  };
  const handlePassword = (e) => {
    context.setPassword(e.target.value);
    validator.current.showMessageFor("password");
  };

  if (token) return <Redirect to="/Home" />;
  return (
    <>
      <Helmet>
        {" "}
        <title>Register | Small projects</title>
      </Helmet>
      <div id={styles.regesterDiv}>
        {loading ? <Preloader></Preloader> : null}
        <form id={styles.regesterForm} onSubmit={formSubmit}>
          <h1 id={styles.regesterTitle}>Let's Regester</h1>
          <ul>
            <li>
              <input
                type="text"
                name="name"
                className={styles.regester_name}
                placeholder="Name"
                value={context.name}
                onChange={handleName}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message("name", context.name, "required")}
              </span>
            </li>
            <li>
              <input
                type="text"
                name="lastname"
                className={styles.regester_lastname}
                placeholder="Last name"
                value={context.lastname}
                onChange={handleLastname}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message(
                  "lastname",
                  context.lastname,
                  "required"
                )}
              </span>
            </li>
            <li>
              <input
                type="email"
                name="email"
                className={styles.regester_email}
                placeholder="Email Address"
                value={context.email}
                onChange={handleEmail}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message(
                  "email",
                  context.email,
                  "email|required"
                )}
              </span>
            </li>
            <li>
              <input
                type="password"
                name="password"
                className={styles.regester_password}
                placeholder="Password"
                value={context.password}
                onChange={handlePassword}
              />
              <span style={{ color: "#ff00e0" }}>
                {" "}
                {validator.current.message(
                  "password",
                  context.password,
                  "required|min:7"
                )}
              </span>
            </li>
            <li>
              <button type="submit" className={styles.regester_sub_button}>
                Regester!
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default withRouter(Regester);
