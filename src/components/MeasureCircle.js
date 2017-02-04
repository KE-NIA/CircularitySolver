import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import CircleSvg from './CircleSvg';
import { hashHistory } from 'react-router';

export default class MeasureCircle extends React.Component {

  constructor(props) {
    super(props);
    this.onMeasure = this.onMeasure.bind(this);
  }

  onMeasure(){
    hashHistory.push('/circularityresult')
  }

  render() {
    const dummySentences = ['Take the reflector and move alongside the inner circle.If '];

    return (
      <div style={{marginTop: '44px'}}>
        <h2>Please move the reflector along the inner circle</h2>
        <CircleSvg showFlangePoints={false} showInnerSmr={true} />
        <Grid>
          <Row className="show-grid" class="text-center">
            <Col sm={6} md={4} mdOffset={4}><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
          </Row>
        </Grid>
        <Button class="btn btn-default central-button" onClick={this.onMeasure}>MEASURE</Button>
      </div>
    );
  }
}
