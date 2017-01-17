import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap'
const mapStateToProps = (state) => {
    return{
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MeasureCircle extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <h2>Ergebiss</h2>
        <svg width={100} height={100}>
          <circle cx={50} cy={50} r={40} />
        </svg>
        <p>Min</p>
        <p>Max</p>
        <p>arithmetic medium</p>
        <Button href="#/startscreen">Home</Button>
      </div>
    );
  }
}
