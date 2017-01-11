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
    onConnectSensorRequest: () => dispatch(connectSensor()),
    onSingleMeasureAction: isConnected => dispatch(singleMeasureAction(isConnected)),
    onDisConnectSensorRequest: () => dispatch(disConnectSensor()),
    onToggleRequest: () => dispatch(toggleSensor()),
    onHomeRequest: () => dispatch(homeAction()),
    onCompItRequest: () => dispatch(compItAction())
  };
};

/**
 *
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class FaroVantageButtons extends React.Component{

    constructor(props) {
      super(props);
    }

  render() {
    return (
      <ButtonGroup vertical>
        <Button onClick={() => this.props.onConnectSensorRequest()}>connect</Button>
        <Button onClick={() => this.props.onDisConnectSensorRequest()}>disconnect</Button>
        <Button onClick={() => this.props.onMeasureRequest()}>measure</Button>
        <Button onClick={() => this.props.onToggleRequest()}>toggle</Button>
        <Button onClick={() => this.props.onHomeRequest()}>home</Button>
        <Button onClick={() => this.props.onCompItRequest()}>compIt</Button>
      </ButtonGroup>
    );
  }
}
