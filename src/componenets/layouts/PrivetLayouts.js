import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styles from "../../css/privetLayouts.css";
import TopNav from "../privets/TopNav";
import { Redirect } from "react-router-dom";
import SideNav from "../privets/SideNav";

const PrivetLayouts = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user.isAdmin) return <Redirect to="/home" />;

  return (
    <>
      <Helmet>
        <title>Privet Layout</title>
      </Helmet>
      <TopNav user={user}></TopNav>
      <div className={styles.container}>
        <div className={styles.main_div}>{children}</div>
        <SideNav></SideNav>
      </div>
    </>
  );
};

export default PrivetLayouts;
