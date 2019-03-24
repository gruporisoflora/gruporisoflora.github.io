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
            ],
            shadow:'none'

        }

        this.scrollEvent = e =>{
            let color;
            let shadow;
            if(window.scrollY>0){
                color = "#000000b0"
                shadow = '0px 2px 5px 0px rgba(0,0,0,0.75)'

            }else{
                color = null
                shadow='none'
            }

            this.setState({bgColor:color,shadow:shadow})
        }


        this.onAnchor = i =>{
            let element = document.getElementById(this.state.anchors[i])

            element.scrollIntoView({behavior:"smooth",inline: "nearest"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.scrollEvent)
    }


    render() {

        const {bgColor,shadow} = this.state;

        return (
            <div id="menu_wrapper" style={{backgroundColor:bgColor,boxShadow:shadow}}>
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
        <div   className='anchor' onClick={(i)=> props.onAnchor(props.anchor)}>

            <h3>{props.title}</h3>
        </div>
    )
}


export default Menu;
