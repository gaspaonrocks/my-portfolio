import React, { Component } from "react";
import Loadable from "react-loadable";
import { Item } from "semantic-ui-react";

const data = [
  {
    name: "OnePoint",
    pic:
      "https://www.groupeonepoint.com/wp-content/uploads/2016/04/Onepoint_Logo-e1459791745627.png"
  },
  {
    name: "2BConsulting",
    pic:
      "http://static8.viadeo-static.com/j18J6LJVeYNDPTuoB0IBkQNagcU=/fit-in/200x200/filters:fill(white)/b5b56c27b11547a39889e5d2f0b027c9/1434472930.jpeg"
  }
];

const LoadItem = Loadable({
  loader: () => import("./Experience.Item"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default class Experience extends Component {
  render() {
    return (
      <Item.Group>
        {data.map(e => {
          return <LoadItem key={e.name} info={e} />;
        })}
      </Item.Group>
    );
  }
}
