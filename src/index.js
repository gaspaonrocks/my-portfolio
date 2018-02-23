import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const hotReloading = MainComponent => {
  ReactDOM.render(<MainComponent />, document.getElementById("root"));
};

hotReloading(App);
registerServiceWorker();

if (module.hot) {
  module.hot.accept(() => {
    console.log("Updating Full App !");
    hotReloading(App);
  });
}
