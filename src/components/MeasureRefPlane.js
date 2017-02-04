import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import CircleSvg from './CircleSvg';
import { hashHistory } from 'react-router';

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
    this.state = {
      pointOne: { status: 'active' },
      pointTwo: { status: 'deactive' },
      pointThree: { status: 'deactive' },
      pointFour: { status: 'deactive' }
    }
    this.onMeasure = this.onMeasure.bind(this);
  }
  componentDidMount(){
  }
  onMeasure() {
    if (this.state.pointOne.status === 'active') {
      this.setState({
        ...this.state,
        pointOne: { status: 'measured' },
        pointTwo: { status: 'active' },
      });
    } else if (this.state.pointTwo.status === 'active') {
      this.setState({
        ...this.state,
        pointTwo: { status: 'measured' },
        pointThree: { status: 'active' },
      });
    } else if (this.state.pointThree.status === 'active') {
      this.setState({
        ...this.state,
        pointThree: { status: 'measured' },
        pointFour: { status: 'active' },
      });
    } else if (this.state.pointFour.status === 'active') {
      this.setState({
        ...this.state,
        pointFour: { status: 'measured' },
      });
      hashHistory.push('/measurecircle');
    } else {

    }
  }


  render() {
    const dummySentences = ['If You want to measure a Reference-Plane, you need 4 Points,Please Measure a point at the marked location'];

    return (
      <div style={{marginTop: '44px'}}>
        <h2>'Please measure 4 points on the flange'</h2>
        <CircleSvg
          pointOne={this.state.pointOne}
          pointTwo={this.state.pointTwo}
          pointThree={this.state.pointThree}
          pointFour={this.state.pointFour}
          showFlangePoints={true}
          showInnerSmr = {false}
        />
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4} mdOffset={4}><br/>{ dummySentences.slice(0, 2).join(' ') }</Col>
          </Row>
        </Grid>
        <Button class="btn btn-default central-button" onClick={this.onMeasure}>MEASURE</Button>
      </div>
    );
  }
}
