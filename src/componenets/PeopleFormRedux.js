import styles from "../css/peopleform.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peopleValidation } from "../actions/peopleAction";
import {
  setPersonAge,
  setPersonGender,
  setPersonLastname,
  setPersonName,
} from "../actions/personAction";
const PeopleForm = () => {
  const mySelection = useRef(null);
  const dispatch = useDispatch();
  const personName = useSelector((state) => state.personName);
  const personLastname = useSelector((state) => state.personLastname);
  const personAge = useSelector((state) => state.personAge);
  return (
    <>
      <div className={styles.PeopleFormDiv}>
        <h1>New Person Details</h1>
        <form
          className={styles.peopleForm}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(peopleValidation(e));
          }}
        >
          <div className={styles.input_container}>
            <input
              className={`${styles.input} ${styles.formInput}`}
              type="text"
              placeholder="First Name"
              value={personName}
              onChange={(e) => {
                dispatch(setPersonName(e));
              }}
              key="firstName"
            ></input>{" "}
            <span className={styles.counter}>{20 - personName.length}</span>
          </div>
          <div className={styles.input_container}>
            {" "}
            <input
              className={`${styles.input} ${styles.formInput}`}
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                dispatch(setPersonLastname(e));
              }}
              value={personLastname}
              key="lastname"
            ></input>
            <span className={styles.counter}>{20 - personLastname.length}</span>
          </div>
          <select
            onChange={(e) => {
              dispatch(setPersonGender(e));
            }}
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
                dispatch(setPersonAge(e));
              }}
              value={personAge}
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
