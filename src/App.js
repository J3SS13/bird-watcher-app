
import React, { Component } from 'react';
import './App.css';
import BirdLibrary from './components/BirdPages/BirdLibrary.js';
import Welcome from './components/Welcome/Welcome.js';
import birds from './services/birds.js';
import birdGifs from './services/api.js';
import Gif from './components/Gif/Gif.js';
import GenerateBirds from './components/GenerateBirds/GenerateBirds.js';
import NavBar from './components/NavBar/NavBar.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      selectedDesc : '',
      selectedSound: '',
      selectedName: '',
      birds: birds,
      gifs: [],
    };
      this.setView = this.setView.bind(this);
      this.createGifs = this.createGifs.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
  }

  getView(){
    const view = this.state.currentView;
    switch (view) {
      case 'welcome':
        return <Welcome setView={this.setView} />
      case 'library':
        return <BirdLibrary  birds={this.state.birds}/>
      case 'gif':
        return <Gif createGifs={this.createGifs}/>
      case 'birds':
        return <GenerateBirds birds={this.state.birds} handleSelect={this.handleSelect} selectedDesc={this.state.selectedDesc} selectedName={this.state.selectedName}/>
      default :
        return <Welcome />
    }
  }

  createGifs(){
      return (
        <div>
        {this.state.gifs.map(gif => <img src={gif.images.original.url} alt="bird gif" key={gif.id} />  )}
      </div>
    )
  }


async componentDidMount(){
  try {
    const birds = await birdGifs();
    this.setState({
      gifs: birds.data.data
    });
  } catch(error){
    console.log(error);
  }
}

  setView(view){
    this.setState({
      currentView: view
    });
  }

  handleSelect(bird){
    this.setState({
      selectedName: bird.name,
      selectedDesc: bird.description,
      selectedSound: ''
    });

  }

  render() {
    return (
      <div className="App">
        <NavBar setView={this.setView}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
