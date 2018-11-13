import React, { Component } from 'react';
import './App.css';
import Bird from './components/BirdPages/Bird.js';
import RandomizeBirds from './components/BirdPages/BirdOptions.js'
import SelectedBird from './components/BirdPages/SelectedBird.js'
import data from './services/data.js'

class App extends Component {

constructor(props){
super(props);
  this.state = {
    currentView : 'welcome',
    selectedBird : '',
    birdData: data,
    selectedBirdData: []


  }
}

  render() {

    return (
      <div className="App">

      <RandomizeBirds selectedBird={this.state.selectedBird} />


      </div>
    );
  }
}

export default App;
