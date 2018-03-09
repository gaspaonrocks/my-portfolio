import React, { Component } from "react";
import Loadable from "react-loadable";

const LoadHack = Loadable({
  loader: () => import("./hackouphene/Hackouphene"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <h1>Hello Gallery !</h1>
        <br />
        <LoadHack />
      </div>
    );
  }
}
