import React, {Component} from 'react';

import './Divider.css'


class Divider extends Component {
    constructor(props){
        super(props)


        this.state={
            title:props.title,
            titleColor : props.titleColor ||'#4c4c4c',
            backgroundImage : props.bgImage || null
        }
    }


    render() {
        const {title,backgroundImage,titleColor} = this.state
        return (
            <div className='dividerWrapper' style={{backgroundImage:`url(${backgroundImage})`}}>
                <h2 style={{color:titleColor,marginBottom:'20px',fontSize:'35px'}}>{title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Divider;