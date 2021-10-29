import styles from "../../css/useprofile.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
const AdminProfile = ({ history }) => {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user);
    !user.fullname && history.push("/home");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={styles.container}>
      <h1 className={styles.header}>{`Welcome ${user.fullname}`}</h1>
      <br />
      <div className={styles.container}>
        {" "}
        <div className={styles.user_info}>
          <table>
            <tbody>
              <tr>
                <td>Fullname:</td>
                <td>{user.fullname}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>User Type:</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.user_image}>
          <img src="../Images/1$.jpg" alt="Avatar" title="Avatar"></img>
          <button className={styles.button}>Edit Photo</button>
        </div>
      </div>
      <br />
      <div id={styles.buttons}>
        <button className={`${styles.button} ${styles.edit}`}>
          Edit Profile
        </button>
        <button className={`${styles.button} ${styles.remove}`}>
          Remove Account
        </button>
      </div>
    </div>
  );
};

export default withRouter(AdminProfile);
