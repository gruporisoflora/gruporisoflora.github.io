import React, {Component} from 'react';
import './Updates.css'


import no_photo from '../../res/img/no_image.jpg'

import UpdatesSet from '../../utils/constants/Updates'
import Divider from "../divider/Divider";

class Updates extends Component {

    constructor(props){
        super(props)


    }


    render() {
        return (
            <Divider title="Progresso e atualizações">
                <div style={{display:"flex",flexWrap: 'wrap',justifyContent:'center'}}>
                    {
                        UpdatesSet.map(item=>
                            <Progress title={item.title} description={item.description}/>
                        )
                    }
                </div>
            </Divider>
        );
    }
}


const Progress = (props) =>{


    return (
        <div className="progressWrapper">
            <div className='imageWrapper'  >
                
                <h3 >{props.title}</h3>
            </div>
            <h4>{props.description}</h4>

        </div>
    )

}



export default Updates;
