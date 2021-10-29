import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import TopNav from "../privets/TopNav";
import { Redirect } from "react-router-dom";

const PrivetLayouts = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.isAdmin) return <Redirect to="/home" />;

  return (
    <>
      <Helmet>
        <title>Privet Layout</title>
      </Helmet>
      <TopNav user={user}></TopNav>
      {children}
    </>
  );
};

export default PrivetLayouts;
