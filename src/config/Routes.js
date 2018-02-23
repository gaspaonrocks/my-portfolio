import React, { Component } from "react";
import { Route } from "react-router";

import Loadable from "react-loadable";

const LoadHome = Loadable({
  loader: () => import("../components/home/Home"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadEducation = Loadable({
  loader: () => import("../components/education/Education"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadExperience = Loadable({
  loader: () => import("../components/experience/Experience"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadGallery = Loadable({
  loader: () => import("../components/gallery/Gallery"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadHackouphene = Loadable({
  loader: () => import("../components/gallery/hackouphene/Hackouphene"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadVue = Loadable({
  loader: () => import("../components/gallery/vue-project/Vue"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadPixi = Loadable({
  loader: () => import("../components/gallery/pixi-project/Pixi"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default class Routes extends Component {
  render() {
    return (
      <div>
        {["/", "/home"].map(path => (
          <Route key={path.replace("/", "")} exact path={path} component={LoadHome} />
        ))}
        <Route key="education" path="/education" component={LoadEducation} />
        <Route key="experience" path="/experience" component={LoadExperience} />
        <Route key="gallery" path="/gallery" component={LoadGallery} />
        <Route key="hackouphene," path="/hackouphene" component={LoadHackouphene} />
        <Route key="vue-project" path="/vue-project" component={LoadVue} />
        <Route key="pixi-project" path="/pixi-project" component={LoadPixi} />
      </div>
    );
  }
}
