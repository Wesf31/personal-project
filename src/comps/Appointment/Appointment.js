import React, { Component } from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import { connect } from 'react-redux'
import { getUser } from './../../ducks/users'

import './Appointment.css'
import NavBar from './../NavBar/NavBar'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'


class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      comment: '',
      desiredDate: null,
      time: null,
      useremail: '',
      username: '',
      open: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentDidMount() {
    this.props.getUser()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ username: nextProps.user.username, useremail: nextProps.user.useremail })
  }


    handleChangeTimePicker = (event, time) => {
      this.setState({
        time,
      });
    }
    handleToggle = () => {
      this.setState({
        open: !this.state.open,
      })
    }
    handleSubmit(event) {
      event.preventDefault()
      let {
        phone,
        time,
        comment,
        desiredDate,
      } = this.state
      axios.post('/api/appointment', {
        phone, time, comment, desiredDate,
      })
      axios.put('/api/appointment/:id', { phone })
        .then(this.props.history.push('/'))
    }


    render() {
      const actions = [
        <FlatButton
          label="Continue"
          secondary
          onClick={this.handleSubmit}
        />,
      ]
      const appointmentJSX = (
        <div className="appointmentWrapper">
          <NavBar />

          <div className="appointmentForm" >
            <TextField
              floatingLabelText="Your Name"
              value={this.state.username}
            />
            <br />
            <TextField
              floatingLabelText="Your Email"
              value={this.state.useremail}
            />
            <br />
            <TextField
              floatingLabelText="Please enter your Phone Number"
              hintText="Phone Number"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
            />
            <br />
            <DatePicker
              hintText="Desired Appointment Date"
              value={this.state.desiredDate}
              onChange={this.handleChange}
            />
            <br />
            <TimePicker
              format="ampm"
              hintText="Desired Appointment Time"
              value={this.state.time}
              onChange={this.handleChangeTimePicker}
            />
            <br style={{}} />
            <TextField
              floatingLabelText="Comments or Questions"
              hintText="Comments or Questions"
              value={this.state.comment}
              onChange={e => this.setState({ comment: e.target.value })}
            />
            <br />
            <RaisedButton
              label="Submit Appointment"
              secondary
              onClick={this.handleToggle}
            />
            <Dialog
              title="Success!!"
              actions={actions}
              open={this.state.open}
            >
                        Your request has been sent to the photographer, they will get back to you soon!
            </Dialog>

          </div>
        </div>
      )
      return (
        <div>
          { appointmentJSX }
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    user: state.userData,
  }
}

export default connect(mapStateToProps, { getUser })(Appointment)