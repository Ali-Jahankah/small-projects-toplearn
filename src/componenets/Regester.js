import styles from "../css/regester.css";
import { useContext } from "react";
import { EditContext } from "./EditContext";
import { userRegister } from "../services/useService";
const Regester = () => {
  const context = useContext(EditContext);
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
      const { status, data } = await userRegister(newPerson);
      if (status === 201) {
        alert("Regester successfuly!");
        console.log(data);
      }
    } catch (ex) {
      alert("Problem");
      console.log(ex);
    }
    reset();
  };

  const handleName = (e) => {
    console.log(context.name);
    context.setName(e.target.value);
  };
  const handleLastname = (e) => {
    context.setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    context.setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    context.setPassword(e.target.value);
  };

  // const handleInputs = (e, typee) => {
  //   if (typee === "name") {
  //     setName(e.target.value);
  //     console.log("name =" + name);
  //   }
  //   if (typee === "lastname") {
  //     setLastname(e.target.value);
  //   }
  //   if (typee === "email") {
  //     setEmail(e.target.value);
  //   }

  //   console.log("lastname = " + lastname);
  //   console.log("email =  " + email);
  // };
  return (
    <>
      <div id={styles.regesterDiv}>
        <form id={styles.regesterForm} onSubmit={formSubmit}>
          <h1 id={styles.regesterTitle}>Let's Regester</h1>
          <ul>
            <li>
              <input
                type="text"
                className={styles.regester_name}
                placeholder="Name"
                value={context.name}
                onChange={handleName}
              />
            </li>
            <li>
              <input
                type="text"
                className={styles.regester_lastname}
                placeholder="Last name"
                value={context.lastname}
                onChange={handleLastname}
              />
            </li>
            <li>
              <input
                type="email"
                className={styles.regester_email}
                placeholder="Email Address"
                value={context.email}
                onChange={handleEmail}
              />
            </li>
            <li>
              <input
                type="password"
                className={styles.regester_password}
                placeholder="Password"
                value={context.password}
                onChange={handlePassword}
              />
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

export default Regester;
