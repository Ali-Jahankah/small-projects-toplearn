import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBody from "./NavBody";
import Menusvg from "./Menusvg";
import EditContextProvider from "./EditContext";
import HomePage from "./HomePage";
import People from "./People";
import NotFound from "./NotFound";
// import EditForm from "./EditForm";
function App() {
  return (
    <EditContextProvider>
      <Router>
        <NavBody></NavBody>
        <Menusvg></Menusvg>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/Home" component={HomePage}></Route>
          <Route path="/People">
            <People></People>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
        {/* <Route path="/people/:id"></Route> */}
      </Router>
    </EditContextProvider>
  );
}

export default App;
