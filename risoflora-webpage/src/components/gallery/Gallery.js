import React, {Component} from 'react';



import './Galery.css'
import Divider from '../divider/Divider';
import Photos from '../../utils/constants/Photos';

import ImgsViewer from 'react-images-viewer'

class Gallery extends Component {
    constructor(props){
        super(props)


        this.state={
            isPhotoOpen:false
        }
    }


    render() {
        return (
            <Divider title="Galeria" >
                

                <PhotoGallery photos={Photos}>

                </PhotoGallery>

                
            </Divider>
        );
    }
}



class PhotoGallery extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            photos:props.photos,
            isImageOpened:false,
            currentUrl:null
        }

        this.handleImageClick = this.handleImageClick.bind(this);
    }


    handleImageClick(url){
        this.setState({isImageOpened:!this.state.isImageOpened,currentUrl:url})
        console.log(this.state.currentUrl)
    }
    render(){

        const {photos,isImageOpened,currentUrl} = this.state;
        
        return (
            <div id="photosWrapper">
                <div style={{display:'flex',flexWrap:'wrap'}}>
                
                {
                        photos.map((item,key)=> <PhotoPreview url={item.url} onClick={this.handleImageClick}/>)
                    }

                    <PhotoViwer display={isImageOpened} url={currentUrl} onClick={this.handleImageClick}/>
                
                </div>
            </div>
        )
    }
}
const PhotoPreview = (props)=>{
    const {url,onClick} = props
    return (
        <div className="photoWrapper" onClick={()=>{onClick(url)}} >
            <img src={url}/>
        </div>
       
    )
}

const PhotoViwer = (props) =>{
    const {url,display,onClick} = props

    const style={
       
        image:{
            
            margin: '0 auto',
            verticalAlign: 'middle',
            opacity:'1',
            maxHeight:'100%'
        }    
    }
    return (
        <div  className='imageViwerWrapper' style={{display:(display)?"inline":"none"}} onClick={onClick}>
        
            <img src={url} style={style.image}/>
        </div>
    )
}
export default Gallery;