import React, { Component } from 'react';
import '../styles/register.css';
import Webcam from "react-webcam";
//import axios from 'axios';


import { Grid, Row, Col } from 'react-flexbox-grid';


// material-ui components
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
const request = require('request');



class LandingPage extends Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        // return axios.post('https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect',{
        //         data: imageSrc
        //     },{ 
        //         'Content-Type': 'application/octet-stream',
        //         'Ocp-Apim-Subscription-Key' : 'acf520c0c0b244cc895f5f7b51eb2f31'
        // }).then(response =>{
        // })

        const params = {
            'returnFaceId': 'true',
            'returnFaceLandmarks': 'false',
            'returnFaceAttributes': 'age,gender,smile,facialHair,glasses,emotion'
        };
        // https://hips.hearstapps.com/cosmouk.cdnds.net/15/10/nrm_1425398982-pretty-woman-trivia-facts.jpg
        const options = {
            uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect',
            qs: params,
            body: '{"url": ' + '"' + 'https://hips.hearstapps.com/cosmouk.cdnds.net/15/10/nrm_1425398982-pretty-woman-trivia-facts.jpg' + '"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : 'acf520c0c0b244cc895f5f7b51eb2f31'
            }
        };
        
        request.post(options, (error, response, body) => {
          if (error) {
            console.log('Error: ', error);
            return;
          }
          let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
          console.log('JSON Response\n');
          console.log(jsonResponse);
        });
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