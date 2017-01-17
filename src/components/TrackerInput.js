import React from 'react';
import {Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {echo} from '../logic/TrackerCommands'
import {doSend} from '../logic/TrackerCommands'




export default class TrackerInput extends React.Component{

  	constructor(props) {
    	super(props);
   	}

	render() {
		return (


            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                      <FormControl type="text" id="input" placeholder="json-request"/>
                    </Col>

                    <Col xs={6} md={6}>
                      <Button onClick={() => doSend()}>request</Button>
                    </Col>
                </Row>
            </Grid>

        );
  	}
}
