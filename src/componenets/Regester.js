import styles from "../css/regester.css";
const Regester = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Regester");
  };
  return (
    <>
      <div id={styles.regesterDiv}>
        <form id={styles.regesterForm} onSubmit={formSubmit}>
          <h1 id={styles.regesterTitle}>Let's Regester</h1>
          <ul>
            <li>
              <input
                type="text"
                className={styles.regester_name}
                placeholder="Name"
              />
            </li>
            <li>
              <input
                type="text"
                className={styles.regester_lastname}
                placeholder="Last name"
              />
            </li>
            <li>
              <input
                type="email"
                className={styles.regester_email}
                placeholder="Email Address"
              />
            </li>
            <li>
              <input
                type="password"
                className={styles.regester_password}
                placeholder="Password"
              />
            </li>
            <li>
              <button type="submit" className={styles.regester_sub_button}>
                Regester!
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Regester;
