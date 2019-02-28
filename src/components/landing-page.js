import React, { Component } from 'react';
import '../styles/register.css';
import Webcam from "react-webcam";
import axios from 'axios';

import { Grid, Row, Col } from 'react-flexbox-grid';

// material-ui components
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';

class LandingPage extends Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        console.log("tja");
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        return axios.post('https://westcentralus.api.cognitive.microsoft.com/face/v1.0',{
                imageSrc
            },{
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key' : 'dd44fc612ea44107a0f0084b91a02a53',
                'Access-Control-Allow-Origin': '/localhost:3000'
        }).then(response =>{
            console.log('tjofadderej');
        })
    };

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

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
                                <Webcam
                                    audio={false}
                                    height={350}
                                    ref={this.setRef}
                                    screenshotFormat="image/jpeg"
                                    width={350}
                                    videoConstraints={videoConstraints}
                                />

                            </CardMedia>
                            <CardText>
                                Capture image from native camera.
                            </CardText>
                            <CardActions>
                                <button onClick={this.capture}>Capture photo</button>
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