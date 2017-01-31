import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import CircleSvg from './CircleSvg';

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
    const dummySentences = ['If You want to measure a Reference-Plane, you need 4 Points,Please Measure a point at the marked location'];

    return (
      <div style={{marginTop: '74px'}}>
        <h2>'Please measure 4 points on the flange'</h2>
        <CircleSvg showFlangePoints={true} />
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4} mdOffset={4}><br/>{ dummySentences.slice(0, 2).join(' ') }</Col>
          </Row>
        </Grid>
        <Button class="btn btn-default central-button" href="#/measurecircle">MESSEN</Button>
      </div>
    );
  }
}
