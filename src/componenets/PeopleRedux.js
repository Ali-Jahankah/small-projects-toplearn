import PeopleFormRedux from "./PeopleFormRedux";
import styles from "../css/people.css";
import PersonRedux from "./PersonRedux";
import EditFormRedux from "./EditFormRedux";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const People = () => {
  const people = useSelector((state) => state.people);

  const show = useSelector((state) => state.showEdit);

  const { path } = useRouteMatch();
  return (
    <>
      {show ? (
        <Route path={`${path}/EditPersonRedux/:id`}>
          <EditFormRedux></EditFormRedux>
        </Route>
      ) : (
        <Redirect to={path}></Redirect>
      )}
      <div id={styles.peopleContainer}>
        <Helmet>
          {" "}
          <title>People Management By Redux | Small projects</title>
        </Helmet>
        <PeopleFormRedux></PeopleFormRedux>
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
                  <PersonRedux
                    number={index + 1}
                    person={person}
                    key={person.id + person.name + person.lastname}
                  ></PersonRedux>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default People;
