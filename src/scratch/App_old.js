import React, { Component } from 'react';
import './App.css';
import Bird from './components/BirdPages/Bird.js';
import RandomizeBirds from './components/BirdPages/BirdOptions.js'
import SelectedBird from './components/BirdPages/SelectedBird.js'
import Welcome from './components/Welcome.js'
import data from './services/data.js'
import axios from 'axios';

//

const BASE_URL_FRONT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96a1378baf2d27606f4a619859ea9684&tags=`
const BASE_URL_BACK = `&safe_search=true&format=json&nojsoncallback=1&api_sig=0ff9f827c6df2022fda619338e46f83c`
class App extends Component {

constructor(props){
super(props);
  this.state = {
    currentView : 'welcome',
    selectedBird : '',
    birdData: data,
    selectedBirdData: [],
    apiData: []
  }
}

async componentDidMount(){
  const data = await axios.get(`${BASE_URL_FRONT}bird${BASE_URL_BACK}`);
  console.log(data);
  this.setState({apiData: data})
}



  render() {

    return (
      <div className="App">

      <Welcome />
      <RandomizeBirds selectedBird={this.state.selectedBird} />


      </div>
    );
  }
}

export default App;
