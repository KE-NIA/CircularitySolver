import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap'

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
    const dummySentences = ['Um einene Ebene zu messen, benötigen sie 4 Punkte, bitte Messen sie einen Punkt an der gekennzeichneten Stelle '];

    return (
      <div>
        <h2>Bitte Messen Sie 4 Punkte</h2>
        <svg width={100} height={100}>
          <circle cx={50} cy={50} r={40} />
        </svg>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4} mdOffset={4}><br/>{ dummySentences.slice(0, 2).join(' ') }</Col>
          </Row>
        </Grid>
        <Button href="#/measurecircle">Messen</Button>
      </div>
    );
  }
}
