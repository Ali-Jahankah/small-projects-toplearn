import PeopleForm from "./PeopleForm";
import styles from "../css/people.css";
import Person from "./Person";
import { useState, useContext } from "react";
import MyContext from "./MyContext";
import uuid from "react-uuid";
import EditForm from "./EditForm";
import { EditContext } from "./EditContext";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { userRegister } from "../services/useService";

const People = () => {
  const [people, setPeople] = useState([]);
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState("");
  const [personLastname, setPersonLastname] = useState("");
  const [personGender, setPersonGender] = useState("noneValue");
  const [showEdit, setShowEdit] = useState(false);

  const context = useContext(EditContext);
  const { path } = useRouteMatch();

  const handleNameChange = (e) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : setPersonName(e.target.value);
  };

  const handleLastnameChange = (e) => {
    e.target.value.length > 20
      ? alert("No longer than 20 character")
      : setPersonLastname(e.target.value);
  };

  const handleGenderChange = (e) => {
    setPersonGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value = "";
    } else if (
      parseFloat(e.target.value) > parseInt(e.target.value) ||
      parseFloat(e.target.value) === 0 ||
      e.target.value > 100
    ) {
      e.target.value = "";
    } else {
      setPersonAge(e.target.value);
    }
  };
  const handleDelete = (mykey) => {
    if (showEdit === true) {
      setShowEdit(false);
    }
    let myPeople = [...people];
    let newPeople = myPeople.filter((person) => {
      return person.id !== mykey;
    });
    setPeople(newPeople);
  };

  // const handleEdit = (mykey) => {
  //   setShowEdit(!showEdit);
  // };
  // const handleHiden = () => {
  //   setShowEdit(!showEdit);
  // };

  const myArray = [personName, personAge, personGender, personLastname];
  let mySelect = document.getElementById("mySelect");
  const formValidation = () => {
    let mySwitch = true;
    let date = new Date();
    let time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    myArray.map((input) => {
      if (!input || input === "noneValue") {
        mySwitch = false;
      }
      return true;
    });
    if (mySwitch === false) {
      alert("Please fill the fields");
      return;
    }

    let newPerson = {
      age: parseInt(personAge),
      name: personName,
      lastname: personLastname,
      gender: personGender,
      id: uuid(),
      time: time,
      myclass: "",
    };

    handleSubmit(newPerson);
  };

  const handleSubmit = async (newPerson) => {
    let myPeople = [...people];
    myPeople.push(newPerson);
    setPeople(myPeople);
    const test = {
      fullname: "ali",
      email: "asadsasd",
      password: "cwr8yu",
    };
    try {
      const { status, data } = await userRegister(test);
      if (status === 201) {
        alert("successful!");
        console.log(data);
      }
    } catch (ex) {
      alert("problem");
      console.log(ex);
    }
    // .then(({ data, status }) => {

    //   console.log(data);
    // })
    // .catch((ex) => {
    //   console.log(ex);
    // });
    // axios
    //   .post("https://jsonplaceholder.ir/users", newPerson)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((ex) => {
    //     console.log(ex);
    //   });

    setPersonAge("");
    setPersonName("");
    setPersonLastname("");
    setPersonGender("noneValue");
    setPersonAge("");
    mySelect.selectedIndex = 0;
  };

  return (
    <MyContext.Provider
      value={{
        formValidation: formValidation,
        handleAgeChange: handleAgeChange,
        handleGenderChange: handleGenderChange,
        handleLastnameChange: handleLastnameChange,
        handleNameChange: handleNameChange,
        ShowingEdit: setShowEdit,
        myArray: myArray,
        handleDelete: handleDelete,
        // handleEdit: handleEdit,
        setPeople: setPeople,
        // handleHiden: handleHiden,
      }}
    >
      {context.showEdit ? (
        <Route path={`${path}/EditPerson/:id`}>
          <EditForm people={people}></EditForm>
        </Route>
      ) : (
        <Redirect to={path}></Redirect>
      )}
      <div id={styles.peopleContainer}>
        <PeopleForm></PeopleForm>
        <div className={styles.allPeople}>
          <table className={styles.allPeople_table}>
            <thead className={styles.allPeople_header}>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Lastname</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Date</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => {
                return (
                  <Person
                    name={person.name}
                    lastname={person.lastname}
                    age={person.age}
                    gender={person.gender}
                    key={uuid()}
                    number={index + 1}
                    id={person.id}
                    time={person.time}
                    mykey={person.id}
                    myclass={person.myclass}
                  ></Person>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default People;
