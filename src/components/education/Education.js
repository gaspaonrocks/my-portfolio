import React, { Component } from "react";
import Loadable from "react-loadable";
import { Button, Card, Image, Icon } from "semantic-ui-react";

import DirectionReveal from "../../external-libs/direction-reveal";
import "../../external-libs/direction-reveal.css";

const LoadItem = Loadable({
  loader: () => import("./Education.Item"),
  loading() {
    return <div>Loading...</div>;
  }
});

const data = [
  { name: "Lycée Pasteur", pic: "lyceePasteur" },
  { name: "René Descartes", pic: "reneDescartes" },
  { name: "Joseph Fourier", pic: "josephFourier" }
];

// Init with all options at default setting
const directionRevealSwing = DirectionReveal({
  selector: ".direction-reveal", // Container element selector.
  itemSelector: ".direction-reveal__card", // Item element selector.
  animationName: "swing", // Animation CSS class.
  enableTouch: true, // Adds touch event to show content on first click then follow link on the second click.
  touchThreshold: 250 // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
});

export default class Education extends Component {
  render() {
    return (
      <Card.Group>
        {data.map(e => {
          return <LoadItem key={e.name} info={e} />;
        })}
      </Card.Group>
    );
  }
}
