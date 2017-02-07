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
    const third = ['Take the reflector and move it alongside the inner circle. '];
    const fourth = ['You can start wherever you want,',<br/>, 'Just make sure you move a complete round.'];

    return (
      <div style={{marginTop: '44px'}}>
        <h2>Please move the reflector along the inner circle</h2>
        <CircleSvg showFlangePoints={false} showInnerSmr={true} />
        <Grid>
          <Row className="show-grid" class="text-center">
            <Col sm={6} md={4} mdOffset={4}><br/>{third.slice(0, 2).join(' ')}</Col>
            <Col sm={6} md={4} mdOffset={4}>{fourth}</Col>
          </Row>
        </Grid>
        <Button class="btn btn-default central-button" onClick={this.onMeasure}>MEASURE</Button>
      </div>
    );
  }
}
