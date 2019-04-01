import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import scrollToComponent from 'react-scroll-to-component';


import {Header,Menu,Updates,Team, Gallery} from './components/components'

class App extends Component {

    constructor(props) {
        super(props)




        this.onAnchor = (i) =>{
            let element = this.refs['item'+i]

            scrollToComponent(element);

        }
    }


    render() {
    return (
      <div className="App" >

          <Header></Header>

          <Menu onAnchor={this.onAnchor}></Menu>

          <Updates ref='item0'/>
          <Team ref='item1'/>
          <Gallery ref='item2'/>

      </div>
    );
  }
}

export default App;
