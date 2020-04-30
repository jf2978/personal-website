import React from "react"
import PropTypes from "prop-types"
import { Segment, Menu } from "semantic-ui-react"

import "./layout.css"
import '../styles/styles.scss';
import 'semantic-ui-less/semantic.less';

import styles from "./styles/navbar.module.scss"

console.log(styles)

const NavBar = ({ children }) => {

  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            //active={activeItem === 'home'}
            //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            //active={activeItem === 'messages'}
            //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            //active={activeItem === 'friends'}
            //onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    </>
  )
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavBar
