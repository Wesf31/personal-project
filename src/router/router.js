import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './../comps/Login/Login'
import Landing from './../comps/Landing/Landing'
import Gallery from './../comps/Gallery/Gallery'
import app1 from './../comps/Appointment/app1'

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/appointment" component={app1} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
)