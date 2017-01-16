import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';
import { chooseFaro, chooseVantage } from '../actions/Actions'

const mapStateToProps = (state) => {
  return {
    main: state.main.firstpage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChooseFaro: firstpage => dispatch(chooseFaro(firstpage)),
    onChooseVantage: firstpage => dispatch(chooseVantage(firstpage))
  };
};
@connect(mapStateToProps, mapDispatchToProps)
export default class SetSensor extends React.Component{
  constructor(props){
     super(props);
  }

  render() {
    return (
      <ButtonGroup>
        <Button
          bsSize="large" onClick={() =>
            this.props.onChooseFaro(this.props.firstpage)}>FaroIon</Button>
        <Button bsSize="large" onClick={() =>
            this.props.onChooseVantage(this.props.firstpage)}>FaroVantage</Button>
      </ButtonGroup>
    );
  }
}
