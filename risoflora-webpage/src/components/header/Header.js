import React, {Component} from 'react';
import './Header.css'

import logo   from '../../res/img/logo.png'

import celpe from '../../res/img/neoenergia.png'
import cesar from '../../res/img/cesar.png'


class Header extends Component {

    constructor(props){
        super(props)


    }


    render() {
        return (
            <div>

                <div id='logo'>
                    <img src={logo}/>
                    <h1 style={{color:"#ffffff"}}>Grupo <br/> risoflora</h1>
                    <div style={{marginTop:'150px'}} id="brandWrapper">
                        <img className="brand" src={celpe}/>
                        <img className="brand" src={cesar}/>
                    </div>

                </div>
            </div>

        );
    }
}



export default Header;
