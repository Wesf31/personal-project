import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './../../ducks/users'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'


class MatTextField extends Component {

    constructor(props){
        super(props)
        this.state = {
            phone:'',
            comment:'',
            desiredDate : null,
            time: null,
            useremail:'',
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e, date){
        console.log(this.state.time, this.state.comment, this.state.phone)
        this.setState({desiredDate: date})
    }
    handleChangeTimePicker = (event, time) => {
        this.setState({time: time});
        // may have to run over string and split it up
    }
    handleSubmit(event) {
        event.preventDefault()
        let {
            phone,
            time,
            comment, 
            desiredDate
        } = this.state
        axios.post('/api/appointment', {phone, time, comment, desiredDate} )
        axios.put('/api/appointment/:id', {phone})
    }
    componentDidMount () {
        this.props.getUser()
    }

    componentWillReceiveProps (nextProps) {
        this.setState({username:nextProps.user.username, useremail:nextProps.user.useremail})
    } 
    render(){
        const appointmentJSX = (
            this.props.user ?
            <form>
                <TextField
                        floatingLabelText="Your Name"
                        value={this.state.username}
                />
                <br/>
                <TextField 
                    floatingLabelText="Your Email"
                    value={this.state.useremail}
                />
                <br/>
                <TextField 
                    floatingLabelText="Please enter your Phone Number"
                    hintText="Phone Number"
                    value={this.state.phone}
                    onChange={(e)=>this.setState({phone: e.target.value})}
                />
                <br/>
                <DatePicker 
                    hintText="Desired Appointment Date" 
                    value={this.state.desiredDate}
                    onChange={this.handleChange}
                />
                <br/>
                <TimePicker
                    format="ampm"
                    hintText="Desired Appointment Time"
                    value={this.state.time}
                    onChange={this.handleChangeTimePicker}
                />
                <br/>
                <TextField 
                    floatingLabelText="Comments or Questions"
                    hintText="Comments or Questions"
                    value={this.state.comment}
                    onChange={(e)=>this.setState({comment: e.target.value})}
                />
                <br />
                <RaisedButton 
                    label="Submit Appointment"
                    secondary={true}
                    onClick={this.handleSubmit}
                    /> 
            </form>
            :
            <div>
                no working
            </div>
        )

       return(
            <div>
               { appointmentJSX }
            </div>
       )
    }
}

function mapStateToProps( state ) {
    return {
        user: state.userData
    }
}

export default connect(mapStateToProps, { getUser })(MatTextField)