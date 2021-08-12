/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../css/peopleform.css";
import { useContext, useState } from "react";
// import MyContext from "./MyContext";
import { EditContext } from "./EditContext";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const EditForm = ({ people }) => {
  // const context = useContext(MyContext);
  const { url, path } = useRouteMatch();

  const editContext = useContext(EditContext);
  const [editName, setEditName] = useState("");
  const [editLastname, setEditLastname] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editGender, setEditGender] = useState("");
  const [newPerson, setNewPerson] = useState();
  const [myIndex, setMyIndex] = useState();
  const editArray = [editName, editLastname, editAge, editGender];

  const handleNameEdit = (e) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : setEditName(e.target.value);
  };
  const handleLastnameEdit = (e) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : setEditLastname(e.target.value);
  };
  const handleAgeEdit = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value = "";
    } else if (
      parseFloat(e.target.value) > parseInt(e.target.value) ||
      parseFloat(e.target.value) === 0 ||
      e.target.value > 100
    ) {
      e.target.value = "";
    } else {
      setEditAge(e.target.value);
    }
  };
  const handleGenderEdit = (e) => {
    setEditGender(e.target.value);
  };
  const editValidation = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    let mySwitch = true;
    editArray.map((input) => {
      if (!input || input === "noneValue") {
        mySwitch = false;
      }
      return true;
    });
    if (mySwitch === false) {
      alert("Please fill the fields");
      return;
    }
    let myPerson = {
      name: editName,
      lastname: editLastname,
      age: editAge,
      gender: editGender,
      id: editContext.id,
      time: time + " edited",
      myclass: "#005256",
    };
    editSubmit(myPerson);
  };
  const editSubmit = (myPerson) => {
    people[myIndex] = myPerson;
    editContext.setShowEdit(false);
  };
  useEffect(() => {
    const person = people.find((p) => p.id === editContext.id);
    const personIndex = people.findIndex((p) => p.id === editContext.id);
    setEditName(person.name);
    setEditLastname(person.lastname);
    setEditAge(person.age);
    setEditGender(person.gender);
    setNewPerson(person);
    setMyIndex(personIndex);
  }, [editContext.id]);
  return (
    <>
      <div className={styles.edit_form_container}>
        <div className={styles.PeopleFormDiv}>
          <h1>Edit Person Details</h1>
          <form className={styles.peopleForm} onSubmit={editValidation}>
            <div className={styles.input_container}>
              <input
                className={`${styles.input} ${styles.formInput}`}
                type="text"
                placeholder="First Name"
                key="editFirstName"
                value={editName}
                onChange={handleNameEdit}
              ></input>{" "}
              <span className={styles.counter}>{20 - editArray[0].length}</span>
            </div>
            <div className={styles.input_container}>
              {" "}
              <input
                className={`${styles.input} ${styles.formInput}`}
                type="text"
                placeholder="Last Name"
                key="editLastname"
                value={editLastname}
                onChange={handleLastnameEdit}
              ></input>
              <span className={styles.counter}>{20 - editArray[1].length}</span>
            </div>
            <select
              className={styles.formInput}
              id="mySelect"
              value={editGender}
              onChange={handleGenderEdit}
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
                value={editAge}
                onChange={handleAgeEdit}
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
                editContext.setShowEdit(false);
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

export default EditForm;
