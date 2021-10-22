import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivetLayouts from "./PrivetLayouts";
import { memo } from "react";
import EditContextProvider from "./EditContext";
import HomePage from "./HomePage";
import People from "./People";
import ToDo from "./ToDo";
import "../css/index.css";
// import NotFound from "./NotFound";
import TaskContextProvider from "./TaskContext";
import Regester from "./Regester";
import CounterRedux from "./CounterRedux";
import Login from "./Login";
import PeopleRedux from "./PeopleRedux";
import ReactJquery from "./ReactJquery";
import Games from "./Games";
import Game from "./game";
import Logout from "./Logout";
import NotFound from "./NotFound";
import UserProfile from "./UserProfile";
import UserContext from "../context/UserContext";
import MainLayouts from "./MainLayouts";
import AdminProfile from "./AdminProfile";

function App() {
  return (
    <Switch>
      <Route path={["/Dashboard"]}>
        <PrivetLayouts>
          <Route
            path="/Dashboard/Admin_Profile"
            component={AdminProfile}
            exact
          ></Route>
        </PrivetLayouts>
      </Route>

      <Route path={["/"]}>
        <EditContextProvider>
          <UserContext>
            <MainLayouts>
              <TaskContextProvider>
                <Switch>
                  <Route path="/" component={HomePage} exact></Route>
                  <Route path="/Home" component={HomePage}></Route>
                  <Route path="/People" component={People}></Route>

                  <Route path="/Regester" component={Regester}></Route>
                  <Route path="/Login" component={Login} exact></Route>

                  <Route path="/Logout" component={Logout} exact></Route>

                  <Route path="/Counter-Redux" component={CounterRedux}></Route>
                  <Route path="/Games" component={Games} exact></Route>
                  <Route path="/Games/:id" component={Game} exact></Route>
                  <Route path="/User/:id" component={UserProfile}></Route>

                  <Route
                    path="/People-Management-Redux"
                    component={PeopleRedux}
                  ></Route>
                  <Route path="/react-jquery" component={ReactJquery}></Route>
                  <Route path="/ToDo" component={ToDo}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </TaskContextProvider>
            </MainLayouts>
          </UserContext>
        </EditContextProvider>
      </Route>
    </Switch>
  );
}

export default memo(App);
