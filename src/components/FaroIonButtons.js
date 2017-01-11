import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { connectSensor, disConnectSensor, singleMeasureAction, toggleSensor,
        homeAction, compItAction } from '../actions/sensorActions'

/**
 *dispatches the store´s states to property´s(so it can be used here)
 *
 */
const mapStateToProps = state => {
  return {
      // store variable -> syntax x = store.x
    activeSensor: state.sensor.activeSensor,
    sensorTypes: state.sensor.sensorTypes,
    isConnected: state.sensor.isConnected,
    measureNumber: state.sensor.measureNumber,
    toggleNumber: state.sensor.toggleNumber,
    homeNumber: state.sensor.homeNumber,
    compItNumber: state.sensor.compItNumber,
    init: state.sensor.init
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
  return {
    onConnectSensorRequest: (activeSensor) => dispatch(connectSensor(activeSensor)),
    onSingleMeasureAction: (isConnected) => dispatch(singleMeasureAction(isConnected)),
    onDisConnectSensorRequest: (activeSensor) => dispatch(disConnectSensor(activeSensor)),
    onToggleRequest: (isConnected) => dispatch(toggleSensor(isConnected)),
    onHomeRequest: (isConnected) => dispatch(homeAction(isConnected)),
    onCompItRequest: (isConnected) => dispatch(compItAction(isConnected)),
  };
};

/**
 *
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class FaroIonButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   *construct buttons and gives them the propertys of the previous component
   *with "onlick" the button fire´s a function wich is declared above
   *
   */
  render() {
    return (
      <ButtonGroup vertical>
        <Button
          onClick={() =>
    this.props.onConnectSensorRequest(this.props.activeSensor)}>connect</Button>
        <Button
          onClick={() =>
    this.props.onDisConnectSensorRequest(this.props.activeSensor)}>disconnect
        </Button>
        <Button onClick={() =>
     this.props.onSingleMeasureAction(this.props.isConnected)}>measure</Button>
        <Button
          onClick={() => this.props.onToggleRequest(this.props.isConnected)}>toggle</Button>
	   		<Button onClick={() => this.props.onHomeRequest(this.props.isConnected)}>home</Button>
          <Button onClick={() => this.props.onCompItRequest(this.props.isConnected)}>compIt</Button>
      </ButtonGroup>
    );
  }

}
