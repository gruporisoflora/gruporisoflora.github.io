import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {Header,Menu,Updates,Team} from './components/components'

class App extends Component {

    constructor(props) {
        super(props)


    }


    render() {
    return (
      <div className="App" >

          <Header></Header>

          <Menu ></Menu>

          <Updates/>
          <Team/>


      </div>
    );
  }
}

export default App;
