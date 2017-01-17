import React from 'react';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap'
import TrackerStatus from './TrackerStatus';

export default class TrackerNavbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div>
          {/*<Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#/startscreen">Home</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <li><a href="#/facecheck">FaceCheck</a></li>
              </Nav>
              <Nav pullRight>
                <NavItem >
                  <TrackerStatus/>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>*/}
          <h1>HEADER</h1>
          {this.props.children}
    </div>
      )
  }
}
