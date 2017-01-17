import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MeasureRefPlane extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <svg width={100} height={100}>
        <circle cx={50} cy={50} r={40} />
      </svg>
    );
  }
}
