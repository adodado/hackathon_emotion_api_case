import React, { Component } from 'react';
import Webcam from "react-webcam";

import '../styles/register.css';


class Recognize extends Component {
            setRef = webcam => {
              this.webcam = webcam;
            };
           
            capture = () => {
                console.log("tja");
                const imageSrc = this.webcam.getScreenshot();
              console.log(imageSrc);
            };
           
            render() {
                console.log("tjo");
              const videoConstraints = {
                width: 1280,
                height: 720,
                facingMode: "user"
              };
           
              return (
                <div>

                  <button onClick={this.capture}>Capture photo</button>
                </div>
              );
            }
}

export default Recognize;