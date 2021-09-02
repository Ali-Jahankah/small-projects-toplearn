import React, { useEffect } from "react";
import styles from "../css/peopleform.css";
import { useSelector, useDispatch } from "react-redux";
import { updatePerson } from "../actions/peopleAction";
import {
  nameAction,
  lastnameAction,
  ageAction,
  genderAction,
} from "../actions/editPersonAction";
import { setShowEdit } from "../actions/showPerson";
import {
  changeAge,
  changeGender,
  changeLastname,
  changeName,
} from "../actions/editPersonAction";

const EditFormRedux = ({ mykey }) => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  const id = useSelector((state) => state.id);
  const person = people.find((p) => p.id === id);

  const name = useSelector((state) => state.name);
  const lastname = useSelector((state) => state.lastname);
  const age = useSelector((state) => state.age);
  const gender = useSelector((state) => state.gender);

  console.log(person);
  useEffect(() => {
    dispatch(nameAction(person.name));
    dispatch(lastnameAction(person.lastname));
    dispatch(ageAction(person.age));
    dispatch(genderAction(person.gender));
  }, [id]);

  return (
    <>
      <div className={styles.edit_form_container}>
        <div className={styles.PeopleFormDiv}>
          <h1>Edit Person Details</h1>
          <form
            className={styles.peopleForm}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(updatePerson(id));
            }}
          >
            <div className={styles.input_container}>
              <input
                className={`${styles.input} ${styles.formInput}`}
                type="text"
                placeholder="First Name"
                key="editFirstName"
                value={name}
                onChange={(e) => {
                  dispatch(changeName(e));
                }}
              ></input>{" "}
              <span className={styles.counter}>{20 - name.length}</span>
            </div>
            <div className={styles.input_container}>
              {" "}
              <input
                className={`${styles.input} ${styles.formInput}`}
                type="text"
                placeholder="Last Name"
                key="editLastname"
                value={lastname}
                onChange={(e) => {
                  dispatch(changeLastname(e));
                }}
              ></input>
              <span className={styles.counter}>{20 - lastname.length}</span>
            </div>
            <select
              className={styles.formInput}
              id="mySelect"
              value={gender}
              onChange={(e) => {
                dispatch(changeGender(e));
              }}
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
                key="editAge"
                value={age}
                onChange={(e) => {
                  dispatch(changeAge(e));
                }}
              ></input>{" "}
              <span className={styles.counter}>1-100</span>
            </div>
            <button type="submit" className={styles.formButton}>
              ADD
            </button>
            <button
              type="button"
              className={`${styles.formButton} ${styles.form_cancle}`}
              onClick={() => {
                dispatch(setShowEdit());
              }}
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFormRedux;
