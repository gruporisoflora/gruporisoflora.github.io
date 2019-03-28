import React, {Component} from 'react';



import './Galery.css'
import Divider from '../divider/Divider';
import Photos from '../../utils/constants/Photos';


class Gallery extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <Divider title="Galeria">
                {
                    Photos.map((item,key)=> <PhotoPreview url={item.url}/>)
                }
            </Divider>
        );
    }
}


const PhotoPreview = (props)=>{
    const {url} = props
    return (
        <div className="photoWrapper">
            <img src={url}/>
        </div>
    )
}

export default Gallery;