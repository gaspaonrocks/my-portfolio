import React, { Component } from "react";
import { Route } from "react-router";

import Home from "../components/home/Home";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Gallery from "../components/gallery/Gallery";
import Hackouphene from "../components/gallery/hackouphene/Hackouphene";
import VueProject from "../components/gallery/vue-project/Vue";
import PixiProject from "../components/gallery/pixi-project/Pixi";

export default class Routes extends Component {
  render() {
    return (
      <div>
        {["/", "/home"].map(path => (
          <Route
            key={path.replace("/", "")}
            exact
            path={path}
            component={Home}
          />
        ))}
        <Route key="education" path="/education" component={Education} />
        <Route key="experience" path="/experience" component={Experience} />
        <Route key="gallery" path="/gallery" component={Gallery} />
        <Route key="hackouphene," path="/hackouphene" component={Hackouphene} />
        <Route key="vue-project" path="/vue-project" component={VueProject} />
        <Route
          key="pixi-project"
          path="/pixi-project"
          component={PixiProject}
        />
      </div>
    );
  }
}
