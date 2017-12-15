import React, { Component } from 'react'
import './Landing.css'
import NavBar from './../NavBar/NavBar'

export default class Landing extends Component {
    render (){
        return (
            <div className='landing'>
                <NavBar />
                <svg id='svgposition' height="200" width="350">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="40%">
                            <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0" />
                            <stop offset="100%" stopColor="rgb(218,246,255)" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <text x='0' y="50"fill="url(#grad1)" fontSize='65px' letterSpacing='10px' style={{fontFamily: 'sans-serif' }}>WESLEY FUKUI</text>
                </svg>
            </div>
        )
    }
}