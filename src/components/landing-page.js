import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

// images being used
import landingImg from '../assets/images/Camera.png';

import { Grid, Row, Col } from 'react-flexbox-grid';

// material-ui components
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class LandingPage extends Component {

    render() {
        return (
            <Grid fluid>
            <Row>
                <Col md={12}>
                    <br/>
                    <br/>
                </Col>
            </Row>
                <Row>
                    <Col xs={12} md={12} style={{ 'textAlign': 'center' }}>
                        <h1>This is an PWA (Progressive web app)</h1>
                        <br />
                        <p>This application allows the user to capture an image and use azure cognitive services to either identify person or analyze the emotional state of the person.</p>
                        <p><b>Capture. Analyze. Result.</b></p>
                        <br />
                    </Col>
                </Row>
                <Row>
                <Col md={1}>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col xs={12} md={4} style={{ 'textAlign': 'center' }}>
                        <Card>
                            <CardMedia>
                                <img className='landingImage' src={landingImg} alt="gallery-face" />
                            </CardMedia>
                            <CardTitle title="Capture" />
                            <CardText>
                                Capture image from native camera.
                            </CardText>
                            <CardActions>
                                <Link to={'/recognize'}><FlatButton className='flat-btn' label="AM I SAD OR HAPPY?" /></Link>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default LandingPage;