import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../actions/userAction";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    history.push("/Home");
  }, []);

  return null;
};

export default Logout;
