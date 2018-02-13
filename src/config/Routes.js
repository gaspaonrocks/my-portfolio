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
        {["/", "/home"].map(path => <Route exact path={path} component={Home} />)}
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/hackouphene" component={Hackouphene} />
        <Route path="/vue-project" component={VueProject} />
        <Route path="/pixi-project" component={PixiProject} />
      </div>
    );
  }
}
