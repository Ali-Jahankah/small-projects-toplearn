import styles from "../css/useprofile.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { isEmpty } from "lodash";
const UserProfile = ({ history }) => {
  useEffect(() => {
    isEmpty(user) && history.push("/Home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <div id={styles.container}>
      <div className={styles.user_info}>
        <h2>Welcome {user.fullname}</h2>
        <div className={styles.flex_info}>
          <p>Full Name: {user.fullname}</p>
          <p>Email Address: {user.email}</p>
          <p>Type: {user.isAdmin ? "Admin" : "User"}</p>
          <p></p>
        </div>
      </div>
      <div className={styles.user_image}>
        <img src="../Images/1$.jpg" alt="Avatar" title="Avatar"></img>
      </div>
    </div>
  );
};

export default UserProfile;
