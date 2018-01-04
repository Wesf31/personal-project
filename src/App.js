import './reset.css'
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
// import Appointment from './comps/Appointment/Appointment'
import Login from './comps/Login/Login'
import Landing from './comps/Landing/Landing'
import Gallery from './comps/Gallery/Gallery'
import Appointment from './comps/Appointment/Appointment'
import Info from './comps/Info/Info'


class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component= {Landing} />
            <Route path="/login" component={Login} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/info" component={Info} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
