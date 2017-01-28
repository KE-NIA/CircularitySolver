import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap'
import TrackerStatus from './TrackerStatus';
import { hashHistory } from 'react-router';

export default class TrackerNavbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var statusActive = "col-xs-3 bs-wizard-step active";
    var statusDisabled = "col-xs-3 bs-wizard-step disabled";
    var statusComplete = "col-xs-3 bs-wizard-step complete";

    var currentLocation = this.props.location.pathname
    var stepOne = statusDisabled;
    var stepTwo = statusDisabled;
    var stepThree = statusDisabled;
    var stepFour = statusDisabled;
    if(currentLocation === '/' || currentLocation === '/startscreen'){
      console.log('ich bin im starscreen' + currentLocation);
      stepOne = statusActive;
    }else if (currentLocation === '/measurerefplane'){
      console.log('ich bin im  refplane' + currentLocation);
      stepOne = statusComplete;
      stepTwo = statusActive;
    }else if (currentLocation === '/measurecircle'){
      console.log('ich bin im kreis' + currentLocation);
      stepOne = statusComplete;
      stepTwo = statusComplete;
      stepThree = statusActive;
    }else if (currentLocation === '/circularityresult'){
      console.log('ich bin im result' + currentLocation);
      stepOne = statusComplete;
      stepTwo = statusComplete;
      stepThree = statusComplete;
      stepFour = statusActive;
    }


    return(
        <div class="container">
              <div class="row bs-wizard" style={ {borderBottom: 0}}>
                  <div class={stepOne}>
                    <div class="text-center bs-wizard-stepnum">Start</div>
                    <div class="progress"><div class="progress-bar"></div></div>
                    <a href="#" class="bs-wizard-dot"></a>
                    <div class="bs-wizard-info text-center">Choose a Lasertracker</div>
                  </div>

                  <div class={stepTwo}>
                    <div class="text-center bs-wizard-stepnum">Reference Plane</div>
                    <div class="progress"><div class="progress-bar"></div></div>
                    <a href="#" class="bs-wizard-dot"></a>
                    <div class="bs-wizard-info text-center"> Please Measure the Reference Plane</div>
                  </div>

                  <div class={stepThree}>
                    <div class="text-center bs-wizard-stepnum">Circularity</div>
                    <div class="progress"><div class="progress-bar"></div></div>
                    <a href="#" class="bs-wizard-dot"></a>
                    <div class="bs-wizard-info text-center">Please Measure the Circularity</div>
                  </div>

                  <div class={stepFour}>
                    <div class="text-center bs-wizard-stepnum">Result</div>
                    <div class="progress"><div class="progress-bar"></div></div>
                    <a href="#" class="bs-wizard-dot"></a>
                    <div class="bs-wizard-info text-center"> This is your Result</div>
                  </div>
              </div>
              <div>
                {this.props.children}
              </div>
        </div>

    )
  }
}
