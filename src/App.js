
import React, { Component } from 'react';
import './App.css';
import RandomizeBirds from './components/BirdPages/BirdOptions.js'
import SelectedBird from './components/BirdPages/SelectedBird.js'
import Welcome from './components/Welcome.js'
import birds from './services/birds.js'
import axios from 'axios';

const API_KEY = `96a1378baf2d27606f4a619859ea9684`;
const BASE_URL = 'https://api.flickr.com/services/rest';

const PARAMS = {
  method: 'flickr.photos.search',
  tags: 'bird',
  api_key: API_KEY,
  format: 'json',
  nojsoncallback: 1
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      selectedBird : '',
      birds: birds,
      selectedBirdData: [],
      apiData: []
    };
      this.setView = this.setView.bind(this);
  }

  createBirds(){
      return this.state.birds.map(bird => {
        return (
          <div>
            <h1> {bird.name} </h1>
            <p> {bird.description} </p>
          </div>
        )
      })
    }


  getView(){
    const view = this.state.currentView;
    switch (view) {
      case 'welcome':
        return <Welcome setView={this.setView}/>
      case 'birds':
        return <RandomizeBirds selectedBird={this.state.selectedBird} birds={this.state.birds} onClick={this.createBirds()}/>
      default :
        return <Welcome />
    }
    console.log(this.state.currentView);
  }

  setView(view){
    this.setState({
      currentView: view
    });
  }

  render() {
    return (
      <div className="App">
              {this.getView()}
      </div>
    );
  }
}

export default App;
