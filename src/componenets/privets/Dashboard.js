import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className={`${styles.games} ${styles.child}`}>
        <Link className={styles.links} to="/Dashboard/Games-table">
          {" "}
          Games{" "}
        </Link>
      </div>
      <div className={`${styles.users} ${styles.child}`}>
        {" "}
        <Link to="/Dashboard/Users" className={styles.links}>
          {" "}
          Users{" "}
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
