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


                <div id='header_wrapper'>
                    <div id='logo_wrapper'>
                        <img id="logo" src={logo}/>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel fermentum dui, ut malesuada ante. In hac habitasse platea dictumst. Praesent condimentum interdum venenatis. Cras magna ligula, interdum et eros vitae, semper aliquet odio. Morbi vulputate ante et ex dictum, et viverra sem scelerisque. Nullam augue leo, posuere vitae magna eu, dictum congue lectus.
                        </p>


                    </div>
                    <div  id="brandWrapper">
                        <img className="brand" src={celpe}/>
                        <img className="brand" src={cesar}/>
                    </div>

                </div>


        );
    }
}



export default Header;
