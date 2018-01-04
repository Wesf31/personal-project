import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component{
    render (){
        return (
            <div id='centeredmenu'>
                <ul class="twitter" role="navigation">
                    <li><a href= 'localhost3000/#/' style={{fontFamily: 'Hammersmith One'}}>Home </a></li>
                    <li><a href= 'localhost3000/#/info' style={{fontFamily: 'Hammersmith One'}}>About </a></li>
                    <li><a href={ process.env.REACT_APP_LOGIN } style={{fontFamily: 'Hammersmith One'}}>Appointment </a></li>
                    <li><a href= 'localhost3000/#/gallery' style={{fontFamily: 'Hammersmith One'}}>Photo Gallery </a></li>
                </ul>
            </div>
        )
    }
}