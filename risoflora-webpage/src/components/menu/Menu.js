import React, {Component} from 'react';
import './Menu.css'
import logo1   from '../../res/drawable/loading-process.png'
import logo2   from '../../res/drawable/collaboration.png'
import logo3   from '../../res/drawable/shopping-list.png'





class Menu extends Component {

    constructor(props){
        super(props)



        this.state = {
            anchors:[
                'updates_wrapper',
                'team_wrapper',
                'objectives_wrapper'
            ]
        }

        this.onAnchor = i =>{
            let element = document.getElementById(this.state.anchors[i])

            element.scrollIntoView({behavior:"smooth",inline: "nearest"})
        }
    }


    render() {
        return (
            <div id="menu_wrapper" >
                <MenuItem anchor="0" icon={logo1} title="Acompanhe" onAnchor={this.onAnchor}/>
                <MenuItem anchor="1"  icon={logo2} title="Nosso time"  onAnchor={this.onAnchor}/>
                {//TODO Adicionar props de objetivo
                     }
                <MenuItem anchor="2"  icon={logo3} title="Objetivos"/>

            </div>
        );
    }
}


const MenuItem = (props) =>{
    return (
        <div className='anchor' onClick={(i)=> props.onAnchor(props.anchor)}>
            <img src={props.icon}/>
            <h3>{props.title}</h3>
        </div>
    )
}


export default Menu;
