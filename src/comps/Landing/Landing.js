import React, { Component } from 'react'
import './Landing.css'
import NavBar from './../NavBar/NavBar'
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    button: {
      margin: 10,
    }
  };
  
  
export default class Landing extends Component {
    render (){
        return (
            <div className='landing'>
                <NavBar />
                <svg id='svgposition' height="200" width="350">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="45%">
                            <stop offset="50%" stopColor="rgb(255, 255, 255)" stopOpacity="0" />
                            <stop offset="100%" stopColor="rgb(20, 20, 20)" stopOpacity="100"/>
                        </linearGradient>
                    </defs>
                    <text x='0' y="80" fill='url(#grad1)' fontSize='85px' opacity= '.4' filter= 'alpha(opacity=0)' letterSpacing='8px' style={{fontFamily: 'Hammersmith One'}} >WESLEY FUKUI</text>
                </svg>
                <div>
                    <p id='headerposition'>
                        Wesley Fukui's portfolio website
                    </p>
                    <p id='textposition'>
                        This is a simple clean portfolio site for photographers to dispaly thier work and connect with clientele. This website will have an admin login that will allow the photographer to manage the images and bio info.
                    </p>
                </div>
                <div id='socialposition'>
                    <RaisedButton
                        href="https://www.facebook.com/wesley.fukui"
                        label="Instagram"
                        labelPosition="before"
                        style={styles.button}
                        containerElement="label"
                        >
                        </RaisedButton>
                        <RaisedButton
                        href="https://www.facebook.com/wesley.fukui"
                        label="FaceBook"
                        labelPosition="before"
                        primary={true}
                        style={styles.button}
                        />
                        <RaisedButton
                        href="https://www.youtube.com"
                        label="YouTube"
                        secondary={true}
                        style={styles.button}
                        />
                </div>
            </div>
        )
    }
}