import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from './../../ducks/users'
import axios from 'axios'

class Appointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: 'works',    
            comment: '',
            date: null,
            time: null
        }

        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleCommentChange = this.handleCommentChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleCommentChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handlePhoneChange(event) {
        this.setState({
            phone: event.target.value
        })
    }

    handleTimeChange(event) {
        this.setState({
            time: event.target.value
        })
    }

    handleChange(event) {
        this.setState({
            date: event.target.value
        })
    }

    handleClick(event){
        axios.get(`/api/appointment`)
    }

    handleSubmit(event) {
        event.preventDefault()
        let {
            phone,
            time,
            comment, 
            date
        } = this.state
        axios.post('/api/appointment', {phone, time, comment, date} )
        axios.put('/api/appointment/:id', {phone})
        // .catch() if an error is thrown this do something with state to tell the user to fill it all out

    }
    
    componentDidMount() {
        this.props.getUser()
    }
    
    render() {
        const appointmentJSX = (
            this.props.user ?
            <form>
                <div>
                 <h1>Schedule Appointment</h1><hr />
                 <h4>Customer Info:</h4>
                 <label>Name: {this.props.user.username}</label>
                 <label>Email: {this.props.user.useremail}</label>
                 <label>Phone: </label> 
                 <input type="text" value={this.state.value} onChange={this.handlePhoneChange} />
                 <label>Desired Date: </label>
                 <input type="date" onChange={this.handleChange} />
                 <label>Desired Time: </label>
                 <input type="text" onChange={this.handleTimeChange} />
                 <label>Comments or Questions: </label>
                 <input type="text" value={this.state.value} onChange={this.handleCommentChange} />
                 <input type="submit" value="Submit" onClick={this.handleSubmit} />
                 <input type="button" value="button" onClick={this.handleClick} />
                

                </div>
            </form>
            :
            <div>
                no working
            </div>
            
        )
        
        return (
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

export default connect(mapStateToProps, { getUser })(Appointment) 