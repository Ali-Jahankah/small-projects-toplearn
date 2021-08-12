import styles from "../css/peopleform.css";
import MyContext from "./MyContext";
import { useContext, useRef } from "react";
const PeopleForm = () => {
  // ===============================================================================
  const context = useContext(MyContext);
  const mySelection = useRef(null);

  return (
    <>
      <div className={styles.PeopleFormDiv}>
        <h1>New Person Details</h1>
        <form
          className={styles.peopleForm}
          onSubmit={(e) => {
            e.preventDefault();
            context.formValidation(e);
          }}
        >
          <div className={styles.input_container}>
            <input
              className={`${styles.input} ${styles.formInput}`}
              type="text"
              placeholder="First Name"
              value={context.myArray[0]}
              onChange={(e) => {
                context.handleNameChange(e);
              }}
              key="firstName"
            ></input>{" "}
            <span className={styles.counter}>
              {20 - context.myArray[0].length}
            </span>
          </div>
          <div className={styles.input_container}>
            {" "}
            <input
              className={`${styles.input} ${styles.formInput}`}
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                context.handleLastnameChange(e);
              }}
              value={context.myArray[3]}
              key="lastname"
            ></input>
            <span className={styles.counter}>
              {20 - context.myArray[3].length}
            </span>
          </div>
          <select
            onChange={context.handleGenderChange}
            className={styles.formInput}
            ref={mySelection}
            id="mySelect"
          >
            <option value="noneValue">Gender:</option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="LGBT+">LGBT+</option>
          </select>
          <div className={styles.input_container}>
            {" "}
            <input
              className={`${styles.input} ${styles.formInput}`}
              type="text"
              placeholder="Age"
              onChange={(e) => {
                context.handleAgeChange(e);
              }}
              value={context.myArray[1]}
              key="age"
            ></input>{" "}
            <span className={styles.counter}>1-100</span>
          </div>
          <button type="submit" className={styles.formButton}>
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default PeopleForm;
