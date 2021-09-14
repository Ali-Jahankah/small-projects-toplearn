import React from "react";
import { render } from "react-dom";
import App from "./componenets/App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Footer from "./componenets/Footer";

render(
  <Provider store={store}>
    <div id="main" style={{ flex: 1 }}>
      <App />
    </div>
    <Footer></Footer>
  </Provider>,
  document.getElementById("root")
);
