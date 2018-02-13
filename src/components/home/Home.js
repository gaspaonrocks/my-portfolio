import React, { Component } from "react";
import { Grid, Container, Image } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Hello Home !</h1>
        <Grid columns='equal' padded>
          <Grid.Column>
            <Image src={require("../../portrait.jpg")} size="big" />
          </Grid.Column>
          <Grid.Column width={12}>
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
              eam alia facete scriptorem, est autem aliquip detraxit at. Usu
              ocurreret referrentur at, cu epicurei appellantur vix. Cum ea
              laoreet recteque electram, eos choro alterum definiebas in. Vim
              dolorum definiebas an. Mei ex natum rebum iisque.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
