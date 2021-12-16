import React from "react";
import { Route, Switch } from "react-router-dom";
import { memo } from "react";
import { useSelector } from "react-redux";
import PrivetLayouts from "../layouts/PrivetLayouts";
import EditContextProvider from "../../context/EditContext";
import HomePage from "./HomePage";
import People from "../peoplemanage/People";
import ToDo from "../todo/ToDo";
import "../../css/index.css";
// import NotFound from "./NotFound";
import TaskContextProvider from "../../context/TaskContext";
import Regester from "../user/Regester";
import CounterRedux from "../counter/CounterRedux";
import Login from "../user/Login";
import PeopleRedux from "../peoplemanage/PeopleRedux";
import ReactJquery from "../jquery/ReactJquery";
import Games from "../games/Games";
import Game from "../games/game";
import Logout from "../user/Logout";
import NotFound from "./NotFound";
import UserProfile from "../user/UserProfile";
import UserContext from "../../context/UserContext";
import MainLayouts from "../layouts/MainLayouts";
import AdminProfile from "../privets/AdminProfile";
import GamesTable from "../privets/GamesTable";
import Dashboard from "../privets/Dashboard";
import { GamesContext } from "../../context/GamesContext";

function App() {
  const courses = useSelector((state) => state.courses);
  return (
    <Switch>
      <Route path={["/Dashboard"]}>
        <PrivetLayouts>
          <Route path="/Dashboard" component={Dashboard} exact></Route>
          <Route
            path="/Dashboard/Admin_Profile"
            component={AdminProfile}
            exact
          ></Route>
          <GamesContext courses={courses}>
            <Route
              path="/Dashboard/Games-table"
              component={GamesTable}
              exact
            ></Route>
          </GamesContext>
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
