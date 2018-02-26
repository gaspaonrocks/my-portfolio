import React, { Component } from "react";
import { Header, Icon, Image } from "semantic-ui-react";

export default class HeaderBanner extends Component {
  constructor(props) {
    super(props);
    this.handleBannerClick = this.handleBannerClick.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }

  handleBannerClick(e) {
    console.log("this will open sidenav on mobile, say hello on desktop", e);
  }

  toggleSidenav(e) {
    this.props.onStatusChange(e);
  }

  render() {
    return (
      <Header as="h1" onClick={this.toggleSidenav}>
        <Image circular src={require("../../assets/img/portrait.jpg")} />{" "}
        gaspaonrocks
      </Header>
    );
  }
}
