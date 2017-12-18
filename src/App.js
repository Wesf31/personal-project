import './reset.css'
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import Appointment from './comps/Appointment/Appointment'
import Login from './comps/Login/Login'
import Landing from './comps/Landing/Landing'
import Gallery from './comps/Gallery/Gallery'
import gallery2 from './comps/Gallery/gallery2'
import MatTextField from './comps/Appointment/MatTextField'
import Info from './comps/Info/Info'


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component= {Landing} />
        <Route path="/login" component={Login} />
        <Route path="/appointment" component={MatTextField} />
        <Route path="/gallery" component={gallery2} />
        <Route path="/info" component={Info} />
      </div>
    );
  }
}

export default App;
