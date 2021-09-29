import styles from "../css/useprofile.css";
import { useSelector } from "react-redux";
const UserProfile = () => {
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
