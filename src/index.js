import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import Loadable from "react-loadable";

const LoadApp = Loadable({
  loader: () => import("./App"),
  loading() {
    return <div>Loading...</div>;
  }
});

const hotReloading = MainComponent => {
  ReactDOM.render(<MainComponent />, document.getElementById("root"));
};

hotReloading(LoadApp);
registerServiceWorker();

if (module.hot) {
  module.hot.accept(() => {
    console.log("Updating Full App !");
    hotReloading(LoadApp);
  });
}
