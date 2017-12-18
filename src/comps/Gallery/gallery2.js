import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    'http://res.cloudinary.com/dhowdfbmx/image/upload/v1513598926/eqtsguyxtcdayjxxyr0i.jpg',
    'http://res.cloudinary.com/dhowdfbmx/image/upload/v1513598773/lj0o6ur5ybhlbejfoghz.jpg',
    'http://res.cloudinary.com/dhowdfbmx/image/upload/v1513597650/bsfrunsvukevygytzcw5.jpg',
    'http://res.cloudinary.com/dhowdfbmx/image/upload/v1513482939/v3ttfhzoazdpfdu3bqyg.jpg',
    'http://res.cloudinary.com/dhowdfbmx/image/upload/v1513600219/b8hmm4einefegun702s3.jpg'

]

export default class Gallery2 extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state={
    //         image:[]
    //     }

    // }
    render() {
        return(
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {images.map((image, i) =>
                        <img key={i} src={image} style={{width: "100%", display: "block"}} alt="" />
                    )}
                </Masonry>
    	</ResponsiveMasonry>
        )
    }
}