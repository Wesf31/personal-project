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
        this.onImageDrop2 = this.onImageDrop2.bind(this)
        this.onImageDrop3 = this.onImageDrop3.bind(this)
        this.onImageDrop4 = this.onImageDrop4.bind(this)
        this.onImageDrop5 = this.onImageDrop5.bind(this)
        this.onImageDrop6 = this.onImageDrop6.bind(this)
        this.onImageDrop7 = this.onImageDrop7.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onImageDrop(files){
        this.setState({
            uploadedFile: files[0]
        })
        this.handleImageUpload(files[0])
    }
    onImageDrop2(files){
        this.setState({
            uploadedFile2: files[0]
        })

        this.handleImageUpload2(files[0])
    }
    onImageDrop3(files){
        this.setState({
            uploadedFile3: files[0]
        })

        this.handleImageUpload3(files[0])
    }
    onImageDrop4(files){
        this.setState({
            uploadedFile4: files[0]
        })

        this.handleImageUpload4(files[0])
    }
    onImageDrop5(files){
        this.setState({
            uploadedFile5: files[0]
        })

        this.handleImageUpload5(files[0])
    }
    onImageDrop6(files){
        this.setState({
            uploadedFile6: files[0]
        })

        this.handleImageUpload6(files[0])
    }
    onImageDrop7(files){
        this.setState({
            uploadedFile7: files[0]
        })

        this.handleImageUpload7(files[0])
    }
    
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
    handleImageUpload2(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl2: response.body.secure_url
                })
            }
        })
    }
    handleImageUpload3(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl3: response.body.secure_url
                })
            }
        })
    }
    handleImageUpload4(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl4: response.body.secure_url
                })
            }
        })
    }
    handleImageUpload5(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl5: response.body.secure_url
                })
            }
        })
    }
    handleImageUpload6(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl6: response.body.secure_url
                })
            }
        })
    }
    handleImageUpload7(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        upload.end((err, response) => {
            if (err) {
                console.error(err)
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinayrUrl7: response.body.secure_url
                })
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        let {
            uploadedFileCloudinayrUrl,
            uploadedFileCloudinayrUrl2,
            uploadedFileCloudinayrUrl3,
            uploadedFileCloudinayrUrl4,
            uploadedFileCloudinayrUrl5,
            uploadedFileCloudinayrUrl6,
            uploadedFileCloudinayrUrl7,
        } = this.state
        axios.post('/api/gallery', {uploadedFileCloudinayrUrl, uploadedFileCloudinayrUrl2, uploadedFileCloudinayrUrl3, uploadedFileCloudinayrUrl4, uploadedFileCloudinayrUrl5, uploadedFileCloudinayrUrl6, uploadedFileCloudinayrUrl7} )
    }
    componentWillMount() {
        axios.get('/api/gallery')
        .then(res => 
            (this.setState({
            uploadedFileCloudinayrUrl:res.data[0].imgurl,
            uploadedFileCloudinayrUrl2:res.data[0].imgurl2,
            uploadedFileCloudinayrUrl3:res.data[0].imgurl3,
            uploadedFileCloudinayrUrl4:res.data[0].imgurl4,
            uploadedFileCloudinayrUrl5:res.data[0].imgurl5,
            uploadedFileCloudinayrUrl6:res.data[0].imgurl6,
            uploadedFileCloudinayrUrl7:res.data[0].imgurl7
        }))
)}

    render() {
            return (
            <div className='Wrapper'>
                <h1 className='Header'>
                </h1>
                <div className='Container-3'>
                    {this.state.uploadedFileCloudinayrUrl === '' ? 
                    
                    <Dropzone className='MainPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='MainPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop}>
                    <img className='MainImageDisplay' style={{width: "100%", display: "block", }} src={this.state.uploadedFileCloudinayrUrl} />

                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </div>
        
           
                <div className='Container-4'>
                    
                    {this.state.uploadedFileCloudinayrUrl2 === '' ? 
                    
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop2}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop2}>
                    <img className='SmallImageDisplay' src={this.state.uploadedFileCloudinayrUrl2} />

                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    
                    
                    {this.state.uploadedFileCloudinayrUrl3 === '' ? 
                    
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop3}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop3}>
                    <img className='SmallImageDisplay' src={this.state.uploadedFileCloudinayrUrl3} />

                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    
                    {this.state.uploadedFileCloudinayrUrl4 === '' ? 
                    
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop4}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop4}>
                    <img className='SmallImageDisplay' src={this.state.uploadedFileCloudinayrUrl4} />

                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    
                    {this.state.uploadedFileCloudinayrUrl5 === '' ? 
                    
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop5}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop5}>
                    <img className='SmallImageDisplay' src={this.state.uploadedFileCloudinayrUrl5} />

                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    
                    {this.state.uploadedFileCloudinayrUrl6 === '' ? 
                    
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop6}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop6}>
                    <img className='SmallImageDisplay' src={this.state.uploadedFileCloudinayrUrl6} />

                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    
                    {this.state.uploadedFileCloudinayrUrl7 === '' ? 
                    
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop7}>
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                :
                    <Dropzone className='SmallPic'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop7}>
                    <img className='SmallImageDisplay' width='100%' src={this.state.uploadedFileCloudinayrUrl7} />
                    </Dropzone>
                    }
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </div>
            </div>   
        )
    }
}

