import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component{
    render (){
        return (
            <div id='centeredmenu'>
                <ul>
                    <li><a style={{fontFamily: 'Hammersmith One'}}>Photo Gallery </a></li>
                    <li><a style={{fontFamily: 'Hammersmith One'}}>About </a></li>
                    <li><a style={{fontFamily: 'Hammersmith One'}}>Appointment </a></li>
                </ul>
            </div>
        )
    }
}