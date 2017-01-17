import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {connect} from "react-redux";
/**
 *dispatches the store´s states to property´s(so it can be used here)
 *
 */
const mapStateToProps = state => {
    return{
      isConnected: state.sensor.isConnected,
      measurementConfig: state.tracker.measurementConfig,
      activeSensor: state.sensor.activeSensor
    };
};

/**
 *If an object is passed, each function inside it will
 *be assumed to be a Redux action creator. An object with the same
 *function names, but with every action creator wrapped into a dispatch call
 *so they may be invoked directly, will be merged into the component’s
 *props. If a function is passed, it will be given dispatch.
 *
 */
const mapDispatchToProps = dispatch => {
    return{
    };
};
/**
 *
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class TrackerStatus extends React.Component{
  constructor(props) {
    	super(props);
   	}
	render(){
      if(this.props.isConnected == true ){
        return(
          <ButtonGroup>
            <Button bsStyle="success" bsSize="xsmall">connected</Button>
            <Button bsSize="xsmall">{this.props.activeSensor}</Button>
            <Button bsStyle="warning" bsSize="xsmall">{this.props.measurementConfig}</Button>
          </ButtonGroup>
        )
      }
      return(
        <ButtonGroup>
          <Button bsStyle="danger" bsSize="xsmall">not connected</Button>
          <Button bsSize="xsmall">{this.props.activeSensor}</Button>
          <Button bsStyle="warning"bsSize="xsmall">{this.props.measurementConfig}</Button>
        </ButtonGroup>
      )
  }
}
