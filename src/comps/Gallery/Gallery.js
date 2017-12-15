import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import './Gallery.css'
import axios from 'axios'

const CLOUDINARY_UPLOAD_PRESET = 'k4zdtfen'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhowdfbmx/upload'

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinayrUrl:'',
            uploadedFile2: null,
            uploadedFileCloudinayrUrl2:'',
            uploadedFile3: null,
            uploadedFileCloudinayrUrl3:'',
            uploadedFile4: null,
            uploadedFileCloudinayrUrl4:'',
            uploadedFile5: null,
            uploadedFileCloudinayrUrl5:'',
            uploadedFile6: null,
            uploadedFileCloudinayrUrl6:'',
            uploadedFile7: null,
            uploadedFileCloudinayrUrl7:'',
        }
        this.onImageDrop = this.onImageDrop.bind(this)
        // this.onImageDrop2 = this.onImageDrop2.bind(this)
        // this.onImageDrop3 = this.onImageDrop3.bind(this)
        // this.onImageDrop4 = this.onImageDrop4.bind(this)
        // this.onImageDrop5 = this.onImageDrop5.bind(this)
        // this.onImageDrop6 = this.onImageDrop6.bind(this)
        // this.onImageDrop7 = this.onImageDrop7.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onImageDrop(files){
        this.setState({
            uploadedFile: files[0],
            imgstatus1: 'enabled'
        })

        this.handleImageUpload(files[0])
    }
    // onImageDrop2(files){
    //     this.setState({
    //         uploadedFile2: files[0]
    //     })

    //     this.handleImageUpload2(files[0])
    // }
    // onImageDrop3(files){
    //     this.setState({
    //         uploadedFile3: files[0]
    //     })

    //     this.handleImageUpload3(files[0])
    // }
    // onImageDrop4(files){
    //     this.setState({
    //         uploadedFile4: files[0]
    //     })

    //     this.handleImageUpload4(files[0])
    // }
    // onImageDrop5(files){
    //     this.setState({
    //         uploadedFile5: files[0]
    //     })

    //     this.handleImageUpload5(files[0])
    // }
    // onImageDrop6(files){
    //     this.setState({
    //         uploadedFile6: files[0]
    //     })

    //     this.handleImageUpload6(files[0])
    // }
    // onImageDrop7(files){
    //     this.setState({
    //         uploadedFile7: files[0]
    //     })

    //     this.handleImageUpload7(files[0])
    // }
    
    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl: response.body.secure_url
                })
            }
        })
    }
    // handleImageUpload2(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file)
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err)
    //         }

    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinayrUrl2: response.body.secure_url
    //             })
    //         }
    //     })
    // }
    // handleImageUpload3(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file)
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err)
    //         }

    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinayrUrl3: response.body.secure_url
    //             })
    //         }
    //     })
    // }
    // handleImageUpload4(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file)
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err)
    //         }

    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinayrUrl4: response.body.secure_url
    //             })
    //         }
    //     })
    // }
    // handleImageUpload5(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file)
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err)
    //         }

    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinayrUrl5: response.body.secure_url
    //             })
    //         }
    //     })
    // }
    // handleImageUpload6(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file)
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err)
    //         }

    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinayrUrl6: response.body.secure_url
    //             })
    //         }
    //     })
    // }
    // handleImageUpload7(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file)
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err)
    //         }

    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinayrUrl7: response.body.secure_url
    //             })
    //         }
    //     })
    // }
    handleSubmit(event) {
        event.preventDefault()
        let {
            uploadedFileCloudinayrUrl,
            imgstatus1
        } = this.state
        axios.post('/api/gallery', {uploadedFileCloudinayrUrl, imgstatus1} )
    }
    componentWillMount() {
        axios.get('/api/gallery')
        .then(res => (this.setState({
            uploadedFileCloudinayrUrl:res.data[0].imgurl
        })))}

    render() {
        return (
        <div className='Wrapper'>
            
        </div>  
            
            
            
            
            
            
            
            
            <form className='gallery'>
                <div>
                    {this.state.uploadedFileCloudinayrUrl === '' ? 
                    <div className="main">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                </div>
                    :
                    <div>
                    <Dropzone className='ImageDisplay'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop}>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl} />
                        {/* <p>{this.state.uploadedFileCloudinayrUrl}</p> */}
                    </Dropzone>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    </div>}
                </div>

                {/* <div className = "flexcontainer">
                 <div className="FileUpload">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop2}>
                        <div>Drop an image or cdivck to select a file to upload.</div>
                    </Dropzone>
                 </div>
                 <div>
                    {this.state.uploadedFileCloudinayrUrl2 === '' ? null :
                    <div>
                        <p>{this.state.uploadedFileCloudinayrUrl2}</p>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl2} />
                    </div>}
                 </div>
                 <div className="FileUpload">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop3}>
                        <div>Drop an image or cdivck to select a file to upload.</div>
                    </Dropzone>
                 </div>
                 <div>
                    {this.state.uploadedFileCloudinayrUrl3 === '' ? null :
                    <div>
                        <p>{this.state.uploadedFileCloudinayrUrl3}</p>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl3} />
                    </div>}
                 </div>

                 <div className="FileUpload">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop4}>
                        <div>Drop an image or cdivck to select a file to upload.</div>
                    </Dropzone>
                 </div>
                 <div>
                    {this.state.uploadedFileCloudinayrUrl4 === '' ? null :
                    <div>
                        <p>{this.state.uploadedFileCloudinayrUrl4}</p>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl4} />
                    </div>}
                 </div>

                 <div className="FileUpload">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop5}>
                        <div>Drop an image or cdivck to select a file to upload.</div>
                    </Dropzone>
                 </div>
                 <div>
                    {this.state.uploadedFileCloudinayrUrl5 === '' ? null :
                    <div>
                        <p>{this.state.uploadedFileCloudinayrUrl5}</p>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl5} />
                    </div>}
                 </div>

                 <div className="FileUpload">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop6}>
                        <div>Drop an image or cdivck to select a file to upload.</div>
                    </Dropzone>
                 </div>
                 <div>
                    {this.state.uploadedFileCloudinayrUrl6 === '' ? null :
                    <div>
                        <p>{this.state.uploadedFileCloudinayrUrl6}</p>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl6} />
                    </div>}
                 </div>

                 <div className="FileUpload">
                    <Dropzone className="FileUpload"
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop7}>
                        <div>Drop an image or cdivck to select a file to upload.</div>
                    </Dropzone>
                 </div>
                 <div>
                    {this.state.uploadedFileCloudinayrUrl7 === '' ? null :
                    <div>
                        <p>{this.state.uploadedFileCloudinayrUrl7}</p>
                        <img className='ImageDisplay' src={this.state.uploadedFileCloudinayrUrl7} />
                    </div>}
                 </div>
                </div> */}

            </form>
        )
    }
}

