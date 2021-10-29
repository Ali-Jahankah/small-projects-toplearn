import React from "react";
import { render } from "react-dom";
import App from "./componenets/main/App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Footer from "./componenets/main/Footer";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Provider store={store}>
    <Router>
      <div id="main" style={{ flex: 1 }}>
        <App />
      </div>
      <Footer></Footer>
    </Router>
  </Provider>,
  document.getElementById("root")
);
