import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import TopNav from "./TopNav";
import { Redirect } from "react-router-dom";

const PrivetLayouts = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.isAdmin) return <Redirect to="/home" />;

  return (
    <>
      <Helmet>
        <title>Privet Layout</title>
      </Helmet>
      <TopNav></TopNav>
      {children}
    </>
  );
};

export default PrivetLayouts;
