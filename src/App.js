import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bird from './components/BirdPages/Bird.js';
import BirdOptions from './components/BirdPages/BirdOptions.js'
import SelectedBird from './components/BirdPages/SelectedBird.js'

class App extends Component {

constructor(props){
super(props);
  this.state = {
    currentView : 'welcome',
    selectedBird : '',


  }
}

  render() {
    return (
      <div className="App">

      <BirdOptions currentBird={this.state.currentBird} />

      </div>
    );
  }
}

export default App;
