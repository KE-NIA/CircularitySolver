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

    return (
      <div class="text-center" >
        <h1 class="bg-success">Circularity S0lver</h1>
        {this.props.children}
      </div>
    )
  }
}
