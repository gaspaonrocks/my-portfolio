import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import lycee from '../../assets/img/lyceePasteur.jpg'
import fac1 from '../../assets/img/reneDescartes.jpg'
import fac2 from '../../assets/img/josephFourier.jpg'

import DirectionReveal from '../../external-libs/direction-reveal';
import '../../external-libs/direction-reveal.css';

// Init with all options at default setting
const directionRevealSwing = DirectionReveal({
  selector: '.direction-reveal',              // Container element selector.
  itemSelector: '.direction-reveal__card',    // Item element selector.
  animationName: 'swing',                     // Animation CSS class.
  enableTouch: true,                          // Adds touch event to show content on first click then follow link on the second click.
  touchThreshold: 250                         // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
});

export default class Education extends Component {
  render() {
    return (
      <Card.Group>
        <Card>
          <Image src={lycee} />
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src={fac1} />
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src={fac2} />
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src={lycee} />
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}