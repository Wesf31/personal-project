import React, { Component } from 'react'
import './info.css'
import axios from 'axios'

export default class Info extends Component{

    constructor(props){
        super(props)
        this.state = {
            InfoPageHeader:'',
            InfoPageTextBody:'',
            SmallBox1Header:'',
            SmallBox1Text:'',
            SmallBox2Header:'',
            SmallBox2Text:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        let {
            InfoPageHeader,
            InfoPageTextBody,
            SmallBox1Header,
            SmallBox1Text,
            SmallBox2Header,
            SmallBox2Text
        } = this.state
        axios.post('/api/info', {InfoPageHeader, InfoPageTextBody, SmallBox1Header, SmallBox1Text, SmallBox2Header, SmallBox2Text})
    }
    
    componentWillMount() {
        axios.get('/api/info')
        .then( res => (this.setState({
            InfoPageHeader:res.data[0].infopageheader,
            InfoPageTextBody:res.data[0].infopagetextbody,
            SmallBox1Header:res.data[0].smallbox1header,
            SmallBox1Text:res.data[0].smallbox1text,
            SmallBox2Header:res.data[0].smallbox2header,
            SmallBox2Text:res.data[0].smallbox2text
        })))
    }

    render() {
        const infoJSX = (
        <div className= 'Wrapper'>
        <h1 className= 'NavBar'>
        </h1>
            <div className= 'Container-1'>
                <div className= 'InfoPage'> 
                    <div className= 'InfoPicture'>
                     
                    </div>                    
                    <div className= 'InfoPageTextBody'>
                            <textarea className= 'InfoPageHeader' 
                            value={this.state.InfoPageHeader} onChange={(e)=>this.setState({InfoPageHeader: e.target.value})}>
                            </textarea>
                            <textarea className= 'InfoPageTextMain'
                            value={this.state.InfoPageTextBody} onChange={(e)=>this.setState({InfoPageTextBody: e.target.value})}>
                            </textarea>
                            <input type='submit' value="Save Changes" onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
            <div className= 'Container-2'>
                <div className= 'SmallBox1'>
                    <textarea className='SmallBox1Header'
                    value={this.state.SmallBox1Header} onChange={(e)=>this.setState({SmallBox1Header: e.target.value})}>
                    </textarea>
                    <textarea className='SmallBox1Text'
                    value={this.state.SmallBox1Text} onChange={(e)=>this.setState({SmallBox1Text: e.target.value})}>
                    </textarea>
                    <input type='submit' value="Save Changes" onClick={this.handleSubmit} />
                </div>
                <div className= 'SmallBox2'>
                    <textarea className='SmallBox2Header'
                    value={this.state.SmallBox2Header} onChange={(e)=>this.setState({SmallBox2Header: e.target.value})}>
                    </textarea>
                    <textarea className='SmallBox2Text'
                    value={this.state.SmallBox2Text} onChange={(e)=>this.setState({SmallBox2Text: e.target.value})}>
                    </textarea>
                    <input type='submit' value="Save Changes" onClick={this.handleSubmit} />
                </div>
            </div>
        </div>
        )
        return (
            <div>
                { infoJSX }
            </div>
        )
    }
}