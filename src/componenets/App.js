import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBody from "./NavBody";
import Menusvg from "./Menusvg";
import EditContextProvider from "./EditContext";
import HomePage from "./HomePage";
import People from "./People";
import ToDo from "./ToDo";
// import NotFound from "./NotFound";
import TaskContextProvider from "./TaskContext";
import Regester from "./Regester";
// import EditForm from "./EditForm";
function App() {
  return (
    <EditContextProvider>
      <Menusvg></Menusvg>
      <Router>
        <NavBody></NavBody>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/Home" component={HomePage}></Route>
          <Route path="/People" component={People}></Route>
          <Route path="/Regester" component={Regester}></Route>
          <TaskContextProvider>
            <Route path="/Todo" component={ToDo}></Route>
          </TaskContextProvider>
          {/* <Route component={NotFound}></Route> */}
        </Switch>
      </Router>
    </EditContextProvider>
  );
}

export default App;
