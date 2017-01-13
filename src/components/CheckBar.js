import React from 'react';
import { Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {doSend} from '../logic/TrackerCommands'




export default class CheckBar extends React.Component{

  	constructor(props) {
    	super(props);
   	}

	render() {
		return (


            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                      <button type="button" class="btn btn-default">Schritt 1</button>
                      <button type="button" class="btn btn-default">Schritt 2</button>
                      <button type="button" class="btn btn-default">Schritt 3</button>
                      <button type="button" class="btn btn-default">Schritt 4</button>
                    </Col>
                </Row>
            </Grid>

        );
  	}
}
