import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { clearUser } from "../../actions/userAction";
import { isEmpty } from "lodash";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    history.replace("/Home");
  }, [dispatch, history]);
  if (isEmpty(user)) <Redirect to="/Home" />;
  return null;
};

export default withRouter(Logout);
