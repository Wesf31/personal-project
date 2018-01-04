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
                <div className='landingText'>
                    <div className='text'>
                        <p className='headerposition'>
                            Wesley Fukui's portfolio website
                        </p>
                        <p className='textposition'>
                            This is a simple clean portfolio site for photographers to dispaly thier work and connect with clientele. This website will have an admin login that will allow the photographer to manage the images and bio info.
                        </p>
                    </div>

                    <div className='social'>
                        <RaisedButton
                            href="https://www.instagram.com/?hl=en#registered"
                            label="Instagram"
                            labelPosition="before"
                            style={styles.button}
                            containerElement="label"
                            />
                            <RaisedButton
                            href="https://www.instagram.com"
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
            </div>
        )
    }
}