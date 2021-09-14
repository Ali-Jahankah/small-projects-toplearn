import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBody from "./NavBody";
import Menusvg from "./Menusvg";
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
import MobileNavBody from "./MobileNavBody";
import Games from "./Games";
import Game from "./game";

function App() {
  return (
    <EditContextProvider>
      <Menusvg></Menusvg>
      <Router>
        <NavBody></NavBody>
        <MobileNavBody></MobileNavBody>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/Home" component={HomePage}></Route>
          <Route path="/People" component={People}></Route>
          <Route path="/Regester" component={Regester}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Counter-Redux" component={CounterRedux}></Route>
          <Route path="/Games" component={Games} exact></Route>
          <Route path="/Games/:id" component={Game} exact></Route>

          <Route
            path="/People-Management-Redux"
            component={PeopleRedux}
          ></Route>
          <Route path="/react-jquery" component={ReactJquery}></Route>

          <TaskContextProvider>
            <Route path="/Todo" component={ToDo}></Route>
          </TaskContextProvider>

          {/* <Route component={NotFound}></Route> */}
        </Switch>
      </Router>
    </EditContextProvider>
  );
}

export default memo(App);
