import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Segment, Dropdown, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted color="grey" pointing secondary>
        <Menu.Item name='home' as={NavLink} to="/home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='education' as={NavLink} to="/education" active={activeItem === 'education'} onClick={this.handleItemClick} />
        <Menu.Item name='experience' as={NavLink} to="/experience" active={activeItem === 'experience'} onClick={this.handleItemClick} />
        <Dropdown item name='gallery' text='Gallery' onClick={this.handleItemClick} simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name='dropdown' />
              <span className='text'>New</span>
              <Dropdown.Menu>
                <Dropdown.Item>Document</Dropdown.Item>
                <Dropdown.Item>Image</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/hackouphene" >Hackouphene</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/vue-project" >Vue project</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={NavLink} to="/pixi-project" >PixiGame Project</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}