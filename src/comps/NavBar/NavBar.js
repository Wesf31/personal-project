import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component{
    render (){
        return (
            <div id='centeredmenu'>
                <ul>
                    <li><a>Photo Gallery </a></li>
                    <li><a>About </a></li>
                    <li><a>Appointment </a></li>
                </ul>
            </div>
        )
    }
}