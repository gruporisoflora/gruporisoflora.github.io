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
                        Para o grupo neoeneriga, mais especificamente o departamento de seguranca da rede eletrica, cujo problema é: como identificar, monitorar e gerenciar o processo de podas evitando ameaças na rede elétrica. O Risoflora é um sistema de gerenciamento e automação inteligente, que gerencia dados automatizados para reduzir viagens do inspetor no ciclo da poda e reduçã de sinistros. Diferentemente das empresas que provêm serviços de monitoramento por drones, satélites, carros com lidar e sensores instalados. Cujo produto é de baixo custo de entrada e customizável.
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
