import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBody from "./NavBody";
import Menusvg from "./Menusvg";
import { memo } from "react";
import EditContextProvider from "./EditContext";
import HomePage from "./HomePage";
import People from "./People";
import ToDo from "./ToDo";
// import NotFound from "./NotFound";
import TaskContextProvider from "./TaskContext";
import Regester from "./Regester";
import CounterRedux from "./CounterRedux";
import Login from "./Login";

import MobileNavBody from "./MobileNavBody";
import { useSelector } from "react-redux";

function App() {
  const menu = useSelector((state) => state.menu);

  return (
    <EditContextProvider>
      <Menusvg></Menusvg>
      <Router>
        <NavBody></NavBody>
        {menu ? <MobileNavBody></MobileNavBody> : null}
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/Home" component={HomePage}></Route>
          <Route path="/People" component={People}></Route>
          <Route path="/Regester" component={Regester}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Counter-Redux" component={CounterRedux}></Route>
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
